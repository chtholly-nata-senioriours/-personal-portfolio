"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { FiGithub, FiMenu, FiX, FiMail, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "关于" },
  { href: "#skills", label: "技能" },
  { href: "#projects", label: "项目" },
  { href: "#blog", label: "博客" },
  { href: "#experience-contact", label: "经历" },
  { href: "#experience-contact", label: "联系" },
];

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      const ids = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= y) {
          setActive(`#${ids[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md text-zinc-600 dark:text-zinc-400"
        aria-label="菜单"
      >
        {mobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="lg:hidden fixed top-0 left-0 bottom-0 z-40 w-64 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 p-6 flex flex-col"
          >
            <MobileContent
              NAV_LINKS={NAV_LINKS}
              active={active}
              theme={theme}
              toggleTheme={toggleTheme}
              scrollTo={scrollTo}
            />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[220px] flex-col bg-white dark:bg-zinc-950 border-r border-zinc-100 dark:border-zinc-800 p-5 z-30">
        <DesktopContent
          NAV_LINKS={NAV_LINKS}
          active={active}
          theme={theme}
          toggleTheme={toggleTheme}
          scrollTo={scrollTo}
        />
      </aside>
    </>
  );
}

/* ─── Shared sidebar content ─── */

function DesktopContent({
  NAV_LINKS, active, theme, toggleTheme, scrollTo,
}: {
  NAV_LINKS: { href: string; label: string }[];
  active: string;
  theme: string;
  toggleTheme: () => void;
  scrollTo: (h: string) => void;
}) {
  return (
    <div className="flex flex-col h-full">
      <AvatarSection />
      <NavList NAV_LINKS={NAV_LINKS} active={active} scrollTo={scrollTo} />
      <BottomActions theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

function MobileContent(props: Parameters<typeof DesktopContent>[0]) {
  return (
    <div className="flex flex-col h-full pt-4">
      <AvatarSection />
      <NavList {...props} />
      <BottomActions {...props} />
    </div>
  );
}

function AvatarSection() {
  return (
    <div className="mb-6 pb-5 border-b border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-800">
          <img src="/avatar/me.jpg" alt="赵鑫" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-zinc-900 dark:text-white">赵鑫</h1>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight mt-0.5">
            数据科学 · 本科在读
          </p>
        </div>
      </div>
      <p className="text-[10px] text-zinc-400 dark:text-zinc-600 font-mono">
        1125392821@qq.com
      </p>
    </div>
  );
}

function NavList({
  NAV_LINKS, active, scrollTo,
}: {
  NAV_LINKS: { href: string; label: string }[];
  active: string;
  scrollTo: (h: string) => void;
}) {
  return (
    <nav className="flex-1">
      <ul className="space-y-0.5">
        {NAV_LINKS.map((link) => (
          <li key={link.href + link.label}>
            <button
              onClick={() => scrollTo(link.href)}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                active === link.href
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/30"
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BottomActions({
  theme, toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-1.5">
      <a
        href="https://github.com/chtholly-nata-senioriours"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/40 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 hover:text-zinc-900 dark:hover:text-white transition-all"
      >
        <FiGithub className="w-3.5 h-3.5 shrink-0" />
        <span className="flex-1">GitHub</span>
        <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          const el = document.querySelector("#experience-contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-indigo-50/80 dark:bg-indigo-900/30 border border-indigo-200/50 dark:border-indigo-700/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium hover:bg-indigo-100/80 dark:hover:bg-indigo-900/50 transition-all"
      >
        <FiMail className="w-3.5 h-3.5 shrink-0" />
        <span className="flex-1">联系我</span>
        <svg className="w-3 h-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <div className="flex justify-center pt-1.5">
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="切换主题"
        >
          {theme === "dark" ? <HiOutlineSun className="w-3.5 h-3.5" /> : <HiOutlineMoon className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
