"use client";

import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HubLink {
  label: string;
  href: string;
  description: string;
}

interface CategoryHubProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  links: HubLink[];
  showApply?: boolean;
}

export default function CategoryHub({
  eyebrow,
  title,
  subtitle,
  links,
  showApply = false,
}: CategoryHubProps) {
  return (
    <motion.div className="min-h-screen bg-slate-50">
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="section-padding">
        <motion.div className="mx-auto grid max-w-4xl gap-4">
          {links.map((link, i) => (
            <ScrollReveal key={link.href} delay={i * 0.06}>
              <Link
                href={link.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
              >
                <motion.div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600">
                    {link.label}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">{link.description}</p>
                </motion.div>
                <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600" />
              </Link>
            </ScrollReveal>
          ))}
        </motion.div>

        {showApply && (
          <ScrollReveal delay={0.2}>
            <motion.div className="mx-auto mt-10 max-w-4xl text-center">
              <Button openAdmission size="lg">
                Apply Now
              </Button>
            </motion.div>
          </ScrollReveal>
        )}
      </section>
    </motion.div>
  );
}
