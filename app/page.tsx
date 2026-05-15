import About from "@/sections/About";
import Admissions from "@/sections/Admissions";
import CampusLife from "@/sections/CampusLife";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Hero from "@/sections/Hero";
import Placements from "@/sections/Placements";
import Programs from "@/sections/Programs";
import Testimonials from "@/sections/Testimonials";
import WhyChooseUs from "@/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <CampusLife />
      <Placements />
      <Testimonials />
      <Admissions />
      <FAQ />
      <CTA />
    </>
  );
}
