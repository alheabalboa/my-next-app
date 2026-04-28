import Image from "next/image";
import { Calendar, Phone, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";

export const HeroSection = () => (
  <Section tone="soft" spacing="lg" className="relative overflow-hidden">
    <Container width="wide">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal from="left" className="lg:col-span-7">
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
            NE Calgary Family Dentistry
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--color-ink-900)] leading-[1.1]">
            {clinic.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-ink-500)]">
            Comprehensive dental care for every stage of life — from kids' first
            checkups to cosmetic makeovers and same-day emergency visits. Open
            seven days a week, with convenient evening hours.
          </p>
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
          <ul className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--color-ink-700)]">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-[var(--color-brand-500)]" aria-hidden />
              CDCP accepted
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-[var(--color-brand-500)]" aria-hidden />
              Free consults · Implants, Invisalign, wisdom teeth
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--color-brand-500)]" aria-hidden />
              {clinic.hoursSummary}
            </li>
          </ul>
        </Reveal>
        <Reveal from="right" delay={150} className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-[var(--color-brand-100)]">
            <Image
              src="/imagery/mother-and-child.jpg"
              alt="Mother and child smiling at Rundlehorn Smiles Dental"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Container>
  </Section>
);
