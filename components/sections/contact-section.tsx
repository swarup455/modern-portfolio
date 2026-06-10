"use client";

import { motion } from "framer-motion";
import { ContactCard } from "@/components/contact/contact-card";
import { ContactForm } from "@/components/contact/contact-form";

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const IconLinkedIn = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const IconGithub = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.1-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const IconLocation = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const contactCards = [
    {
        label: "Email",
        value: "swarup82546@gmail.com",
        href: "mailto:swarup82546@gmail.com",
        icon: <IconMail />,
    },
    {
        label: "Phone",
        value: "+91 8436430197",
        href: "tel:+918436430197",
        icon: <IconPhone />,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/swarupdas",
        href: "https://linkedin.com/in/swarupdas",
        icon: <IconLinkedIn />,
    },
    {
        label: "GitHub",
        value: "github.com/swarupdas",
        href: "https://github.com/swarupdas",
        icon: <IconGithub />,
    },
    {
        label: "Location",
        value: "West Bengal, India",
        icon: <IconLocation />,
    },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

const fadeDown = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.44, ease: "easeOut" as const },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.52, ease: "easeOut" as const, delay },
    }),
};

const slideRight = {
    hidden: { opacity: 0, x: 32 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.1 },
    },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative w-full bg-black py-20 overflow-hidden"
        >
            {/* ── Background atmosphere ───────────────────────────────── */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                {/* Top-center violet bloom */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[420px] w-[700px] rounded-full bg-violet-800/8 blur-[130px]" />
                {/* Bottom-left */}
                <div className="absolute -bottom-16 -left-24 h-[350px] w-[420px] rounded-full bg-violet-700/6 blur-[110px]" />
                {/* Right edge */}
                <div className="absolute top-1/3 -right-20 h-[300px] w-[300px] rounded-full bg-violet-900/8 blur-[90px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

                {/* ── TWO-COLUMN LAYOUT ───────────────────────────────────
                    Left: availability badge + headline + description + contact cards
                    Right: form card
                    Matches PDF page 9 exactly.
                ─────────────────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-start">

                    {/* ── LEFT COLUMN ──────────────────────────────────── */}
                    <div className="flex flex-col gap-6">

                        {/* Availability badge — PDF shows this top-left */}
                        <motion.div
                            variants={fadeDown}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-[11px] font-medium tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Headline — "Let's Build Something Great Together."
                            PDF has "Something Great" in violet, rest in white */}
                        <div className="flex flex-col gap-1">
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.04}
                                className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.06] tracking-tight text-white"
                            >
                                Let&rsquo;s Build
                            </motion.h2>
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.1}
                                className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.06] tracking-tight"
                            >
                                <em className="not-italic text-violet-400">Something Great</em>
                            </motion.h2>
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0.16}
                                className="text-[42px] sm:text-5xl lg:text-[52px] font-bold leading-[1.06] tracking-tight text-white"
                            >
                                Together.
                            </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.22}
                            className="text-[15px] text-zinc-400 leading-relaxed max-w-[440px]"
                        >
                            Whether you have a specific project in mind, a job opportunity, or
                            just want to chat about AI and Software Engineering, my inbox is
                            always open.
                        </motion.p>

                        {/* ── Contact info cards — stacked pill rows ─────── */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0.28}
                            className="flex flex-col gap-2.5 w-full max-w-sm"
                        >
                            {contactCards.map((card, i) => (
                                <ContactCard
                                    key={card.label}
                                    label={card.label}
                                    value={card.value}
                                    href={card.href}
                                    icon={card.icon}
                                    index={i}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* ── RIGHT COLUMN — Form card ──────────────────────── */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative rounded-2xl border border-white/[0.07] bg-[#0d0d10] p-6 lg:p-7"
                    >
                        {/* Subtle inner glow top */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
                        />

                        <ContactForm />
                    </motion.div>
                </div>

                {/* ── BOTTOM DIVIDER — subtle hr before footer ─────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
                />
            </div>
        </section>
    );
}