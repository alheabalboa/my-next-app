import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Are you accepting new patients?",
    a: "Yes — we welcome new patients of all ages, every day of the week.",
  },
  {
    q: "Do you accept the Canadian Dental Care Plan (CDCP)?",
    a: "Yes. We're a CDCP-participating provider and can help you understand what's covered.",
  },
  {
    q: "Do you handle dental emergencies?",
    a: "Yes. Call us at " + clinic.phone + " — we hold time every day for urgent cases like broken teeth, sudden pain, or lost crowns.",
  },
  {
    q: "What are your hours?",
    a: clinic.hoursSummary + " — including evenings and Sundays.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes — consultations for dental implants, Invisalign, and wisdom-tooth removal are always complimentary.",
  },
  {
    q: "Where are you located?",
    a: `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.region} ${clinic.address.postal} — in NE Calgary.`,
  },
  {
    q: "Do you see children?",
    a: "Absolutely. We have a dedicated children's care program covering preventive care, sealants, and space maintainers.",
  },
  {
    q: "Do you offer sedation for anxious patients?",
    a: "Yes. Ask us about our sedation dentistry options during your booking call — we'll find a comfort level that works for you.",
  },
];

export const FaqSection = () => (
  <Section tone="soft" spacing="md">
    <Container>
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
          Questions
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
          Frequently asked
        </h2>
      </Reveal>
      <Reveal delay={120} className="mt-10">
      <ul className="divide-y divide-[var(--color-surface-mute)] rounded-2xl bg-white border border-[var(--color-surface-mute)] shadow-sm">
        {faqs.map((f) => (
          <li key={f.q}>
            <details className="group">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-base sm:text-lg font-medium text-[var(--color-ink-900)]">
                  {f.q}
                </span>
                <ChevronDown
                  className="h-5 w-5 text-[var(--color-ink-500)] group-open:rotate-180 transition-transform shrink-0"
                  aria-hidden
                />
              </summary>
              <div className="px-6 pb-5 text-[var(--color-ink-500)]">{f.a}</div>
            </details>
          </li>
        ))}
      </ul>
      </Reveal>
    </Container>
  </Section>
);
