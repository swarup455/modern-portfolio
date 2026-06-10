"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface QuickFactCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export function QuickFactCard({
    icon,
    title,
    description,
    index,
}: QuickFactCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1 + index * 0.1,
            }}
            className="rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-6 flex flex-col items-center text-center gap-4"
        >
            {/* Icon container */}
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-800/80 border border-white/[0.05]">
                <span className="text-violet-400">{icon}</span>
            </div>

            {/* Title */}
            <p className="text-sm font-bold text-white">{title}</p>

            {/* Description */}
            <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
        </motion.div>
    );
}