import CategoryHub from "@/sections/pages/CategoryHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus | Global University",
  description:
    "Campus life, housing, events, and sports at Global University.",
};

const links = [
  {
    label: "Campus Life",
    href: "/campus/life",
    description: "50+ clubs, cultural fests, innovation hub, and wellness programs.",
  },
  {
    label: "Student Housing",
    href: "/campus/housing",
    description: "Modern hostels with dining, recreation, and 24/7 security.",
  },
  {
    label: "Events & Activities",
    href: "/campus/events",
    description: "200+ annual events including hackathons, conclaves, and cultural fests.",
  },
  {
    label: "Sports & Wellness",
    href: "/campus/sports",
    description: "Olympic-standard facilities, coaching, and intramural leagues.",
  },
];

export default function CampusPage() {
  return (
    <CategoryHub
      eyebrow="Campus"
      title="Campus Overview"
      subtitle="Experience vibrant student life, modern housing, exciting events, and world-class sports."
      links={links}
    />
  );
}
