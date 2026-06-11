"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

export type ProjectCategory = "AI & ML" | "Web Apps" | "Core Tools" | "Blockchain" | "Backend API";

export interface ProjectCardProps {
    title: string;
    description: string;
    category: ProjectCategory;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    caseStudyUrl?: string;
    /** Path to screenshot — use /images/projects/... or a placeholder */
    imageSrc?: string;
    featured?: boolean;
    index: number;
}

const categoryColors: Record<ProjectCategory, string> = {
    "AI & ML": "bg-violet-500/15 text-violet-300 border-violet-500/25",
    "Web Apps": "bg-sky-500/15 text-sky-300 border-sky-500/25",
    "Core Tools": "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    "Backend API": "bg-amber-500/15 text-amber-300 border-amber-500/25",
    "Blockchain": "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/25",
};

const categoryDotColors: Record<ProjectCategory, string> = {
    "AI & ML": "bg-violet-400",
    "Web Apps": "bg-sky-400",
    "Core Tools": "bg-emerald-400",
    "Backend API": "bg-amber-400",
    "Blockchain": "bg-fuchsia-400",
};

/** Deterministic placeholder gradient per index so cards look distinct */
const placeholderGradients = [
    "from-violet-950 via-[#0d0418] to-black",
    "from-sky-950 via-[#020d18] to-black",
    "from-indigo-950 via-[#06040f] to-black",
];

const placeholderPatterns = [
    // AI brain mesh SVG
    `<svg width="400" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" opacity="0.18">
      <circle cx="200" cy="110" r="60" fill="none" stroke="#a78bfa" stroke-width="1"/>
      <circle cx="200" cy="110" r="90" fill="none" stroke="#7c3aed" stroke-width="0.5"/>
      <circle cx="200" cy="110" r="30" fill="none" stroke="#c4b5fd" stroke-width="1.5"/>
      <line x1="140" y1="110" x2="260" y2="110" stroke="#a78bfa" stroke-width="0.7"/>
      <line x1="200" y1="50"  x2="200" y2="170" stroke="#a78bfa" stroke-width="0.7"/>
      <line x1="157" y1="67"  x2="243" y2="153" stroke="#7c3aed" stroke-width="0.5"/>
      <line x1="243" y1="67"  x2="157" y2="153" stroke="#7c3aed" stroke-width="0.5"/>
      <circle cx="200" cy="110" r="5" fill="#c4b5fd"/>
      <circle cx="140" cy="110" r="3" fill="#7c3aed"/>
      <circle cx="260" cy="110" r="3" fill="#7c3aed"/>
      <circle cx="200" cy="50"  r="3" fill="#7c3aed"/>
      <circle cx="200" cy="170" r="3" fill="#7c3aed"/>
      <circle cx="157" cy="67"  r="3" fill="#7c3aed"/>
      <circle cx="243" cy="153" r="3" fill="#7c3aed"/>
    </svg>`,
    // Collaboration nodes
    `<svg width="400" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" opacity="0.18">
      <line x1="80"  y1="60"  x2="200" y2="110" stroke="#38bdf8" stroke-width="0.7"/>
      <line x1="320" y1="60"  x2="200" y2="110" stroke="#38bdf8" stroke-width="0.7"/>
      <line x1="80"  y1="160" x2="200" y2="110" stroke="#38bdf8" stroke-width="0.7"/>
      <line x1="320" y1="160" x2="200" y2="110" stroke="#38bdf8" stroke-width="0.7"/>
      <line x1="80"  y1="60"  x2="80"  y2="160" stroke="#0ea5e9" stroke-width="0.5"/>
      <line x1="320" y1="60"  x2="320" y2="160" stroke="#0ea5e9" stroke-width="0.5"/>
      <line x1="80"  y1="60"  x2="320" y2="60"  stroke="#0ea5e9" stroke-width="0.5"/>
      <line x1="80"  y1="160" x2="320" y2="160" stroke="#0ea5e9" stroke-width="0.5"/>
      <circle cx="200" cy="110" r="8"  fill="#38bdf8" opacity="0.6"/>
      <circle cx="80"  cy="60"  r="5"  fill="#0ea5e9" opacity="0.5"/>
      <circle cx="320" cy="60"  r="5"  fill="#0ea5e9" opacity="0.5"/>
      <circle cx="80"  cy="160" r="5"  fill="#0ea5e9" opacity="0.5"/>
      <circle cx="320" cy="160" r="5"  fill="#0ea5e9" opacity="0.5"/>
    </svg>`,
    // News grid
    `<svg width="400" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" opacity="0.15">
      <rect x="40"  y="40"  width="140" height="85"  rx="6" fill="none" stroke="#818cf8" stroke-width="1"/>
      <rect x="220" y="40"  width="140" height="38"  rx="6" fill="none" stroke="#6366f1" stroke-width="1"/>
      <rect x="220" y="88"  width="140" height="37"  rx="6" fill="none" stroke="#6366f1" stroke-width="1"/>
      <rect x="40"  y="140" width="100" height="38"  rx="6" fill="none" stroke="#4f46e5" stroke-width="1"/>
      <rect x="155" y="140" width="100" height="38"  rx="6" fill="none" stroke="#4f46e5" stroke-width="1"/>
      <rect x="270" y="140" width="90"  height="38"  rx="6" fill="none" stroke="#4f46e5" stroke-width="1"/>
      <rect x="50"  y="50"  width="70"  height="6"   rx="2" fill="#818cf8" opacity="0.4"/>
      <rect x="50"  y="62"  width="110" height="4"   rx="2" fill="#6366f1" opacity="0.3"/>
      <rect x="50"  y="72"  width="90"  height="4"   rx="2" fill="#6366f1" opacity="0.3"/>
    </svg>`,
];

