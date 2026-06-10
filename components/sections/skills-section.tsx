"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SkillCategoryCard, type SkillCategoryCardProps } from "@/components/skills/skill-category-card";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconCode = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
);
const IconFrontend = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
);
const IconBackend = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
);
const IconAI = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" />
        <path d="M9 15s1 1 3 1 3-1 3-1" />
    </svg>
);
const IconTools = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);
const IconCS = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m1.636-6.364-.707-.707M12 21v-1" />
        <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
);
const IconGlobe = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

type FilterKey = "all" | "development" | "ai" | "infrastructure";

const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "development", label: "Development" },
    { key: "ai", label: "AI & Data" },
    { key: "infrastructure", label: "Infrastructure" },
];

const categories: (Omit<SkillCategoryCardProps, "index"> & { filter: FilterKey[] })[] = [
    {
        icon: <IconCode />,
        title: "Programming",
        subtitle: "Core languages for logic and systems.",
        filter: ["all", "development"],
        skills: [
            { name: "TypeScript / JavaScript", level: 88, core: true },
            { name: "C++", level: 82 },
            { name: "SQL", level: 80, core: true },
        ],
    },
    {
        icon: <IconFrontend />,
        title: "Frontend",
        subtitle: "Building immersive user interfaces.",
        filter: ["all", "development"],
        skills: [
            { name: "React / Next.js", level: 90, core: true },
            { name: "Tailwind CSS", level: 88, core: true },
            { name: "Redux Toolkit", level: 78 },
            { name: "TypeScript", level: 85, core: true },
        ],
    },
    {
        icon: <IconBackend />,
        title: "Backend",
        subtitle: "Scalable APIs and server-side systems.",
        filter: ["all", "development"],
        skills: [
            { name: "Node.js / Express", level: 85, core: true },
            { name: "MongoDB / Mongoose", level: 80, core: true },
            { name: "REST APIs + JWT", level: 88 },
            { name: "Firebase", level: 72 },
        ],
    },
    {
        icon: <IconAI />,
        title: "AI & ML",
        subtitle: "LLMs, voice interfaces, and automation.",
        filter: ["all", "ai"],
        skills: [
            { name: "Groq LLM", level: 82, core: true },
            { name: "Vapi AI", level: 78, core: true },
            { name: "Prompt Engineering", level: 85 },
            { name: "AI App Development", level: 80 },
        ],
    },
    {
        icon: <IconTools />,
        title: "Tools",
        subtitle: "Productivity and developer workflow.",
        filter: ["all", "infrastructure"],
        skills: [
            { name: "Git / GitHub", level: 92, core: true },
            { name: "Docker (Basics)", level: 65 },
            { name: "Postman", level: 88, core: true },
            { name: "Vercel", level: 85 },
        ],
    },
    {
        icon: <IconCS />,
        title: "CS Fundamentals",
        subtitle: "The bedrock of software engineering.",
        filter: ["all", "development"],
        skills: [
            { name: "DSA", level: 85, core: true },
            { name: "OOP", level: 88, core: true },
            { name: "DBMS", level: 80 },
            { name: "OS / Networks", level: 75 },
        ],
    },
];

const nextGenTags = [
    "Rust Programming",
    "WebAssembly",
    "Edge AI Optimization",
    "Vector Databases",
    "Agent Workflows",
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" as const, delay },
    }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export function SkillsSection() {
    const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

    const visible = categories.filter((c) => c.filter.includes(activeFilter));

    return (
        <section
            id="skills"
            className="relative w-full bg-black py-20 overflow-hidden"
        >
            {/* Background glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-violet-700/8 blur-[130px]" />
                <div className="absolute -bottom-24 -right-32 h-[400px] w-[500px] rounded-full bg-violet-600/7 blur-[110px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* ── HEADER ──────────────────────────────────────────────── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-3"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-[11px] font-medium tracking-widest uppercase">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        Skillset &amp; Expertise
                    </span>
                </motion.div>

                <div className="mb-10">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.05}
                        className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight text-white mb-3"
                    >
                        The Toolbox of a{" "}
                        <em className="not-italic text-violet-400">Modern Engineer</em>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.12}
                        className="text-[15px] text-zinc-400 leading-relaxed max-w-xl"
                    >
                        A comprehensive breakdown of my technical proficiencies, spanning full-stack
                        development, AI research, and scalable infrastructure.
                    </motion.p>
                </div>

                {/* ── FILTER TABS ─────────────────────────────────────────── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.18}
                    className="flex items-center gap-1.5 mb-10 overflow-x-auto pb-1 scrollbar-none"
                >
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => setActiveFilter(f.key)}
                            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${activeFilter === f.key
                                    ? "bg-white text-black"
                                    : "text-zinc-400 border border-white/[0.08] hover:text-white hover:border-white/20"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </motion.div>

                {/* ── SKILLS GRID ─────────────────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visible.map((cat, i) => (
                        <SkillCategoryCard
                            key={cat.title}
                            icon={cat.icon}
                            title={cat.title}
                            subtitle={cat.subtitle}
                            skills={cat.skills}
                            index={i}
                        />
                    ))}
                </div>

                {/* ── NEXT-GEN TECHNOLOGIES ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeInOut", delay: 0.1 }}
                    className="mt-16 rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12"
                >
                    {/* Left */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 text-[11px] text-violet-400 font-medium tracking-widest uppercase">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                </svg>
                                Currently Leveling Up
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Next-Gen Technologies</h3>
                        <p className="text-[13px] text-zinc-500 leading-relaxed max-w-md">
                            Deepening knowledge in distributed systems at scale and exploring the
                            intersection of generative AI with edge computing.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {nextGenTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium text-zinc-300 border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/40 hover:text-violet-300 transition-colors duration-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right — decorative icon grid */}
                    <div className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-2xl border border-white/[0.07] bg-black/40 grid grid-cols-2 place-items-center gap-3 p-4 hidden lg:grid">
                        {[<IconCode key="c" />, <IconGlobe key="g" />, <IconAI key="a" />, <IconCS key="cs" />].map((ic, i) => (
                            <div key={i} className="text-violet-500/60">
                                {ic}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeInOut", delay: 0.05 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-zinc-500 mb-5">Interested in seeing these skills in action?</p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                        >
                            View Selected Projects
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                        >
                            Let&rsquo;s Discuss Opportunities
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}