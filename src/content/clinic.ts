export const clinic = {
  name: "Rundlehorn Smiles Dental",
  shortName: "Rundlehorn Smiles",
  tagline: "Crafting Beautiful Smiles With Care and Precision in Calgary",

  phone: "403-300-2233",
  phoneHref: "tel:+14033002233",
  email: "rundlehornsmilesdental@gmail.com",
  emailHref: "mailto:rundlehornsmilesdental@gmail.com",

  bookingUrl: "https://dental4.me/rundlehornsmilesdental/1",

  address: {
    street: "6915 Rundlehorn Dr NE",
    city: "Calgary",
    region: "AB",
    postal: "T1Y 3V4",
    country: "Canada",
    mapUrl:
      "https://www.google.com/maps/dir//Rundlehorn+Smiles+Dental,+6915+Rundlehorn+Dr+NE,+Calgary,+AB+T1Y+3V4,+Canada/@51.0811354,-113.9440376,560m/data=!3m1!1e3!4m17!1m7!3m6!1s0x5371630f4c258943:0xb69752687b04a9cf!2sRundlehorn+Smiles+Dental!8m2!3d51.0811321!4d-113.9414627!16s%2Fg%2F11y6bgqsw6!4m8!1m0!1m5!1m1!1s0x5371630f4c258943:0xb69752687b04a9cf!2m2!1d-113.9414627!2d51.0811321!3e9?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D",
  },

  hours: [
    { label: "Monday", value: "8:00 AM – 8:00 PM" },
    { label: "Tuesday", value: "8:00 AM – 8:00 PM" },
    { label: "Wednesday", value: "8:00 AM – 8:00 PM" },
    { label: "Thursday", value: "8:00 AM – 8:00 PM" },
    { label: "Friday", value: "8:00 AM – 8:00 PM" },
    { label: "Saturday", value: "8:00 AM – 8:00 PM" },
    { label: "Sunday", value: "10:00 AM – 5:00 PM" },
  ],

  hoursSummary: "Mon–Sat 8 AM–8 PM · Sun 10 AM–5 PM",

  trust: {
    cdcp: "We accept the Canadian Dental Care Plan (CDCP)",
    freeConsults: "Free consultations for Implants, Invisalign & wisdom-tooth removal",
  },
} as const;

export type Clinic = typeof clinic;
