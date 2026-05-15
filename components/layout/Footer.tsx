"use client";

import { footerLinks } from "@/lib/data";
import { useAdmissionOptional } from "@/context/AdmissionContext";
import { motion } from "framer-motion";
import {
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const admission = useAdmissionOptional();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <motion.div className="section-padding mx-auto max-w-7xl pb-8">
        <motion.div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <motion.div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500">
                <GraduationCap className="h-5 w-5 text-white" />
              </motion.div>
              <motion.div>
                <span className="block font-bold text-white">Global</span>
                <span className="text-xs tracking-widest text-cyan-400 uppercase">
                  University
                </span>
              </motion.div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A new-age, tech-driven international university shaping future-ready
              leaders through innovation, research, and global collaboration.
            </p>
            <motion.div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-400 transition-colors hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5"
          >
            {[
              { title: "Academics", links: footerLinks.academics },
              { title: "Admissions", links: footerLinks.admissions },
              { title: "Campus", links: footerLinks.campus },
            ].map((col) => (
              <motion.div key={col.title}>
                <h3 className="mb-4 text-sm font-semibold text-white">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.label === "Apply Now" ? (
                        <button
                          type="button"
                          onClick={() => admission?.openAdmission()}
                          className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-4 text-sm font-semibold text-white">
              <Link href="/contact" className="transition-colors hover:text-cyan-400">
                Contact Us
              </Link>
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                Innovation Park, Sector 21, Ahmedabad, Gujarat 380054
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan-400" />
                <a href="tel:+919876543210" className="hover:text-cyan-400">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                <a
                  href="mailto:admissions@globaluniversity.edu"
                  className="hover:text-cyan-400"
                >
                  admissions@globaluniversity.edu
                </a>
              </li>
            </ul>

            <h3 className="mt-8 mb-3 text-sm font-semibold text-white">Newsletter</h3>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row"
        >
          <p>&copy; {new Date().getFullYear()} Global University. All rights reserved.</p>
          <motion.div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
