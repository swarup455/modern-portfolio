"use client";

import { motion } from "framer-motion";

export type BadgeVariant = "featured" | "professional";

export interface TimelineEntry {
    role: string;
    badge?: { label: string; variant: BadgeVariant };
    org: string;
    period: string;
    location: string;
    bullets: string[];
    tags: string[];
    side: "left" | "right";
    index: number;
}

export function TimelineItem({
    role,
    badge,
    org,
    period,
    location,
    bullets,
    tags,
    side,
    index,
}: TimelineEntry) {
    const isLeft = side === "left";

    return (
        /**
         * Desktop layout (3 columns):
         *   isLeft  → [card][dot][spacer]
         *   isRight → [spacer][dot][card]
         *
         * Mobile layout (single column, dot on the left via absolute):
         *   dot is absolutely positioned at left-0
         *   card has pl-8 to make room
         */
        <div className="relative flex w-full items-start">

            {/* ── Mobile dot (absolute, left side) ── */}
            <div className="absolute left-0 top-6 lg:hidden z-10">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: "easeInOut", delay: index * 0.08 + 0.15 }}
                    className="w-[13px] h-[13px] rounded-full border-2 border-violet-400 bg-violet-500/25"
                />
            </div>

            {/* ── Desktop 3-column layout ── */}
            <div className={`hidden lg:flex w-full items-start ${isLeft ? "flex-row" : "flex-row-reverse"}`}>

                {/* Card — exactly half minus dot width */}
                <motion.div
                    initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, ease: "easeInOut", delay: index * 0.08 }}
                    className="w-[calc(50%-32px)] rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-6 flex flex-col gap-4"
                >
                    <CardContent role={role} badge={badge} org={org} period={period} location={location} bullets={bullets} tags={tags} />
                </motion.div>

                {/* Center dot column — fixed 64px, dot sits on the line */}
                <div className="w-16 shrink-0 flex flex-col items-center pt-6">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, ease: "easeInOut", delay: index * 0.08 + 0.15 }}
                        className="w-[14px] h-[14px] rounded-full border-2 border-violet-400 bg-violet-500/25 z-10"
                    />
                </div>

                {/* Spacer — fills the other half */}
                <div className="w-[calc(50%-32px)]" />
            </div>

            {/* ── Mobile card (shown below mobile dot) ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.08 }}
                className="lg:hidden w-full pl-8 rounded-2xl border border-white/[0.06] bg-[#0d0d10] p-6 flex flex-col gap-4"
            >
                <CardContent role={role} badge={badge} org={org} period={period} location={location} bullets={bullets} tags={tags} />
            </motion.div>
        </div>
    );
}

// ─── Shared card content (used in both mobile and desktop cards) ──────────────

function CardContent({
    role, badge, org, period, location, bullets, tags,
}: Omit<TimelineEntry, "side" | "index">) {
    return (
        <>
            {/* Role + badge */}
            <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className="text-[15px] font-bold text-white leading-snug">{role}</h3>
                {badge && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide shrink-0 ${badge.variant === "featured"
                            ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                            : "bg-zinc-800 text-zinc-400 border border-white/[0.06]"
                        }`}>
                        {badge.label}
                    </span>
                )}
            </div>

            {/* Org */}
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-md bg-zinc-800 shrink-0">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                </div>
                <span className="text-xs font-medium text-zinc-300">{org}</span>
            </div>

            {/* Period + location */}
            <div className="flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    {location}
                </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.04]" />

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5">
                {bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 mt-0.5 shrink-0">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                        <span className="text-[13px] text-zinc-400 leading-relaxed">{b}</span>
                    </li>
                ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-white/[0.04]">
                        {tag}
                    </span>
                ))}
            </div>
        </>
    );
}