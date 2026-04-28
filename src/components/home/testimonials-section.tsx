"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

type Review = {
  text: string;
  author: string;
  rating: number;
};

const reviews: Review[] = [
  {
    text:
      "I had a wonderful experience at the dentist today! The whole visit was smooth and comfortable. The front-desk girl, Amrit, was incredibly kind, welcoming, and patient—she made the check-in process so easy. The dentist and staff took great care of my tooth, explained everything clearly, and made me feel very relaxed. I was also surprised and happy to receive a gift card, which was such a thoughtful gesture. Overall, amazing service and a very positive experience. Highly recommend! ⭐️✨",
    author: "Harpeet Kaur",
    rating: 5,
  },
  {
    text:
      "This place is awesome..great people here to help you and comfort you. Dr. Sundeep and Amarita and staff are great. I recommend this place for all your dental needs. I am also with the Canadian Dental Care Plan (CDCP) having this gave me a whole new smile, very happy also receiving my gift cards from them. Everyone here is so helpful.",
    author: "Franca Fiori",
    rating: 5,
  },
  {
    text:
      "We had a great experience. Came in for a cleaning and checkup. Dr. Nancy was super fast and very thorough. We are coming back on Friday to remove wisdom teeth. I will be bringing my family here from now on.",
    author: "Mandy Jandu",
    rating: 5,
  },
  {
    text:
      "Honestly the best dental experience I've had. The staff were welcoming, gentle, and actually listened. The dentist explained everything clearly, worked with so much care, and made the whole appointment surprisingly comfortable. The clinic is clean, professional, and you can tell they take pride in their work. I left feeling confident, well-treated, and grateful. Highly recommend this place to anyone who wants real quality care.",
    author: "Ramish Ahmadi",
    rating: 5,
  },
  {
    text:
      "I had an excellent experience at Rundlehorn Smiles Dental. The staff are friendly, professional, and made the visit very comfortable. The doctor took time to clearly explain the procedure beforehand, which I truly appreciated. Great care and a great team.... highly recommend. See you again next.",
    author: "Mary Grace Dolnuan",
    rating: 5,
  },
];

const AUTOPLAY_MS = 8000;

export const TestimonialsSection = () => {
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
    if (reviews.length <= 1) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || pausedRef.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else scrollByCard(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [scrollByCard]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const multiple = reviews.length > 1;

  return (
    <Section tone="ink" spacing="md">
      <Container width="wide">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--color-brand-300)]">
              What patients say
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
              Reviews from Google
            </h2>
          </Reveal>
          {multiple && (
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Previous review"
                className="h-11 w-11 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Next review"
                className="h-11 w-11 rounded-full border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          )}
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 -mx-4 px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Reviews slider"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocusCapture={pause}
          onBlurCapture={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          {reviews.map((r, i) => (
            <article
              key={i}
              data-slide
              className="shrink-0 snap-start basis-full md:basis-[85%] lg:basis-[70%] mx-auto rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10"
            >
              <Quote className="h-8 w-8 text-[var(--color-brand-300)]" aria-hidden />
              <p className="mt-5 text-lg sm:text-xl text-white/90 italic leading-relaxed">
                {r.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star
                      key={k}
                      className={
                        k < r.rating
                          ? "h-4 w-4 fill-[var(--color-brand-300)] text-[var(--color-brand-300)]"
                          : "h-4 w-4 text-white/20"
                      }
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/80">
                  {r.author}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href="https://www.google.com/maps/place/Rundlehorn+Smiles+Dental/@51.0811354,-113.9440376,560m/data=!3m1!1e3!4m8!3m7!1s0x5371630f4c258943:0xb69752687b04a9cf!8m2!3d51.0811321!4d-113.9414627!9m1!1b1!16s%2Fg%2F11y6bgqsw6?entry=ttu&g_ep=EgoyMDI2MDQyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
            className="!text-white !border-white hover:!bg-white hover:!text-[var(--color-ink-900)]"
          >
            Read all reviews on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </Section>
  );
};
