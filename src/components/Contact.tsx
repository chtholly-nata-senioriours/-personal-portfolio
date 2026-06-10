"use client";

import { motion } from "framer-motion";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { FiCopy, FiCheck, FiMapPin } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // 防爬虫格式
  const emailParts = { user: "1125392821", domain: "qq", tld: "com" };
  const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;
  const phone = "17263449578";

  const handleCopy = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
            联系方式
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
            保持联系
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mb-10">
            如果你对我的经历感兴趣，欢迎随时通过以下方式联系我。
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="flex flex-col items-center gap-4 mb-10">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-2xl px-6 py-4 border border-zinc-200/60 dark:border-zinc-700/40 shadow-sm"
          >
            <HiEnvelope className="w-5 h-5 text-indigo-500" />
            <span className="text-base sm:text-lg font-medium text-zinc-900 dark:text-white font-mono">
              {emailParts.user}
              <span className="text-zinc-400">@</span>
              {emailParts.domain}
              <span className="text-zinc-400">.</span>
              {emailParts.tld}
            </span>
            <button
              onClick={() => handleCopy(email, "email")}
              className="p-2 rounded-lg text-zinc-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors cursor-pointer"
              aria-label="复制邮箱"
            >
              {copiedEmail ? (
                <FiCheck className="w-4 h-4 text-green-500" />
              ) : (
                <FiCopy className="w-4 h-4" />
              )}
            </button>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-2xl px-6 py-4 border border-zinc-200/60 dark:border-zinc-700/40 shadow-sm"
          >
            <HiPhone className="w-5 h-5 text-indigo-500" />
            <span className="text-base sm:text-lg font-medium text-zinc-900 dark:text-white font-mono">
              {phone}
            </span>
            <button
              onClick={() => handleCopy(phone, "phone")}
              className="p-2 rounded-lg text-zinc-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors cursor-pointer"
              aria-label="复制电话号码"
            >
              {copiedPhone ? (
                <FiCheck className="w-4 h-4 text-green-500" />
              ) : (
                <FiCopy className="w-4 h-4" />
              )}
            </button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white dark:bg-zinc-800 rounded-2xl px-6 py-4 border border-zinc-200/60 dark:border-zinc-700/40 shadow-sm"
          >
            <FiMapPin className="w-5 h-5 text-indigo-500" />
            <span className="text-base sm:text-lg font-medium text-zinc-900 dark:text-white">
              山东省济南市槐荫区
            </span>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
        <p>&copy; {new Date().getFullYear()} 赵鑫. All rights reserved.</p>
        <p>
          使用 Next.js 构建 · 部署于 Vercel
        </p>
      </footer>
    </section>
  );
}