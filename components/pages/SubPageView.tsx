"use client";

import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  getFooterPage,
  type FooterPageCategory,
} from "@/lib/footer-pages";
import { motion } from "framer-motion";

interface SubPageViewProps {
  category: FooterPageCategory;
  slug: string;
  backHref?: string;
  backLabel?: string;
  showCta?: boolean;
}

export default function SubPageView({
  category,
  slug,
  backHref = "/",
  backLabel = "Back to Home",
  showCta = true,
}: SubPageViewProps) {
  const page = getFooterPage(category, slug);

  if (!page) return null;

  return (
    <motion.div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        backHref={backHref}
        backLabel={backLabel}
      />

      <section className="section-padding">
        <motion.div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600">
              {page.description}
            </p>
          </ScrollReveal>

          {page.highlights && (
            <ScrollReveal delay={0.1}>
              <motion.div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {page.highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="text-2xl font-bold text-indigo-600 sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-600">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          )}
        </motion.div>
      </section>

      <section className="section-padding bg-white">
        <motion.div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            title="What We Offer"
            subtitle="Discover the resources and opportunities available to you."
          />

          <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {page.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={feature.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group h-full rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-indigo-50/40 p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-lg"
                  >
                    <motion.div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {showCta && page.ctaTitle && (
        <section className="section-padding">
          <motion.div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <motion.div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-8 text-center shadow-soft sm:p-12">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{page.ctaTitle}</h2>
                {page.ctaDescription && (
                  <p className="mx-auto mt-3 max-w-xl text-indigo-100">{page.ctaDescription}</p>
                )}
                <motion.div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button openAdmission size="lg">
                    Apply Now
                  </Button>
                  <Button href="/admissions" variant="secondary" size="lg">
                    Admissions Info
                  </Button>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </section>
      )}
    </motion.div>
  );
}
