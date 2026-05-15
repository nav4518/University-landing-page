import SubPageView from "@/components/pages/SubPageView";
import { getAdmissionsPage } from "@/lib/footer-pages";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const page = getAdmissionsPage("international-students")!;

export const metadata: Metadata = {
  title: `${page.title} | Global University`,
  description: page.subtitle,
};

export default function InternationalStudentsPage() {
  if (!page) notFound();
  return (
    <SubPageView
      category="admissions"
      slug="international-students"
      backHref="/admissions"
      backLabel="Back to Admissions"
    />
  );
}
