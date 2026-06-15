"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  description: string;
  status?: string;
  tags?: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2025.10 — 2025.11",
    title: "路人女主？别开玩笑啦！(Chtholly)",
    org: "COBO 工作室 · 程序主创",
    description: "使用 Unity + C# 完成游戏开发并参加 TapTap 聚光灯 GameJam。",
    tags: ["Unity", "C#", "GameJam"],
  },
  {
    period: "2026.03",
    title: "蓝桥杯 · 省二等奖",
    org: "算法竞赛",
    description: "首次参加算法比赛。",
    tags: ["算法", "C++"],
  },
  {
    period: "2026.05",
    title: "码蹄杯 · 省银晋级国赛",
    org: "算法竞赛",
    description: "算法比赛获省级银奖，晋级全国总决赛。",
    tags: ["算法", "C++"],
  },
  {
    period: "2026.05 — 至今",
    title: "腾讯光子 · 运营策划实习",
    org: "线上实习",
    description: "拿到实习 offer，正在完成线上实习课题。",
    status: "进行中",
    tags: ["实习", "运营"],
  },
  {
    period: "2026.06 — 至今",
    title: "备赛码蹄杯全国总决赛",
    org: "算法竞赛",
    description: "备战算法国赛。",
    status: "进行中",
    tags: ["算法", "国赛"],
  },
  {
    period: "进行中",
    title: "新独立游戏项目 · 程序主创",
    org: "个人项目",
    description: "全新独立游戏，负责整体程序架构与核心玩法开发。",
    status: "开发中",
    tags: ["Unity", "C#", "独立游戏"],
  },
  {
    period: "进行中",
    title: "桌宠 Demo",
    org: "个人项目",
    description: "桌面宠物交互原型开发中。",
    status: "开发中",
    tags: ["Demo", "C#"],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, 2);

  return (
    <div>
      <div className="relative">
        <div className="absolute left-3 top-1 bottom-1 w-px bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-3">
          {visible.map((item, i) => (
            <motion.div
              key={item.title + item.period}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="relative flex items-start gap-3"
            >
              <div className="relative z-10 mt-1 w-5 h-5 flex items-center justify-center shrink-0">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.status ? "bg-indigo-500" : "bg-zinc-300 dark:bg-zinc-600"
                  }`}
                />
              </div>
              <div className="flex-1 min-w-0 pb-3 border-b border-zinc-100 dark:border-zinc-800/50 last:border-0">
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-400 dark:text-zinc-500 mb-0.5">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-2.5 h-2.5" />
                    {item.period}
                  </span>
                  {item.status && (
                    <span className="text-indigo-500 dark:text-indigo-400 font-medium">
                      · {item.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xs font-semibold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{item.org}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {experiences.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 mx-auto mt-3 text-[11px] font-medium text-zinc-400 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          {expanded ? "收起" : `展开全部 (${experiences.length} 项)`}
          <FiChevronDown className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}
