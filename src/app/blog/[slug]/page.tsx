import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return { title: "文章未找到 | 赵鑫" };
  return {
    title: `${post.title} | 赵鑫`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  const content = (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-white">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-semibold mt-6 mb-3 text-zinc-900 dark:text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold mt-5 mb-2 text-zinc-900 dark:text-white">{children}</h3>,
        p: ({ children }) => <p className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1 text-zinc-600 dark:text-zinc-400">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1 text-zinc-600 dark:text-zinc-400">{children}</ol>,
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        code: ({ className, children, ...props }) => {
          const isInline = !className;
          if (isInline) {
            return <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono text-zinc-800 dark:text-zinc-200" {...props}>{children}</code>;
          }
          return (
            <pre className="overflow-x-auto rounded-xl bg-zinc-100 dark:bg-zinc-800 p-4 mb-4 border border-zinc-200 dark:border-zinc-700">
              <code className={className} {...props}>{children}</code>
            </pre>
          );
        },
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {post.content}
    </ReactMarkdown>
  );

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 bg-white dark:bg-zinc-950">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors mb-8"
        >
          <FiArrowLeft className="w-4 h-4" />
          返回文章列表
        </Link>

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

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {content}
        </div>

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
