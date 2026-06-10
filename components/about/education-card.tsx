"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface EducationEntry {
    years: string;
    degree: string;
    institution: string;
    detail?: string;
    tags: string[];
}

interface EducationCardProps {
    entries: EducationEntry[];
}

export function EducationCard({ entries }: EducationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-6 w-full"
        >
            {/* Card Header */}
            <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-violet-400"
                    >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                </div>
                <span className="text-sm font-semibold text-white">Academic Foundation</span>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent" />

                <div className="space-y-6">
                    {entries.map((entry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: 0.3 + index * 0.12,
                            }}
                            className="relative pl-5"
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${index === 0
                                        ? "border-violet-400 bg-violet-500/30"
                                        : "border-zinc-600 bg-zinc-800"
                                    }`}
                            />

                            {/* Year */}
                            <p className="text-[11px] font-medium text-violet-400 tracking-wide mb-1">
                                {entry.years}
                            </p>

                            {/* Degree */}
                            <p className="text-sm font-semibold text-white leading-snug mb-0.5">
                                {entry.degree}
                            </p>

                            {/* Institution */}
                            <p className="text-xs text-zinc-500 mb-2">{entry.institution}</p>

                            {/* Detail */}
                            {entry.detail && (
                                <p className="text-xs text-zinc-400 mb-2">{entry.detail}</p>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {entry.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-white/[0.04]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}