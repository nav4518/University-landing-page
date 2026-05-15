"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="section-padding">
      <motion.div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-cyan-500"
          aria-hidden
        />
        <motion.div
          className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.div className="relative px-8 py-16 text-center sm:px-16 sm:py-20 lg:py-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Admissions Open 2026
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Begin Your Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100"
          >
            Join thousands of ambitious students at Global University. Apply
            today and unlock scholarships, mentorship, and global opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              openAdmission
              variant="secondary"
              size="lg"
              className="shadow-xl"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/#programs"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              View Programs
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
