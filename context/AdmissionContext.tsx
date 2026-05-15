"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface AdmissionContextValue {
  isOpen: boolean;
  openAdmission: () => void;
  closeAdmission: () => void;
}

export const AdmissionContext = createContext<AdmissionContextValue | null>(null);

export function AdmissionProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openAdmission = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeAdmission = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <AdmissionContext.Provider value={{ isOpen, openAdmission, closeAdmission }}>
      {children}
    </AdmissionContext.Provider>
  );
}

export function useAdmission() {
  const ctx = useContext(AdmissionContext);
  if (!ctx) {
    throw new Error("useAdmission must be used within AdmissionProvider");
  }
  return ctx;
}

/** Safe hook — returns null if provider is missing (e.g. during HMR). */
export function useAdmissionOptional() {
  return useContext(AdmissionContext);
}
