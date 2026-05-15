import CategoryHub from "@/sections/pages/CategoryHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Global University",
  description:
    "Scholarships, fee structure, and international student admissions at Global University.",
};

const links = [
  {
    label: "Scholarships & Financial Aid",
    href: "/admissions/scholarships",
    description: "Merit-based and need-based scholarships up to 100% tuition waiver.",
  },
  {
    label: "Fee Structure",
    href: "/admissions/fee-structure",
    description: "Transparent program-wise fees with flexible installment options.",
  },
  {
    label: "International Students",
    href: "/admissions/international-students",
    description: "Visa support, global housing, and exchange programs for international applicants.",
  },
];

export default function AdmissionsPage() {
  return (
    <CategoryHub
      eyebrow="Admissions"
      title="Admissions Overview"
      subtitle="Explore scholarships, fees, and pathways for domestic and international students."
      links={links}
      showApply
    />
  );
}
