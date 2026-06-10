"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          {/* Avatar */}
          <motion.div variants={fadeInUp} custom={0} className="shrink-0">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 ring-2 ring-white dark:ring-zinc-800 shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-5xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                赵鑫
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.div variants={fadeInUp} custom={1}>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
                关于我
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
                数据科学与大数据技术 · 本科在读
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 max-w-xl"
            >
              我叫赵鑫，目前就读于山东中医药大学数据科学与大数据技术专业，
              预计 2029 年毕业。在校期间 GPA 3.9，专业基础扎实。
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={3}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 max-w-xl"
            >
              技术方面，我熟悉 React 和 Vue.js 前端框架，掌握 C#、C++、Java 和
              HTML5/CSS 等开发语言，熟悉 Git 和 Plastic SCM 版本控制。
              具备团队管理经验，主导过大型项目的技术选型和架构设计。
            </motion.p>

            <motion.p
              variants={fadeInUp}
              custom={4}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-xl"
            >
              目前在校软件开发实验室参与产品辅助与维护工作，
              同时于 COBO 工作室负责项目程序设计和场景搭建，以及发布后的运营维护。
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}