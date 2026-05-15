"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backHref = "/",
  backLabel = "Back to Home",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16 lg:pt-28 lg:pb-20">
      <motion.div
        className="absolute inset-0 mesh-gradient opacity-40"
        aria-hidden
      />
      <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />

      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="mb-3 inline-block rounded-full bg-indigo-500/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-cyan-300 uppercase">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{subtitle}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
