"use client";

import Button from "@/components/ui/Button";
import NavLink from "@/components/layout/NavLink";
import { navLinks } from "@/lib/data";
import {
  getSectionIdFromHref,
  homeSectionIds,
  type HomeSectionId,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<HomeSectionId | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const elements = homeSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as HomeSectionId);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const hashId = getSectionIdFromHref(window.location.hash);
    if (hashId) setActiveSection(hashId);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 transition-all duration-500 sm:px-6 lg:px-8",
          scrolled
            ? "mx-4 mt-3 rounded-2xl glass shadow-soft sm:mx-6 lg:mx-auto lg:max-w-6xl lg:px-6"
            : "mt-0"
        )}
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-[var(--shadow-glow)]"
          >
            <GraduationCap className="h-5 w-5 text-white" aria-hidden />
          </motion.div>
          <motion.div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight text-slate-900">
              Global
            </span>
            <span className="block text-[10px] font-medium tracking-widest text-indigo-600 uppercase">
              University
            </span>
          </motion.div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                activeSection={activeSection}
              />
            </li>
          ))}
        </ul>

        <motion.div className="hidden items-center gap-3 lg:flex">
          <Button openAdmission size="sm">
            Apply Now
          </Button>
        </motion.div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-white shadow-2xl lg:hidden"
            >
              <motion.div className="flex items-center justify-between border-b border-slate-100 p-5">
                <span className="font-bold text-slate-900">Menu</span>
                <button
                  type="button"
                  onClick={closeMobile}
                  className="rounded-lg p-2 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
              <ul className="flex flex-1 flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      href={link.href}
                      label={link.label}
                      activeSection={activeSection}
                      onNavigate={closeMobile}
                      className="block w-full px-4 py-3 text-base"
                    />
                  </motion.li>
                ))}
              </ul>
              <motion.div className="border-t border-slate-100 p-4">
                <Button openAdmission className="w-full" onClick={closeMobile}>
                  Apply Now
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
