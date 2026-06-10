"use client";

import { motion } from "framer-motion";
import { Download, Code2, Brain, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

const cardVariants = {
    hidden: { opacity: 0, x: 40, y: 10 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" },
    }),
};

export function HeroProfileCard() {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full max-w-sm rounded-2xl border border-white/[0.08] bg-[#0e0e0e] p-6 shadow-[0_0_40px_rgba(124,58,237,0.08)]"
        >
            {/* Subtle top glow line */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

            {/* Profile header */}
            <motion.div
                custom={0}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3"
            >
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-violet-500/20">
                    {/* Replace src with real image path */}
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                            src="/images/profile.jpeg"
                            alt="Swarup Das"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-white">Swarup Das</p>
                    <p className="text-sm text-zinc-400">
                        Software Engineer{" "}
                        <span className="text-zinc-600">•</span> AI Enthusiast
                    </p>
                </div>
            </motion.div>

            {/* Divider */}
            <div className="my-4 h-px bg-white/[0.06]" />

            {/* Backend Expertise */}
            <motion.div
                custom={1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
            >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10">
                    <Code2 size={14} className="text-violet-400" />
                </div>
                <div>
                    <p className="text-sm font-medium text-white">
                        Backend Expertise
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                        Node.js, Go, Python, Distributed Systems
                    </p>
                </div>
            </motion.div>

            {/* AI & ML Research */}
            <motion.div
                custom={2}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-2 flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
            >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10">
                    <Brain size={14} className="text-violet-400" />
                </div>
                <div>
                    <p className="text-sm font-medium text-white">
                        AI &amp; ML Research
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                        LLMs, Neural Networks, PyTorch
                    </p>
                </div>
            </motion.div>

            {/* Tags row */}
            <motion.div
                custom={3}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-4 flex flex-wrap gap-2"
            >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                    <MapPin size={10} className="text-zinc-500" />
                    Kolkata, IN
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-400">
                    <Briefcase size={10} />
                    Available for Hire
                </span>
            </motion.div>

            {/* Divider */}
            <div className="my-4 h-px bg-white/[0.06]" />

            {/* Resume CTA */}
            <motion.a
                custom={4}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
                <Download size={14} />
                Preview Resume
            </motion.a>
        </motion.div>
    );
}