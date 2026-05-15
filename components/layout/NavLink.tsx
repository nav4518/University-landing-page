"use client";

import {
  getSectionIdFromHref,
  isNavLinkActive,
  scrollToSection,
  type HomeSectionId,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
  activeSection: HomeSectionId | null;
  onNavigate?: () => void;
  className?: string;
}

export default function NavLink({
  href,
  label,
  activeSection,
  onNavigate,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const sectionId = getSectionIdFromHref(href);
  const isHome = pathname === "/";
  const isActive =
    sectionId !== null && isNavLinkActive(sectionId, pathname, activeSection);

  const linkClass = cn(
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-indigo-50 text-indigo-600"
      : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600",
    className
  );

  if (!sectionId) {
    return (
      <Link href={href} className={linkClass} onClick={onNavigate}>
        {label}
      </Link>
    );
  }

  if (isHome) {
    return (
      <a
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={linkClass}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(sectionId);
          onNavigate?.();
        }}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={linkClass}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
