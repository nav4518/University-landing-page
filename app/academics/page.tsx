import CategoryHub from "@/sections/pages/CategoryHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Global University",
  description:
    "Programs, research, faculty, and library resources at Global University.",
};

const links = [
  {
    label: "Programs & Courses",
    href: "/academics/programs",
    description: "Undergraduate, postgraduate, and doctoral programs across disciplines.",
  },
  {
    label: "Research & Innovation",
    href: "/academics/research",
    description: "40+ research labs, publications, and doctoral fellowships.",
  },
  {
    label: "Our Faculty",
    href: "/academics/faculty",
    description: "200+ expert educators blending research rigor with industry experience.",
  },
  {
    label: "Digital Library",
    href: "/academics/library",
    description: "24/7 access to journals, study zones, and research support.",
  },
];

export default function AcademicsPage() {
  return (
    <CategoryHub
      eyebrow="Academics"
      title="Academics Overview"
      subtitle="Discover programs, research excellence, world-class faculty, and learning resources."
      links={links}
    />
  );
}
