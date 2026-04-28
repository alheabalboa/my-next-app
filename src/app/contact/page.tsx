import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/contact-form";
import { clinic } from "@/content/clinic";
import { staticPageSeo } from "@/content/seo";

const mapQuery = encodeURIComponent(
  `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.region} ${clinic.address.postal}`
);
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

export const metadata: Metadata = {
  title: staticPageSeo.contact.title,
  description: staticPageSeo.contact.description,
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: staticPageSeo.contact.title,
    description: staticPageSeo.contact.description,
    url: "/contact/",
    type: "article",
  },
  twitter: {
    title: staticPageSeo.contact.title,
    description: staticPageSeo.contact.description,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Call, email, or stop by — we'll get you seen, often the same day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="surface" spacing="md">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[var(--color-brand-500)] shrink-0 mt-1" aria-hidden />
                  <div>
                    <h2 className="font-semibold text-[var(--color-ink-900)]">
                      Phone
                    </h2>
                    <a
                      href={clinic.phoneHref}
                      className="mt-1 block text-lg text-[var(--color-brand-500)] hover:text-[var(--color-brand-600)]"
                    >
                      {clinic.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[var(--color-brand-500)] shrink-0 mt-1" aria-hidden />
                  <div>
                    <h2 className="font-semibold text-[var(--color-ink-900)]">
                      Email
                    </h2>
                    <a
                      href={clinic.emailHref}
                      className="mt-1 block text-[var(--color-brand-500)] hover:text-[var(--color-brand-600)] break-all"
                    >
                      {clinic.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[var(--color-brand-500)] shrink-0 mt-1" aria-hidden />
                  <div className="flex-1">
                    <h2 className="font-semibold text-[var(--color-ink-900)]">
                      Visit us
                    </h2>
                    <p className="mt-1 text-[var(--color-ink-700)]">
                      {clinic.address.street}
                      <br />
                      {clinic.address.city}, {clinic.address.region}{" "}
                      {clinic.address.postal}
                    </p>
                    <a
                      href={clinic.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-brand-500)] hover:text-[var(--color-brand-600)]"
                    >
                      <Navigation className="h-4 w-4" aria-hidden />
                      Get directions
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[var(--color-brand-500)] shrink-0 mt-1" aria-hidden />
                  <div>
                    <h2 className="font-semibold text-[var(--color-ink-900)]">
                      Hours
                    </h2>
                    <ul className="mt-2 space-y-1 text-sm text-[var(--color-ink-700)]">
                      {clinic.hours.map((h) => (
                        <li key={h.label} className="flex justify-between gap-6 max-w-xs">
                          <span>{h.label}</span>
                          <span className="text-[var(--color-ink-500)]">{h.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-[var(--color-surface-mute)]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${clinic.name} location`}
                  className="block"
                />
              </div>

              <div className="rounded-2xl bg-[var(--color-brand-500)] text-white p-6">
                <h2 className="text-xl font-semibold">Book in under a minute</h2>
                <p className="mt-2 text-white/90 text-sm">
                  Our online booking system lets you pick a time that works and
                  confirm immediately.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    href={clinic.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center"
                  >
                    <Calendar className="h-4 w-4" aria-hidden />
                    Book online
                  </Button>
                  <Button
                    href={clinic.phoneHref}
                    variant="ghost"
                    size="md"
                    className="w-full justify-center !text-white hover:!bg-white/10"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {clinic.phone}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--color-ink-900)]">
                Send us a message
              </h2>
              <p className="mt-2 text-[var(--color-ink-500)]">
                For non-urgent questions, fill in the form and we'll get back to
                you within one business day.
              </p>
            </div>
            <div className="mt-6 max-w-3xl">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
