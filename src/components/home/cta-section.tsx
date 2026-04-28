import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";

export const CtaSection = () => (
  <Section tone="brand" spacing="md">
    <Container>
      <Reveal className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          See you soon at Rundlehorn Smiles
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-white/90">
          Book online in under a minute, or give us a call — we'll find a time
          that works for your schedule.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href={clinic.bookingUrl}
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
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
      </Reveal>
    </Container>
  </Section>
);
