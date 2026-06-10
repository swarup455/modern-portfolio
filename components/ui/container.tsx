import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    /**
     * "default" → max-w-[1200px] px-6 md:px-12 lg:px-16
     * "narrow"  → max-w-[800px]  (resume, centered content)
     * "wide"    → max-w-[1400px] (full-bleed sections)
     * "full"    → no max-width   (edge-to-edge)
     */
    size?: "default" | "narrow" | "wide" | "full";
    as?: React.ElementType;
}

const sizeMap = {
    default: "max-w-[1200px]",
    narrow: "max-w-[800px]",
    wide: "max-w-[1400px]",
    full: "max-w-none",
};

export function Container({
    children,
    className,
    size = "default",
    as: Tag = "div",
}: ContainerProps) {
    return (
        <Tag
            className={cn(
                "mx-auto w-full px-6 md:px-12 lg:px-16",
                sizeMap[size],
                className
            )}
        >
            {children}
        </Tag>
    );
}