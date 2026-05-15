"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyChooseUs } from "@/lib/data";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 mesh-gradient opacity-30" aria-hidden />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
        aria-hidden
      />

      <motion.div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Why Us"
          title="Why Students Choose Us"
          subtitle="From day one to graduation and beyond — we invest in outcomes that matter."
          light
        />

        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <motion.div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/40 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
