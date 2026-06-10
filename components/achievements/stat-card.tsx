"use client";

import { motion } from "framer-motion";

export interface StatCardProps {
    value: string;
    label: string;
    sublabel?: string;
    index: number;
}

export function StatCard({ value, label, sublabel, index }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.45,
                ease: [0.25, 0.1, 0.25, 1] as const,
                delay: 0.1 + index * 0.06,
            }}
            className="flex flex-col items-center justify-center text-center px-4 py-4 sm:py-0"
        >
            <span className="text-2xl sm:text-[26px] font-bold text-white tabular-nums leading-none mb-1">
                {value}
            </span>
            <span className="text-[11px] font-medium text-zinc-400 leading-snug">
                {label}
            </span>
            {sublabel && (
                <span className="text-[10px] text-zinc-600 mt-0.5">
                    {sublabel}
                </span>
            )}
        </motion.div>
    );
}