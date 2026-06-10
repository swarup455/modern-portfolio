"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface SkillItem {
    name: string;
    level: number; // 0–100
    core?: boolean;
}

export interface SkillCategoryCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    skills: SkillItem[];
    index: number;
}

export function SkillCategoryCard({
    icon,
    title,
    subtitle,
    skills,
    index,
}: SkillCategoryCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.07,
            }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-5 overflow-hidden"
        >
            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/[0.06] to-transparent" />
            </div>

            {/* Card header */}
            <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    {icon}
                </div>
                <div>
                    <h4 className="text-[13px] font-semibold text-white leading-tight">{title}</h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">{subtitle}</p>
                </div>
            </div>

            {/* Skill rows */}
            <div className="flex flex-col gap-3 flex-1">
                {skills.map((skill, i) => (
                    <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[12px] text-zinc-300 font-medium">{skill.name}</span>
                                {skill.core && (
                                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 leading-none tracking-wide">
                                        Core
                                    </span>
                                )}
                            </div>
                            <span className="text-[11px] text-zinc-600 tabular-nums">{skill.level}%</span>
                        </div>
                        <div className="h-[3px] w-full rounded-full bg-white/[0.05]">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: index * 0.07 + i * 0.05 + 0.2,
                                }}
                                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer link */}
            <div className="mt-4 pt-4 border-t border-white/[0.05]">
                <a
                    href="#projects"
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-violet-400 transition-colors duration-200"
                >
                    View related projects
                    <ArrowRight className="w-3 h-3" />
                </a>
            </div>
        </motion.div>
    );
}