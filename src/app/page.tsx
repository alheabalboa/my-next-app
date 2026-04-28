import { HeroSection } from "@/components/home/hero-section";
import { PromosSection } from "@/components/home/promos-section";
import { DoctorIntroSection } from "@/components/home/doctor-intro-section";
import { ServicesGridSection } from "@/components/home/services-grid-section";
import { InsuranceSection } from "@/components/home/insurance-section";
import { FaqSection } from "@/components/home/faq-section";
import { ValuePropsSection } from "@/components/home/value-props-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";
import { LocationHoursSection } from "@/components/home/location-hours-section";
import { TrustBadgesSection } from "@/components/home/trust-badges-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromosSection />
      <DoctorIntroSection />
      <ServicesGridSection />
      <InsuranceSection />
      <ValuePropsSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
      <LocationHoursSection />
      <TrustBadgesSection />
    </>
  );
}
