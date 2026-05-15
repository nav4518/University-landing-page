"use client";

import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Innovation Park, Sector 21, Ahmedabad, Gujarat 380054",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "admissions@globaluniversity.edu",
    href: "mailto:admissions@globaluniversity.edu",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Mon – Sat, 9:00 AM – 6:00 PM IST",
  },
];

export default function ContactPage() {
  return (
    <motion.div className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Our admissions and support teams are ready to help with applications, campus visits, and program inquiries."
        backHref="/"
        backLabel="Back to Home"
      />

      <section className="section-padding">
        <motion.div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <motion.div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <motion.div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <motion.div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 text-slate-600 transition-colors hover:text-indigo-600"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="mt-1 text-slate-600">{item.content}</p>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <motion.div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Send a Message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and we will respond within 2 business days.
              </p>
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <motion.div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </motion.div>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <select
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Inquiry type
                  </option>
                  <option value="admissions">Admissions</option>
                  <option value="programs">Programs</option>
                  <option value="campus">Campus Visit</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </section>
    </motion.div>
  );
}
