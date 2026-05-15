import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  DollarSign,
  Globe2,
  GraduationCap,
  Home,
  Library,
  Mail,
  Microscope,
  Shield,
  Trophy,
  Users,
} from "lucide-react";

export interface FooterPageFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FooterPageHighlight {
  label: string;
  value: string;
}

export interface FooterPageConfig {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  features: FooterPageFeature[];
  highlights?: FooterPageHighlight[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export const academicsPages: Record<string, FooterPageConfig> = {
  research: {
    slug: "research",
    title: "Research & Innovation",
    eyebrow: "Academics",
    subtitle:
      "Pioneering interdisciplinary research that addresses global challenges and drives technological breakthroughs.",
    description:
      "Global University invests in cutting-edge research across AI, sustainability, healthcare, and social innovation. Our 40+ research labs collaborate with industry and international institutions to translate ideas into impact.",
    features: [
      {
        title: "Research Labs",
        description:
          "40+ specialized labs in AI, robotics, biotech, and digital humanities with industry-grade equipment.",
        icon: Microscope,
      },
      {
        title: "Publications & Patents",
        description:
          "Faculty and students publish 200+ papers annually with dedicated grant writing and IP support.",
        icon: BookOpen,
      },
      {
        title: "Industry Partnerships",
        description:
          "Joint research with Google, Microsoft, and leading startups on live industry problems.",
        icon: Building2,
      },
      {
        title: "PhD & Fellowships",
        description:
          "Fully funded doctoral programs with international faculty mentorship and conference travel grants.",
        icon: GraduationCap,
      },
    ],
    highlights: [
      { label: "Research Labs", value: "40+" },
      { label: "Annual Grants", value: "₹12 Cr" },
      { label: "Patents Filed", value: "85+" },
      { label: "Research Scholars", value: "350+" },
    ],
    ctaTitle: "Explore Doctoral Programs",
    ctaDescription: "Join our research community and contribute to tomorrow's breakthroughs.",
  },
  faculty: {
    slug: "faculty",
    title: "Our Faculty",
    eyebrow: "Academics",
    subtitle:
      "World-class educators and researchers who blend academic rigor with real-world industry experience.",
    description:
      "Our 200+ faculty members hold doctorates from IITs, IIMs, and top global universities. They mentor students through research, startups, and career pathways with a student-faculty ratio of 12:1.",
    features: [
      {
        title: "Expert Credentials",
        description:
          "PhD scholars, published researchers, and former executives from Fortune 500 companies.",
        icon: Award,
      },
      {
        title: "Mentorship Model",
        description:
          "Every student is assigned a faculty mentor for academic, research, and career guidance.",
        icon: Users,
      },
      {
        title: "Industry Practitioners",
        description:
          "Visiting faculty from Google, Amazon, and Deloitte bring live case studies to the classroom.",
        icon: Building2,
      },
      {
        title: "Global Collaborations",
        description:
          "Faculty exchange programs with partner universities across 30+ countries.",
        icon: Globe2,
      },
    ],
    highlights: [
      { label: "Faculty Members", value: "200+" },
      { label: "PhD Holders", value: "92%" },
      { label: "Student-Faculty Ratio", value: "12:1" },
      { label: "Industry Experience", value: "15+ yrs avg" },
    ],
    ctaTitle: "Meet Our Departments",
    ctaDescription: "Connect with faculty across engineering, management, and sciences.",
  },
  library: {
    slug: "library",
    title: "Digital Library",
    eyebrow: "Academics",
    subtitle:
      "A 24/7 knowledge hub with digital archives, research databases, and collaborative learning spaces.",
    description:
      "The university library spans 50,000 sq. ft. with over 100,000 volumes, e-journals, and AI-powered research assistants. Students access global databases, quiet study zones, and maker spaces under one roof.",
    features: [
      {
        title: "Digital Resources",
        description:
          "Access IEEE, Springer, JSTOR, and 50+ subscription databases from anywhere on campus.",
        icon: BookOpen,
      },
      {
        title: "Smart Study Zones",
        description:
          "Individual pods, group rooms, and silent halls equipped with high-speed Wi-Fi and displays.",
        icon: Library,
      },
      {
        title: "Research Support",
        description:
          "Librarians assist with citations, systematic reviews, and thesis formatting.",
        icon: Microscope,
      },
      {
        title: "Maker & Media Lab",
        description:
          "3D printing, video production, and archival digitization services for student projects.",
        icon: Building2,
      },
    ],
    highlights: [
      { label: "Print & E-Books", value: "100K+" },
      { label: "Open Hours", value: "24/7" },
      { label: "Study Seats", value: "800+" },
      { label: "Digital Journals", value: "15K+" },
    ],
    ctaTitle: "Visit the Library",
    ctaDescription: "Book a tour or get your student library card activated today.",
  },
};

export const admissionsPages: Record<string, FooterPageConfig> = {
  scholarships: {
    slug: "scholarships",
    title: "Scholarships & Financial Aid",
    eyebrow: "Admissions",
    subtitle:
      "Merit-based and need-based support so talented students can focus on learning, not finances.",
    description:
      "The university offers scholarships covering up to 100% tuition for exceptional candidates. Sports achievers, international students, and economically disadvantaged learners have dedicated funding pathways.",
    features: [
      {
        title: "Merit Scholarships",
        description:
          "Up to 100% tuition waiver based on entrance scores, academic records, and interview performance.",
        icon: Award,
      },
      {
        title: "Sports Quota",
        description:
          "State and national-level athletes receive fee concessions and dedicated training facilities.",
        icon: Trophy,
      },
      {
        title: "Need-Based Aid",
        description:
          "Income-verified grants and flexible payment plans for deserving families.",
        icon: DollarSign,
      },
      {
        title: "International Awards",
        description:
          "Exclusive scholarships for global applicants with TOEFL/IELTS excellence.",
        icon: Globe2,
      },
    ],
    highlights: [
      { label: "Students Awarded", value: "2,400+" },
      { label: "Max Waiver", value: "100%" },
      { label: "Sports Scholarships", value: "120/yr" },
      { label: "Aid Disbursed", value: "₹8 Cr/yr" },
    ],
    ctaTitle: "Apply for Scholarship",
    ctaDescription: "Submit your application and indicate scholarship preference in the form.",
  },
  "fee-structure": {
    slug: "fee-structure",
    title: "Fee Structure",
    eyebrow: "Admissions",
    subtitle:
      "Transparent, competitive tuition with flexible payment options and no hidden charges.",
    description:
      "Our fee structure is designed to reflect the quality of infrastructure, faculty, and global opportunities while remaining accessible. Installment plans, education loans, and corporate sponsorships are available.",
    features: [
      {
        title: "Undergraduate Programs",
        description:
          "B.Tech, BBA, BCA — annual tuition from ₹1.8L with lab and library fees included.",
        icon: GraduationCap,
      },
      {
        title: "Postgraduate Programs",
        description:
          "MBA, MCA, M.Sc — annual tuition from ₹2.4L with global immersion modules.",
        icon: BookOpen,
      },
      {
        title: "Flexible Payment",
        description:
          "Semester-wise installments, EMI partnerships with leading banks, and early-bird discounts.",
        icon: DollarSign,
      },
      {
        title: "Included Benefits",
        description:
          "Wi-Fi, gym, library, career coaching, and industry certification prep at no extra cost.",
        icon: Shield,
      },
    ],
    highlights: [
      { label: "UG Starting At", value: "₹1.8L/yr" },
      { label: "PG Starting At", value: "₹2.4L/yr" },
      { label: "Installment Options", value: "3–6" },
      { label: "Loan Partners", value: "12+" },
    ],
    ctaTitle: "Download Fee Brochure",
    ctaDescription: "Get the complete program-wise fee breakdown for 2026 admissions.",
  },
  "international-students": {
    slug: "international-students",
    title: "International Students",
    eyebrow: "Admissions",
    subtitle:
      "A welcoming global campus with visa support, cultural integration, and world-class education.",
    description:
      "Students from 40+ countries choose us for our English-medium programs, multicultural community, and pathway to global careers. Our International Office handles admissions, housing, and compliance end-to-end.",
    features: [
      {
        title: "Visa & Documentation",
        description:
          "Dedicated visa cell assists with student visa, FRRO registration, and insurance requirements.",
        icon: Globe2,
      },
      {
        title: "English Support",
        description:
          "Foundation courses and writing labs for non-native speakers before program start.",
        icon: BookOpen,
      },
      {
        title: "Global Housing",
        description:
          "International hostels with cuisine options, cultural events, and 24/7 warden support.",
        icon: Home,
      },
      {
        title: "Exchange & Dual Degrees",
        description:
          "Semester abroad at partner universities in UK, USA, Singapore, and Australia.",
        icon: GraduationCap,
      },
    ],
    highlights: [
      { label: "Countries Represented", value: "40+" },
      { label: "Partner Universities", value: "50+" },
      { label: "Intl. Scholarships", value: "₹2 Cr/yr" },
      { label: "Placement Abroad", value: "35%" },
    ],
    ctaTitle: "Start International Application",
    ctaDescription: "Our admissions team responds within 48 hours to global inquiries.",
  },
};

export const campusPages: Record<string, FooterPageConfig> = {
  life: {
    slug: "life",
    title: "Campus Life",
    eyebrow: "Campus",
    subtitle:
      "A vibrant, inclusive community where learning extends beyond the classroom every single day.",
    description:
      "From tech fests and cultural nights to startup pitch days and community service — Campus life is designed to build leaders, creators, and changemakers. Over 50 student clubs and societies welcome every interest.",
    features: [
      {
        title: "Student Clubs",
        description:
          "Robotics, MUN, entrepreneurship, design, music, and 45+ more active societies.",
        icon: Users,
      },
      {
        title: "Cultural Festivals",
        description:
          "Annual Global Fest draws 10,000+ visitors with concerts, hackathons, and art exhibitions.",
        icon: Calendar,
      },
      {
        title: "Innovation Hub",
        description:
          "Incubation center with mentorship, seed funding, and co-working for student startups.",
        icon: Building2,
      },
      {
        title: "Wellness Programs",
        description:
          "Yoga, counseling, peer support, and mental health initiatives across campus.",
        icon: Award,
      },
    ],
    highlights: [
      { label: "Active Clubs", value: "50+" },
      { label: "Annual Events", value: "200+" },
      { label: "Startup Incubated", value: "85+" },
      { label: "Campus Size", value: "120 Acres" },
    ],
    ctaTitle: "Schedule a Campus Tour",
    ctaDescription: "Experience campus life firsthand with a guided student ambassador tour.",
  },
  housing: {
    slug: "housing",
    title: "Student Housing",
    eyebrow: "Campus",
    subtitle:
      "Safe, modern residences with amenities that make campus feel like home.",
    description:
      "Our on-campus hostels accommodate 5,000+ students in AC and non-AC options. Each block features study lounges, recreation rooms, laundry, and 24/7 security with biometric access.",
    features: [
      {
        title: "AC & Non-AC Rooms",
        description:
          "Single, double, and triple sharing options with attached or common bath facilities.",
        icon: Home,
      },
      {
        title: "Dining & Nutrition",
        description:
          "Multi-cuisine mess with vegetarian, vegan, and international meal plans.",
        icon: Building2,
      },
      {
        title: "Safety First",
        description:
          "CCTV surveillance, wardens, anti-ragging committee, and emergency response protocols.",
        icon: Shield,
      },
      {
        title: "Recreation",
        description:
          "Indoor games, TV lounges, gym access, and weekend movie screenings in common halls.",
        icon: Trophy,
      },
    ],
    highlights: [
      { label: "Hostel Capacity", value: "5,000+" },
      { label: "Blocks", value: "12" },
      { label: "Mess Outlets", value: "4" },
      { label: "Security", value: "24/7" },
    ],
    ctaTitle: "Apply for Hostel",
    ctaDescription: "Hostel allocation is confirmed upon enrollment — apply early for preferred blocks.",
  },
  events: {
    slug: "events",
    title: "Events & Activities",
    eyebrow: "Campus",
    subtitle:
      "A year-round calendar of conferences, workshops, fests, and guest lectures.",
    description:
      "The university hosts 200+ events annually — from TED-style talks and industry summits to inter-college sports meets and hackathons. Students organize and lead many events through our Events Council.",
    features: [
      {
        title: "Tech & Hackathons",
        description:
          "48-hour hackathons, AI summits, and coding competitions with industry sponsors.",
        icon: Microscope,
      },
      {
        title: "Leadership Conclaves",
        description:
          "CXO talks, panel discussions, and networking with alumni and recruiters.",
        icon: Users,
      },
      {
        title: "Cultural Calendar",
        description:
          "Dance, drama, literary fests, and international day celebrations every semester.",
        icon: Calendar,
      },
      {
        title: "Sports Meets",
        description:
          "Inter-department tournaments, marathon, and participation in national university games.",
        icon: Trophy,
      },
    ],
    highlights: [
      { label: "Events Per Year", value: "200+" },
      { label: "Guest Speakers", value: "150+" },
      { label: "Hackathon Prizes", value: "₹10L+" },
      { label: "Event Volunteers", value: "1,200+" },
    ],
    ctaTitle: "View Event Calendar",
    ctaDescription: "Stay updated with the latest campus events on our student portal.",
  },
  sports: {
    slug: "sports",
    title: "Sports & Wellness",
    eyebrow: "Campus",
    subtitle:
      "State-of-the-art facilities and coaching for athletes at every level.",
    description:
      "Our Sports Complex features Olympic-standard courts, a swimming pool, fitness center, and professional coaching staff. Students compete at state and national levels with full university support.",
    features: [
      {
        title: "World-Class Facilities",
        description:
          "Cricket ground, football turf, basketball, tennis, badminton, and indoor stadium.",
        icon: Trophy,
      },
      {
        title: "Fitness Center",
        description:
          "Fully equipped gym with trainers, yoga studio, and personalized fitness programs.",
        icon: Award,
      },
      {
        title: "Sports Scholarships",
        description:
          "Fee waivers and kit support for district, state, and national-level athletes.",
        icon: GraduationCap,
      },
      {
        title: "Intramural Leagues",
        description:
          "Department-wise leagues in cricket, football, volleyball, and esports year-round.",
        icon: Users,
      },
    ],
    highlights: [
      { label: "Sports Disciplines", value: "18+" },
      { label: "Coaches", value: "25+" },
      { label: "National Medals", value: "40+" },
      { label: "Pool & Gym", value: "Yes" },
    ],
    ctaTitle: "Join a Sports Team",
    ctaDescription: "Trials are held at the start of each semester — check the sports notice board.",
  },
};

export const legalPages: Record<string, FooterPageConfig> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    eyebrow: "Legal",
    subtitle: "How Global University collects, uses, and protects your personal information.",
    description:
      "We are committed to safeguarding your privacy. This policy explains what data we collect when you visit our website, apply for admission, or use our services, and how we handle it in compliance with applicable laws.",
    features: [
      {
        title: "Information We Collect",
        description:
          "Name, contact details, academic records, payment information, and usage data when you interact with our platforms.",
        icon: Shield,
      },
      {
        title: "How We Use Data",
        description:
          "To process applications, communicate updates, improve services, and comply with regulatory requirements.",
        icon: BookOpen,
      },
      {
        title: "Data Security",
        description:
          "Encryption, access controls, and regular audits protect your information from unauthorized access.",
        icon: Shield,
      },
      {
        title: "Your Rights",
        description:
          "Request access, correction, or deletion of your data by contacting admissions@globaluniversity.edu.",
        icon: Mail,
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Use",
    eyebrow: "Legal",
    subtitle: "Terms governing your use of the Global University website and digital services.",
    description:
      "By accessing this website, you agree to these terms. Please read them carefully before using our content, applying online, or engaging with our digital platforms.",
    features: [
      {
        title: "Acceptable Use",
        description:
          "Use the site for lawful purposes only. Do not attempt unauthorized access or disrupt services.",
        icon: Shield,
      },
      {
        title: "Intellectual Property",
        description:
          "All content, logos, and materials are owned by Global University unless otherwise stated.",
        icon: BookOpen,
      },
      {
        title: "Disclaimer",
        description:
          "Information is provided in good faith; program details and fees are subject to official notifications.",
        icon: Award,
      },
      {
        title: "Governing Law",
        description:
          "These terms are governed by the laws of India. Disputes fall under Ahmedabad jurisdiction.",
        icon: Building2,
      },
    ],
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility",
    eyebrow: "Legal",
    subtitle: "Our commitment to an inclusive digital and physical campus for all users.",
    description:
      "Global University strives to ensure our website and campus are accessible to people with disabilities. We continuously improve based on WCAG guidelines and student feedback.",
    features: [
      {
        title: "Website Accessibility",
        description:
          "Keyboard navigation, alt text, readable contrast, and screen reader compatibility across pages.",
        icon: Globe2,
      },
      {
        title: "Campus Accessibility",
        description:
          "Ramps, elevators, accessible restrooms, and reserved seating in classrooms and auditoriums.",
        icon: Building2,
      },
      {
        title: "Academic Accommodations",
        description:
          "Extended exam time, note-takers, and assistive technology through the Disability Services Office.",
        icon: GraduationCap,
      },
      {
        title: "Report an Issue",
        description:
          "Contact accessibility@globaluniversity.edu for barriers you encounter — we respond within 5 business days.",
        icon: Mail,
      },
    ],
  },
};

export function getAcademicsPage(slug: string) {
  return academicsPages[slug] ?? null;
}

export function getAdmissionsPage(slug: string) {
  return admissionsPages[slug] ?? null;
}

export function getCampusPage(slug: string) {
  return campusPages[slug] ?? null;
}

export function getLegalPage(slug: string) {
  return legalPages[slug] ?? null;
}

export type FooterPageCategory = "academics" | "admissions" | "campus" | "legal";

export function getFooterPage(
  category: FooterPageCategory,
  slug: string
): FooterPageConfig | null {
  switch (category) {
    case "academics":
      return getAcademicsPage(slug);
    case "admissions":
      return getAdmissionsPage(slug);
    case "campus":
      return getCampusPage(slug);
    case "legal":
      return getLegalPage(slug);
    default:
      return null;
  }
}
