import Link from "next/link";
import { FiCalendar, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "博客 | 赵鑫",
  description: "赵鑫的个人博客，分享技术笔记与项目复盘。",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors mb-8"
          >
            <FiArrowLeft className="w-4 h-4" />
            返回首页
          </Link>

          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
            博客
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2">
            所有文章
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3">
            技术笔记、项目复盘与个人思考
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-zinc-400 dark:text-zinc-500 py-20">
            暂无文章，敬请期待
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group bg-white dark:bg-zinc-800/30 rounded-2xl p-6 border border-zinc-200/60 dark:border-zinc-700/40 hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                  <FiCalendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-medium text-indigo-500 dark:text-indigo-400 mt-3 group-hover:gap-2 transition-all">
                  阅读更多 <FiArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
