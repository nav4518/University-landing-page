"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { admissionSteps } from "@/lib/data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Admissions() {
  return (
    <section id="admissions" className="section-padding bg-slate-50">
      <motion.div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Admissions"
          title="Your Path to Enrollment"
          subtitle="A streamlined four-step process designed to help you join our next cohort with confidence."
        />

        <motion.div className="relative">
          <motion.div
            className="absolute top-8 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-400 to-cyan-400 lg:block"
            aria-hidden
          />

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <motion.div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-xl font-bold text-white shadow-lg shadow-indigo-500/40"
                  >
                    {step.step}
                  </motion.div>
                  {i < admissionSteps.length - 1 && (
                    <motion.div
                      className="absolute top-8 left-[calc(50%+2rem)] hidden h-0.5 w-[calc(100%-4rem)] bg-indigo-200 lg:block"
                      aria-hidden
                    />
                  )}
                  <motion.div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:w-full">
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                    {i === admissionSteps.length - 1 && (
                      <p className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-emerald-600 lg:justify-start">
                        <CheckCircle2 className="h-4 w-4" />
                        Welcome aboard!
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
