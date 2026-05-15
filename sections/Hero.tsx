"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/Button";
import { heroStats } from "@/lib/data";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import Image from "next/image";

const floatingCards = [
  { label: "UGC Approved", top: "12%", left: "-8%" },
  { label: "AI Learning Labs", top: "55%", left: "-12%" },
  { label: "98% Placements", top: "20%", right: "-6%" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24"
      aria-label="Hero"
    >
      <motion.div className="pointer-events-none absolute inset-0 mesh-gradient" aria-hidden />
      <motion.div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              UGC Approved · NEP 2020 Aligned
            </motion.span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Shape Your Future at{" "}
              <span className="gradient-text">Global</span> University
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              A premium new-age institution where cutting-edge technology, global
              partnerships, and immersive learning converge to launch extraordinary
              careers.
            </p>

            <motion.div className="mt-8 flex flex-wrap gap-4">
              <Button openAdmission size="lg">
                Apply for Admission
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/#programs" variant="outline" size="lg">
                <Play className="h-4 w-4" />
                Explore Programs
              </Button>
            </motion.div>

            <motion.div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-2xl border border-white/60 bg-white/60 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-indigo-600 sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <motion.div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl sm:aspect-square lg:aspect-[4/5]">
              <Image
                src={siteImages.hero}
                alt="Students on modern university campus"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent" />
            </motion.div>

            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="absolute z-10 hidden rounded-2xl glass px-4 py-3 shadow-lg sm:block"
                style={{ top: card.top, left: card.left, right: card.right }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {card.label}
                </p>
              </motion.div>
            ))}

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-auto sm:translate-x-0 lg:-left-8"
            >
              <p className="text-xs font-medium text-slate-500">Next intake opens</p>
              <p className="text-lg font-bold text-indigo-600">July 2026</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
