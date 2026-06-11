"use client";

import { motion } from "framer-motion";
import { VerticalTimeline } from "@/components/experience/vertical-timeline";

// ─── Real Resume Data ─────────────────────────────────────────────────────────

const experiences = [
    {
        role: "Backend Developer Intern",
        badge: { label: "Featured", variant: "featured" as const },
        org: "Graphura India Private Limited",
        period: "2024 · Internship",
        location: "India (Remote)",
        bullets: [
            "Built and maintained production-ready REST APIs using Node.js and Express, handling core business logic and data operations.",
            "Optimized MongoDB schemas and queries to improve database performance and reduce latency across key endpoints.",
            "Implemented secure authentication and authorization systems including JWT-based session management.",
            "Collaborated closely with frontend teams to integrate APIs into production applications, ensuring consistent data contracts.",
        ],
        tags: ["Node.js", "Express", "MongoDB", "REST API", "JWT", "JavaScript"],
    },
    {
        role: "Summer Research Intern — Quantum Computing",
        badge: { label: "Research", variant: "professional" as const },
        org: "Indian Statistical Institute (ISI), Kolkata",
        period: "Summer Program",
        location: "Kolkata, India",
        bullets: [
            "Completed an intensive summer research program focused on the fundamentals of Quantum Computing and quantum algorithms.",
            "Explored quantum circuit design, superposition, and entanglement through hands-on problem-solving and guided research.",
            "Studied the intersection of quantum theory and classical computer science with focus on algorithmic complexity.",
        ],
        tags: ["Quantum Computing", "Research", "Algorithms", "Mathematics"],
    },
    {
        role: "Personal Projects",
        badge: { label: "Projects", variant: "professional" as const },
        org: "Independent Development",
        period: "2023 — Present",
        location: "Remote",
        bullets: [
            "Built INTERVO, an AI-powered mock interview platform using Next.js, TypeScript, Vapi AI, and Groq LLM for real-time voice-based interview simulations.",
            "Developed STUDYBUDDY, a real-time collaborative workspace featuring shared channels, live chat, and multi-user document editing with Socket.IO and Yjs.",
            "Created NEWSDESK, an AI-powered news aggregation platform with article categorization, full-text search, and AI-generated summaries.",
            "Designed and deployed multiple full-stack applications, gaining hands-on experience with React, Next.js, Node.js, Express.js, MongoDB, Firebase, and REST APIs.",
        ],
        tags: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative w-full bg-black py-24 overflow-hidden"
        >
            {/* Subtle background glows — mirrors About section */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-violet-800/4 blur-[100px]"
            />

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* ── Section Header ─────────────────────────────────────────── */}
                <div className="text-center mb-20">

                    {/* Label chip */}
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="flex justify-center mb-5"
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-[11px] font-medium tracking-widest uppercase">
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            Professional Journey
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, ease: "easeInOut", delay: 0.05 }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
                    >
                        Experience &{" "}
                        <span className="text-violet-400">Impact</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.12 }}
                        className="text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed"
                    >
                        A chronological look at my professional evolution — from academic
                        research to building production-ready applications in the tech industry.
                    </motion.p>
                </div>

                {/* ── Timeline ───────────────────────────────────────────────── */}
                <VerticalTimeline entries={experiences} />

                {/* ── Bottom CTA ─────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeInOut", delay: 0.1 }}
                    className="mt-24 text-center"
                >
                    <p className="text-sm text-zinc-500 mb-6">
                        Looking for my full background?
                    </p>
                    <p className="text-[13px] text-zinc-600 max-w-sm mx-auto mb-8">
                        Download my comprehensive resume for a detailed view of my projects,
                        experience, and technical proficiency.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a
                            href="/finalresume_swarup.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            View Full Resume
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 text-white text-sm px-6 py-2.5 font-medium transition-colors duration-200"
                        >
                            See Project Portfolio
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}