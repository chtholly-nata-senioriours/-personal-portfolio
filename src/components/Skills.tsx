"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { SiReact, SiVuedotjs, SiHtml5, SiCplusplus, SiGit } from "react-icons/si";
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

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillCategories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
          className="bg-white dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-200/60 dark:border-zinc-700/40 shadow-sm"
        >
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">{cat.title}</h3>
          <div className="space-y-3">
            {cat.skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <div className="flex items-center gap-2.5">
                  <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
