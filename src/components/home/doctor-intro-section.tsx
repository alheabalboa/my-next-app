import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { dentists } from "@/content/team";

export const DoctorIntroSection = () => {
  const featured = dentists.slice(0, 4);
  return (
    <Section tone="surface" spacing="md">
      <Container>
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <Reveal from="left" className="flex -space-x-6">
            {featured.map((d) => (
              <div
                key={d.slug}
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-4 border-white bg-[var(--color-brand-100)]"
                title={d.name}
              >
                <Image
                  src={d.photo}
                  alt={d.name}
                  width={d.photoWidth}
                  height={d.photoHeight}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Meet your dentists
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              Calgary dentists who love making you smile
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--color-ink-500)]">
              {featured.map((d) => d.name.replace(/^Dr\.\s*/, "Dr. ")).join(", ")}{" "}
              lead a team focused on whole-mouth health — thorough exams, clear
              explanations, and treatment that fits your life.
            </p>
            <Link
              href="/our-team"
              className="mt-5 inline-block font-medium text-[var(--color-brand-500)] hover:text-[var(--color-brand-600)]"
            >
              Meet our team →
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
