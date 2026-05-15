import ProgramsListing from "@/sections/pages/ProgramsListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs & Courses | Global University",
  description:
    "Explore undergraduate, postgraduate, and doctoral programs in engineering, management, and emerging technologies.",
};

export default function AcademicsProgramsPage() {
  return <ProgramsListing />;
}
