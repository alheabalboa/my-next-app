export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  photo: string;
  photoWidth: number;
  photoHeight: number;
  bio: string;
};

// Bios paraphrased from the clinic's public team page; refine with the client
// before launch. Photos downloaded from the live site into public/team/.
export const dentists: TeamMember[] = [
  {
    slug: "kevin-kalin",
    name: "Dr. Kevin R. Kalin",
    title: "Dentist",
    photo: "/team/kevin-kalin.jpg",
    photoWidth: 300,
    photoHeight: 300,
    bio: "DDS, University of Alberta School of Dentistry. Completed an oral and maxillofacial surgery residency at Harvard / Massachusetts General Hospital, with focused experience in wisdom-tooth extraction, bone grafting, and implant placement. Outside of the clinic, enjoys hockey, tennis, basketball, biking, and hiking.",
  },
  {
    slug: "mivea-matta",
    name: "Dr. Mivea Matta",
    title: "General Dentist",
    photo: "/team/mivea-matta.jpg",
    photoWidth: 860,
    photoHeight: 1024,
    bio: "Began practising dentistry in 2012 after graduating in Hyderabad, India. Brings a decade of private and public experience to Calgary, with a focus on patient-centred care. Enjoys hiking, swimming, camping, and painting.",
  },
  {
    slug: "sandeep-dhaliwal",
    name: "Dr. Sandeep Dhaliwal",
    title: "Dentist",
    photo: "/team/sandeep-dhaliwal.jpg",
    photoWidth: 233,
    photoHeight: 300,
    bio: "BDS, Baba Farid University of Health Sciences (Punjab). Certified by the National Dental Examination Board of Canada and registered with the Alberta Dental Association. Known for a warm, patient chair-side manner and an emphasis on continuing education. Family-oriented; enjoys reading and travel.",
  },
  {
    slug: "ebraheem-alhammadi",
    name: "Dr. Ebraheem Alhammadi",
    title: "Dentist",
    photo: "/team/ebraheem-alhammadi.jpg",
    photoWidth: 819,
    photoHeight: 1024,
    bio: "DDS, Dalhousie University. Approaches dentistry as a blend of science, precision, and craft, with a calm, reassuring manner that puts anxious patients at ease. Interests include fitness, travel, and food.",
  },
];
