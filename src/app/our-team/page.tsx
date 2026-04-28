import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { CtaSection } from "@/components/home/cta-section";
import { dentists } from "@/content/team";
import { staticPageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: staticPageSeo["our-team"].title,
  description: staticPageSeo["our-team"].description,
  alternates: { canonical: "/our-team/" },
  openGraph: {
    title: staticPageSeo["our-team"].title,
    description: staticPageSeo["our-team"].description,
    url: "/our-team/",
    type: "article",
  },
  twitter: {
    title: staticPageSeo["our-team"].title,
    description: staticPageSeo["our-team"].description,
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our team"
        title="The people behind your smile"
        intro="Warm, experienced, and never in a hurry — our dentists treat every patient the way we'd want our own family treated."
        crumbs={[{ label: "Home", href: "/" }, { label: "Meet Our Team" }]}
      />
      <Section tone="surface" spacing="md">
        <Container width="wide">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {dentists.map((d, i) => (
              <li
                key={d.slug}
                className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] overflow-hidden"
              >
                <div className="grid sm:grid-cols-[220px_1fr]">
                  <div className="aspect-square sm:aspect-auto bg-[var(--color-brand-100)]">
                    <Image
                      src={d.photo}
                      alt={d.name}
                      width={d.photoWidth}
                      height={d.photoHeight}
                      priority={i === 0}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm uppercase tracking-wider text-[var(--color-brand-500)]">
                      {d.title}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-[var(--color-ink-900)]">
                      {d.name}
                    </h2>
                    <p className="mt-3 text-sm text-[var(--color-ink-500)] leading-relaxed">
                      {d.bio}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
