"use client";

import { scrollToSection, getSectionIdFromHref } from "@/lib/navigation";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const run = () => {
      const id = getSectionIdFromHref(window.location.hash);
      if (!id) return;

      const attemptScroll = (retries = 0) => {
        const ok = scrollToSection(id, retries === 0 ? "auto" : "smooth");
        if (!ok && retries < 8) {
          setTimeout(() => attemptScroll(retries + 1), 100);
        }
      };

      requestAnimationFrame(() => attemptScroll());
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, [pathname]);

  return null;
}
