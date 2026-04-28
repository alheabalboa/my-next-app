import type { Metadata } from "next";
import Image from "next/image";
import {
  Flame,
  Bone,
  Smile,
  AlertTriangle,
  Droplet,
  Activity,
  Puzzle,
  Shield,
  Zap,
  Heart,
  ShieldCheck,
  BadgeCheck,
  Phone,
  Calendar,
  Clock,
  MapPin,
  Siren,
  Navigation,
  Quote,
  Stethoscope,
  Timer,
  Banknote,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";
import { staticPageSeo, SITE_URL } from "@/content/seo";

export const metadata: Metadata = {
  title: staticPageSeo["dental-emergency"].title,
  description: staticPageSeo["dental-emergency"].description,
  alternates: { canonical: "/dental-emergency/" },
  openGraph: {
    title: staticPageSeo["dental-emergency"].title,
    description: staticPageSeo["dental-emergency"].description,
    url: "/dental-emergency/",
    type: "article",
  },
  twitter: {
    title: staticPageSeo["dental-emergency"].title,
    description: staticPageSeo["dental-emergency"].description,
  },
};

const heroBadges = [
  { icon: Clock, label: "Same-Day Emergency Slots" },
  { icon: Calendar, label: "Open 7 Days a Week" },
  { icon: BadgeCheck, label: "CDCP Accepted" },
  { icon: ShieldCheck, label: "Direct Insurance Billing" },
];

const emergencyTypes = [
  {
    icon: Flame,
    title: "Severe Toothache",
    body: "Throbbing or persistent pain that wakes you up or makes eating difficult. Often signals an infection that worsens without treatment.",
  },
  {
    icon: Bone,
    title: "Broken or Fractured Tooth",
    body: "Cracked, chipped, or split teeth need quick care to prevent the nerve from being exposed and the damage from reaching the root.",
  },
  {
    icon: Smile,
    title: "Knocked-Out Tooth",
    body: "An adult tooth knocked out cleanly has the best chance of survival when reimplanted within 60 minutes. Time matters.",
  },
  {
    icon: AlertTriangle,
    title: "Loose or Dislodged Tooth",
    body: "A tooth that has shifted or partially dislodged after trauma can usually be saved if it is splinted promptly.",
  },
  {
    icon: Droplet,
    title: "Bleeding Gums or Soft Tissue",
    body: "Gum or lip bleeding that does not stop within 15 minutes of pressure, or bleeding from a recent extraction site, needs to be checked.",
  },
  {
    icon: Activity,
    title: "Abscess or Facial Swelling",
    body: "A painful bump on the gum or visible facial swelling points to infection. These cases are seen the same day at our NE Calgary clinic.",
  },
  {
    icon: Puzzle,
    title: "Lost Filling or Crown",
    body: "Recement or replacement is straightforward when handled quickly. Waiting risks fracture of the underlying tooth.",
  },
  {
    icon: Shield,
    title: "Jaw Injury or Trauma",
    body: "Suspected jaw fracture, dislocation, or trauma after a fall or sports injury should be evaluated the same day.",
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Same-day appointments, seven days a week",
    body: "Pain rarely sticks to weekday hours. Our NE Calgary clinic keeps urgent slots open every day from 8 AM to 8 PM, with Sunday hours from 10 AM to 5 PM.",
  },
  {
    icon: BadgeCheck,
    title: "Surgical experience for serious cases",
    body: "Dr. Kevin R. Kalin completed an oral and maxillofacial surgery residency at Harvard / Mass General. Abscesses, fractures, and complex extractions are handled in-house.",
  },
  {
    icon: Heart,
    title: "Calm, unhurried care under stress",
    body: "Local anaesthesia, nitrous oxide, and oral conscious sedation are available. The plan is walked through in plain language before any treatment starts.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted across NE Calgary",
    body: "We treat emergency patients from Rundle, Pineridge, Whitehorn, Castleridge, Temple, Falconridge, Saddle Ridge, and Coral Springs. Many cases come from existing-patient referrals.",
  },
];

const triageSteps = [
  {
    icon: Smile,
    title: "Knocked-out adult tooth",
    body: "Pick up the tooth by the crown (the chewing surface), not the root. Rinse gently in milk or saline if dirty. Place it back in the socket if you can, or hold it in milk or between cheek and gum. Get to the clinic within 60 minutes.",
  },
  {
    icon: Bone,
    title: "Broken or chipped tooth",
    body: "Save any fragments in a clean container with milk or saliva. Rinse the mouth with warm water. Apply a cold compress to the cheek to reduce swelling. Avoid chewing on the affected side until you are seen.",
  },
  {
    icon: Flame,
    title: "Severe toothache",
    body: "Rinse with warm salt water. Floss gently to remove any trapped food. Take ibuprofen if you can tolerate it. Do not place an aspirin tablet directly on the gum, as this can burn the soft tissue.",
  },
  {
    icon: Activity,
    title: "Abscess with facial swelling",
    body: "Keep your head elevated, apply a cold compress, and call us right away. Do not apply heat to a swelling. If you have difficulty breathing or swallowing, go to the nearest Calgary emergency room first.",
  },
  {
    icon: Puzzle,
    title: "Lost filling or crown",
    body: "Keep the crown if you have it and bring it to the appointment. Avoid chewing on that side. Do not glue it back yourself with household adhesives, as some are toxic and can damage the tooth.",
  },
];

const benefits = [
  { icon: Timer, label: "Stops pain fast" },
  { icon: Shield, label: "Prevents permanent damage" },
  { icon: Smile, label: "Saves teeth that can be saved" },
  { icon: Banknote, label: "Lower cost than delayed treatment" },
];

const faqs = [
  {
    q: "How fast can Rundlehorn Smiles Dental see me for a dental emergency in NE Calgary?",
    a: "Same-day emergency slots are reserved every day at our 6915 Rundlehorn Dr NE clinic. Most emergency callers are seated within two to four hours of phoning, and patients in severe pain are prioritised. Our hours are Monday to Saturday 8 AM to 8 PM and Sunday 10 AM to 5 PM. Outside those hours, leave a voicemail and the next morning's first slot is held for you.",
  },
  {
    q: "Does Rundlehorn Smiles Dental accept walk-in dental emergencies?",
    a: "Yes. Walk-ins are welcome during all open hours at our NE Calgary clinic. Calling 403-300-2233 ahead of arriving is helpful so the operatory is prepped and your wait is shorter, but no appointment is required if you are in acute pain or have had a tooth knocked out. CDCP and most major dental insurance plans are accepted.",
  },
  {
    q: "What does an emergency dental visit cost at Rundlehorn Smiles Dental?",
    a: "Emergency exam and stabilisation visits at Rundlehorn Smiles Dental are billed under the Alberta Dental Association Fee Guide. The most common emergency visit (a limited exam plus one x-ray) is typically covered in part by Canadian dental insurance, and we accept the Canadian Dental Care Plan for eligible patients. A written estimate is provided before any treatment begins.",
  },
  {
    q: "Should I go to the hospital or to a dentist for a dental emergency in Calgary?",
    a: "Most dental emergencies, including broken teeth, severe pain, abscesses without breathing problems, and lost crowns, are best treated at a dental clinic. Hospitals can manage pain but rarely repair the tooth. Go to a Calgary emergency room if you have facial swelling that affects breathing or swallowing, uncontrolled bleeding, or a jaw injury from significant trauma.",
  },
  {
    q: "Will Rundlehorn Smiles Dental save a knocked-out tooth?",
    a: "An adult tooth knocked out cleanly has the best chance of survival when reimplanted within 60 minutes. Hold the tooth by the crown, keep it moist in milk or between your cheek and gum (do not scrub it), and head to our NE Calgary clinic at 6915 Rundlehorn Dr NE. Call 403-300-2233 on the way so the operatory is ready.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/dental-emergency/#faqs`,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function EmergencyPage() {
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
                Same-day emergency dentistry
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--color-ink-900)] leading-[1.1]">
                Same-Day Dental Emergency Care in NE Calgary
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-ink-700)]">
                Rundlehorn Smiles Dental keeps same-day emergency slots open
                at 6915 Rundlehorn Dr NE seven days a week. Our team,
                including Dr. Kevin R. Kalin, DDS (Harvard / Mass General
                oral and maxillofacial surgery residency), treats severe
                toothaches, knocked-out teeth, broken teeth, and abscesses
                for patients across Calgary&apos;s Rundle, Pineridge, Whitehorn,
                and Castleridge communities. Walk-ins welcome. CDCP accepted.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={clinic.phoneHref} size="lg">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
                <Button
                  href={clinic.bookingUrl}
                  size="lg"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4" aria-hidden />
                  Book urgent visit
                </Button>
              </div>
            </Reveal>
            <Reveal from="right" delay={150} className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-[var(--color-brand-100)]">
                <Image
                  src="/imagery/man-with-toothache.jpg"
                  alt="Man holding his jaw in pain"
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

      <Section tone="surface" spacing="md">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Defining a dental emergency
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              What counts as a dental emergency in NE Calgary?
            </h2>
            <p className="mt-5 text-[var(--color-ink-500)] leading-relaxed">
              A dental emergency is any oral problem that, if left until a
              routine appointment, would likely cause permanent damage,
              prolonged pain, or the loss of a tooth. The most common cases we
              see at Rundlehorn Smiles Dental are severe toothaches, broken or
              knocked-out teeth, dental abscesses with facial swelling, and
              lost crowns or fillings. If you are unsure, call 403-300-2233 and
              our team will triage in under two minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={clinic.phoneHref} size="lg">
                <Phone className="h-4 w-4" aria-hidden />
                Call {clinic.phone}
              </Button>
              <Button
                href={clinic.bookingUrl}
                size="lg"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="soft" spacing="md">
        <Container width="wide">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Cases we handle
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              Which dental emergencies does Rundlehorn Smiles Dental treat?
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {emergencyTypes.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={100 + i * 70}
                className="rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-brand-500)]"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink-900)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-500)]">{body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="md">
        <Container width="wide">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Before you arrive
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              What should I do on the way to your NE Calgary clinic?
            </h2>
            <p className="mt-4 text-[var(--color-ink-500)]">
              Quick first steps from Dr. Kalin and the Rundlehorn Smiles Dental
              team. When in doubt, call 403-300-2233 and we will guide you
              through it.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 max-w-5xl mx-auto">
            {triageSteps.map(({ icon: Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={80 * i}
                className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6 flex gap-4 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-brand-500)]"
              >
                <span className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-ink-900)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-500)] leading-relaxed">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="soft" spacing="md">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal from="left">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
                Why call us
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
                Why call Rundlehorn Smiles Dental for emergency care?
              </h2>
              <p className="mt-4 text-[var(--color-ink-500)]">
                Rundlehorn Smiles Dental is built for urgent cases. Surgical
                training, evening and Sunday hours, sedation options, and CDCP
                acceptance mean Calgary patients get fast relief without a
                hospital trip or a wallet-shaped surprise.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={clinic.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
                <Button
                  href={clinic.bookingUrl}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </Button>
              </div>
            </Reveal>
            <Reveal from="right" delay={120}>
              <ul className="grid gap-3">
                {whyChooseUs.map(({ icon: Icon, title, body }) => (
                  <li
                    key={title}
                    className="rounded-2xl bg-white border border-[var(--color-surface-mute)] p-5 flex gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-brand-500)]"
                  >
                    <span className="h-10 w-10 rounded-full bg-[var(--color-brand-500)] text-white flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--color-ink-900)]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-ink-500)]">
                        {body}
                      </p>
                    </div>
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
                In our experience, patients who hesitate to call usually wait
                until the pain is bad enough to keep them awake. By that
                stage, what would have been a one-visit fix often becomes root
                canal therapy or extraction. If you are debating whether your
                situation is an emergency, call us. The triage call is free,
                and we will tell you honestly whether you need to come in
                today or in the morning.
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
                    Oral & Maxillofacial Surgery Residency, Harvard / Mass
                    General Hospital
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
              Why timing matters
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              Why does same-day emergency care matter?
            </h2>
            <p className="mt-4 text-[var(--color-ink-500)]">
              Most dental emergencies get worse with time, not better. A
              fracture spreads. An infection spreads. A knocked-out tooth has a
              60-minute window for the best chance of being saved. Same-day
              care at Rundlehorn Smiles Dental shortens recovery, lowers cost,
              and protects the teeth you have left.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={80 * i}
                className="flex items-center gap-2 rounded-xl bg-white border border-[var(--color-surface-mute)] px-4 py-3 hover:-translate-y-0.5 hover:border-[var(--color-brand-500)] hover:shadow-sm"
              >
                <Icon
                  className="h-4 w-4 text-[var(--color-brand-500)] shrink-0"
                  aria-hidden
                />
                <span className="text-sm font-medium text-[var(--color-ink-800)]">
                  {label}
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
                CDCP-accepted emergency care
              </h2>
              <p className="mt-3 text-[var(--color-ink-700)]">
                Eligible Calgary patients can book emergency visits under the
                Canadian Dental Care Plan. Coverage is verified before
                treatment so cost is clear, not a surprise on the way out.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/for-patients#cdcp">Learn about CDCP</Button>
                <Button href={clinic.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {clinic.phone}
                </Button>
              </div>
            </Reveal>
            <Reveal from="right" delay={120} className="rounded-2xl bg-white border border-[var(--color-surface-mute)] p-8">
              <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-[var(--color-ink-900)]">
                Find our NE Calgary emergency clinic
              </h2>
              <p className="mt-3 text-[var(--color-ink-500)]">
                Rundlehorn Smiles Dental is located at {clinic.address.street}
                {" "}in Rundle, with free on-site parking and a short drive
                from Sunridge Mall and Peter Lougheed Centre. Open seven days
                a week.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  href={clinic.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Get directions
                </Button>
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
              Common questions about emergency dental care in NE Calgary
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 max-w-3xl mx-auto">
            <ul className="divide-y divide-[var(--color-surface-mute)] rounded-2xl bg-white border border-[var(--color-surface-mute)] shadow-sm">
              {faqs.map(({ q, a }, i) => (
                <li key={q}>
                  <details className="group" open={i === 0}>
                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                      <span className="text-base sm:text-lg font-medium text-[var(--color-ink-900)]">
                        {q}
                      </span>
                      <ChevronDown
                        className="h-5 w-5 text-[var(--color-ink-500)] group-open:rotate-180 transition-transform shrink-0"
                        aria-hidden
                      />
                    </summary>
                    <div className="px-6 pb-5 text-[var(--color-ink-500)] leading-relaxed">
                      {a}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <Section tone="brand" spacing="md">
        <Container>
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
              <Siren className="h-4 w-4" aria-hidden />
              Don&apos;t wait. Relief starts now.
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
              In pain? Call us and we will see you today.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/90 leading-relaxed">
              You don&apos;t have to wait it out. Our friendly team is ready to
              welcome you today — call now or book online, and we&apos;ll take
              care of the rest. Walk-ins welcome, seven days a week.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={clinic.phoneHref} size="lg" variant="secondary">
                <Phone className="h-5 w-5" aria-hidden />
                Call {clinic.phone}
              </Button>
              <Button
                href={clinic.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="ghost"
                className="!text-white hover:!bg-white/10"
              >
                <Calendar className="h-4 w-4" aria-hidden />
                Book urgent visit
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70 inline-flex items-center gap-2">
              <Stethoscope className="h-4 w-4" aria-hidden />
              CDCP accepted. Direct billing on most major Canadian dental plans.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
