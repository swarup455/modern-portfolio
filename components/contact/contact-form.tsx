"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialData: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

function InputField({
    label,
    icon,
    id,
    type = "text",
    placeholder,
    value,
    onChange,
    required,
}: {
    label: string;
    icon: React.ReactNode;
    id: keyof FormData;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (id: keyof FormData, val: string) => void;
    required?: boolean;
}) {
    const [focused, setFocused] = useState(false);

    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-[11px] font-medium text-zinc-400 tracking-wide uppercase"
            >
                {label}
            </label>
            <div
                className={`relative flex items-center rounded-xl border transition-all duration-200 bg-white/[0.03] ${focused
                        ? "border-violet-500/50 shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                        : "border-white/[0.08] hover:border-white/15"
                    }`}
            >
                <span className="absolute left-3 text-zinc-600 pointer-events-none">
                    {icon}
                </span>
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    autoComplete={type === "email" ? "email" : "off"}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={(e) => onChange(id, e.target.value)}
                    className="w-full bg-transparent pl-9 pr-4 py-2.5 text-[13px] text-white placeholder:text-zinc-600 outline-none rounded-xl"
                />
            </div>
        </div>
    );
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>(initialData);
    const [formState, setFormState] = useState<FormState>("idle");
    const [focused, setFocused] = useState(false);

    const handleChange = (id: keyof FormData, val: string) => {
        setFormData((prev) => ({ ...prev, [id]: val }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setFormState("loading");

        // Simulate async send — replace with your API call (e.g. Resend, EmailJS, etc.)
        await new Promise((r) => setTimeout(r, 1600));

        // Swap with: const res = await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
        setFormState("success");
    };

    const handleReset = () => {
        setFormData(initialData);
        setFormState("idle");
    };

    // ── Success state ─────────────────────────────────────────────────────────
    if (formState === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center gap-4 py-12 px-6"
            >
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">Message sent!</h4>
                    <p className="text-[13px] text-zinc-500 max-w-xs leading-relaxed">
                        Thanks for reaching out, Swarup will get back to you within 24–48 hours.
                    </p>
                </div>
                <button
                    onClick={handleReset}
                    className="mt-1 text-[12px] text-violet-400 hover:text-violet-300 transition-colors duration-200"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Name + Email — side by side, matching PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                    label="Name"
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    icon={
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                        </svg>
                    }
                />
                <InputField
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    icon={
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    }
                />
            </div>

            {/* Subject — full width */}
            <InputField
                label="Subject"
                id="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                }
            />

            {/* Message — textarea */}
            <div className="flex flex-col gap-1.5">
                <label
                    htmlFor="message"
                    className="text-[11px] font-medium text-zinc-400 tracking-wide uppercase"
                >
                    Message
                </label>
                <div
                    className={`relative rounded-xl border transition-all duration-200 bg-white/[0.03] ${focused
                            ? "border-violet-500/50 shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
                            : "border-white/[0.08] hover:border-white/15"
                        }`}
                >
                    <svg
                        className="absolute left-3 top-3 text-zinc-600 pointer-events-none"
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="1.8"
                        strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        required
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="w-full bg-transparent pl-9 pr-4 py-2.5 text-[13px] text-white placeholder:text-zinc-600 outline-none rounded-xl resize-none"
                    />
                </div>
            </div>

            {/* Submit button — full width violet, matching PDF */}
            <button
                onClick={handleSubmit}
                disabled={formState === "loading" || !formData.name || !formData.email || !formData.message}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[13px] font-semibold py-3 transition-all duration-200 shadow-[0_0_28px_rgba(124,58,237,0.28)] hover:shadow-[0_0_36px_rgba(124,58,237,0.42)] mt-1"
            >
                {formState === "loading" ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-3.5 h-3.5" />
                    </>
                )}
            </button>

            {/* Privacy note — matching PDF */}
            <p className="text-center text-[11px] text-zinc-600 leading-relaxed">
                By clicking send, you agree to my professional privacy standards.{" "}
                I&rsquo;ll get back to you within 24–48 hours.
            </p>
        </div>
    );
}