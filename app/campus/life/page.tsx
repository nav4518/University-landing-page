import SubPageView from "@/components/pages/SubPageView";
import { getCampusPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getCampusPage("life")!;

export const metadata: Metadata = {
  title: "Campus Life | Global University",
  description: page.subtitle,
};

export default function CampusLifePage() {
  if (!page) notFound();
  return (
    <SubPageView
      category="campus"
      slug="life"
      backHref="/campus"
      backLabel="Back to Campus"
    />
  );
}
