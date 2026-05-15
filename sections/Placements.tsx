"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { companyLogos, placementStats, successStories } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Placements() {
  return (
    <section id="placements" className="section-padding bg-slate-50">
      <motion.div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Careers"
          title="Placements & Achievements"
          subtitle="Our graduates join leading organizations worldwide with competitive packages and impactful roles."
        />

        <ScrollReveal>
          <motion.div className="mb-12 flex flex-wrap items-center justify-center gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            {companyLogos.map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-tight text-slate-400 transition-colors hover:text-indigo-600"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </ScrollReveal>

        <motion.div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {placementStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 text-center text-white shadow-lg shadow-indigo-500/25"
              >
                <p className="text-3xl font-bold lg:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-indigo-100">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        <motion.div className="grid gap-6 md:grid-cols-3">
          {successStories.map((story, i) => (
            <ScrollReveal key={story.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="relative h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <Quote className="mb-4 h-8 w-8 text-indigo-200" />
                <p className="leading-relaxed text-slate-600">&ldquo;{story.quote}&rdquo;</p>
                <motion.div className="mt-6 border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-900">{story.name}</p>
                  <p className="text-sm text-indigo-600">{story.role}</p>
                  <p className="mt-1 text-xs text-slate-500">{story.program}</p>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
