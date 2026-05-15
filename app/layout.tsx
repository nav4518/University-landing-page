import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLoader from "@/components/layout/PageLoader";
import AppProviders from "@/components/providers/AppProviders";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global University | Premium Education for Tomorrow",
  description:
    "Global University — UGC-approved, NEP-aligned programs in engineering, management, sciences, and emerging technologies. Apply for admission 2026.",
  keywords: [
    "university",
    "higher education",
    "MBA",
    "B.Tech",
    "admissions",
    "placements",
    "Ahmedabad",
  ],
  openGraph: {
    title: "Global University",
    description:
      "Shape your future with premium, tech-driven education and global career pathways.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <AppProviders>
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
