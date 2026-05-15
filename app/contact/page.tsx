import ContactPage from "@/sections/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Global University",
  description:
    "Reach our admissions team for applications, campus visits, and program inquiries.",
};

export default function Contact() {
  return <ContactPage />;
}
