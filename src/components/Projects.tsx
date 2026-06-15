"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
  {
    title: "路人女主？别开玩笑啦！",
    description:
      "参与 TapTap 聚光灯 GameJam 的作品，项目代号 Chtholly。一款创意玩法原型，使用 Unity + C# 开发。游戏累计获得百余人次的有效体验与广泛关注，在比赛中脱颖而出。作为团队程序设计，负责整体架构设计与核心玩法实现。",
    tags: ["Unity", "C#", "TapTap", "GameJam"],
    demoUrl: "https://www.taptap.cn/app/779228",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={i}
          className="group bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/40 overflow-hidden hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
          <img
            src="/projects/chtholly.jpg"
            alt={project.title}
            className="h-44 w-full object-cover"
          />
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-700/50">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiExternalLink className="w-3.5 h-3.5" />
                  演示
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  源码
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
