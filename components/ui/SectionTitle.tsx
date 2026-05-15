"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 max-w-3xl lg:mb-16",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
            light
              ? "bg-white/10 text-cyan-300"
              : "bg-indigo-50 text-indigo-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title.split(" ").length > 2 ? (
          <>
            {title.split(" ").slice(0, Math.ceil(title.split(" ").length / 2)).join(" ")}{" "}
            <span className={light ? "text-cyan-300" : "gradient-text"}>
              {title.split(" ").slice(Math.ceil(title.split(" ").length / 2)).join(" ")}
            </span>
          </>
        ) : (
          <span className={light ? "" : "gradient-text"}>{title}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-slate-300" : "text-slate-600",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
