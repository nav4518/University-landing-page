"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { campusActivities, campusGallery } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function CampusLife() {
  return (
    <section id="campus" className="section-padding bg-white">
      <motion.div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Campus Life"
          title="Experience Vibrant Campus Living"
          subtitle="A thriving ecosystem of innovation, culture, sports, and lifelong friendships."
        />

        <motion.div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 lg:auto-rows-[200px]">
          {campusGallery.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.05}
              className={`group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative h-full min-h-[180px] w-full"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <p className="absolute bottom-4 left-4 font-semibold text-white">
                  {item.title}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <motion.div className="mt-12 rounded-3xl border border-slate-100 bg-gradient-to-br from-indigo-50 to-cyan-50/50 p-8 lg:p-10">
            <motion.div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <motion.div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  Clubs & Activities
                </h3>
                <p className="mt-2 max-w-xl text-slate-600">
                  Join 50+ student-led organizations, hackathons, cultural fests, and
                  leadership summits throughout the year.
                </p>
              </motion.div>
              <motion.div className="flex flex-wrap gap-2">
                {campusActivities.map((activity) => (
                  <span
                    key={activity}
                    className="rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm"
                  >
                    {activity}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}
