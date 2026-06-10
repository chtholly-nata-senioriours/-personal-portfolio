"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiEnvelope, HiDocumentArrowDown } from "react-icons/hi2";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950 animate-gradient" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8 border border-indigo-200/50 dark:border-indigo-700/30 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            期待新的机会
          </div>

          {/* Name & Role — 3-second rule: Who you are */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            你好，我是{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              赵鑫
            </span>
          </h1>

          {/* Identity tag — 3-second rule: What you do */}
          <p className="text-xl sm:text-2xl font-medium text-zinc-500 dark:text-zinc-400 mb-6">
            数据科学与大数据技术 · 本科在读
          </p>

          {/* Brief intro — 简历上没有详细个人介绍，留空 */}
          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            山东中医药大学数据科学与大数据技术专业在读本科生，熟悉前端开发与后端技术，
            具备团队管理经验，善于技术选型与架构设计。
          </p>

          {/* CTA buttons — 3-second rule: How to contact */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#contact");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              <HiEnvelope className="w-4 h-4" />
              联系我
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white font-medium text-sm border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
            >
              <HiDocumentArrowDown className="w-4 h-4" />
              下载简历 (PDF)
            </a>
          </div>

          {/* Social links — 简历上没有 GitHub/LinkedIn，留空占位 */}
          <div className="flex items-center justify-center gap-5 mb-12">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.4 },
            y: { delay: 1, repeat: Infinity, duration: 2 },
          }}
          onClick={() => handleScroll("#about")}
          className="text-zinc-300 dark:text-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors cursor-pointer"
          aria-label="向下滚动"
        >
          <HiArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}