import SubPageView from "@/components/pages/SubPageView";
import { getCampusPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getCampusPage("housing")!;

export const metadata: Metadata = {
  title: `${page.title} | Global University`,
  description: page.subtitle,
};

export default function HousingPage() {
  if (!page) notFound();
  return (
    <SubPageView
      category="campus"
      slug="housing"
      backHref="/campus"
      backLabel="Back to Campus"
    />
  );
}
