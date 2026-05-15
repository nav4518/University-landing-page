export const homeSectionIds = [
  "about",
  "programs",
  "campus",
  "placements",
  "admissions",
  "faq",
] as const;

export type HomeSectionId = (typeof homeSectionIds)[number];

export function getSectionIdFromHref(href: string): HomeSectionId | null {
  const match = href.match(/^\/?#([a-z-]+)$/);
  if (!match) return null;
  const id = match[1] as HomeSectionId;
  return homeSectionIds.includes(id) ? id : null;
}

export function sectionHref(id: HomeSectionId): string {
  return `/#${id}`;
}

export function scrollToSection(
  id: string,
  behavior: ScrollBehavior = "smooth"
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });

  if (typeof window !== "undefined" && window.location.pathname === "/") {
    window.history.replaceState(null, "", sectionHref(id as HomeSectionId));
  }

  return true;
}

export function isNavLinkActive(
  sectionId: HomeSectionId,
  pathname: string,
  activeSection: HomeSectionId | null
): boolean {
  if (pathname === "/") return activeSection === sectionId;

  switch (sectionId) {
    case "programs":
      return (
        pathname.startsWith("/academics") || pathname.startsWith("/programs")
      );
    case "campus":
      return pathname.startsWith("/campus");
    case "admissions":
      return pathname.startsWith("/admissions");
    default:
      return false;
  }
}
