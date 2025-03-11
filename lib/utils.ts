import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add this function to strip out opacity-0 and replace fadein animations with safer ones
export function fixAnimationClasses(className: string): string {
  return className
    .replace(/opacity-0/g, 'opacity-100')
    .replace(/animate-fade-in-delay-\d+/g, 'animate-fade-in');
}

