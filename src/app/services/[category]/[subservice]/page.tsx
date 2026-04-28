import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceSidebar } from "@/components/layout/service-sidebar";
import { CtaSection } from "@/components/home/cta-section";
import { serviceCategories, findSubservice } from "@/content/services";
import { clinic } from "@/content/clinic";
import { subserviceSeo } from "@/content/seo";

type Props = {
  params: Promise<{ category: string; subservice: string }>;
};

export function generateStaticParams() {
  return serviceCategories.flatMap((cat) =>
    cat.subservices.map((sub) => ({
      category: cat.slug,
      subservice: sub.slug,
    }))
  );
}

export const dynamicParams = false;

const subserviceHeroImage: Record<string, string> = {
  "oral-exams-x-rays": "/imagery/sub-services/oral-exams-x-rays.png",
  "dental-cleanings": "/imagery/sub-services/dental-cleanings.webp",
  "composite-fillings": "/imagery/sub-services/composite-fillings.png",
  "oral-cancer-screening": "/imagery/sub-services/oral-cancer-screening.png",
  "periodontal-gum-care": "/imagery/sub-services/periodontal-gum-care.png",
  "halitosis-treatment": "/imagery/sub-services/halitosis-treatment.png",
  "scaling-root-planing": "/imagery/sub-services/scaling-root-planing.png",
  "tooth-coloured-fillings": "/imagery/sub-services/tooth-coloured-fillings.png",
  "dental-crowns-bridges": "/imagery/sub-services/dental-crowns-bridges.png",
  "dental-dentures": "/imagery/sub-services/dental-dentures.png",
  "dental-implants": "/imagery/sub-services/dental-implants.png",
  "teeth-whitening": "/imagery/sub-services/teeth-whitening.png",
  "porcelain-veneers": "/imagery/sub-services/porcelain-veneers.png",
  "cosmetic-bonding": "/imagery/sub-services/cosmetic-bonding.png",
  "gum-contouring": "/imagery/sub-services/gum-contouring.png",
  invisalign: "/imagery/sub-services/invisalign.png",
  "traditional-braces": "/imagery/sub-services/traditional-braces.png",
  "root-canal-therapy": "/imagery/sub-services/root-canal-therapy.png",
  "wisdom-tooth-extraction": "/imagery/sub-services/wisdom-tooth-extraction.png",
  "sedation-dentistry": "/imagery/sub-services/sedation-dentistry.png",
  "tmj-treatment": "/imagery/sub-services/tmj-treatment.png",
  "sealants-fluoride": "/imagery/sub-services/sealants-fluoride.png",
  "space-maintainers": "/imagery/sub-services/space-maintainers.png",
  "dental-cavities": "/imagery/sub-services/dental-cavities.png",
  "preventive-care": "/imagery/sub-services/preventive-care.png",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subservice } = await params;
  const found = findSubservice(category, subservice);
  if (!found) return {};
  const seo = subserviceSeo[found.subservice.slug];
  const fallbackTitle = `${found.subservice.title} NE Calgary | Rundlehorn Smiles Dental`;
  const fallbackDesc = `Learn about ${found.subservice.title.toLowerCase()} at Rundlehorn Smiles Dental — ${found.category.short}`;
  const title = seo?.title ?? fallbackTitle;
  const description = seo?.description ?? fallbackDesc;
  const url = `/services/${category}/${subservice}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
    },
    twitter: { title, description },
  };
}

export default async function SubservicePage({ params }: Props) {
  const { category, subservice } = await params;
  const found = findSubservice(category, subservice);
  if (!found) notFound();

  const { category: cat, subservice: sub } = found;
  const { default: Content, meta } = await import(
    `@/content/services/${category}/${subservice}.mdx`
  );

  return (
    <>
      <PageHero
        eyebrow={cat.title}
        title={sub.title}
        intro={meta?.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: cat.title, href: `/services/${cat.slug}` },
          { label: sub.title },
        ]}
        backgroundImage={subserviceHeroImage[sub.slug]}
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
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <Reveal>
              <article className="max-w-none">
                <Content />
              </article>
            </Reveal>
            <Reveal delay={120}>
              <ServiceSidebar category={cat} currentSubSlug={sub.slug} />
            </Reveal>
          </div>
        </Container>
      </Section>
      <CtaSection />
    </>
  );
}
