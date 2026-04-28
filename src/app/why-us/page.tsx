import type { Metadata } from "next";
import Image from "next/image";
import {
  Stethoscope,
  Sparkles,
  Wrench,
  Baby,
  Siren,
  Heart,
  ShieldCheck,
  Cpu,
  UserCheck,
  UsersRound,
  Wallet,
  MapPin,
  CheckCircle2,
  Calendar,
  Phone,
  BadgeCheck,
  Quote,
  Clock,
  FileText,
  HandCoins,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";
import { staticPageSeo, SITE_URL } from "@/content/seo";

export const metadata: Metadata = {
  title: staticPageSeo["why-us"].title,
  description: staticPageSeo["why-us"].description,
  alternates: { canonical: "/why-us/" },
  openGraph: {
    title: staticPageSeo["why-us"].title,
    description: staticPageSeo["why-us"].description,
    url: "/why-us/",
    type: "article",
  },
  twitter: {
    title: staticPageSeo["why-us"].title,
    description: staticPageSeo["why-us"].description,
  },
};

const heroBadges = [
  { icon: Calendar, label: "Open 7 Days a Week" },
  { icon: ShieldCheck, label: "Direct Insurance Billing" },
  { icon: BadgeCheck, label: "CDCP Accepted" },
  { icon: HandCoins, label: "Free Implant & Invisalign Consults" },
];

const fullService = [
  {
    icon: Stethoscope,
    title: "General & Preventive Dentistry",
    body:
      "Exams, cleanings, x-rays, fluoride, sealants, and oral cancer screening. The day-to-day care that keeps families out of the operatory.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    body:
      "Teeth whitening, porcelain veneers, cosmetic bonding, and gum contouring. Conservative options first, restorative work only when warranted.",
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    body:
      "Tooth-coloured fillings, crowns and bridges, dentures, and dental implants. Designed to look natural and last under normal chewing load.",
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    body:
      "Cleanings, sealants, fluoride, space maintainers, and a calm chair-side approach geared to first visits. Parents are welcome in the room.",
  },
  {
    icon: Siren,
    title: "Same-Day Emergency Care",
    body:
      "Severe pain, broken teeth, knocked-out teeth, abscesses, lost crowns. Urgent slots are reserved every day, including Sunday.",
  },
  {
    icon: Heart,
    title: "Sedation Dentistry",
    body:
      "Local anaesthesia, nitrous oxide, and oral conscious sedation for anxious patients or longer procedures. Discussed in plain language at consultation.",
  },
];

const whyChooseUs = [
  { icon: CheckCircle2, label: "Full-Service Family Dentistry" },
  { icon: Cpu, label: "Modern Imaging & Equipment" },
  { icon: UserCheck, label: "No-Pressure Treatment Plans" },
  { icon: UsersRound, label: "Accepting New Patients" },
  { icon: ShieldCheck, label: "Strict Sterilisation Protocols" },
  { icon: Wallet, label: "Itemised, Transparent Billing" },
  { icon: MapPin, label: "Walk-In Friendly NE Calgary Location" },
];

const neighborhoods = [
  "Rundle",
  "Pineridge",
  "Whitehorn",
  "Castleridge",
  "Temple",
  "Falconridge",
  "Saddle Ridge",
  "Coral Springs",
  "Martindale",
  "Marlborough",
];

const faqs = [
  {
    q: "Is Rundlehorn Smiles Dental accepting new patients in NE Calgary?",
    a: "Yes. Rundlehorn Smiles Dental welcomes new adult and pediatric patients across NE Calgary, including Rundle, Pineridge, Whitehorn, Castleridge, and Temple. New-patient appointments include a full exam, bitewing x-rays, and a written treatment plan. Same-week availability is common, and patients with the Canadian Dental Care Plan can book directly under CDCP coverage.",
  },
  {
    q: "Does Rundlehorn Smiles Dental bill insurance directly in Calgary?",
    a: "Yes. Our front desk handles direct billing for most major Canadian dental plans, including Blue Cross Alberta, Sun Life, Manulife, Canada Life, and Pacific Blue Cross. We also process the Canadian Dental Care Plan (CDCP) for eligible patients. You pay only the portion your plan does not cover, billed at the end of the appointment.",
  },
  {
    q: "What hours is Rundlehorn Smiles Dental open in NE Calgary?",
    a: "Our clinic at 6915 Rundlehorn Dr NE is open Monday through Saturday from 8 AM to 8 PM and Sunday from 10 AM to 5 PM. The extended evening and weekend hours mean Calgary families can book around work and school. Same-day emergency slots are reserved every day of the week.",
  },
  {
    q: "Are consultations free at Rundlehorn Smiles Dental?",
    a: "Consultations are free for three treatments at Rundlehorn Smiles Dental: dental implants, Invisalign clear aligners, and wisdom-tooth removal. The visit covers a clinical assessment, a written treatment plan, and a transparent fee estimate before any work begins. Other consultations are billed at standard exam rates and are usually covered in part by insurance.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/why-us/#faqs`,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function WhyUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Section tone="soft" spacing="lg" className="relative overflow-hidden">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal from="left" className="lg:col-span-7">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
                Family dentist in NE Calgary
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--color-ink-900)] leading-[1.1]">
                Why NE Calgary families choose Rundlehorn Smiles Dental
              </h1>
              <div className="mt-6 max-w-xl rounded-2xl border-l-4 border-[var(--color-brand-500)] bg-white/70 px-5 py-4 text-[var(--color-ink-700)] shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
                  Quick answer
                </p>
                <p className="mt-2 text-base leading-relaxed">
                  Rundlehorn Smiles Dental is a family dental clinic at 6915
                  Rundlehorn Dr NE, led by a team of four general dentists
                  including Dr. Kevin R. Kalin, DDS. We serve Calgary&apos;s Rundle,
                  Pineridge, Whitehorn, and Castleridge communities seven days a
                  week, accept the Canadian Dental Care Plan, and offer free
                  consults for implants, Invisalign, and wisdom-tooth removal.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={clinic.bookingUrl}
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book Appointment
                </Button>
                <Button href={clinic.phoneHref} size="lg" variant="outline">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
              </div>
            </Reveal>
            <Reveal from="right" delay={150} className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-[var(--color-brand-100)]">
                <Image
                  src="/imagery/a-happy-family.jpg"
                  alt="A happy family smiling together"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroBadges.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={300 + i * 80}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-surface-mute)] bg-white px-5 py-4 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-brand-500)]"
              >
                <span className="h-10 w-10 rounded-full bg-[var(--color-brand-500)] text-white flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-medium text-[var(--color-ink-800)]">
                  {label}
                </span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="soft" spacing="md">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              The short version
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              What makes Rundlehorn Smiles Dental different from other NE Calgary clinics?
            </h2>
            <p className="mt-5 text-[var(--color-ink-500)] leading-relaxed">
              In our practice, the three things NE Calgary patients tell us they
              value most are time, transparency, and trust. We open at 8 AM
              Monday through Saturday and stay until 8 PM, with Sunday hours
              from 10 AM to 5 PM. Every quote is itemised before treatment
              starts, and our four general dentists collectively bring training
              from the University of Alberta School of Dentistry, Dalhousie
              University, and an oral and maxillofacial surgery residency at
              Harvard / Mass General Hospital.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href={clinic.bookingUrl}
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book Appointment
              </Button>
              <Button href={clinic.phoneHref} size="lg" variant="outline">
                <Phone className="h-4 w-4" aria-hidden />
                Call {clinic.phone}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="surface" spacing="md">
        <Container width="wide">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Full-service Calgary dentist
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              What dental services does Rundlehorn Smiles Dental offer under one roof?
            </h2>
            <p className="mt-4 text-[var(--color-ink-500)]">
              From routine cleanings to wisdom-tooth surgery and Invisalign, our
              NE Calgary team handles the full range of family dental care. Most
              cases are completed in-house, so referrals across the city are
              the exception, not the rule.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fullService.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={100 + i * 80}
                className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-brand-500)]"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink-900)]">
                  {title}
                </h3>
                <p className="mt-2 text-[var(--color-ink-500)]">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="md">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal from="left">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
                What patients can expect
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
                What does a visit to Rundlehorn Smiles Dental actually look like?
              </h2>
              <p className="mt-4 text-[var(--color-ink-500)]">
                From a clinical standpoint, what patients in Rundle, Pineridge,
                and Whitehorn tell us most often is that they want a dentist
                who explains the why before the what. Every appointment at
                Rundlehorn Smiles Dental starts with a clear walkthrough of the
                findings, the recommended treatment, the cost, and the
                alternative if you would like one. Nothing is sold from the
                chair.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={clinic.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </Button>
                <Button href={clinic.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
              </div>
            </Reveal>
            <Reveal from="right" delay={120}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {whyChooseUs.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-white border border-[var(--color-surface-mute)] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand-500)] hover:shadow-sm"
                  >
                    <Icon
                      className="h-5 w-5 text-[var(--color-brand-500)] shrink-0"
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-[var(--color-ink-800)]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="md">
        <Container>
          <Reveal className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-white border border-[var(--color-surface-mute)] shadow-sm p-8 sm:p-10">
              <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                <Quote className="h-5 w-5" aria-hidden />
              </div>
              <p className="mt-5 text-lg sm:text-xl text-[var(--color-ink-800)] leading-relaxed">
                Patients often ask why we open seven days a week. The honest
                answer is that dental pain does not wait for Monday morning,
                and neither should care. Whether it is a chipped tooth on a
                Saturday afternoon or a Sunday infection, our NE Calgary team
                is set up to see you the same day.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-14 w-14 rounded-full overflow-hidden bg-[var(--color-brand-100)] shrink-0">
                  <Image
                    src="/team/kevin-kalin.jpg"
                    alt="Dr. Kevin R. Kalin"
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-ink-900)]">
                    Dr. Kevin R. Kalin, DDS
                  </p>
                  <p className="text-sm text-[var(--color-ink-500)]">
                    University of Alberta School of Dentistry · Oral &
                    Maxillofacial Surgery Residency, Harvard / Mass General
                    Hospital
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="soft" spacing="md">
        <Container width="wide">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Calgary neighbourhoods we serve
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              Which Calgary neighbourhoods does Rundlehorn Smiles Dental serve?
            </h2>
            <p className="mt-4 text-[var(--color-ink-500)]">
              Our clinic at 6915 Rundlehorn Dr NE sits in the heart of Rundle,
              with most patients coming from a 10-minute radius across NE
              Calgary. Free parking is on-site, and the office is a short drive
              from Sunridge Mall and Peter Lougheed Centre.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {neighborhoods.map((item, i) => (
              <Reveal
                key={item}
                delay={60 * i}
                className="flex items-center gap-2 rounded-xl bg-white border border-[var(--color-surface-mute)] px-4 py-3 hover:-translate-y-0.5 hover:border-[var(--color-brand-500)] hover:shadow-sm"
              >
                <MapPin
                  className="h-4 w-4 text-[var(--color-brand-500)] shrink-0"
                  aria-hidden
                />
                <span className="text-sm font-medium text-[var(--color-ink-800)]">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="md">
        <Container width="wide">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal from="left" className="rounded-2xl bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] p-8">
              <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                <BadgeCheck className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-[var(--color-ink-900)]">
                Does Rundlehorn Smiles Dental accept the CDCP?
              </h2>
              <p className="mt-3 text-[var(--color-ink-700)]">
                Yes. Eligible patients can book under the Canadian Dental Care
                Plan and pay only the portion CDCP does not cover. Our front
                desk verifies coverage before treatment so there are no
                surprises at checkout.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/for-patients#cdcp" variant="primary">
                  Learn more
                </Button>
                <Button href={clinic.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
              </div>
            </Reveal>
            <Reveal from="right" delay={120} className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-8">
              <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                <Siren className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-[var(--color-ink-900)]">
                In pain right now?
              </h2>
              <p className="mt-3 text-[var(--color-ink-500)]">
                Same-day emergency slots are reserved every day, including
                Sunday. Call ahead so we can prep the operatory and shorten
                your wait, or walk in during open hours if you are in acute
                pain.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/dental-emergency/">Emergency care</Button>
                <Button href={clinic.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="soft" spacing="md">
        <Container>
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Frequently asked questions
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              Common questions about Rundlehorn Smiles Dental in NE Calgary
            </h2>
          </Reveal>
          <div className="mt-10 max-w-3xl mx-auto grid gap-4">
            {faqs.map(({ q, a }, i) => (
              <Reveal
                key={q}
                delay={80 * i}
                className="rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--color-ink-900)]">
                  {q}
                </h3>
                <p className="mt-3 text-[var(--color-ink-500)] leading-relaxed">
                  {a}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="brand" spacing="md">
        <Container>
          <Reveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Ready to book with Rundlehorn Smiles Dental?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/90 inline-flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden />
              {clinic.hoursSummary}. Walk-ins welcome for emergencies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="secondary"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book Appointment
              </Button>
              <Button
                href={clinic.phoneHref}
                size="lg"
                variant="ghost"
                className="!text-white hover:!bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {clinic.phone}
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70 inline-flex items-center gap-2">
              <FileText className="h-4 w-4" aria-hidden />
              Free consults for implants, Invisalign, and wisdom-tooth removal.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
