"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiCplusplus,
  SiGit,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";

interface Skill {
  name: string;
  level: number;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// 根据简历：React, Vue.js, C#, C++, Java, HTML5, CSS, Git, Plastic SCM
// 技术栈暂时留空占位
const skillCategories: SkillCategory[] = [
  {
    title: "前端框架",
    skills: [
      { name: "React", level: 0, icon: SiReact, color: "#61DAFB" },
      { name: "Vue.js", level: 0, icon: SiVuedotjs, color: "#4FC08D" },
      { name: "HTML5 / CSS", level: 0, icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "开发语言",
    skills: [
      { name: "C#", level: 0, icon: VscJson, color: "#512BD4" },
      { name: "C++", level: 0, icon: SiCplusplus, color: "#00599C" },
      { name: "Java", level: 0, icon: FaJava, color: "#ED8B00" },
    ],
  },
  {
    title: "版本控制",
    skills: [
      { name: "Git", level: 0, icon: SiGit, color: "#F05032" },
      { name: "Plastic SCM", level: 0, icon: VscJson, color: "#00B4D8" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
            专业技能
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mt-2">
            技术栈
          </h2>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-3">
            熟练度等你来填充
          </p>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 border border-zinc-200/60 dark:border-zinc-700/40 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <skill.icon
                          className="w-4 h-4"
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
                        {skill.level > 0 ? `${skill.level}%` : "—"}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-700 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: skill.level > 0 ? `${skill.level}%` : "0%",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}