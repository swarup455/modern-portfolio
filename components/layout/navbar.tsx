"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Activity } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 z-50 w-full border-b border-violet-500/10 bg-black/80 backdrop-blur-xl"
        >
            <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Center Logo */}
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Activity size={20} className="text-violet-500" />
                    <span className="text-lg font-semibold text-violet-400">
                        Swarup Das Portfolio
                    </span>
                </Link>
                
                {/* Left Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <Link key={item.label} href={item.href}
                            className="text-sm font-medium text-zinc-400 transition hover:text-white">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center justify-end gap-4">
                    <a href="https://github.com/" target="_blank" rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400">
                        <FaGithub size={16} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-violet-500/40 hover:text-violet-400">
                        <FaLinkedin size={16} />
                    </a>
                    <a href="/resume.pdf" target="_blank"
                        className="rounded-full bg-zinc-50 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-violet-500/20 hover:border-violet-400">
                        Resume
                    </a>
                </div>

            </div>
        </motion.header>
    );
}