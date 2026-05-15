import ProgramDetailView from "@/components/programs/ProgramDetailView";
import {
  getAllProgramSlugs,
  getProgramDetail,
  toSerializableProgram,
} from "@/lib/program-details";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramDetail(slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: `${program.title} | Global University`,
    description: program.overview.slice(0, 160),
    openGraph: {
      title: program.title,
      description: program.tagline,
      images: [{ url: program.image }],
    },
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgramDetail(slug);

  if (!program) notFound();

  return <ProgramDetailView program={toSerializableProgram(program)} />;
}