export function ProjectCard({
    title,
    description,
    category,
    tags,
    githubUrl,
    liveUrl,
    caseStudyUrl = "#",
    imageSrc,
    index,
}: ProjectCardProps) {
    const gradClass = placeholderGradients[index % placeholderGradients.length];
    const svgPattern = placeholderPatterns[index % placeholderPatterns.length];

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.52,
                ease: "easeInOut",
                delay: index * 0.08,
            }}
            whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
            className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0d0d10] overflow-hidden"
        >
            {/* Hover glow overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ring-1 ring-violet-500/20" />

            {/* ── IMAGE / SCREENSHOT ─────────────────────────────────── */}
            <div className={`relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br ${gradClass} flex items-center justify-center`}>
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={`${title} screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                ) : (
                    // Inline SVG placeholder — unique per project
                    <div
                        className="w-full h-full flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: svgPattern }}
                    />
                )}

                {/* Category badge — overlaid top-left, matching PDF */}
                <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold backdrop-blur-sm ${categoryColors[category]}`}
                >
                    <span className={`w-1.5 h-1.5 rounded-full ${categoryDotColors[category]}`} />
                    {category}
                </span>
            </div>

            {/* ── CONTENT ────────────────────────────────────────────── */}
            <div className="flex flex-col gap-3 p-5 flex-1">
                <div>
                    <h3 className="text-[15px] font-semibold text-white leading-snug mb-1.5">
                        {title}
                    </h3>
                    <p className="text-[13px] text-zinc-500 leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 bg-white/[0.04] border border-white/[0.07]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* ── FOOTER ACTIONS — matches PDF layout exactly ─── */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/[0.05]">
                    {/* Left: icon buttons */}
                    <div className="flex items-center gap-2">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View source on GitHub"
                            className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
                        >
                            <Github className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Open live demo"
                            className="flex items-center justify-center w-7 h-7 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-200"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Right: Case Study link — violet, matching PDF */}
                    <a
                        href={caseStudyUrl}
                        className="inline-flex items-center gap-1 text-[12px] text-violet-400 hover:text-violet-300 font-medium transition-colors duration-200"
                    >
                        Case Study
                        <ArrowRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}