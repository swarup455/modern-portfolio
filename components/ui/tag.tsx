import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Variant definitions ────────────────────────────────────────────────────

const tagVariants = cva(
    [
        "inline-flex items-center gap-1",
        "rounded-full border",
        "font-medium leading-none",
        "select-none transition-colors duration-150",
    ],
    {
        variants: {
            variant: {
                /**
                 * Default — tech stack pill (Python, React, Next.js, etc.)
                 * #27272a bg, #3f3f46 border, #a1a1aa text
                 */
                default: [
                    "bg-[#27272a] border-[#3f3f46] text-[#a1a1aa]",
                    "hover:border-[#52525b] hover:text-white",
                ],
                /**
                 * Core — highlights a "Core" skill on skill cards
                 * Subtle purple tint
                 */
                core: [
                    "bg-[#7c3aed]/10 border-[#7c3aed]/25 text-[#a78bfa]",
                ],
                /**
                 * Outline — minimal, used inside dark elevated surfaces
                 */
                outline: [
                    "bg-transparent border-[#2a2a2a] text-[#52525b]",
                    "hover:border-[#3f3f46] hover:text-[#a1a1aa]",
                ],
            },
            size: {
                sm: "px-2 py-0.5 text-[10px] rounded-md",
                md: "px-2.5 py-1 text-xs",
                lg: "px-3 py-1.5 text-sm",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TagProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> { }

// ─── Component ───────────────────────────────────────────────────────────────

export function Tag({
    variant,
    size,
    className,
    children,
    ...props
}: TagProps) {
    return (
        <span
            className={cn(tagVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </span>
    );
}

// ─── Tag List helper ─────────────────────────────────────────────────────────
// Renders a row of tags from a string array — used in project cards, timeline items

interface TagListProps {
    tags: string[];
    variant?: TagProps["variant"];
    size?: TagProps["size"];
    className?: string;
    /** Max tags to show before "+N more" */
    limit?: number;
}

export function TagList({
    tags,
    variant,
    size,
    className,
    limit,
}: TagListProps) {
    const visible = limit ? tags.slice(0, limit) : tags;
    const overflow = limit ? tags.length - limit : 0;

    return (
        <div className={cn("flex flex-wrap gap-1.5", className)}>
            {visible.map((tag) => (
                <Tag key={tag} variant={variant} size={size}>
                    {tag}
                </Tag>
            ))}
            {overflow > 0 && (
                <Tag variant="outline" size={size}>
                    +{overflow}
                </Tag>
            )}
        </div>
    );
}

export { tagVariants };