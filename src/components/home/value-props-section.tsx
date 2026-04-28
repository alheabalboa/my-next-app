import { Heart, Clock, Wallet, Users, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const props = [
  {
    icon: Heart,
    title: "Gentle & Comfortable",
    body: "Sedation options, warm blankets, and a calm pace — anxious patients welcome.",
  },
  {
    icon: Clock,
    title: "Hours That Fit",
    body: "Open every day of the week, with evenings until 8 PM for working families.",
  },
  {
    icon: Wallet,
    title: "Clear Pricing",
    body: "Transparent estimates, flexible payment plans, and CDCP-friendly billing.",
  },
  {
    icon: Users,
    title: "Every Age Welcome",
    body: "From a toddler's first visit to grandparents' implant care — one dental home.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    body: "Comprehensive care from routine cleanings to complex restorative work.",
  },
];

export const ValuePropsSection = () => (
  <Section tone="surface" spacing="md">
    <Container width="wide">
      <Reveal className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
          Why Rundlehorn Smiles
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
          What you can expect
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {props.map(({ icon: Icon, title, body }, i) => (
          <Reveal
            key={title}
            delay={100 + i * 80}
            className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-brand-500)]"
          >
            <div className="h-10 w-10 rounded-lg bg-[var(--color-brand-500)] text-white flex items-center justify-center">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 font-semibold text-[var(--color-ink-900)]">
              {title}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-ink-500)]">{body}</p>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);
