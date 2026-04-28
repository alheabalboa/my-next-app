import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  backgroundImage?: string;
  actions?: React.ReactNode;
};

export const PageHero = ({
  eyebrow,
  title,
  intro,
  crumbs,
  backgroundImage,
  actions,
}: PageHeroProps) => (
  <Section
    tone="soft"
    spacing="md"
    className={
      backgroundImage
        ? "relative bg-cover bg-[center_top] min-h-[22rem] sm:min-h-[28rem] lg:min-h-[34rem] flex items-center"
        : undefined
    }
    style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
  >
    {backgroundImage && (
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/10"
        aria-hidden
      />
    )}
    <Container width="wide" className="relative w-full">
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-ink-500)]">
            {crumbs.map((c, i) => (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-[var(--color-brand-500)]">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-[var(--color-ink-700)]">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="h-4 w-4" aria-hidden />}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <Reveal>
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-4xl sm:text-5xl font-semibold text-[var(--color-ink-900)] leading-tight max-w-3xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={120}>
          <p className="mt-4 text-lg text-[var(--color-ink-500)] max-w-2xl">{intro}</p>
        </Reveal>
      )}
      {actions && (
        <Reveal delay={240}>
          <div className="mt-6 flex flex-wrap gap-3">{actions}</div>
        </Reveal>
      )}
    </Container>
  </Section>
);
