"use client";

import { useId } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function HireMeBadge({ className }: { className?: string }) {
  const pathId = `badge-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <a
      href="#contact"
      aria-label="Hire me"
      className={cn(
        "group relative grid size-28 place-items-center rounded-full bg-surface shadow-xl shadow-black/10 dark:ring-1 dark:ring-white/10 transition-transform duration-300 hover:scale-105",
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 size-full animate-spin-slow"
      >
        <defs>
          <path
            id={pathId}
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-ink text-[9px] font-semibold uppercase">
          <textPath href={`#${pathId}`} textLength="230" lengthAdjust="spacing">
            Hire Me &#8226; Hire Me &#8226; Hire Me &#8226;
          </textPath>
        </text>
      </svg>
      <span className="grid size-11 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight className="size-5" aria-hidden="true" />
      </span>
    </a>
  );
}
