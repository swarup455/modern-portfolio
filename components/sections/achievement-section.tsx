"use client";

import { motion } from "framer-motion";
import { AchievementCard } from "@/components/achievements/achievement-card";
import { StatCard } from "@/components/achievements/stat-card";
import { ExternalLink } from "lucide-react";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconCP = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
);
const IconAcademic = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);
const IconCert = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);
const IconPro = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);
const IconProject = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);
const IconResearch = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
);
const IconCheck = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);
const IconStar = () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
    { value: "1700+", label: "LeetCode Rating", sublabel: "Top 12% globally" },
    { value: "450+", label: "Problems Solved", sublabel: "Across platforms" },
    { value: "AIR 1905", label: "WBJEE Rank", sublabel: "Top 1.3% statewide" },
    { value: "15+", label: "REST APIs Built", sublabel: "In production" },
    { value: "10+", label: "DB Schemas Designed", sublabel: "MongoDB" },
    { value: "2★", label: "CodeChef Rating", sublabel: "Competitive coder" },
];

const achievementCards = [
    {
        icon: <IconCP />,
        category: "Competitive Programming",
        categoryLabel: "Top 12%",
        accentColor: "violet" as const,
        items: [
            { title: "LeetCode Rating 1700+", highlight: true },
            { title: "450+ problems solved", highlight: true },
            { title: "Top 12% on LeetCode globally", highlight: false },
            { title: "2-Star CodeChef coder", highlight: false },
        ],
    },
    {
        icon: <IconAcademic />,
        category: "Academic & Research",
        categoryLabel: "AIR 1905",
        accentColor: "sky" as const,
        items: [
            { title: "AIR 1905 in WBJEE", highlight: true },
            { title: "Top 1.3% across West Bengal", highlight: true },
            { title: "Summer Research at ISI Kolkata", highlight: false },
            { title: "Quantum Computing research exposure", highlight: false },
        ],
    },
    {
        icon: <IconCert />,
        category: "Certifications",
        categoryLabel: "Verified",
        accentColor: "emerald" as const,
        items: [
            { title: "HackerRank Problem Solving", highlight: true, detail: "Intermediate — Verified" },
            { title: "HackerRank SQL", highlight: true, detail: "Intermediate — Verified" },
        ],
    },
    {
        icon: <IconPro />,
        category: "Professional Impact",
        categoryLabel: "Intern",
        accentColor: "amber" as const,
        items: [
            { title: "Backend Developer Intern — Graphura India", highlight: true },
            { title: "Built 15+ production REST APIs", highlight: false },
            { title: "Designed 10+ MongoDB schemas", highlight: false },
            { title: "Node.js ecosystem in production", highlight: false },
        ],
    },
];

// Highlight rows — two-column panel, mirrors PDF "Academic & Internship Honors" rows
const honorRows = [
    {
        icon: <IconResearch />,
        title: "Summer Research Program — ISI Kolkata",
        org: "Indian Statistical Institute, Kolkata",
        year: "2023",
        description: "Conducted research in Quantum Computing and distributed algorithms under faculty guidance.",
        color: "text-sky-400",
        border: "border-sky-500/20",
        bg: "bg-sky-500/8",
    },
    {
        icon: <IconPro />,
        title: "Backend Developer Internship — Graphura India",
        org: "Graphura India Pvt. Ltd.",
        year: "2023–24",
        description: "Built and deployed 15+ REST APIs, designed MongoDB schemas, and contributed to the Node.js production ecosystem.",
        color: "text-amber-400",
        border: "border-amber-500/20",
        bg: "bg-amber-500/8",
    },
    {
        icon: <IconProject />,
        title: "AI-Powered Products — 3 Full-Stack Projects",
        org: "Personal Portfolio",
        year: "2023–24",
        description: "Built INTERVO (AI interview simulator), StudyBuddy (real-time collaboration), and NewsDesk (AI news aggregation) end-to-end.",
        color: "text-violet-400",
        border: "border-violet-500/20",
        bg: "bg-violet-500/8",
    },
];

// Certification list — mirrors PDF "Technical Certifications" cards
const certifications = [
    {
        platform: "HackerRank",
        name: "Problem Solving",
        level: "Intermediate",
        href: "https://hackerrank.com",
    },
    {
        platform: "HackerRank",
        name: "SQL",
        level: "Intermediate",
        href: "https://hackerrank.com",
    },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const, delay },
    }),
};

