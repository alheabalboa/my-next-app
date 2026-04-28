import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/layout/page-hero";
import { serviceCategories } from "@/content/services";
import { staticPageSeo } from "@/content/seo";

export const metadata: Metadata = {
  title: staticPageSeo.services.title,
  description: staticPageSeo.services.description,
  alternates: { canonical: "/services/" },
  openGraph: {
    title: staticPageSeo.services.title,
    description: staticPageSeo.services.description,
    url: "/services/",
    type: "article",
  },
  twitter: {
    title: staticPageSeo.services.title,
    description: staticPageSeo.services.description,
  },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Dentistry for every need, all under one roof"
        intro="From routine cleanings to implants, braces, and emergency care — find the right treatment for you or your family."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Section tone="surface" spacing="md">
        <Container width="wide">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <li key={cat.slug}>
                <Reveal delay={80 * i} className="h-full">
                <Link
                  href={`/services/${cat.slug}`}
                  className="group block h-full rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-500)] hover:shadow-md"
                >
                  <h2 className="text-xl font-semibold text-[var(--color-ink-900)]">
                    {cat.title}
                  </h2>
                  <p className="mt-2 text-[var(--color-ink-500)]">{cat.short}</p>
                  <ul className="mt-4 text-sm text-[var(--color-ink-700)] space-y-1">
                    {cat.subservices.slice(0, 4).map((s) => (
                      <li key={s.slug} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-500)]" aria-hidden />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-brand-500)] group-hover:gap-2 transition-all">
                    View {cat.title.toLowerCase()}{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
