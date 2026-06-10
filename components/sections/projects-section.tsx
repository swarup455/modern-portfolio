"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { ProjectCard, type ProjectCategory } from "@/components/projects/project-card";

// ─── Project Data ─────────────────────────────────────────────────────────────

type FilterKey = "All Projects" | "AI & ML" | "Web Apps" | "Core Tools";

interface Project {
    title: string;
    description: string;
    category: ProjectCategory;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    caseStudyUrl?: string;
    imageSrc?: string;
}

const projects: Project[] = [
    {
        title: "INTERVO – AI Powered Mock Interview Platform",
        description:
            "Real-time AI interview simulator with voice interaction, adaptive follow-up questions, and instant performance feedback powered by Groq LLM and Vapi AI.",
        category: "AI & ML",
        tags: ["Next.js", "TypeScript", "Groq LLM", "Vapi AI", "MongoDB", "Tailwind CSS"],
        githubUrl: "https://github.com/swarupdas",
        liveUrl: "https://intervo.vercel.app",
        caseStudyUrl: "#",
    },
    {
        title: "StudyBuddy – Real-Time Collaborative Workspace",
        description:
            "Collaborative study platform with live document editing, real-time cursors, shared whiteboards, and AI-assisted note summarization for students and teams.",
        category: "Web Apps",
        tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js", "Redux Toolkit"],
        githubUrl: "https://github.com/swarupdas",
        liveUrl: "https://studybuddy.vercel.app",
        caseStudyUrl: "#",
    },
    {
        title: "NewsDesk – AI Powered News Aggregator",
        description:
            "Intelligent news aggregation platform that clusters articles by topic, generates AI-powered summaries, and delivers a personalised feed with sentiment analysis.",
        category: "AI & ML",
        tags: ["Next.js", "TypeScript", "Groq LLM", "REST APIs", "Tailwind CSS", "Firebase"],
        githubUrl: "https://github.com/swarupdas",
        liveUrl: "https://newsdesk.vercel.app",
        caseStudyUrl: "#",
    },
];

const filters: FilterKey[] = ["All Projects", "AI & ML", "Web Apps", "Core Tools"];

// ─── Animation Helpers ────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.52, ease: [0.25, 0.1, 0.25, 1] as const, delay },
    }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState<FilterKey>("All Projects");

    const visible = projects.filter((p) => {
        if (activeFilter === "All Projects") return true;
        return p.category === activeFilter;
    });

    return (
        <section
            id="projects"
            className="relative w-full bg-black py-20 overflow-hidden"
        >
            {/* ── Background atmosphere ─────────────────────────────── */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-violet-800/7 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-[350px] w-[400px] rounded-full bg-violet-700/6 blur-[110px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* ── SECTION HEADER — centered, matching PDF ─────────── */}
                <div className="flex flex-col items-center text-center mb-10">
                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-[11px] font-medium tracking-widest uppercase">
                            <svg
                                width="10" height="10" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2.5"
                                strokeLinecap="round" strokeLinejoin="round"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Engineering Excellence
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.06}
                        className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight text-white mb-4"
                    >
                        Featured{" "}
                        <em className="not-italic text-violet-400">Projects</em>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.12}
                        className="text-[15px] text-zinc-400 leading-relaxed max-w-lg"
                    >
                        A curated selection of my work spanning Artificial Intelligence,
                        full-stack systems, and developer productivity tools. Each project
                        represents a unique challenge solved with precision.
                    </motion.p>
                </div>

                {/* ── FILTER TABS — pill style, matching PDF ───────────── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.18}
                    className="flex items-center justify-center gap-1.5 mb-12 overflow-x-auto pb-1 scrollbar-none"
                >
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 cursor-pointer ${activeFilter === f
                                    ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                                    : "text-zinc-400 border border-white/[0.08] hover:text-white hover:border-white/20"
                                }`}
                        >
                            {f === "All Projects" && (
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                            )}
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* ── PROJECT CARDS GRID — 3-col matching PDF ─────────── */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {visible.length > 0 ? (
                            visible.map((project, i) => (
                                <ProjectCard
                                    key={project.title}
                                    {...project}
                                    index={i}
                                />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                            >
                                <div className="w-12 h-12 rounded-xl border border-white/[0.07] bg-[#0d0d10] flex items-center justify-center mb-4 text-zinc-600">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                                <p className="text-sm text-zinc-500">No projects in this category yet.</p>
                                <button
                                    onClick={() => setActiveFilter("All Projects")}
                                    className="mt-3 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                                >
                                    View all projects
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* ── CTA BANNER — "Have a visionary project in mind?" ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.58, ease: "easeInOut", delay: 0.08 }}
                    className="mt-16 relative rounded-2xl border border-white/[0.07] bg-[#0d0d10] overflow-hidden"
                >
                    {/* Inner glow */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-violet-700/10 blur-[80px]" />
                    </div>

                    <div className="relative flex flex-col items-center text-center px-8 py-12 gap-4">
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-1">
                            <MessageSquare className="w-5 h-5" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Have a visionary project in mind?
                        </h3>
                        <p className="text-[14px] text-zinc-400 max-w-md leading-relaxed">
                            I&rsquo;m always open to discussing technical challenges,
                            open-source collaborations, or full-time opportunities.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200 shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                            >
                                Let&rsquo;s Talk
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}