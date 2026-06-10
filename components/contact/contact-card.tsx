"use client";

import { motion } from "framer-motion";

export interface ContactCardProps {
    label: string;
    value: string;
    href?: string;
    icon: React.ReactNode;
    index: number;
}

export function ContactCard({ label, value, href, icon, index }: ContactCardProps) {
    const inner = (
        <div className="flex items-center gap-3.5 w-full">
            {/*Icon container */}
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:border-violet-500/30 group-hover:text-violet-400 transition-all duration-200">
                {icon}
            </div>

            {/* Text */}
            <div className="min-w-0">
                <p className="text-[10px] font-semibold text-zinc-600 tracking-widest uppercase mb-0.5">
                    {label}
                </p>
                <p className="text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors duration-200 truncate">
                    {value}
                </p>
            </div>

            {/* Arrow — only for links */}
            {href && (
                <div className="ml-auto flex-shrink-0 text-zinc-700 group-hover:text-violet-400 transition-colors duration-200">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                </div>
            )}
        </div>
    );

    const sharedClass =
        "group flex items-center w-full rounded-xl border border-white/[0.07] bg-[#0d0d10] px-4 py-3.5 hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-200";

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.48,
                ease: "easeInOut",
                delay: index * 0.07,
            }}
        >
            {href ? (
                <a href={href} target="_blank" rel="noreferrer" className={sharedClass}>
                    {inner}
                </a>
            ) : (
                <div className={sharedClass}>{inner}</div>
            )}
        </motion.div>
    );
}