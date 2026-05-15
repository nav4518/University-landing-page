import {
  Award,
  BookOpen,
  Brain,
  Building2,
  Cpu,
  Globe2,
  GraduationCap,
  Handshake,
  Laptop,
  LineChart,
  Microscope,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getProgramImage, siteImages } from "./images";

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Campus", href: "/#campus" },
  { label: "Placements", href: "/#placements" },
  { label: "Admissions", href: "/#admissions" },
  { label: "FAQ", href: "/#faq" },
];

export const heroStats = [
  { value: 50, suffix: "+", label: "Global Partners" },
  { value: 12000, suffix: "+", label: "Active Students" },
  { value: 98, suffix: "%", label: "Placement Rate" },
  { value: 200, suffix: "+", label: "Expert Faculty" },
];

export const aboutCounters = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 80, suffix: "+", label: "Degree Programs" },
  { value: 40, suffix: "+", label: "Research Labs" },
  { value: 15, suffix: "+", label: "International Campuses" },
];

export const missionVision = [
  {
    title: "Our Mission",
    description:
      "To cultivate innovators and ethical leaders through immersive, industry-aligned education that bridges academia and the global economy.",
    icon: Rocket,
    image: siteImages.mission,
  },
  {
    title: "Our Vision",
    description:
      "To be a world-class research university recognized for pioneering learning ecosystems, sustainable innovation, and transformative student outcomes.",
    icon: Globe2,
    image: siteImages.vision,
  },
];

export type ProgramCategory = "all" | "undergraduate" | "postgraduate" | "doctoral";

export interface Program {
  id: string;
  title: string;
  category: Exclude<ProgramCategory, "all">;
  duration: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const programs: Program[] = [
  {
    id: "btech-ai",
    title: "B.Tech — AI & Data Science",
    category: "undergraduate",
    duration: "4 Years · 8 Semesters",
    description:
      "Build intelligent systems with deep learning, cloud ML pipelines, and real-world capstone projects.",
    image: getProgramImage("btech-ai"),
    icon: Cpu,
  },
  {
    id: "bba",
    title: "BBA — Global Business",
    category: "undergraduate",
    duration: "3 Years · 6 Semesters",
    description:
      "Master strategy, finance, and entrepreneurship with live consulting engagements.",
    image: getProgramImage("bba"),
    icon: LineChart,
  },
  {
    id: "bca",
    title: "BCA — Software Engineering",
    category: "undergraduate",
    duration: "3 Years · 6 Semesters",
    description:
      "Full-stack development, DevOps, and agile delivery in industry-grade labs.",
    image: getProgramImage("bca"),
    icon: Laptop,
  },
  {
    id: "mba",
    title: "MBA — Leadership & Innovation",
    category: "postgraduate",
    duration: "2 Years · 4 Semesters",
    description:
      "Executive mentorship, global immersion, and venture studio experiences.",
    image: getProgramImage("mba"),
    icon: GraduationCap,
  },
  {
    id: "mca",
    title: "MCA — Cloud & Full Stack",
    category: "postgraduate",
    duration: "2 Years · 4 Semesters",
    description:
      "Advanced architecture, microservices, and AI-integrated enterprise applications.",
    image: getProgramImage("mca"),
    icon: Brain,
  },
  {
    id: "msc",
    title: "M.Sc — Cyber & Digital Forensics",
    category: "postgraduate",
    duration: "2 Years · 4 Semesters",
    description:
      "Threat intelligence, ethical hacking, and security operations in simulated SOC environments.",
    image: getProgramImage("msc"),
    icon: Microscope,
  },
  {
    id: "phd",
    title: "Ph.D — Emerging Technologies",
    category: "doctoral",
    duration: "3–5 Years",
    description:
      "Interdisciplinary research with publication support and international faculty collaboration.",
    image: getProgramImage("phd"),
    icon: BookOpen,
  },
  {
    id: "phd-mgmt",
    title: "Ph.D — Management Sciences",
    category: "doctoral",
    duration: "3–5 Years",
    description:
      "Scholarly inquiry in sustainability, fintech, and organizational innovation.",
    image: getProgramImage("phd-mgmt"),
    icon: Award,
  },
];

export const programFilters: { id: ProgramCategory; label: string }[] = [
  { id: "all", label: "All Programs" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "postgraduate", label: "Postgraduate" },
  { id: "doctoral", label: "Doctoral" },
];

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseUs: Feature[] = [
  {
    title: "Placement Excellence",
    description:
      "Dedicated career cell with 500+ hiring partners, mock interviews, and personalized portfolio coaching.",
    icon: Handshake,
  },
  {
    title: "Industry-Ready Curriculum",
    description:
      "NEP-aligned programs co-designed with Fortune 500 leaders and updated every semester.",
    icon: Building2,
  },
  {
    title: "Smart Campus",
    description:
      "IoT-enabled labs, green architecture, innovation hubs, and 24/7 collaborative learning zones.",
    icon: GraduationCap,
  },
  {
    title: "Expert Faculty",
    description:
      "PhD scholars and industry veterans blending research rigor with practical mentorship.",
    icon: Users,
  },
  {
    title: "AI-Enabled Learning",
    description:
      "Personalized learning paths powered by adaptive AI tutors and immersive VR classrooms.",
    icon: Brain,
  },
  {
    title: "Global Exposure",
    description:
      "Semester abroad, dual degrees, and international internships across 30+ countries.",
    icon: Globe2,
  },
];

export const campusGallery = [
  {
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    title: "Central Campus",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    title: "Student Life",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    title: "Innovation Lab",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    title: "Tech Symposium",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
    title: "Library Hub",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    title: "Cultural Fest",
    span: "col-span-2 row-span-1",
  },
];

export const campusActivities = [
  "Robotics & AI Club",
  "Entrepreneurship Cell",
  "Model UN Society",
  "Design & Media Studio",
  "Sports & Wellness League",
  "Green Campus Initiative",
];

export const companyLogos = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Deloitte",
  "Infosys",
  "Accenture",
  "IBM",
];

