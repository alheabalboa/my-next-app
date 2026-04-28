import type { Metadata } from "next";
import {
  Calendar,
  Wallet,
  FileText,
  BadgeCheck,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/home/cta-section";
import { clinic } from "@/content/clinic";
import { staticPageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: staticPageSeo["for-patients"].title,
  description: staticPageSeo["for-patients"].description,
  alternates: { canonical: "/for-patients/" },
  openGraph: {
    title: staticPageSeo["for-patients"].title,
    description: staticPageSeo["for-patients"].description,
    url: "/for-patients/",
    type: "article",
  },
  twitter: {
    title: staticPageSeo["for-patients"].title,
    description: staticPageSeo["for-patients"].description,
  },
};

const sections = [
  {
    id: "first-visit",
    icon: Calendar,
    title: "Your first visit",
    body: "We'll start with a comprehensive exam, necessary X-rays, and a chat about your dental history and goals. You'll leave with a written treatment plan and no surprises. Plan about 60 minutes for your first appointment.",
    cta: { href: clinic.bookingUrl, label: "Book your first visit", external: true },
  },
  {
    id: "financial-solutions",
    icon: Wallet,
    title: "Financial options",
    body: "We direct-bill most major insurance providers and offer flexible payment plans for larger treatments. Ask us about split-payment options for orthodontics, implants, and full-mouth restorations.",
    cta: { href: clinic.phoneHref, label: "Ask about payment plans" },
  },
  {
    id: "patient-forms",
    icon: FileText,
    title: "Patient forms",
    body: "Save time at your first visit by filling out our new-patient paperwork in advance. Forms are sent by email after booking.",
    cta: { href: clinic.bookingUrl, label: "Book to receive forms", external: true },
  },
  {
    id: "cdcp",
    icon: BadgeCheck,
    title: "Canadian Dental Care Plan (CDCP)",
    body: "We're a participating CDCP provider. If you qualify for CDCP coverage, bring your plan details to your first visit — we'll handle the rest.",
    cta: { href: clinic.phoneHref, label: "Verify my CDCP coverage" },
  },
];

export default function ForPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="For patients"
        title="Everything you need before your visit"
        intro="First-visit info, financial options, patient forms, and CDCP details — all in one place."
        crumbs={[{ label: "Home", href: "/" }, { label: "For Patients" }]}
      />

      <Section tone="surface" spacing="md">
        <Container width="wide">
          <ul className="grid gap-6 md:grid-cols-2">
            {sections.map(({ id, icon: Icon, title, body, cta }) => (
              <li
                key={id}
                id={id}
                className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6 scroll-mt-24"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[var(--color-ink-900)]">
                  {title}
                </h2>
                <p className="mt-3 text-[var(--color-ink-500)]">{body}</p>
                <div className="mt-5">
                  <Button
                    href={cta.href}
                    size="md"
                    variant="outline"
                    {...(cta.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {cta.href.startsWith("tel:") ? (
                      <Phone className="h-4 w-4" aria-hidden />
                    ) : null}
                    {cta.label}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
