"use client";

import Button from "@/components/ui/Button";
import { useAdmission } from "@/context/AdmissionContext";
import { programs } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, GraduationCap, X } from "lucide-react";
import { useEffect, useState } from "react";

type FormState = "idle" | "submitting" | "success";

export default function AdmissionModal() {
  const { isOpen, closeAdmission } = useAdmission();
  const [formState, setFormState] = useState<FormState>("idle");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeAdmission();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeAdmission]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setFormState("idle"), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-slate-950/70 backdrop-blur-sm"
            onClick={closeAdmission}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="admission-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-4 top-[50%] z-[90] max-h-[90vh] w-auto max-w-lg -translate-y-1/2 overflow-y-auto rounded-3xl border border-white/20 bg-white shadow-2xl sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
          >
            <motion.div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-6 py-4 backdrop-blur">
              <motion.div className="flex items-center gap-3">
                <motion.div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500">
                  <GraduationCap className="h-5 w-5 text-white" />
                </motion.div>
                <motion.div>
                  <h2
                    id="admission-modal-title"
                    className="text-lg font-bold text-slate-900"
                  >
                    Apply for Admission
                  </h2>
                  <p className="text-xs text-slate-500">July 2026 intake open</p>
                </motion.div>
              </motion.div>
              <button
                type="button"
                onClick={closeAdmission}
                className="rounded-xl p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close application form"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>

            <motion.div className="p-6">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <motion.div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Application Submitted!
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Thank you! Our admissions team will contact you within 2–3
                    business days.
                  </p>
                  <Button className="mt-6" onClick={closeAdmission}>
                    Close
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div className="grid gap-4 sm:grid-cols-2">
                    <motion.div>
                      <label
                        htmlFor="firstName"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        placeholder="John"
                      />
                    </motion.div>
                    <motion.div>
                      <label
                        htmlFor="lastName"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                        placeholder="Doe"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="you@email.com"
                    />
                  </motion.div>

                  <motion.div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>

                  <motion.div>
                    <label
                      htmlFor="program"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Program *
                    </label>
                    <select
                      id="program"
                      name="program"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      {programs.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="Tell us about your goals..."
                    />
                  </motion.div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting"
                      ? "Submitting..."
                      : "Submit Application"}
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
