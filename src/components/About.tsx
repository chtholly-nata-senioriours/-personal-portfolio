"use client";

import { FiCode, FiBriefcase } from "react-icons/fi";

const roles = [
  { title: "COBO 工作室", subtitle: "程序主创", icon: FiCode },
  { title: "腾讯光子", subtitle: "线上实习 · 运营策划", icon: FiBriefcase },
];

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="shrink-0">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 ring-2 ring-white dark:ring-zinc-800 shadow">
          <div className="w-full h-full flex items-center justify-center text-xl font-bold bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            赵鑫
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          我叫赵鑫，山东中医药大学数据科学专业在读（预计 2029 毕业）。
          前后端开发、项目架构设计与算法竞赛均有涉猎，
          乐于从需求分析到技术落地全程参与。
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {roles.map((role) => (
            <div key={role.title} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/40">
              <role.icon className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span className="text-xs font-medium text-zinc-900 dark:text-white">{role.title}</span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">·</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{role.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
