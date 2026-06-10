"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EducationCard } from "@/components/about/education-card";
import { SpecializationCard } from "@/components/about/specialization-card";
import { QuickFactCard } from "@/components/about/quick-facts";
import Image from "next/image";
// ─── Data ────────────────────────────────────────────────────────────────────

const educationEntries = [
    {
        years: "2022 — 2026",
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Jalpaiguri Government Engineering College",
        detail: "CGPA: 7.64 / 10 · Focused on Full-Stack Development, AI/ML, and Distributed Systems.",
        tags: ["Full-Stack", "AI/ML", "DSA", "System Design"],
    },
    {
        years: "2020 — 2021",
        degree: "Higher Secondary Education — Science",
        institution: "Belrui N.G Institution",
        tags: ["Physics", "Mathematics", "Chemistry"],
    },
    {
        years: "2018 — 2019",
        degree: "Secondary Education",
        institution: "Belrui N.G Institution",
        tags: ["Science", "Mathematics"],
    },
];

const specializations = [
    {
        title: "Full-Stack Dev",
        description:
            "Building modern web applications using React, Next.js, Node.js, and scalable backend services.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        title: "Backend Engineering",
        description:
            "Designing APIs, databases, authentication systems, and robust server architectures.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
            </svg>
        ),
    },
    {
        title: "Artificial Intelligence",
        description:
            "Developing AI-powered applications using LLMs, voice interfaces, and intelligent automation.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1V6a4 4 0 0 1 4-4z" />
                <circle cx="9" cy="10" r="1" fill="currentColor" />
                <circle cx="15" cy="10" r="1" fill="currentColor" />
                <path d="M9 15s1 1 3 1 3-1 3-1" />
            </svg>
        ),
    },
    {
        title: "Problem Solving",
        description:
            "Applying strong DSA and CS fundamentals to solve complex engineering challenges.",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m1.636-6.364-.707-.707M12 21v-1" />
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
        ),
    },
];

const mindsetCards = [
    {
        title: "Build with Purpose",
        description:
            "I don't just write code — I build software that delivers real, measurable value to users and businesses. Every line I write has intent behind it.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
            </svg>
        ),
    },
    {
        title: "Learn Continuously",
        description:
            "The tech landscape evolves fast. I dedicate consistent time to exploring new technologies, frameworks, and the latest AI advancements to stay sharp.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
        ),
    },
    {
        title: "Think at Scale",
        description:
            "I design systems with reliability, maintainability, and performance in mind from day one — because good architecture is cheaper than refactoring.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
    },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeInOut", delay },
    }),
};

