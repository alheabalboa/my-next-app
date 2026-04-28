import { clinic } from "./clinic";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const OG_SITE_NAME =
  "Rundlehorn Smiles Dental - The Best Dental Clinic In Calgary";

export const DEFAULT_OG_IMAGE = "/logos/header.webp";

type Seo = { title: string; description: string };

export const homeSeo: Seo = {
  title:
    "Rundlehorn Smiles Dental | Dentist Near Me in Calgary | The Best Dental Clinic in Calgary",
  description:
    "Looking for a trusted dentist near you in Calgary? Rundlehorn Smiles Dental.",
};

export const staticPageSeo: Record<string, Seo> = {
  services: {
    title: "Dental Services NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Comprehensive dental services in NE Calgary — general, cosmetic, restorative, orthodontic, urgent, and children's dentistry under one roof.",
  },
  "why-us": {
    title: "Why Choose Us — Dentist in NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Discover why families choose Rundlehorn Smiles Dental in NE Calgary — accepting new patients, sedation dentistry, direct billing insurance, CDCP accepted, same-day appointments.",
  },
  "dental-emergency": {
    title: "Dental Emergency NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Fast relief dental emergency in NE Calgary. Get urgent dental care from a trusted dentist and dental clinic focused on comfort, speed, and expert care.",
  },
  "our-team": {
    title: "Our Team — Dentist in NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Meet the experienced dental team at Rundlehorn Smiles Dental in NE Calgary — committed to gentle, personalized, family-focused care.",
  },
  "for-patients": {
    title: "For Patients — NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Information for new and existing patients at Rundlehorn Smiles Dental — first appointment guidance, insurance, payment options, and what to expect.",
  },
  contact: {
    title: "Contact Us — Dentist NE Calgary | Rundlehorn Smiles Dental",
    description: `Contact Rundlehorn Smiles Dental at ${clinic.phone} or ${clinic.address.street}, ${clinic.address.city}. Book your appointment with a trusted NE Calgary dental clinic.`,
  },
};

export const categorySeo: Record<string, Seo> = {
  "general-dentistry": {
    title: "General Dentistry NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Comprehensive general dentistry in NE Calgary. Trust our dentist and dental clinic for cleanings, exams, fillings, and total preventive oral care.",
  },
  "gum-disease-bad-breath": {
    title: "Gum Disease & Bad Breath NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Effective gum disease & bad breath care in NE Calgary. Trust our dentist and dental clinic for lasting relief and healthier oral hygiene.",
  },
  "restorative-dentistry": {
    title: "Restorative Dentistry NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Reliable restorative dentistry in NE Calgary. Restore your smile with expert care from a trusted dentist and dental clinic focused on lasting results.",
  },
  "cosmetic-care": {
    title: "Cosmetic Dentistry NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Expert cosmetic dentistry in NE Calgary. Enhance your smile with trusted dental clinic services from a skilled dentist focused on natural, beautiful results.",
  },
  orthodontics: {
    title: "Orthodontics NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Reliable orthodontics in NE Calgary. Straighten your teeth with expert care from a trusted dentist and dental clinic focused on lasting, confident smiles.",
  },
  "urgent-dental-care": {
    title: "Urgent Dental Care NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Trusted urgent dental care in NE Calgary. Fast relief from dental pain by a skilled dentist at a caring dental clinic focused on your comfort and health.",
  },
  "additional-care": {
    title: "Additional Care NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Trusted additional care in NE Calgary at Rundlehorn Smiles Dental. Personalized support from a skilled dentist at a caring clinic focused on your comfort and wellbeing.",
  },
  "childrens-care": {
    title: "Children's Dentistry NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Trusted children's dentistry in NE Calgary. Gentle, expert dental care tailored for kids to promote healthy smiles and positive dental experiences.",
  },
};

