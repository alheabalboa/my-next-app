import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";
import type { ServiceCategory, SubService } from "@/content/services";

type Props = {
  category: ServiceCategory;
  currentSubSlug?: string;
};

export const ServiceSidebar = ({ category, currentSubSlug }: Props) => (
  <aside className="space-y-6">
    <div className="rounded-2xl bg-[var(--color-surface-soft)] border border-[var(--color-surface-mute)] p-6">
      <h3 className="font-semibold text-[var(--color-ink-900)]">
        {category.title}
      </h3>
      <ul className="mt-3 space-y-1 text-sm">
        {category.subservices.map((sub: SubService) => {
          const active = sub.slug === currentSubSlug;
          return (
            <li key={sub.slug}>
              <Link
                href={`/services/${category.slug}/${sub.slug}`}
                className={`block py-1.5 rounded px-2 ${
                  active
                    ? "bg-[var(--color-brand-50)] text-[var(--color-brand-600)] font-medium"
                    : "text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)]"
                }`}
              >
                {sub.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="rounded-2xl bg-[var(--color-brand-500)] text-white p-6">
      <h3 className="font-semibold">Ready to book?</h3>
      <p className="mt-2 text-sm text-white/90">
        {clinic.hoursSummary}
      </p>
      <div className="mt-4 space-y-2">
        <Button
          href={clinic.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="md"
          className="w-full justify-center"
        >
          <Calendar className="h-4 w-4" aria-hidden />
          Book online
        </Button>
        <Button
          href={clinic.phoneHref}
          variant="ghost"
          size="md"
          className="w-full justify-center !text-white hover:!bg-white/10"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {clinic.phone}
        </Button>
      </div>
    </div>
  </aside>
);
