import { serviceCategories } from "./services";

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  /** If set, this link opens a mega menu rather than navigating. */
  kind?: "mega-services" | "dropdown";
  children?: NavChild[];
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/why-us",
    kind: "dropdown",
    children: [
      { label: "Why Us", href: "/why-us" },
      { label: "Meet Our Team", href: "/our-team" },
    ],
  },
  { label: "Emergency", href: "/dental-emergency" },
  { label: "Services", href: "/services", kind: "mega-services" },
  {
    label: "For Patients",
    href: "/for-patients",
    kind: "dropdown",
    children: [
      { label: "Your First Visit", href: "/for-patients#first-visit" },
      { label: "Financial Options", href: "/for-patients#financial-solutions" },
      { label: "Patient Forms", href: "/for-patients#patient-forms" },
      { label: "CDCP", href: "/for-patients#cdcp" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const servicesMegaMenu = serviceCategories.map((cat) => ({
  slug: cat.slug,
  title: cat.title,
  href: `/services/${cat.slug}`,
  items: cat.subservices.map((s) => ({
    title: s.title,
    href: `/services/${cat.slug}/${s.slug}`,
  })),
}));
