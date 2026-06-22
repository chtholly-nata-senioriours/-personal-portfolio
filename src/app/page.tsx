import Sidebar from "@/components/Sidebar";
import HeroBanner from "@/components/HeroBanner";
import Section from "@/components/Section";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="min-h-screen lg:pl-[220px]">
      <Sidebar />
      <main>
        <HeroBanner />

        {/* 01 关于我 */}
        <Section id="about" num="01" title="关于我" subtitle="About">
          <About />
        </Section>

        {/* 02 技术栈 */}
        <Section id="skills" num="02" title="技术栈" subtitle="Skills" compact>
          <Skills />
        </Section>

        {/* 03 项目作品 */}
        <Section id="projects" num="03" title="项目作品" subtitle="Projects" compact>
          <Projects />
        </Section>

        {/* 04 博客 */}
        <Section id="blog" num="04" title="博客" subtitle="Blog">
          <Blog posts={posts} />
        </Section>

        {/* 05 个人经历 + 06 联系方式 (7:3) */}
        <section id="experience-contact" className="scroll-mt-16">
          <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/60" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Experience */}
              <div className="flex-[7] min-w-0">
                <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-700/30 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm p-5 sm:p-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-zinc-300 dark:text-zinc-600 select-none">05</span>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white">个人经历</h2>
                    <span className="text-[10px] text-zinc-300 dark:text-zinc-600 hidden sm:inline">/ Experience</span>
                  </div>
                  <div className="w-8 h-px bg-zinc-200 dark:bg-zinc-700 mb-5" />
                  <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    <Experience />
                  </div>
                </div>
              </div>
              {/* Contact */}
              <div className="flex-[3] min-w-0">
                <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-700/30 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl shadow-sm p-5 sm:p-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-zinc-300 dark:text-zinc-600 select-none">06</span>
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white">联系方式</h2>
                    <span className="text-[10px] text-zinc-300 dark:text-zinc-600 hidden sm:inline">/ Contact</span>
                  </div>
                  <div className="w-8 h-px bg-zinc-200 dark:bg-zinc-700 mb-5" />
                  <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    <Contact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom divider */}
        <div className="w-full h-px bg-zinc-100 dark:bg-zinc-800/60" />

        {/* Footer */}
        <div className="fixed bottom-4 right-4 z-20">
          <p className="text-[10px] text-zinc-300 dark:text-zinc-600">
            &copy; {new Date().getFullYear()} 赵鑫 · Next.js
          </p>
        </div>
      </main>
    </div>
  );
}
