"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { aboutCounters, missionVision } from "@/lib/data";
import { siteImages } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-white">
      <motion.div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Us"
          title="Redefining Higher Education for Tomorrow"
          subtitle="Global University is a UGC-recognized institution pioneering tech-driven pedagogy, interdisciplinary research, and industry-integrated learning pathways."
        />

        <motion.div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <motion.div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={siteImages.about}
                alt="University campus aerial view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent" />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg leading-relaxed text-slate-600">
              Founded on six decades of educational excellence, we empower learners
              with immersive labs, global faculty, and a culture of innovation that
              bridges classroom theory with real-world impact.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our whole-brain learning pedagogy nurtures analytical rigor and creative
              problem-solving — preparing graduates who thrive in an AI-augmented world.
            </p>

            <motion.div className="mt-8 grid grid-cols-2 gap-4">
              {aboutCounters.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-shadow hover:shadow-md"
                >
                  <p className="text-3xl font-bold text-indigo-600">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </ScrollReveal>
        </motion.div>

        <motion.div className="mt-16 grid gap-6 md:grid-cols-2">
          {missionVision.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
                >
                  <motion.div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <motion.div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </motion.div>
                  </motion.div>
                  <motion.div className="bg-gradient-to-br from-white to-indigo-50/50 p-8">
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
