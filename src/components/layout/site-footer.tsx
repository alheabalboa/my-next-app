import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { clinic } from "@/content/clinic";
import { serviceCategories } from "@/content/services";

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink-900)] text-white mt-auto">
      <Container width="wide" className="py-16">
        <Link href="/" className="inline-block mb-10" aria-label={clinic.name}>
          <Image
            src="/logos/footer.webp"
            alt={clinic.name}
            width={140}
            height={120}
            className="h-24 w-auto brightness-0 invert"
          />
        </Link>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--color-brand-500)]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {serviceCategories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services/${cat.slug}`} className="hover:text-[var(--color-brand-300)]">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--color-brand-500)]">Practice</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-[var(--color-brand-300)]">Home</Link></li>
              <li><Link href="/why-us" className="hover:text-[var(--color-brand-300)]">Why Us</Link></li>
              <li><Link href="/our-team" className="hover:text-[var(--color-brand-300)]">Meet Our Team</Link></li>
              <li><Link href="/for-patients" className="hover:text-[var(--color-brand-300)]">For Patients</Link></li>
              <li><Link href="/dental-emergency" className="hover:text-[var(--color-brand-300)]">Dental Emergency</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-brand-300)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-[var(--color-brand-500)]">Office</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <a
                  href={clinic.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-brand-300)]"
                >
                  {clinic.address.street}
                  <br />
                  {clinic.address.city}, {clinic.address.region} {clinic.address.postal}
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <a href={clinic.phoneHref} className="hover:text-[var(--color-brand-300)]">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" aria-hidden />
                <a href={clinic.emailHref} className="hover:text-[var(--color-brand-300)] break-all">
                  {clinic.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 inline-flex items-center gap-2 text-[var(--color-brand-500)]">
              <Clock className="h-4 w-4" aria-hidden />
              Hours
            </h3>
            <ul className="space-y-1 text-sm text-white/80">
              {clinic.hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-4">
                  <span>{h.label}</span>
                  <span>{h.value}</span>
                </li>
              ))}
            </ul>
            <a
              href={clinic.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 text-sm font-medium text-[var(--color-brand-300)] hover:text-white"
            >
              Book online →
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container width="wide" className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} {clinic.name}. All rights reserved.</p>
          <p>{clinic.trust.cdcp}</p>
        </Container>
      </div>
    </footer>
  );
};