const fadeDown = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.44, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function AchievementsSection() {
    return (
        <section
            id="achievements"
            className="relative w-full bg-black py-20 overflow-hidden"
        >
            {/* ── Background atmosphere — same glow pattern as all sections ── */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 -left-32 h-[500px] w-[600px] rounded-full bg-violet-700/8 blur-[130px]" />
                <div className="absolute -bottom-20 right-0 h-[400px] w-[500px] rounded-full bg-violet-600/6 blur-[110px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* ── SECTION HEADER ──────────────────────────────────────── */}
                <motion.div
                    variants={fadeDown}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-3"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-[11px] font-medium tracking-widest uppercase">
                        {/* trophy icon */}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                            <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                        Achievements
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
                        Certifications &amp;{" "}
                        <em className="not-italic text-violet-400">Milestones</em>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.12}
                        className="text-[15px] text-zinc-400 leading-relaxed max-w-xl"
                    >
                        A curated record of competitive programming rankings, academic honours,
                        professional milestones, and certifications that reflect a commitment
                        to excellence and continuous learning.
                    </motion.p>
                </div>

                {/* ── STATS STRIP ─────────────────────────────────────────────
                    Matches the "Quick Facts" strip from AboutSection and the
                    stats row from PDF page 7 Achievements exactly.
                    bg-[#0d0d10], divide-x, 6-column on lg.
                ──────────────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
                    className="mb-12 rounded-2xl border border-white/[0.06] bg-[#0d0d10] px-4 py-5"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 divide-y-[1px] sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-white/[0.05]">
                        {stats.map((stat, i) => (
                            <StatCard
                                key={stat.label}
                                value={stat.value}
                                label={stat.label}
                                sublabel={stat.sublabel}
                                index={i}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* ── 4-COLUMN ACHIEVEMENT CARDS GRID ─────────────────────────
                    1-col mobile → 2-col tablet → 4-col desktop.
                    Mirrors PDF's Technical Certifications 3-col card grid
                    but adapted to 4 categories.
                ──────────────────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {achievementCards.map((card, i) => (
                        <AchievementCard
                            key={card.category}
                            icon={card.icon}
                            category={card.category}
                            categoryLabel={card.categoryLabel}
                            items={card.items}
                            accentColor={card.accentColor}
                            index={i}
                        />
                    ))}
                </div>

                {/* ── TWO-COLUMN SPLIT ────────────────────────────────────────
                    Left: "Competitive Programming" metrics with global
                          percentile bars — mirrors PDF's left panel.
                    Right: Certifications list — mirrors PDF's right panel.
                ──────────────────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4 mb-12">

                    {/* LEFT — CP metrics panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                        className="rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-6"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                                <IconCP />
                            </div>
                            <h3 className="text-[14px] font-semibold text-white">Competitive Programming</h3>
                        </div>
                        <p className="text-[12px] text-zinc-500 mb-5 ml-9">
                            Metrics and rankings from global algorithmic challenge platforms.
                        </p>

                        {/* Metric rows — three platforms */}
                        <div className="flex flex-col gap-4">
                            {[
                                { platform: "LeetCode", stat: "1700+", sub: "Rating · 450+ solved", percentile: "Top 12%", pct: 88 },
                                { platform: "CodeChef", stat: "2-Star", sub: "Competitive coder", percentile: "Active", pct: 55 },
                                { platform: "HackerRank", stat: "★★★★★", sub: "Problem Solving", percentile: "5 Stars", pct: 72 },
                            ].map((row, i) => (
                                <div key={row.platform}>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div>
                                            <span className="text-[13px] font-medium text-white">{row.platform}</span>
                                            <span className="text-[11px] text-zinc-600 ml-2">{row.sub}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[12px] font-bold text-white tabular-nums">{row.stat}</span>
                                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20">
                                                {row.percentile}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-[3px] w-full rounded-full bg-white/[0.05]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${row.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 + i * 0.08 }}
                                            className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Certifications panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
                        className="rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-6 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <IconCert />
                            </div>
                            <h3 className="text-[14px] font-semibold text-white">Certifications</h3>
                        </div>
                        <p className="text-[12px] text-zinc-500 mb-5 ml-9">
                            Verified credentials from industry platforms.
                        </p>

                        <div className="flex flex-col gap-3 flex-1">
                            {certifications.map((cert, i) => (
                                <motion.a
                                    key={cert.name}
                                    href={cert.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 + i * 0.07 }}
                                    className="group flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-500/25 hover:bg-emerald-500/[0.03] transition-all duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                            <IconCheck />
                                        </div>
                                        <div>
                                            <p className="text-[12px] font-medium text-zinc-200 group-hover:text-white transition-colors">
                                                {cert.name}
                                            </p>
                                            <p className="text-[11px] text-zinc-600">
                                                {cert.platform} · {cert.level}
                                            </p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 text-zinc-700 group-hover:text-emerald-400 transition-colors duration-200 flex-shrink-0" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Stars decoration — matches PDF star rating visual */}
                        <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center gap-1.5">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-amber-400/70">
                                    <IconStar />
                                </span>
                            ))}
                            <span className="text-[11px] text-zinc-600 ml-1.5">HackerRank Problem Solving</span>
                        </div>
                    </motion.div>
                </div>

                {/* ── ACADEMIC & PROFESSIONAL HONOURS ────────────────────────
                    Full-width stacked rows.
                    Mirrors PDF's "Academic & Internship Honors" section exactly:
                    icon box → title + org + year → description → action link.
                    Each row is a horizontal card with left-accent border.
                ──────────────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
                    className="mb-3"
                >
                    <h3 className="text-[18px] font-semibold text-white mb-1">
                        Academic &amp; Professional Honours
                    </h3>
                    <p className="text-[13px] text-zinc-500">
                        Recognition of academic excellence and professional impact during research and work.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-3">
                    {honorRows.map((row, i) => (
                        <motion.div
                            key={row.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 }}
                            whileHover={{ x: 3, transition: { duration: 0.18, ease: "easeOut" } }}
                            className="group flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-5 hover:border-white/[0.11] transition-all duration-200"
                        >
                            {/* Icon */}
                            <div className={`flex-shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center mt-0.5 ${row.bg} ${row.border} ${row.color}`}>
                                {row.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <p className="text-[13px] font-semibold text-white leading-snug">
                                        {row.title}
                                    </p>
                                    <span className="flex-shrink-0 text-[11px] text-zinc-600 tabular-nums">
                                        {row.year}
                                    </span>
                                </div>
                                <p className={`text-[11px] font-medium mb-1.5 ${row.color}`}>
                                    {row.org}
                                </p>
                                <p className="text-[12px] text-zinc-500 leading-relaxed">
                                    {row.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── BOTTOM CTA ──────────────────────────────────────────────
                    Matches the "Interested in my full professional background?"
                    CTA at the bottom of PDF page 7.
                ──────────────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.05 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-zinc-500 mb-5">
                        Interested in my full professional background?
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="/resume"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                        >
                            Download Full Resume
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                        >
                            Let&rsquo;s Connect
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}