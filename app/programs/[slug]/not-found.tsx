import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ProgramNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Program Not Found</h1>
      <p className="mt-4 max-w-md text-slate-600">
        The program you are looking for does not exist or may have been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/#programs">Browse Programs</Button>
        <Link
          href="/"
          className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
