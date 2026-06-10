import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail } from "lucide-react";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/",
        icon: FaLinkedin,
    },
    {
        name: "YouTube",
        href: "https://youtube.com/",
        icon: FaYoutube,
    },
    {
        name: "Email",
        href: "mailto:your@email.com",
        icon: Mail,
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10">
                                <span className="font-bold text-violet-400">
                                    S
                                </span>
                            </div>

                            <div>
                                <h3 className="font-semibold text-white">
                                    Swarup Das
                                </h3>

                                <p className="text-sm text-zinc-500">
                                    Software Engineer
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
                            Building scalable products and AI-powered
                            solutions with modern technologies.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Navigation
                        </h4>

                        <div className="flex flex-col gap-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-zinc-400 transition-colors hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                            Connect
                        </h4>

                        <div className="flex gap-4">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition-all hover:border-violet-500/40 hover:text-violet-400"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>

                        <p className="mt-6 text-sm text-zinc-500">
                            Open to Software Engineering and AI
                            opportunities.
                        </p>
                    </div>
                </div>

                <div className="mt-12 border-t border-zinc-900 pt-8 text-center">
                    <p className="text-sm text-zinc-500">
                        © {new Date().getFullYear()} Swarup Das.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}