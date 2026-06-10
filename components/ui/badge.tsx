import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Variant definitions ────────────────────────────────────────────────────

const badgeVariants = cva(
    [
        "inline-flex items-center gap-1.5",
        "rounded-full border px-3 py-1",
        "text-xs font-medium leading-none tracking-wide",
        "select-none",
    ],
    {
        variants: {
            variant: {
                /**
                 * Purple — "Featured", "Professional", section eyebrow labels
                 * e.g. the "// EXPERIENCE" badge above page titles
                 */
                purple: [
                    "bg-[#7c3aed]/10 border-[#7c3aed]/30 text-[#a78bfa]",
                ],
                /**
                 * Green — "Available for new opportunities"
                 * Rendered with a pulsing dot prefix (add dot via `dot` prop)
                 */
                green: [
                    "bg-emerald-500/10 border-emerald-500/25 text-emerald-400",
                ],
                /**
                 * Muted — generic labels, timestamps, category chips on cert cards
                 */
                muted: [
                    "bg-white/5 border-white/10 text-[#a1a1aa]",
                ],
            },
        },
        defaultVariants: {
            variant: "purple",
        },
    }
);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
    /** Renders a pulsing dot before the label — used on the green "Available" badge */
    dot?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Badge({
    variant,
    dot,
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(badgeVariants({ variant }), className)}
            {...props}
        >
            {dot && (
                <span className="relative flex size-1.5 shrink-0">
                    {/* Ping ring — outer animated circle */}
                    <span
                        className={cn(
                            "absolute inline-flex size-full rounded-full opacity-75 animate-ping",
                            variant === "green" ? "bg-emerald-400" : "bg-[#a78bfa]"
                        )}
                    />
                    {/* Solid dot */}
                    <span
                        className={cn(
                            "relative inline-flex size-1.5 rounded-full",
                            variant === "green" ? "bg-emerald-400" : "bg-[#a78bfa]"
                        )}
                    />
                </span>
            )}
            {children}
        </span>
    );
}

export { badgeVariants };