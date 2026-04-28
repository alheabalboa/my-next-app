import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Calendar, Phone, Siren, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { serviceCategories, findCategory } from "@/content/services";
import { clinic } from "@/content/clinic";
import { categorySeo } from "@/content/seo";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

const categoryHeroImage: Record<string, string> = {
  "general-dentistry": "/imagery/categories/general-dentistry.webp",
  "gum-disease-bad-breath": "/imagery/categories/gum-disease-bad-breath.png",
  "restorative-dentistry": "/imagery/categories/restorative-dentistry.png",
  "cosmetic-care": "/imagery/categories/cosmetic-care.png",
  orthodontics: "/imagery/categories/orthodontics.png",
  "urgent-dental-care": "/imagery/categories/urgent-dental-care.png",
  "additional-care": "/imagery/categories/additional-care.png",
  "childrens-care": "/imagery/categories/childrens-care.png",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = findCategory(category);
  if (!cat) return {};
  const seo = categorySeo[cat.slug];
  if (!seo) return { title: cat.title, description: cat.short };
  const url = `/services/${cat.slug}/`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: "article",
    },
    twitter: { title: seo.title, description: seo.description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = findCategory(category);
  if (!cat) notFound();

  return (
    <>
      <PageHero
        eyebrow="Dental services"
        title={cat.title}
        intro={cat.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: cat.title },
        ]}
        backgroundImage={categoryHeroImage[cat.slug]}
        actions={
          <>
            <Button
              href={clinic.bookingUrl}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book Appointment
            </Button>
            <Button href={clinic.phoneHref} size="lg" variant="outline">
              <Phone className="h-4 w-4" aria-hidden />
              Call {clinic.phone}
            </Button>
          </>
        }
      />
      <Section tone="surface" spacing="md">
        <Container width="wide">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cat.subservices.map((sub, i) => (
              <li key={sub.slug}>
                <Reveal delay={80 * i} className="h-full">
                  <Link
                    href={`/services/${cat.slug}/${sub.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand-500)] hover:shadow-md"
                  >
                    <h2 className="text-lg font-semibold text-[var(--color-ink-900)]">
                      {sub.title}
                    </h2>
                    {sub.short && (
                      <p className="mt-2 text-sm text-[var(--color-ink-500)]">
                        {sub.short}
                      </p>
                    )}
                    <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-brand-500)] group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {cat.benefits && cat.benefits.length > 0 && (
        <Section tone="soft" spacing="md">
          <Container width="wide">
            <Reveal className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
                Why it matters
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
                {cat.benefitsHeading ?? `The benefits of ${cat.title.toLowerCase()}`}
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cat.benefits.map(({ title, body }, i) => (
                <Reveal
                  key={title}
                  delay={100 + i * 80}
                  className="rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6"
                >
                  <div className="h-10 w-10 rounded-lg bg-[var(--color-brand-500)] text-white flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--color-ink-900)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-500)]">
                    {body}
                  </p>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="brand" spacing="md">
        <Container>
          <Reveal className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
              <Siren className="h-4 w-4" aria-hidden />
              New Patients &amp; Emergency
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
              We can't wait to meet you
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/90">
              We're accepting new patients every day and hold time for urgent
              cases. {clinic.hoursSummary}.
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
                Call {clinic.phone}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
