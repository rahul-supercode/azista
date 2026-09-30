/**
 * Header navigation. An item is either a link (`href`) or a dropdown (`items`).
 */
export const mainNav = [
  { label: "Missions", href: "/missions" },
  {
    label: "EO payloads",
    items: [
      { label: "Fineview", href: "/eo-payloads/fineview" },
      { label: "Vista", href: "/eo-payloads/vista" },
    ],
  },
  {
    label: "Satellite Bus",
    items: [
      { label: "Overview", href: "/satellite-bus" },
      { label: "Subsystems", href: "/satellite-bus/subsystems" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const headerCta = {
  label: "Build Your Mission",
  href: "/build-your-mission",
};

/** Footer link columns (Figma: Group 1000011438). */
export const footerNav = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "News & Events", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "EO Payloads",
    links: [
      { label: "Fineview Series", href: "/eo-payloads/fineview" },
      { label: "Vista Series", href: "/eo-payloads/vista" },
    ],
  },
  {
    title: "Satellite Bus",
    links: [
      { label: "Platform", href: "/satellite-bus" },
      { label: "Subsystems", href: "/satellite-bus/subsystems" },
      { label: "Structures", href: "/satellite-bus/structures" },
    ],
  },
  {
    title: "Missions",
    links: [
      { label: "Missions", href: "/missions" },
      { label: "Start your mission", href: "/build-your-mission" },
    ],
  },
];

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  {
    label: "Corporate & Compliance Information",
    href: "/corporate-compliance",
  },
];

// TODO: add the real profile URLs; until then the icons show but aren't links.
export const socialLinks = [
  { label: "LinkedIn", icon: "linkedin", href: null },
  { label: "YouTube", icon: "youtube", href: null },
];
