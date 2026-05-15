import SubPageView from "@/components/pages/SubPageView";
import { getCampusPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getCampusPage("sports")!;

export const metadata: Metadata = {
  title: `${page.title} | Global University`,
  description: page.subtitle,
};

export default function SportsPage() {
  if (!page) notFound();
  return (
    <SubPageView
      category="campus"
      slug="sports"
      backHref="/campus"
      backLabel="Back to Campus"
    />
  );
}
