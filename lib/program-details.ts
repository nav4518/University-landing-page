import type { Program } from "@/lib/data";
import { programs } from "@/lib/data";

export interface ProgramDetail extends Program {
  tagline: string;
  overview: string;
  highlights: { title: string; description: string }[];
  curriculum: { term: string; courses: string[] }[];
  careerPaths: string[];
  eligibility: string[];
  intake: string;
  mode: string;
  accreditation: string;
}

const baseDetails: Omit<
  ProgramDetail,
  keyof Program | "tagline" | "overview" | "highlights" | "curriculum" | "careerPaths" | "eligibility"
> = {
  intake: "July 2026",
  mode: "Full-time · On Campus",
  accreditation: "UGC Approved · NEP 2020 Aligned",
};

const detailMap: Record<string, Omit<ProgramDetail, keyof Program>> = {
  "btech-ai": {
    ...baseDetails,
    tagline: "Engineer the intelligence behind tomorrow's industries",
    overview:
      "The B.Tech in AI & Data Science at Global University blends rigorous computer science foundations with hands-on machine learning, cloud computing, and ethical AI. Students work in NVIDIA-powered labs, contribute to research publications, and graduate with portfolios that top tech firms actively recruit.",
    highlights: [
      { title: "AI Innovation Lab", description: "24/7 access to GPU clusters, MLOps pipelines, and industry datasets." },
      { title: "Industry Capstones", description: "Solve real problems with partners like Google, TCS, and startups." },
      { title: "Global Certification", description: "Embedded AWS, Azure, and TensorFlow developer pathways." },
      { title: "Research Track", description: "Optional thesis track with faculty mentorship from semester 5." },
    ],
    curriculum: [
      { term: "Year 1", courses: ["Programming Fundamentals", "Linear Algebra", "Digital Logic", "Communication Skills"] },
      { term: "Year 2", courses: ["Data Structures", "Probability & Statistics", "Database Systems", "OOP & Java"] },
      { term: "Year 3", courses: ["Machine Learning", "Deep Learning", "Cloud Computing", "Computer Vision"] },
      { term: "Year 4", courses: ["NLP & Generative AI", "MLOps", "Capstone Project", "Industry Internship"] },
    ],
    careerPaths: ["ML Engineer", "Data Scientist", "AI Research Analyst", "Cloud AI Architect", "Product Engineer"],
    eligibility: [
      "10+2 with Physics, Chemistry & Mathematics (min. 60%)",
      "Valid Global Aptitude Test (NAT) or JEE Main score",
      "English proficiency for international applicants",
    ],
  },
  bba: {
    ...baseDetails,
    tagline: "Lead businesses that shape global markets",
    overview:
      "Our BBA program develops strategic thinkers equipped for consulting, finance, marketing, and entrepreneurship. Live case studies, startup incubation, and international exchange semesters ensure graduates enter boardrooms — not just classrooms — with confidence.",
    highlights: [
      { title: "Live Consulting Projects", description: "Work with real clients from semester 2 onward." },
      { title: "Venture Studio", description: "Build and pitch startups with seed funding opportunities." },
      { title: "Global Immersion", description: "Optional semester abroad at partner universities." },
      { title: "Executive Mentorship", description: "1:1 guidance from CXOs and alumni leaders." },
    ],
    curriculum: [
      { term: "Year 1", courses: ["Business Economics", "Financial Accounting", "Marketing Basics", "Business Communication"] },
      { term: "Year 2", courses: ["Organizational Behavior", "Business Law", "Operations Management", "Data Analytics for Business"] },
      { term: "Year 3", courses: ["Strategic Management", "Entrepreneurship", "International Business", "Capstone Consulting"] },
    ],
    careerPaths: ["Management Consultant", "Business Analyst", "Marketing Manager", "Financial Analyst", "Entrepreneur"],
    eligibility: [
      "10+2 in any stream with min. 55% aggregate",
      "NAT or valid national entrance exam score",
      "Personal interview for scholarship candidates",
    ],
  },
  bca: {
    ...baseDetails,
    tagline: "Code, ship, and scale software that matters",
    overview:
      "The BCA in Software Engineering prepares full-stack developers fluent in modern frameworks, DevOps, and agile delivery. From hackathons to open-source contributions, students build production-grade applications before graduation.",
    highlights: [
      { title: "Full-Stack Studio", description: "React, Node.js, Python, and mobile development tracks." },
      { title: "DevOps Pipeline", description: "CI/CD, Docker, Kubernetes in dedicated cloud labs." },
      { title: "Open Source Culture", description: "Contributions count toward academic credit." },
      { title: "Placement Bootcamp", description: "6-month structured prep from semester 5." },
    ],
    curriculum: [
      { term: "Year 1", courses: ["C Programming", "Web Fundamentals", "Discrete Mathematics", "Office Productivity"] },
      { term: "Year 2", courses: ["Java & OOP", "Database Management", "Data Structures", "UI/UX Design"] },
      { term: "Year 3", courses: ["Full-Stack Development", "Cloud & DevOps", "Cybersecurity Basics", "Major Project"] },
    ],
    careerPaths: ["Full-Stack Developer", "DevOps Engineer", "Mobile Developer", "QA Automation Engineer", "Technical Lead"],
    eligibility: [
      "10+2 with Mathematics (min. 50%)",
      "NAT or state-level entrance exam",
      "Basic programming aptitude test for direct admission",
    ],
  },
  mba: {
    ...baseDetails,
    tagline: "Transform vision into organizational impact",
    overview:
      "The MBA at Global University is designed for future leaders who blend analytical rigor with emotional intelligence. Case-method teaching, global immersions, and a venture studio create executives ready for C-suite trajectories.",
    highlights: [
      { title: "Harvard-Style Cases", description: "100+ live cases from Fortune 500 and emerging markets." },
      { title: "Leadership Labs", description: "360° feedback, coaching, and board simulation exercises." },
      { title: "Dual Specialization", description: "Choose two tracks: Finance, Marketing, Ops, or Tech." },
      { title: "Global Network", description: "Alumni across 40+ countries and industries." },
    ],
    curriculum: [
      { term: "Semester 1", courses: ["Managerial Economics", "Financial Management", "Marketing Management", "Organizational Leadership"] },
      { term: "Semester 2", courses: ["Business Analytics", "Operations Strategy", "Corporate Finance", "Ethics & Governance"] },
      { term: "Semester 3–4", courses: ["Specialization Electives", "Global Immersion", "Venture Project", "Summer Internship"] },
    ],
    careerPaths: ["Product Manager", "Strategy Consultant", "Investment Banker", "General Manager", "Startup Founder"],
    eligibility: [
      "Bachelor's degree with min. 50% (45% for reserved categories)",
      "CAT / MAT / GMAT / Global MAT score",
      "Minimum 2 years work experience preferred",
    ],
  },
  mca: {
    ...baseDetails,
    tagline: "Architect enterprise systems for the cloud era",
    overview:
      "The MCA program deepens expertise in distributed systems, microservices, and AI-integrated applications. Graduates lead engineering teams at product companies and global IT services firms.",
    highlights: [
      { title: "Cloud-Native Stack", description: "AWS, Azure, and GCP certification pathways included." },
      { title: "Microservices Lab", description: "Build scalable systems with Kafka, Redis, and Kubernetes." },
      { title: "AI Integration", description: "Embed LLMs and ML APIs into enterprise workflows." },
      { title: "Industry Fellowship", description: "Paid fellowship with partner tech firms." },
    ],
    curriculum: [
      { term: "Semester 1", courses: ["Advanced Algorithms", "Advanced DBMS", "Software Engineering", "Cloud Fundamentals"] },
      { term: "Semester 2", courses: ["Microservices Architecture", "DevSecOps", "AI for Developers", "Enterprise Project"] },
    ],
    careerPaths: ["Solutions Architect", "Senior Software Engineer", "Cloud Engineer", "Technical Program Manager", "Engineering Manager"],
    eligibility: [
      "BCA / B.Sc (IT/CS) or equivalent with min. 55%",
      "Mathematics at 10+2 or graduation level",
      "NAT-MCA or valid GATE score accepted",
    ],
  },
  msc: {
    ...baseDetails,
    tagline: "Defend digital ecosystems with forensic precision",
    overview:
      "This M.Sc program trains cyber security specialists in threat hunting, digital forensics, and security operations. Students operate in a simulated SOC environment with real incident response scenarios.",
    highlights: [
      { title: "SOC Simulation", description: "24/7 security operations center for hands-on drills." },
      { title: "Forensics Lab", description: "Chain-of-custody tools and malware analysis workstations." },
      { title: "Certification Prep", description: "CEH, CompTIA Security+ aligned curriculum." },
      { title: "Government Tie-ups", description: "Internships with cyber crime and defense units." },
    ],
    curriculum: [
      { term: "Semester 1", courses: ["Network Security", "Cryptography", "Digital Forensics I", "Cyber Law"] },
      { term: "Semester 2", courses: ["Penetration Testing", "Incident Response", "Malware Analysis", "Research Dissertation"] },
    ],
    careerPaths: ["Security Analyst", "Forensic Investigator", "SOC Manager", "Penetration Tester", "GRC Consultant"],
    eligibility: [
      "B.Sc / BCA / B.Tech in relevant discipline (min. 55%)",
      "Basic networking knowledge assessed at interview",
      "NAT or equivalent entrance score",
    ],
  },
  phd: {
    ...baseDetails,
    tagline: "Push the boundaries of emerging technology research",
    overview:
      "The Ph.D in Emerging Technologies offers interdisciplinary research in AI, quantum computing, IoT, and sustainable tech. Scholars receive publication support, conference funding, and collaboration with international faculty.",
    highlights: [
      { title: "Research Fellowship", description: "Stipend and conference travel grants for qualified scholars." },
      { title: "International Co-supervision", description: "Joint guidance from global university partners." },
      { title: "Patent Support", description: "IP cell assists with filings and commercialization." },
      { title: "Publication Track", description: "Target Q1 journals with dedicated writing workshops." },
    ],
    curriculum: [
      { term: "Year 1", courses: ["Research Methodology", "Advanced Seminar", "Literature Review", "Proposal Defense"] },
      { term: "Year 2–5", courses: ["Independent Research", "Teaching Assistantship", "Thesis & Viva"] },
    ],
    careerPaths: ["University Professor", "Research Scientist", "R&D Director", "Policy Advisor", "Deep Tech Founder"],
    eligibility: [
      "Master's degree with min. 55% (50% for reserved)",
      "NET/SET/GATE qualified or Global Research Aptitude Test",
      "Research proposal and faculty interview mandatory",
    ],
  },
  "phd-mgmt": {
    ...baseDetails,
    tagline: "Advance scholarship in management and organizational science",
    overview:
      "This doctoral program focuses on sustainability, fintech, behavioral economics, and innovation management. Scholars contribute original research with industry and policy impact.",
    highlights: [
      { title: "Mixed Methods Training", description: "Quantitative, qualitative, and experimental research design." },
      { title: "Industry Advisory Board", description: "Quarterly reviews with corporate and policy leaders." },
      { title: "Teaching Excellence", description: "Pedagogy certification for academic career readiness." },
      { title: "Global Conferences", description: "Funded participation in AOM, EURAM, and allied forums." },
    ],
    curriculum: [
      { term: "Year 1", courses: ["Advanced Theory", "Econometrics", "Qualitative Methods", "Colloquium"] },
      { term: "Year 2–5", courses: ["Dissertation Research", "Teaching Practicum", "Publications & Defense"] },
    ],
    careerPaths: ["Professor", "Think Tank Researcher", "Chief Strategy Officer", "Management Consultant", "Policy Maker"],
    eligibility: [
      "MBA / M.Com / M.Sc with research aptitude",
      "UGC-NET (Management) or equivalent",
      "Statement of research intent required",
    ],
  },
};

export function getProgramDetail(slug: string): ProgramDetail | undefined {
  const base = programs.find((p) => p.id === slug);
  const detail = detailMap[slug];
  if (!base || !detail) return undefined;
  return { ...base, ...detail };
}

export function getAllProgramSlugs(): string[] {
  return programs.map((p) => p.id);
}

export type SerializableProgramDetail = Omit<ProgramDetail, "icon">;

export function toSerializableProgram(
  program: ProgramDetail
): SerializableProgramDetail {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { icon, ...data } = program;
  return data;
}

export function getRelatedPrograms(slug: string, limit = 3): Program[] {
  const current = programs.find((p) => p.id === slug);
  if (!current) return programs.slice(0, limit);
  return programs
    .filter((p) => p.id !== slug && p.category === current.category)
    .slice(0, limit);
}
