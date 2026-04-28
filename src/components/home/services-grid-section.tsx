"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { serviceCategories } from "@/content/services";

const imageBySlug: Record<string, { src: string; alt: string }> = {
  "general-dentistry": {
    src: "/imagery/restorative-2.webp",
    alt: "Father and child smiling",
  },
  "gum-disease-bad-breath": {
    src: "/imagery/gum-disease.png",
    alt: "Healthy gums close-up",
  },
  "restorative-dentistry": {
    src: "/imagery/restorative.webp",
    alt: "Older patient smiling confidently",
  },
  "cosmetic-care": {
    src: "/imagery/cosmetic.webp",
    alt: "Young woman smiling",
  },
  orthodontics: {
    src: "/imagery/ortho.png",
    alt: "Patient with orthodontic care",
  },
  "urgent-dental-care": {
    src: "/imagery/urgent.png",
    alt: "Urgent dental care",
  },
  "additional-care": {
    src: "/imagery/additional.png",
    alt: "Specialty dental care",
  },
  "childrens-care": {
    src: "/imagery/children.webp",
    alt: "Child at the dentist",
  },
};

const AUTOPLAY_MS = 4000;

export const ServicesGridSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const pausedRef = useRef(false);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || pausedRef.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByCard(1);
      }
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [scrollByCard]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return (
    <Section tone="soft" spacing="md">
      <Container width="wide">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-500)]">
              Our services
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)]">
              Dentistry for every need, all under one roof
            </h2>
          </Reveal>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous services"
              className="h-11 w-11 rounded-full border border-[var(--color-surface-mute)] bg-white text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)] hover:border-[var(--color-brand-500)] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next services"
              className="h-11 w-11 rounded-full border border-[var(--color-surface-mute)] bg-white text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)] hover:border-[var(--color-brand-500)] disabled:opacity-40 disabled:pointer-events-none flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 -mx-4 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Services slider"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocusCapture={pause}
          onBlurCapture={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          {serviceCategories.map((cat) => {
            const img = imageBySlug[cat.slug];
            return (
              <Link
                key={cat.slug}
                data-slide
                href={`/services/${cat.slug}`}
                className="group shrink-0 snap-start basis-[85%] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6 hover:border-[var(--color-brand-500)] hover:-translate-y-1 hover:shadow-md transition-all duration-200 shadow-sm"
              >
                <div className="h-44 flex items-center justify-center">
                  {img && (
                    img.src.endsWith(".jpg") ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={440}
                        height={529}
                        className="h-full aspect-[440/529] object-cover tooth-mask"
                      />
                    ) : (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={440}
                        height={529}
                        className="h-full w-auto object-contain"
                      />
                    )
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-ink-900)]">
                  {cat.title}
                </h3>
                <p className="mt-2 text-[var(--color-ink-500)]">{cat.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-brand-500)] group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
