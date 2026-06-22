"use client";

import { useState, useEffect, useCallback } from "react";
import { FiSearch, FiChevronLeft, FiChevronRight, FiCode, FiAward, FiClock } from "react-icons/fi";

const slides = [
  {
    img: "/projects/chtholly.jpg",
    title: "路人女主？别开玩笑啦！",
    tags: ["Unity", "C#", "GameJam"],
    desc: "TapTap 聚光灯 GameJam 参赛作品，项目代号 Chtholly。48 小时内完成的创意玩法原型。",
  },
  {
    img: "/projects/pet-demo.png",
    title: "小小桌宠 Demo",
    tags: ["Python", "PySide6", "Qt6"],
    desc: "基于 Python + PySide6 (Qt6) 构建的桌面宠物，半透明悬浮窗口，智能感知工作状态，状态机驱动动画。",
  },
  {
    img: "",
    title: "码蹄杯 · 省银晋级国赛",
    tags: ["算法", "C++"],
    desc: "算法比赛获省级银奖，成功晋级全国总决赛。",
    gradient: "from-amber-400 to-orange-500",
  },
];

const statusItems = [
  { icon: FiCode, label: "开发中", value: "新独立游戏 · 桌宠 Demo" },
  { icon: FiAward, label: "备赛中", value: "码蹄杯全国总决赛" },
  { icon: FiClock, label: "实习中", value: "腾讯光子 · 运营策划" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Search filtering logic
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((el) => {
      if (!q) { el.style.removeProperty("display"); return; }
      const id = el.id;
      const text = el.textContent?.toLowerCase() || "";
      const keywords: Record<string, string[]> = {
        about: ["赵鑫", "学校", "数据科学", "cobo", "腾讯", "光子"],
        skills: ["react", "vue", "c#", "c++", "java", "unity", "git"],
        projects: ["taptap", "gamejam", "chtholly", "游戏", "路人女主", "桌宠", "python"],
        experience: ["cobo", "腾讯", "光子", "蓝桥", "码蹄", "实习", "算法", "桌宠"],
        blog: ["博客", "文章", "日志", "开发"],
        ["experience-contact"]: ["cobo", "腾讯", "光子", "蓝桥", "码蹄", "实习", "桌宠"],
      };
      const matchKeywords = (keywords[id] || []).some((k) => k.includes(q) || q.includes(k));
      const matchText = text.includes(q);
      el.style.display = matchKeywords || matchText ? "" : "none";
    });
  }, [searchQuery]);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="pt-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* ─── Mobile avatar — visible only on small screens ─── */}
        <div className="flex items-center gap-3 mb-5 lg:hidden">
          <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-800 ring-2 ring-white dark:ring-zinc-800">
            <img src="/avatar/me.jpg" alt="赵鑫" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">赵鑫</p>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">数据科学 · 本科在读</p>
          </div>
        </div>

        {/* ─── Search bar ─── */}
        <div className="mb-6">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200/70 dark:border-zinc-700/50 shadow-sm max-w-md">
            <FiSearch className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索板块..."
              className="flex-1 text-sm bg-transparent outline-none text-zinc-700 dark:text-zinc-300 placeholder-zinc-400"
            />
          </div>
        </div>

        {/* ─── Quick action buttons ─── */}
        <div className="flex items-center gap-3 mb-5">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            查看项目
          </a>
          <a
            href="#experience-contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#experience-contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            联系我
          </a>
        </div>

        {/* ─── 3-column layout: carousel + side panels ─── */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* ─── Carousel (main) ─── */}
          <div className="relative flex-1 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/40 aspect-[16/9] sm:aspect-[16/7] group">
            {/* Image or gradient */}
            {slide.img ? (
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${slide.gradient}`} />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Title on bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-semibold text-lg">{slide.title}</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {slide.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white/90 backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30">
              <FiChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30">
              <FiChevronRight className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="absolute top-3 right-3 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === current ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ─── Right side panels ─── */}
          <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-64 shrink-0">
            {/* Panel 1: Current project info */}
            <div className="flex-1 lg:flex-none bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/40 p-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
                当前项目
              </span>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mt-1.5 leading-snug">
                {slide.title}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                {slide.desc}
              </p>
              <div className="flex flex-wrap gap-1 mt-3">
                {slide.tags.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Panel 2: Current status */}
            <div className="flex-1 lg:flex-none bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/60 dark:border-zinc-700/40 p-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                目前动态
              </span>
              <div className="mt-3 space-y-3">
                {statusItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-2.5">
                    <item.icon className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-zinc-900 dark:text-white">{item.value}</p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
