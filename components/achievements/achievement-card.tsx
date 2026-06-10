"use client";

import { motion } from "framer-motion";

export interface AchievementItem {
    title: string;
    detail?: string;
    highlight?: boolean; // renders a violet accent dot
}

export interface AchievementCardProps {
    icon: React.ReactNode;
    category: string;
    categoryLabel: string; // short label e.g. "Top 12%"
    items: AchievementItem[];
    accentColor?: "violet" | "sky" | "emerald" | "amber";
    index: number;
}

const accentMap = {
    violet: { dot: "bg-violet-400", icon: "bg-violet-500/10 border-violet-500/20 text-violet-400", badge: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
    sky: { dot: "bg-sky-400", icon: "bg-sky-500/10 border-sky-500/20 text-sky-400", badge: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
    emerald: { dot: "bg-emerald-400", icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    amber: { dot: "bg-amber-400", icon: "bg-amber-500/10 border-amber-500/20 text-amber-400", badge: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
};

export function AchievementCard({
    icon,
    category,
    categoryLabel,
    items,
    accentColor = "violet",
    index,
}: AchievementCardProps) {
    const accent = accentMap[accentColor];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.52,
                ease: [0.25, 0.1, 0.25, 1] as const,
                delay: index * 0.07,
            }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
            className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-5 overflow-hidden"
        >
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-violet-600/[0.05] to-transparent" />

            {/* Card header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center ${accent.icon}`}>
                        {icon}
                    </div>
                    <span className="text-[13px] font-semibold text-white leading-snug">
                        {category}
                    </span>
                </div>
                {/* Top-right label pill */}
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${accent.badge}`}>
                    {categoryLabel}
                </span>
            </div>

            {/* Achievement items */}
            <div className="flex flex-col gap-2.5 flex-1">
                {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                        {/* Dot — violet for highlights, zinc for standard */}
                        <span className={`mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full ${item.highlight ? accent.dot : "bg-zinc-700"}`} />
                        <div className="min-w-0">
                            <p className={`text-[12px] leading-snug ${item.highlight ? "text-zinc-200 font-medium" : "text-zinc-400"}`}>
                                {item.title}
                            </p>
                            {item.detail && (
                                <p className="text-[11px] text-zinc-600 mt-0.5 leading-snug">
                                    {item.detail}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}