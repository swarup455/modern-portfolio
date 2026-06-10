"use client";

import { motion } from "framer-motion";
import { TimelineItem, type TimelineEntry } from "./timeline-item";

interface VerticalTimelineProps {
    entries: Omit<TimelineEntry, "side" | "index">[];
}

export function VerticalTimeline({ entries }: VerticalTimelineProps) {
    return (
        <div className="relative">
            {/* ── Center line (desktop) / Left line (mobile) ── */}
            <motion.div
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ originY: 0 }}
                className="
          absolute
  left-[5px] top-0 bottom-0 w-px
  lg:left-1/2 lg:-translate-x-[0.5px]
  bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent"
            />

            {/* ── Items ── */}
            <div className="flex flex-col gap-12 lg:gap-16">
                {entries.map((entry, i) => (
                    <TimelineItem
                        key={i}
                        {...entry}
                        side={i % 2 === 0 ? "left" : "right"}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}