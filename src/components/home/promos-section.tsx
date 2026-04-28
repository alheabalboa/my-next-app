import { Sparkles, Smile, Gift, Sun } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const promos = [
  {
    icon: Sparkles,
    price: "$895",
    label: "includes imaging; $355 parts fee applies",
    tag: "Dental Implants from",
  },
  {
    icon: Smile,
    price: "$750",
    label: "Lab fee applies",
    tag: "Implant Crown",
  },
  {
    icon: Gift,
    price: "$50",
    label: "for new patients (for new patient exam with hygiene)",
    tag: "Gift Card",
  },
  {
    icon: Sun,
    price: "Teeth Whitening",
    label: "ValueMed Take-Home Kits",
    tag: "Free Teeth Whitening for Life",
  },
];

export const PromosSection = () => (
  <Section
    tone="brand"
    spacing="sm"
    className="relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-700)] via-[var(--color-brand-500)] to-[var(--color-brand-tonal)]"
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[url('/imagery/hex-pattern.svg')] bg-repeat opacity-40"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
    />
    <Container width="wide" className="relative">
      <Reveal>
        <h2 className="text-center text-2xl sm:text-3xl font-semibold leading-tight uppercase">
          Affordable Dental Promotions Just For You!
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {promos.map(({ icon: Icon, price, label, tag }, i) => (
          <Reveal
            key={price + label}
            delay={100 + i * 80}
            className="group flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] hover:bg-white/15 hover:-translate-y-0.5"
          >
            <span className="h-12 w-12 rounded-full bg-white flex items-center justify-center shrink-0 text-[var(--color-brand-600)] shadow-md">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <div className="leading-none">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                {tag}
              </div>
              <div
                className={`mt-1.5 font-extrabold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)] ${
                  price.startsWith("$")
                    ? "text-4xl sm:text-5xl"
                    : "text-2xl sm:text-3xl"
                }`}
              >
                {price}
              </div>
              <div className="mt-1.5 text-sm font-medium text-white/90">
                {label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </Section>
);
