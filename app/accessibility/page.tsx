import SubPageView from "@/components/pages/SubPageView";
import { getLegalPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getLegalPage("accessibility")!;

export const metadata: Metadata = {
  title: `${page.title} | Global University`,
  description: page.subtitle,
};

export default function AccessibilityPage() {
  if (!page) notFound();
  return <SubPageView category="legal" slug="accessibility" showCta={false} />;
}