const fadeDown: Variants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeInOut" },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative w-full bg-black py-20 overflow-hidden"
        >
            {/* Subtle radial glow top-left */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
            >
                {/* Bottom-left glow */}
                <div className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
                {/* Top-right faint glow */}
                <div className="absolute -right-40 top-0 h-[400px] w-[500px] rounded-full bg-violet-800/6 blur-[100px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
                {/* ── HERO BIO BLOCK ─────────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

                    {/* LEFT — Text */}
                    <div className="flex flex-col gap-6">

                        {/* Label chip */}
                        <motion.div
                            variants={fadeDown}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/8 text-violet-400 text-[11px] font-medium tracking-widest uppercase">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                                About Me
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <div className="flex flex-col gap-1">
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.05}
                                className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight text-white"
                            >
                                I craft{" "}
                                <em className="not-italic text-violet-400">scalable</em>{" "}
                                systems that
                            </motion.h2>
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.12}
                                className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight text-white"
                            >
                                create real-world impact.
                            </motion.h2>
                        </div>

                        {/* Paragraphs */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.2}
                            className="text-[15px] text-zinc-400 leading-relaxed max-w-[520px]"
                        >
                            I&apos;m a{" "}
                            <span className="text-white font-medium">Software Engineer</span>{" "}
                            and{" "}
                            <span className="text-white font-medium">AI Enthusiast</span>{" "}
                            passionate about building scalable digital products that solve
                            real-world problems. I enjoy transforming ideas into reliable,
                            high-performance software experiences through full-stack
                            development, backend engineering, and AI-powered applications.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.28}
                            className="text-[15px] text-zinc-400 leading-relaxed max-w-[520px]"
                        >
                            My work focuses on creating maintainable systems, designing robust
                            APIs, developing real-time applications, and integrating modern AI
                            technologies to deliver impactful solutions. I believe great
                            software is built through strong problem-solving skills, clean
                            architecture, and continuous learning.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.35}
                            className="flex flex-wrap gap-3 pt-1"
                        >
                            <Button
                                asChild
                                className="rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm px-5 py-2 h-auto font-medium transition-colors duration-200"
                            >
                                <a href="#projects">
                                    View My Journey
                                    <svg
                                        className="ml-1.5 w-3.5 h-3.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-white/10 bg-transparent hover:bg-white/5 text-white text-sm px-5 py-2 h-auto font-medium transition-colors duration-200"
                            >
                                <a href="#projects">Explore Projects</a>
                            </Button>
                        </motion.div>
                    </div>

                    {/* RIGHT — Profile Image + Education Card stacked */}
                    <div className="flex flex-col gap-5 w-full">

                        {/* Profile image */}
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-900 aspect-[4/3]"
                        >
                            {/* Placeholder — replace src with your actual photo */}
                            <Image
                                src="/images/profile.jpeg"
                                alt="Swarup Das"
                                fill
                                className="object-cover object-top"
                                priority
                            />

                            {/* Availability badge */}
                            <div className="absolute bottom-3 left-3 right-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-sm text-[11px] text-zinc-300 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Open to Software Engineering Opportunities
                                </span>
                            </div>
                        </motion.div>

                        {/* Education Card */}
                        <EducationCard entries={educationEntries} />
                    </div>
                </div>

                {/* ── CORE SPECIALIZATIONS ───────────────────────────────────── */}
                <div className="mt-28">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mb-10"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            Core Specializations
                        </h3>
                        <p className="text-sm text-zinc-500 max-w-md">
                            The pillars of my technical expertise and creative approach to
                            problem-solving.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {specializations.map((item, i) => (
                            <SpecializationCard
                                key={item.title}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                index={i}
                            />
                        ))}
                    </div>
                </div>

                {/* ── PROBLEM-SOLVING MINDSET ────────────────────────────────── */}
                <div className="mt-28 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mb-10"
                    >
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            The Problem-Solving Mindset
                        </h3>
                        <p className="text-sm text-zinc-500 max-w-md mx-auto">
                            My approach is defined by a commitment to quality, a hunger for
                            learning, and a vision for real-world impact.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {mindsetCards.map((card, i) => (
                            <QuickFactCard
                                key={card.title}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                                index={i}
                            />
                        ))}
                    </div>
                </div>

                {/* ── QUICK FACTS STRIP ──────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeInOut", delay: 0.1 }}
                    className="mt-16 rounded-2xl border border-white/[0.06] bg-[#0d0d10] px-6 py-5"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 divide-x divide-white/[0.04]">
                        {[
                            { label: "Internship", value: "Graphura India" },
                            { label: "Research", value: "ISI Kolkata" },
                            { label: "LeetCode", value: "450+ Solved" },
                            { label: "LC Rating", value: "1700+" },
                            { label: "WBJEE Rank", value: "AIR 1905" },
                            { label: "Passion", value: "AI & Full-Stack" },
                        ].map((fact, i) => (
                            <div key={i} className="flex flex-col items-center text-center px-2 first:pl-0 last:pr-0">
                                <span className="text-[11px] text-zinc-600 tracking-wide mb-1">{fact.label}</span>
                                <span className="text-xs font-semibold text-zinc-300">{fact.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── LOOKING FORWARD ────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.05 }}
                    className="mt-28 text-center"
                >
                    <h3 className="text-2xl font-semibold text-white mb-8">
                        Looking Forward
                    </h3>

                    <blockquote className="max-w-2xl mx-auto text-[15px] text-zinc-400 italic leading-relaxed border-l-0 mb-12">
                        &ldquo;I&apos;m actively seeking opportunities where I can contribute
                        to innovative products, collaborate with talented teams, and continue
                        growing as a Software Engineer while exploring the intersection of AI
                        and scalable software systems.&rdquo;
                    </blockquote>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm text-zinc-500">
                            Interested in collaborating or hiring?
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Button
                                asChild
                                className="rounded-full border border-white text-black bg-white hover:bg-zinc-100 text-sm px-6 py-2 h-auto font-medium transition-colors duration-200"
                            >
                                <a href="#contact">Get in Touch</a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-white/15 bg-transparent hover:bg-white/5 text-white text-sm px-6 py-2 h-auto font-medium transition-colors duration-200"
                            >
                                <a href="/resume" target="_blank" rel="noreferrer">
                                    Resume
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}