export const placementStats = [
  { value: 850, suffix: "+", label: "Companies Visited" },
  { value: 18, suffix: " LPA", label: "Highest Package" },
  { value: 6.5, suffix: " LPA", label: "Average Package" },
  { value: 1200, suffix: "+", label: "Offers This Year" },
];

export const successStories = [
  {
    name: "Priya Sharma",
    role: "Software Engineer · Google",
    program: "B.Tech CSE",
    quote: "The university gave me the research depth and hackathon culture that opened doors globally.",
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager · Microsoft",
    program: "MBA",
    quote: "The venture studio and leadership labs shaped how I think about scale and impact.",
  },
  {
    name: "Sneha Patel",
    role: "Data Scientist · Amazon",
    program: "M.Sc IT",
    quote: "Hands-on AI projects and faculty mentorship made the transition seamless.",
  },
];

export const testimonials = [
  {
    name: "Rahul Desai",
    role: "Alumni · Senior Developer, TCS",
    program: "BCA",
    rating: 5,
    text: "The blend of theory and live industry projects prepared me for enterprise engineering from day one.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Ananya Iyer",
    role: "Alumni · HR Lead, Godrej",
    program: "BBA",
    rating: 5,
    text: "Faculty who truly mentor you, a vibrant campus, and placements that deliver on their promise.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Vikram Singh",
    role: "Alumni · Art Director",
    program: "Design Media",
    rating: 5,
    text: "Creative freedom, world-class studios, and alumni networks that stay with you for life.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Meera Joshi",
    role: "Alumni · Consultant, Deloitte",
    program: "MBA",
    rating: 5,
    text: "Global case competitions and international exchange transformed my career trajectory.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
];

export const admissionSteps = [
  {
    step: 1,
    title: "Online Application",
    description: "Submit your application with academic records and statement of purpose.",
  },
  {
    step: 2,
    title: "Entrance Assessment",
    description: "Appear for Global Aptitude Test or submit valid national exam scores.",
  },
  {
    step: 3,
    title: "Personal Interview",
    description: "Showcase your potential in a holistic interview with faculty panel.",
  },
  {
    step: 4,
    title: "Offer & Enrollment",
    description: "Receive your offer letter, complete fee payment, and join orientation week.",
  },
];

export const faqs = [
  {
    question: "What programs does Global University offer?",
    answer:
      "We offer undergraduate, postgraduate, and doctoral programs across engineering, management, sciences, law, and emerging technology domains — all aligned with NEP 2020 guidelines.",
  },
  {
    question: "Is the university UGC approved?",
    answer:
      "Yes. Global University is a UGC-recognized institution with accredited programs and compliance with national higher education standards.",
  },
  {
    question: "What scholarship options are available?",
    answer:
      "Merit-based, sports, need-based, and international scholarships are available. Up to 100% tuition waiver for exceptional candidates.",
  },
  {
    question: "Do you offer international exchange programs?",
    answer:
      "Our Global Mobility Office facilitates semester exchanges, dual degrees, and internships with partner universities across Europe, Asia, and North America.",
  },
  {
    question: "What is the placement support process?",
    answer:
      "From year one, students access career coaching, skill bootcamps, industry projects, and a dedicated placement cell with 850+ recruiting partners.",
  },
  {
    question: "How can I schedule a campus visit?",
    answer:
      "Book a guided tour through our admissions portal or contact the visitor center. Virtual campus tours are also available 24/7.",
  },
];

export const footerLinks = {
  academics: [
    { label: "Programs", href: "/academics/programs" },
    { label: "Research", href: "/academics/research" },
    { label: "Faculty", href: "/academics/faculty" },
    { label: "Library", href: "/academics/library" },
  ],
  admissions: [
    { label: "Apply Now", href: "#" },
    { label: "Scholarships", href: "/admissions/scholarships" },
    { label: "Fee Structure", href: "/admissions/fee-structure" },
    { label: "International Students", href: "/admissions/international-students" },
  ],
  campus: [
    { label: "Campus Life", href: "/campus/life" },
    { label: "Housing", href: "/campus/housing" },
    { label: "Events", href: "/campus/events" },
    { label: "Sports", href: "/campus/sports" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};
