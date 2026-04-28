import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { clinic } from "@/content/clinic";

// Common dental insurance providers for Calgary / Alberta patients.
// Listed as provider names (factual info, not logos). Swap to real logo images
// in public/insurers/ once the client confirms their direct-bill list.
const providers = [
  "Canadian Dental Care Plan",
  "Alberta Blue Cross",
  "Sun Life",
  "Manulife",
  "Canada Life",
  "Green Shield Canada",
  "Desjardins",
  "iA Financial Group",
];

export const InsuranceSection = () => (
  <Section tone="surface" spacing="md">
    <Container width="wide">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <Reveal from="left" className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-600)] px-3 py-1 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Insurance & CDCP
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
            Direct billing for Calgary's most-used plans
          </h2>
          <p className="mt-4 text-[var(--color-ink-500)]">
            We direct-bill most major insurers and are a participating CDCP
            provider. Call us with your plan details and we'll verify your
            coverage before you come in.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/for-patients" variant="primary" size="md">
              See payment options
            </Button>
            <Button href={clinic.phoneHref} variant="outline" size="md">
              Verify my coverage
            </Button>
          </div>
        </Reveal>
        <Reveal from="right" delay={120} className="lg:col-span-7">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {providers.map((p) => (
              <li
                key={p}
                className="h-16 rounded-xl border border-[var(--color-surface-mute)] bg-[var(--color-surface-soft)] flex items-center justify-center text-sm font-medium text-[var(--color-ink-700)] text-center px-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-brand-500)] hover:shadow-sm"
              >
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-[var(--color-ink-500)]">
            Don't see yours? We still accept most other insurers — call and
            we'll confirm.
          </p>
        </Reveal>
      </div>
    </Container>
  </Section>
);
