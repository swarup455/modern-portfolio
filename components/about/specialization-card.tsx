"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SpecializationCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export function SpecializationCard({
    icon,
    title,
    description,
    index,
}: SpecializationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1 + index * 0.08,
            }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="group rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-5 flex flex-col gap-3 hover:border-violet-500/20 transition-colors duration-300"
        >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/15 transition-colors duration-300">
                <span className="text-violet-400">{icon}</span>
            </div>

            {/* Title */}
            <p className="text-sm font-bold text-white">{title}</p>

            {/* Description */}
            <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
        </motion.div>
    );
}