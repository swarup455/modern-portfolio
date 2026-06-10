import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Variant definitions ────────────────────────────────────────────────────

const cardVariants = cva(
    // Base — shared across all card types
    [
        "relative rounded-2xl border",
        "transition-all duration-300",
    ],
    {
        variants: {
            variant: {
                /**
                 * Default — standard section card (#161616 bg)
                 * Used for: skill cards, cert cards, about cards
                 */
                default: [
                    "bg-[#161616] border-[#2a2a2a]",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
                ],
                /**
                 * Elevated — slightly lighter, used for raised/floating cards
                 * Used for: hero profile card, timeline cards
                 */
                elevated: [
                    "bg-[#1a1a1a] border-[#2a2a2a]",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
                ],
                /**
                 * Ghost — transparent with subtle border
                 * Used for: CTA banners, quote blocks
                 */
                ghost: [
                    "bg-transparent border-[#2a2a2a]",
                ],
                /**
                 * Glow — dark card with purple glow for featured/highlighted items
                 * Used for: featured project cards, highlighted timeline entries
                 */
                glow: [
                    "bg-[#161616] border-[#7c3aed]/30",
                    "shadow-[0_0_24px_rgba(124,58,237,0.15)]",
                ],
            },
            /**
             * hover — adds interactive hover state (lift + glow)
             * Apply when the card is clickable or has hover behaviour
             */
            hover: {
                true: [
                    "cursor-pointer",
                    "hover:-translate-y-1",
                    "hover:border-[#3a3a3a]",
                    "hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)]",
                ],
                false: [],
            },
            padding: {
                none: "p-0",
                sm: "p-4",
                md: "p-6",
                lg: "p-8",
                xl: "p-10",
            },
        },
        defaultVariants: {
            variant: "default",
            hover: false,
            padding: "md",
        },
    }
);

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    as?: React.ElementType;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CardHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("mb-4 flex flex-col gap-1", className)} {...props}>
            {children}
        </div>
    );
}

function CardTitle({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                "text-lg font-semibold leading-snug text-white",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

function CardDescription({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-sm leading-relaxed text-[#a1a1aa]", className)}
            {...props}
        >
            {children}
        </p>
    );
}

function CardFooter({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("mt-4 flex items-center gap-3", className)}
            {...props}
        >
            {children}
        </div>
    );
}

// ─── Root component ──────────────────────────────────────────────────────────

function Card({
    variant,
    hover,
    padding,
    className,
    as: Tag = "div",
    children,
    ...props
}: CardProps) {
    return (
        <Tag
            className={cn(cardVariants({ variant, hover, padding }), className)}
            {...props}
        >
            {children}
        </Tag>
    );
}

// Attach sub-components
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Footer = CardFooter;

export { Card, cardVariants };