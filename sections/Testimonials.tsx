"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const item = testimonials[current];

  return (
    <section className="section-padding overflow-hidden bg-white">
      <motion.div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Alumni Say"
          subtitle="Stories of transformation from students who started their journey at Global University."
        />

        <motion.div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-indigo-50/30 p-8 shadow-lg sm:p-12"
            >
              <motion.div className="mb-4 flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </motion.div>
              <blockquote className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <motion.div className="mt-8 flex items-center gap-4">
                <motion.div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-indigo-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-indigo-600">{item.role}</p>
                  <p className="text-xs text-slate-500">{item.program}</p>
                </motion.div>
              </motion.div>
            </motion.article>
          </AnimatePresence>

          <motion.div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <motion.div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-indigo-600" : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </motion.div>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
