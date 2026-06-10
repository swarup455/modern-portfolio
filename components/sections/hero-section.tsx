"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AvailabilityBadge } from "@/components/hero/availability-badge";
import { HeroProfileCard } from "@/components/hero/hero-profile-card";
import { TypeAnimation } from "react-type-animation";

/* ─── animation variants ─────────────────────────────────────────────────── */

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09, delayChildren: 0.1 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
    },
};

/* ─── social links ────────────────────────────────────────────────────────── */

const socials = [
    { label: "GitHub", href: "https://github.com/", Icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/", Icon: FaLinkedin },
    { label: "YouTube", href: "https://youtube.com/", Icon: FaYoutube },
] as const;

/* ─── component ───────────────────────────────────────────────────────────── */

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
            {/* Background: subtle radial purple glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
            >
                {/* Bottom-left glow */}
                <div className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
                {/* Top-right faint glow */}
                <div className="absolute -right-40 top-0 h-[400px] w-[500px] rounded-full bg-violet-800/6 blur-[100px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_460px]">

                    {/* ── LEFT ─────────────────────────────────────────── */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-start"
                    >
                        {/* Availability badge */}
                        <motion.div variants={fadeUp}>
                            <AvailabilityBadge />
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-white lg:text-6xl xl:text-7xl"
                        >
                            Software Engineer
                            <br />

                            Building{" "}
                            <span className="bg-gradient-to-br from-violet-400 to-violet-600 bg-clip-text text-transparent">
                                <TypeAnimation
                                    sequence={[
                                        "Scalable",
                                        2000,
                                        "Intelligent",
                                        2000,
                                        "Modern",
                                        2000,
                                        "Efficient",
                                        2000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>

                            <br />

                            Products & AI Solutions
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-lg text-base leading-7 text-zinc-400"
                        >
                            I bridge the gap between complex backend architectures
                            and cutting-edge artificial intelligence to create
                            high-performance digital experiences.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-8 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="/projects"
                                className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]"
                            >
                                View Projects
                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </Link>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-transparent px-6 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:text-white"
                            >
                                <Download size={14} />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Social row */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex items-center gap-5"
                        >
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="text-zinc-500 transition-colors duration-150 hover:text-white"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}

                            {/* Divider */}
                            <span className="h-4 w-px bg-zinc-800" aria-hidden />

                            <span className="text-sm text-zinc-500">
                                Open for Collaboration
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT — Profile card ──────────────────────────── */}
                    <div className="flex justify-center lg:justify-end">
                        <HeroProfileCard />
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    >
                        <ChevronDown size={14} className="text-zinc-600" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}