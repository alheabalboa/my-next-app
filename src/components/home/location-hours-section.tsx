import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";

export const LocationHoursSection = () => (
  <Section tone="surface" spacing="md">
    <Container width="wide">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <Reveal from="left" className="rounded-2xl bg-[var(--color-surface-soft)] p-8">
          <div className="inline-flex items-center gap-2 text-[var(--color-brand-500)] font-medium">
            <MapPin className="h-5 w-5" aria-hidden />
            Visit us
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
            {clinic.name}
          </h2>
          <p className="mt-2 text-[var(--color-ink-500)]">
            {clinic.address.street}, {clinic.address.city},{" "}
            {clinic.address.region} {clinic.address.postal}
          </p>

          <div className="mt-6 flex items-start gap-3 text-sm text-[var(--color-ink-700)]">
            <Clock className="h-5 w-5 text-[var(--color-brand-500)] shrink-0 mt-0.5" aria-hidden />
            <ul className="flex-1 space-y-1">
              {clinic.hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-4 max-w-xs">
                  <span>{h.label}</span>
                  <span className="text-[var(--color-ink-500)]">{h.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={clinic.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Get directions
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact us
            </Button>
          </div>
        </Reveal>
        <Reveal from="right" delay={120} className="relative min-h-[320px] lg:min-h-full rounded-2xl overflow-hidden bg-[var(--color-brand-100)]">
          <iframe
            title={`${clinic.name} map`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.9441273218454!2d-113.94403762367469!3d51.0811354417542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371630f4c258943%3A0xb69752687b04a9cf!2sRundlehorn%20Smiles%20Dental!5e1!3m2!1sen!2sph!4v1777057402678!5m2!1sen!2sph"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </Reveal>
      </div>
    </Container>
  </Section>
);
