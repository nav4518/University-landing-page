"use client";

import Button from "@/components/ui/Button";
import { useAdmissionOptional } from "@/context/AdmissionContext";
import { getProgramIcon } from "@/components/programs/program-icons";
import type { SerializableProgramDetail } from "@/lib/program-details";
import { getRelatedPrograms } from "@/lib/program-details";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProgramDetailViewProps {
  program: SerializableProgramDetail;
}

export default function ProgramDetailView({ program }: ProgramDetailViewProps) {
  const admission = useAdmissionOptional();
  const related = getRelatedPrograms(program.id);
  const Icon = getProgramIcon(program.id);

  const categoryLabel =
    program.category.charAt(0).toUpperCase() + program.category.slice(1);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute inset-0">
          <Image
            src={program.image}
            alt={program.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-indigo-950/85 to-slate-900/80" />
        </div>

        <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#programs"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/30 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              <Icon className="h-3.5 w-3.5" />
              {categoryLabel}
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {program.title}
            </h1>
            <p className="mt-4 text-lg text-indigo-100">{program.tagline}</p>

            <motion.div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                {program.duration}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                {program.mode}
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-400" />
                {program.accreditation}
              </span>
            </motion.div>

            <motion.div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => admission?.openAdmission()}
              >
                Apply for This Program
              </Button>
              <Button
                href="/#admissions"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                Admission Process
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick stats */}
      <section className="relative z-10 -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, label: "Batch Size", value: "60 Students" },
            { icon: Briefcase, label: "Placement Rate", value: "96%+" },
            { icon: BookOpen, label: "Intake", value: program.intake },
            { icon: GraduationCap, label: "Credits", value: "Industry Aligned" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg"
            >
              <stat.icon className="mb-2 h-5 w-5 text-indigo-600" />
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              <p className="mt-1 font-bold text-slate-900">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Overview + Highlights */}
      <section className="section-padding">
        <motion.div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Program Overview
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {program.overview}
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              {program.description}
            </p>
          </motion.div>

          <motion.div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900">Key Highlights</h3>
            <ul className="mt-4 space-y-4">
              {program.highlights.map((h) => (
                <li
                  key={h.title}
                  className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4"
                >
                  <p className="font-semibold text-indigo-900">{h.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{h.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-white">
        <motion.div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Curriculum Structure
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            A semester-wise roadmap designed with industry advisory boards and updated
            every academic year.
          </p>
          <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {program.curriculum.map((block, i) => (
              <motion.div
                key={block.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-slate-100 bg-slate-50 p-6"
              >
                <span className="text-sm font-bold text-indigo-600">{block.term}</span>
                <ul className="mt-4 space-y-2">
                  {block.courses.map((course) => (
                    <li
                      key={course}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                      {course}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Careers + Eligibility */}
      <section className="section-padding">
        <motion.div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <motion.div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white lg:p-10">
            <h2 className="text-2xl font-bold">Career Outcomes</h2>
            <p className="mt-2 text-indigo-100">
              Graduates from this program have secured roles at leading organizations
              worldwide.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {program.careerPaths.map((career) => (
                <li
                  key={career}
                  className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur"
                >
                  {career}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-slate-900">Eligibility</h2>
            <ul className="mt-6 space-y-3">
              {program.eligibility.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-600"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-0">
        <motion.div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 px-8 py-12 text-center sm:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to join {program.title.split("â€”")[0].trim()}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100">
            Applications for {program.intake} are now open. Secure your seat with
            early-bird scholarships.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="mt-6"
            onClick={() => admission?.openAdmission()}
          >
            Start Application
          </Button>
        </motion.div>
      </section>

      {/* Related programs */}
      {related.length > 0 && (
        <section className="section-padding border-t border-slate-200 bg-white">
          <motion.div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-slate-900">Related Programs</h2>
            <motion.div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/programs/${rel.id}`}
                  className="group rounded-2xl border border-slate-100 p-6 transition-all hover:border-indigo-200 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold text-indigo-600 uppercase">
                    {rel.category}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 group-hover:text-indigo-600">
                    {rel.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                    {rel.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    View Program â†’
                  </span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </section>
      )}
    </div>
  );
}
