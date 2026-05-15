"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { programFilters, programs, type ProgramCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<ProgramCategory>("all");

  const filtered =
    activeFilter === "all"
      ? programs
      : programs.filter((p) => p.category === activeFilter);

  return (
    <section id="programs" className="section-padding relative bg-slate-50">
      <motion.div className="absolute inset-0 mesh-gradient opacity-50" aria-hidden />
      <motion.div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Academics"
          title="World-Class Programs & Courses"
          subtitle="Explore undergraduate, postgraduate, and doctoral pathways designed with industry leaders and updated every semester."
        />

        <ScrollReveal>
          <motion.div className="mb-10 flex flex-wrap justify-center gap-2">
            {programFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
                )}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </ScrollReveal>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((program, i) => {
              const Icon = program.icon;
              return (
                <motion.article
                  key={program.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-3xl border border-white bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <motion.div className="relative h-44 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <motion.div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.div className="p-5">
                    <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase">
                      {program.category}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">{program.title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" />
                      {program.duration}
                    </p>
                    <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                      {program.description}
                    </p>
                    <Link
                      href={`/programs/${program.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
