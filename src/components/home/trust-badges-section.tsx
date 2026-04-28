import { Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

// TODO(Phase 4): swap placeholder chips for real credential logos
// (Alberta Dental Association, CDA, Invisalign Provider, etc.).
const credentials = [
  "Alberta Dental Association",
  "Canadian Dental Association",
  "CDCP Provider",
  "Invisalign Provider",
  "Emergency Care",
  "Sedation Certified",
];

export const TrustBadgesSection = () => (
  <Section tone="soft" spacing="sm">
    <Container width="wide">
      <Reveal>
        <p className="text-center text-xs font-medium uppercase tracking-wider text-[var(--color-ink-500)]">
          Credentials & memberships
        </p>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {credentials.map((c, i) => (
          <Reveal
            key={c}
            delay={80 * i}
            className="h-20 rounded-xl border border-[var(--color-surface-mute)] bg-white flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-ink-700)] text-center px-3 hover:-translate-y-0.5 hover:border-[var(--color-brand-500)] hover:shadow-sm"
          >
            <Award className="h-4 w-4 text-[var(--color-brand-500)] shrink-0" aria-hidden />
            {c}
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);
