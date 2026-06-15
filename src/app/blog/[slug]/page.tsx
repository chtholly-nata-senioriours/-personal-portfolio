import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "文章未找到 | 赵鑫" };
  return {
    title: `${post.title} | 赵鑫`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Simple markdown to HTML conversion for headings and paragraphs
  const renderContent = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={i} className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">
            {line.slice(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-semibold text-zinc-900 dark:text-white mt-6 mb-3">
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="text-zinc-600 dark:text-zinc-400 ml-4 list-disc">
            {line.slice(2)}
          </li>
        );
      }
      if (line.trim() === "") return null;
      return (
        <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
          {line}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 bg-white dark:bg-zinc-950">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors mb-8"
        >
          <FiArrowLeft className="w-4 h-4" />
          返回文章列表
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 mb-3">
            <FiCalendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {post.title}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-lg">
            {post.excerpt}
          </p>
        </header>

        {/* Post content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            返回所有文章
          </Link>
        </footer>
      </article>
    </main>
  );
}
