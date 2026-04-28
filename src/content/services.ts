export type SubService = {
  slug: string;
  title: string;
  short?: string;
};

export type Benefit = {
  title: string;
  body: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  subservices: SubService[];
  benefitsHeading?: string;
  benefits?: Benefit[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    short: "Routine care that keeps your whole family smiling.",
    subservices: [
      {
        slug: "oral-exams-x-rays",
        title: "Oral Exams & X-Rays",
        short:
          "Comprehensive exams with X-rays to catch decay, gum disease, and bite issues early.",
      },
      {
        slug: "dental-cleanings",
        title: "Dental Cleanings",
        short:
          "Thorough professional cleanings that remove plaque and tartar where brushing can't reach.",
      },
      {
        slug: "composite-fillings",
        title: "Composite Fillings",
        short:
          "Tooth-coloured fillings that blend seamlessly to restore decayed or cracked teeth.",
      },
      {
        slug: "oral-cancer-screening",
        title: "Oral Cancer Screening",
        short:
          "Non-invasive screenings of your mouth, throat, and tissues for early warning signs.",
      },
    ],
    benefitsHeading: "The benefits of regular dental care",
    benefits: [
      {
        title: "Prevent bigger dental problems",
        body: "Routine care lets us detect issues early, preventing more complex treatments and keeping your dental health on track.",
      },
      {
        title: "Maintain a clean, healthy smile",
        body: "Professional cleanings and checkups protect against decay, gum disease, and staining — keeping your smile bright and fresh.",
      },
      {
        title: "Build long-term oral health habits",
        body: "We empower you with the tools and knowledge to maintain your dental health between visits.",
      },
      {
        title: "Care for the whole family",
        body: "Book for all ages in one place — your family's dental health is in good hands at our NE Calgary clinic.",
      },
    ],
  },
  {
    slug: "gum-disease-bad-breath",
    title: "Gum Disease & Bad Breath",
    short: "Stop bleeding gums and persistent bad breath at the source.",
    subservices: [
      {
        slug: "periodontal-gum-care",
        title: "Periodontal Care",
        short:
          "Specialized cleanings and maintenance plans to treat and prevent gum disease.",
      },
      {
        slug: "halitosis-treatment",
        title: "Halitosis Treatment",
        short:
          "Targeted treatment that finds and fixes the root cause of chronic bad breath.",
      },
      {
        slug: "scaling-root-planing",
        title: "Scaling & Root Planing",
        short:
          "Non-surgical deep clean below the gum line to stop gum disease before it progresses.",
      },
    ],
    benefitsHeading: "The benefits of treating gum disease & bad breath",
    benefits: [
      {
        title: "Prevent tooth loss",
        body: "Early treatment protects your teeth and gums from irreversible damage.",
      },
      {
        title: "Eliminate persistent odor",
        body: "Remove the bacteria causing bad breath for fresh, clean breath every day.",
      },
      {
        title: "Improve overall health",
        body: "Reducing gum infection lowers risks linked to heart disease and diabetes.",
      },
      {
        title: "Enhance comfort",
        body: "Say goodbye to swollen, bleeding gums and enjoy a healthier mouth.",
      },
    ],
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    short: "Rebuild strength, function, and confidence after damage.",
    subservices: [
      {
        slug: "tooth-coloured-fillings",
        title: "Tooth-Coloured Fillings",
        short:
          "Composite resin fillings that restore damaged teeth while matching your natural shade.",
      },
      {
        slug: "dental-crowns-bridges",
        title: "Dental Crowns & Bridges",
        short:
          "Custom crowns and bridges that rebuild strength, function, and appearance.",
      },
      {
        slug: "dental-dentures",
        title: "Dental Dentures",
        short:
          "Comfortable, natural-looking full and partial dentures to replace missing teeth.",
      },
      {
        slug: "dental-implants",
        title: "Dental Implants",
        short:
          "Permanent titanium implants that restore your smile and preserve your jawbone.",
      },
    ],
    benefitsHeading: "The benefits of restorative dentistry",
    benefits: [
      {
        title: "Restore chewing & speech",
        body: "Regain full function so you can enjoy your favorite foods and speak clearly.",
      },
      {
        title: "Protect natural teeth",
        body: "Crowns and fillings shield weakened teeth from further damage.",
      },
      {
        title: "Boost confidence",
        body: "Replace missing or damaged teeth to improve your smile and self-esteem.",
      },
      {
        title: "Long-lasting results",
        body: "Durable restorations designed to provide lasting oral health benefits.",
      },
    ],
  },
  {
    slug: "cosmetic-care",
    title: "Cosmetic Dentistry",
    short: "Refine, whiten, and reshape your smile with artistry.",
    subservices: [
      {
        slug: "teeth-whitening",
        title: "Teeth Whitening",
        short:
          "Professional in-office whitening that safely lifts stains for immediate, lasting results.",
      },
      {
        slug: "porcelain-veneers",
        title: "Porcelain Veneers",
        short:
          "Custom porcelain shells that correct chips, stains, gaps, and alignment in one treatment.",
      },
      {
        slug: "cosmetic-bonding",
        title: "Cosmetic Bonding",
        short:
          "Tooth-coloured resin that repairs chips, cracks, and gaps in a single visit.",
      },
      {
        slug: "gum-contouring",
        title: "Gum Contouring",
        short:
          "Gentle gum reshaping to balance an uneven gum line or a gummy smile.",
      },
    ],
    benefitsHeading: "The benefits of cosmetic dentistry",
    benefits: [
      {
        title: "Boost your confidence",
        body: "Enjoy a brighter, more attractive smile that makes a lasting impression.",
      },
      {
        title: "Minimally invasive",
        body: "Most cosmetic procedures are gentle and preserve healthy tooth structure.",
      },
      {
        title: "Quick results",
        body: "Many treatments provide immediate improvements you can see right away.",
      },
      {
        title: "Long-lasting enhancements",
        body: "Designed to maintain their beauty with proper care.",
      },
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    short: "Straight teeth for every age, from Invisalign to braces.",
    subservices: [
      {
        slug: "invisalign",
        title: "Invisalign",
        short:
          "Clear, removable aligners that straighten teeth discreetly — for teens and adults.",
      },
      {
        slug: "traditional-braces",
        title: "Traditional Braces",
        short:
          "Reliable metal brackets and wires that correct complex alignment and bite issues.",
      },
    ],
    benefitsHeading: "The benefits of orthodontics",
    benefits: [
      {
        title: "Improved oral health",
        body: "Straighter teeth are easier to clean, reducing the risk of cavities and gum disease.",
      },
      {
        title: "Enhanced smile appearance",
        body: "Boost your confidence with a beautifully aligned smile.",
      },
      {
        title: "Better functionality",
        body: "Correct bite issues that affect chewing and speech.",
      },
      {
        title: "Long-term results",
        body: "Durable solutions that provide lasting improvements in dental health.",
      },
    ],
  },
  {
    slug: "urgent-dental-care",
    title: "Urgent Dental Care",
    short: "Same-day relief when pain or trauma can't wait.",
    subservices: [
      {
        slug: "root-canal-therapy",
        title: "Root Canal Therapy",
        short:
          "Gentle treatment that saves infected teeth by cleaning and sealing the root canal.",
      },
      {
        slug: "wisdom-tooth-extraction",
        title: "Wisdom Tooth Extraction",
        short:
          "Safe, efficient removal of impacted or overcrowded wisdom teeth.",
      },
    ],
    benefitsHeading: "The benefits of urgent dental care",
    benefits: [
      {
        title: "Immediate pain relief",
        body: "Quick treatment to reduce intense dental pain.",
      },
      {
        title: "Prevent further damage",
        body: "Early care helps avoid worsening dental issues.",
      },
      {
        title: "Restore oral function",
        body: "Get back to eating, speaking, and smiling comfortably.",
      },
      {
        title: "Peace of mind",
        body: "Prompt access to a trusted dentist in emergencies.",
      },
    ],
  },
  {
    slug: "additional-care",
    title: "Additional Care",
    short: "Specialty services that round out modern dentistry.",
    subservices: [
      {
        slug: "sedation-dentistry",
        title: "Sedation Dentistry",
        short:
          "Nitrous, oral, or IV sedation to keep anxious patients comfortable during treatment.",
      },
      {
        slug: "tmj-treatment",
        title: "TMJ Treatment",
        short:
          "Personalized plans — oral appliances, therapy, lifestyle changes — to relieve jaw pain and restore function.",
      },
    ],
    benefitsHeading: "The benefits of additional care",
    benefits: [
      {
        title: "Reduced anxiety",
        body: "Sedation dentistry eases fear for a stress-free dental visit.",
      },
      {
        title: "Pain management",
        body: "Effective treatments help control discomfort during and after care.",
      },
      {
        title: "Improved jaw function",
        body: "TMJ therapy restores comfort and mobility to your jaw.",
      },
      {
        title: "Personalized support",
        body: "Tailored dental care that respects your unique health needs.",
      },
    ],
  },
  {
    slug: "childrens-care",
    title: "Children's Care",
    short: "Gentle, preventive dentistry tailored to growing smiles.",
    subservices: [
      {
        slug: "sealants-fluoride",
        title: "Dental Sealants & Fluoride",
        short:
          "Protective coatings and fluoride applications that shield growing teeth from decay.",
      },
      {
        slug: "space-maintainers",
        title: "Space Maintainers",
        short:
          "Custom devices that hold space for permanent teeth after a baby tooth is lost early.",
      },
      {
        slug: "dental-cavities",
        title: "Dental Cavities Treatment",
        short:
          "Tooth-coloured fillings sized and shaped to match little smiles.",
      },
      {
        slug: "preventive-care",
        title: "Preventive Care",
        short:
          "Regular check-ups, cleanings, and hygiene guidance for lifelong healthy smiles.",
      },
    ],
    benefitsHeading: "Benefits of children's dentistry",
    benefits: [
      {
        title: "Early detection",
        body: "Identify issues before they become serious.",
      },
      {
        title: "Cavity prevention",
        body: "Sealants and fluoride defend against tooth decay.",
      },
      {
        title: "Healthy habits",
        body: "Instill lifelong oral care routines from the start.",
      },
      {
        title: "Comfort & trust",
        body: "Positive visits reduce fear and build dental confidence.",
      },
    ],
  },
];

export const findCategory = (slug: string) =>
  serviceCategories.find((c) => c.slug === slug);

export const findSubservice = (categorySlug: string, subSlug: string) => {
  const cat = findCategory(categorySlug);
  if (!cat) return undefined;
  const sub = cat.subservices.find((s) => s.slug === subSlug);
  return sub ? { category: cat, subservice: sub } : undefined;
};
