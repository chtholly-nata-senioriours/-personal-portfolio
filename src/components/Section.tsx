import { ReactNode } from "react";

interface Props {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  compact?: boolean;
}

export default function Section({ id, num, title, subtitle, children, className = "", compact = false }: Props) {
  return (
    <section id={id} className={`scroll-mt-16 ${className}`}>
      {/* Full-width divider line */}
      <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        {/* Glass card with title inside */}
        <div className={`rounded-2xl border border-zinc-200/50 dark:border-zinc-700/30 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm ${compact ? "p-5" : "p-6 sm:p-7"}`}>
          {/* Title area — top-left */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-[10px] font-semibold tracking-[0.15em] text-zinc-300 dark:text-zinc-600 select-none">
              {num}
            </span>
            <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
              {title}
            </h2>
            {subtitle && (
              <span className="text-[10px] text-zinc-300 dark:text-zinc-600 hidden sm:inline">
                / {subtitle}
              </span>
            )}
          </div>

          {/* Thin accent line */}
          <div className="w-8 h-px bg-zinc-200 dark:bg-zinc-700 mb-5" />

          {/* Content */}
          <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
