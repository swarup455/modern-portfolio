import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Core utility — use this everywhere instead of raw className strings
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Stagger delay helper for Framer Motion animations
export function getStaggerDelay(index: number, base = 0.1) {
  return index * base;
}

// Clamp a number between min and max
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

// Format date range for experience/education
export function formatDateRange(start: string, end?: string) {
  return end ? `${start} — ${end}` : `${start} — Present`;
}