"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import type { BlogPost } from "@/lib/blog";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-4">
        {recentPosts.map((post, i) => (
          <motion.div
            key={post.slug}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={i}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block h-full bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200/60 dark:border-zinc-700/40 shadow-sm hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                <FiCalendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-medium text-indigo-500 dark:text-indigo-400 group-hover:gap-2 transition-all duration-300">
                阅读更多 <FiArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      {posts.length > 3 && (
        <div className="text-center mt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-indigo-500 transition-colors"
          >
            查看全部文章 <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
