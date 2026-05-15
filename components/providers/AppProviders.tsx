"use client";

import AdmissionModal from "@/components/AdmissionModal";
import HashScrollHandler from "@/components/layout/HashScrollHandler";
import { AdmissionProvider } from "@/context/AdmissionContext";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdmissionProvider>
      <HashScrollHandler />
      {children}
      <AdmissionModal />
    </AdmissionProvider>
  );
}
