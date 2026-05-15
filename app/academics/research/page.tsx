import SubPageView from "@/components/pages/SubPageView";
import { getAcademicsPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getAcademicsPage("research")!;

export const metadata: Metadata = {
  title: `${page.title} | Global University`,
  description: page.subtitle,
};

export default function ResearchPage() {
  if (!page) notFound();
  return (
    <SubPageView
      category="academics"
      slug="research"
      backHref="/academics/programs"
      backLabel="Back to Academics"
    />
  );
}