export const subserviceSeo: Record<string, Seo> = {
  "oral-exams-x-rays": {
    title: "Oral Exams & X-Rays NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Reliable oral exams & x-rays in NE Calgary. Our dental clinic ensures early detection and personalized care to keep your smile healthy and strong.",
  },
  "dental-cleanings": {
    title: "Dental Cleanings NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Professional dental cleanings in NE Calgary. Our dental clinic delivers gentle, thorough care to keep your teeth healthy and your smile bright.",
  },
  "composite-fillings": {
    title: "Composite Fillings NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Reliable composite fillings in NE Calgary. Our dental clinic offers natural-looking, durable fillings to restore your smile and protect your teeth.",
  },
  "oral-cancer-screening": {
    title: "Oral Cancer Screening NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Preventive oral cancer screening in NE Calgary. Our dental clinic offers early detection for your peace of mind — book with a trusted dentist today.",
  },
  "periodontal-gum-care": {
    title: "Periodontal (Gum) Care NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Comprehensive periodontal (gum) care in NE Calgary. Our dental clinic treats gum disease early with expert care from trusted dentists.",
  },
  "halitosis-treatment": {
    title: "Halitosis Treatment NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Effective halitosis treatment in NE Calgary at Rundlehorn Smiles Dental. Our dental clinic helps eliminate bad breath at the source with personalized care from experienced dentists.",
  },
  "scaling-root-planing": {
    title: "Scaling & Root Planing NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Effective scaling & root planing in NE Calgary. Our dental clinic offers deep cleanings to treat gum disease and protect long-term oral health.",
  },
  "tooth-coloured-fillings": {
    title: "Tooth-Coloured Fillings NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Natural-looking tooth-coloured fillings in NE Calgary. Our dental clinic restores strength and beauty to your smile with precision and personalized care.",
  },
  "dental-crowns-bridges": {
    title: "Dental Crowns & Bridges NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Strong, natural-looking dental crowns & bridges in NE Calgary. Our dental clinic helps restore your smile's beauty and function with care you can trust.",
  },
  "dental-dentures": {
    title: "Dental Dentures NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Reliable, comfortable dentures in NE Calgary. Our dental clinic offers full & partial dentures tailored to restore your confidence and smile function.",
  },
  "dental-implants": {
    title: "Dental Implants NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Secure, lasting dental implants in NE Calgary. Our dental clinic offers expert care to restore missing teeth with natural-looking, functional results.",
  },
  "teeth-whitening": {
    title: "Teeth Whitening NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Professional teeth whitening in NE Calgary. Brighten your smile safely with our trusted dental clinic and experienced dentist team.",
  },
  "porcelain-veneers": {
    title: "Porcelain Veneers NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Transform your smile with porcelain veneers in NE Calgary. Trusted dental clinic offering natural-looking results with experienced cosmetic dentists.",
  },
  "cosmetic-bonding": {
    title: "Cosmetic Bonding NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Professional cosmetic bonding in NE Calgary. Restore your smile with expert dental care at Rundlehorn Smiles Dental's trusted dental clinic.",
  },
  "gum-contouring": {
    title: "Gum Contouring NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Expert gum contouring in NE Calgary. Enhance your smile with precise gum reshaping at Rundlehorn Smiles Dental, your trusted dental clinic.",
  },
  invisalign: {
    title: "Invisalign NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Effective Invisalign in NE Calgary. Straighten your teeth discreetly with Rundlehorn Smiles Dental, your trusted dental clinic for expert Invisalign care.",
  },
  "traditional-braces": {
    title: "Traditional Braces NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Reliable traditional braces in NE Calgary. Rundlehorn Smiles Dental offers expert orthodontic care to give you a confident, straight smile.",
  },
  "root-canal-therapy": {
    title: "Root Canal Therapy NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Effective root canal therapy in NE Calgary. Get relief and save your tooth with expert care at Rundlehorn Smiles Dental. Book your appointment today!",
  },
  "wisdom-tooth-extraction": {
    title: "Wisdom Tooth Extraction NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Safe wisdom tooth extraction in NE Calgary. Gentle care from expert dentists at Rundlehorn Smiles Dental. Schedule your appointment today!",
  },
  "sedation-dentistry": {
    title: "Sedation Dentistry NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Gentle sedation dentistry in NE Calgary. Discover anxiety-free visits with our experienced dental clinic team at Rundlehorn Smiles Dental.",
  },
  "tmj-treatment": {
    title: "TMJ Treatment NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Effective TMJ treatment in NE Calgary. Relieve jaw pain & discomfort with expert care from our trusted NE Calgary dental clinic.",
  },
  "sealants-fluoride": {
    title: "Sealants & Fluoride NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Protective sealants & fluoride in NE Calgary. Strengthen smiles and prevent cavities with expert care at our trusted dental clinic.",
  },
  "space-maintainers": {
    title: "Space Maintainers NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Custom space maintainers in NE Calgary. Protect your child's smile after early tooth loss at our trusted family dental clinic.",
  },
  "dental-cavities": {
    title: "Dental Cavities Treatment NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Gentle dental cavity treatment in NE Calgary. Restore your smile with expert care from our trusted local dental clinic.",
  },
  "preventive-care": {
    title: "Preventive Care NE Calgary | Rundlehorn Smiles Dental",
    description:
      "Comprehensive preventive care in NE Calgary. Protect your smile with expert cleanings, exams, and guidance at our trusted dental clinic.",
  },
};

const dayMap = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
} as const;

const parseHours = (value: string) => {
  const [open, close] = value.split("–").map((s) => s.trim());
  const to24 = (s: string) => {
    const m = s.match(/^(\d+):?(\d*)\s*(AM|PM)$/i);
    if (!m) return s;
    let h = Number(m[1]);
    const min = m[2] || "00";
    const period = m[3].toUpperCase();
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return `${String(h).padStart(2, "0")}:${min.padStart(2, "0")}`;
  };
  return { opens: to24(open), closes: to24(close) };
};

const openingHoursSpecification = clinic.hours.map((h) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: dayMap[h.label as keyof typeof dayMap],
  ...parseHours(h.value),
}));

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: clinic.name,
      description: "The Best Dental Clinic In Calgary",
      inLanguage: "en-CA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: clinic.name,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logos/header.webp`,
      sameAs: [
        "https://www.facebook.com/rundlehornsmilesdental",
        "https://www.instagram.com/rundlehornsmilesdental",
        "https://www.linkedin.com/company/rundlehornsmilesdental",
        "https://www.youtube.com/@rundlehornsmilesdental",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: clinic.phoneHref.replace("tel:", ""),
        contactType: "Customer Service",
        areaServed: "CA",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": ["Dentist", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: clinic.name,
      image: `${SITE_URL}/logos/header.webp`,
      url: `${SITE_URL}/`,
      telephone: clinic.phoneHref.replace("tel:", ""),
      email: clinic.email,
      priceRange: "$$",
      description:
        "Family dental care in NE Calgary. General, cosmetic, restorative, orthodontics, and emergency dentistry. CDCP accepted.",
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.address.street,
        addressLocality: clinic.address.city,
        addressRegion: clinic.address.region,
        postalCode: clinic.address.postal,
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.0811321,
        longitude: -113.9414627,
      },
      openingHoursSpecification,
      areaServed: { "@type": "City", name: "Calgary" },
      keywords: [
        "dentist near me",
        "dentist in Calgary",
        "the best dental clinic in Calgary",
      ],
    },
  ],
};
