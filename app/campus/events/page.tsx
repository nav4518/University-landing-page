import SubPageView from "@/components/pages/SubPageView";
import { getCampusPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getCampusPage("events")!;

export const metadata: Metadata = {
  title: `${page.title} | Global University`,
  description: page.subtitle,
};

export default function EventsPage() {
  if (!page) notFound();
  return (
    <SubPageView
      category="campus"
      slug="events"
      backHref="/campus"
      backLabel="Back to Campus"
    />
  );
}
