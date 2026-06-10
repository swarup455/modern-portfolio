"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.58,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay,
        },
    },
});

const scaleIn = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

// ─── Stat pills ───────────────────────────────────────────────────────────────

const stats = [
    { value: "450+", label: "LeetCode Solved" },
    { value: "1700+", label: "LC Rating" },
    { value: "2+", label: "Years Building" },
    { value: "∞", label: "Curiosity" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function CTASection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="cta"
            aria-label="Call to action"
            className="relative w-full bg-black pt-10 pb-0 overflow-hidden"
        >
            {/* ── Layered background glows ─────────────────────────────────
                Three overlapping blooms create the premium deep-violet
                atmosphere seen throughout the PDF, peaking here as the
                page's final visual statement.
            ──────────────────────────────────────────────────────────────── */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                {/* Primary centrepiece bloom */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[760px] rounded-full bg-violet-700/14 blur-[140px]" />
                {/* Secondary halo — slightly offset, adds depth */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[480px] rounded-full bg-violet-600/10 blur-[80px]" />
                {/* Edge fades — prevent hard cut against footer */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* Hairline top separator — same pattern as contact section divider */}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-20" />
            </div>

            {/* ── Main content ─────────────────────────────────────────────── */}
            <div className="relative mx-auto w-full max-w-4xl px-6 lg:px-8 pb-24 flex flex-col items-center text-center">

                {/* ── Badge ──────────────────────────────────────────────── */}
                <motion.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-[11px] font-medium tracking-widest uppercase">
                        <Sparkles className="w-3 h-3" />
                        Open to Opportunities
                    </span>
                </motion.div>

                {/* ── Headline ───────────────────────────────────────────── */}
                <motion.h2
                    variants={fadeUp(0.06)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-[40px] sm:text-5xl lg:text-[58px] font-bold leading-[1.05] tracking-tight text-white mb-5"
                >
                    Ready to Build{" "}
                    <br className="hidden sm:block" />
                    <em className="not-italic text-violet-400">Something Amazing?</em>
                </motion.h2>

                {/* ── Description ────────────────────────────────────────── */}
                <motion.p
                    variants={fadeUp(0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-[15px] sm:text-[16px] text-zinc-400 leading-relaxed max-w-[520px] mb-10"
                >
                    I&rsquo;m actively seeking Software Engineering opportunities and
                    exciting projects where I can contribute, learn, and create meaningful
                    impact through technology.
                </motion.p>

                {/* ── CTA Buttons ────────────────────────────────────────── */}
                <motion.div
                    variants={fadeUp(0.18)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-16"
                >
                    {/* Primary — white filled, maximum contrast */}
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 rounded-full bg-white hover:bg-zinc-100 text-black text-sm font-semibold px-6 py-3 transition-all duration-200"
                    >
                        Get In Touch
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>

                    {/* Secondary — ghost outline */}
                    <a
                        href="/resume"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-transparent hover:bg-white/[0.05] hover:border-white/25 text-white text-sm font-medium px-6 py-3 transition-all duration-200"
                    >
                        <Download className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors duration-200" />
                        Download Resume
                    </a>
                </motion.div>

                {/* ── Stats strip ────────────────────────────────────────── */}
                <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full rounded-2xl border border-white/[0.06] bg-[#0d0d10] px-4 py-5"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.05]">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeInOut",
                                    delay: 0.25 + i * 0.06,
                                }}
                                className="flex flex-col items-center justify-center text-center px-4 py-3 sm:py-0"
                            >
                                <span className="text-lg font-bold text-white tabular-nums leading-none mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-[11px] text-zinc-600 tracking-wide">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Ambient pulse ring — the single bold signature element ──
                    A slowly expanding ring that pulses outward from the
                    section centre, visible only when motion is allowed.
                    Gives the CTA a "live" heartbeat quality without being loud.
                ──────────────────────────────────────────────────────────── */}
                {!prefersReducedMotion && (
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/[0.12]"
                                initial={{ width: 120, height: 120, opacity: 0.6 }}
                                animate={{
                                    width: [120, 440],
                                    height: [120, 440],
                                    opacity: [0.5, 0],
                                }}
                                transition={{
                                    duration: 3.6,
                                    ease: "easeOut",
                                    delay: i * 1.2,
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}