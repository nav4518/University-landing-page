import {
  Award,
  BookOpen,
  Brain,
  Cpu,
  GraduationCap,
  Laptop,
  LineChart,
  Microscope,
  type LucideIcon,
} from "lucide-react";

export const programIcons: Record<string, LucideIcon> = {
  "btech-ai": Cpu,
  bba: LineChart,
  bca: Laptop,
  mba: GraduationCap,
  mca: Brain,
  msc: Microscope,
  phd: BookOpen,
  "phd-mgmt": Award,
};

export function getProgramIcon(id: string): LucideIcon {
  return programIcons[id] ?? GraduationCap;
}
