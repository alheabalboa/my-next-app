"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { clinic } from "@/content/clinic";
import { primaryNav, servicesMegaMenu } from "@/content/nav";

const MEGA_KEY = "__mega-services__";

export const SiteHeader = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const megaPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const inNav = navRef.current?.contains(target);
      const inMega = megaPanelRef.current?.contains(target);
      if (!inNav && !inMega) {
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const toggleMenu = (key: string) =>
    setOpenMenu((v) => (v === key ? null : key));

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-[var(--color-surface-mute)]">
      <Container width="wide">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center" aria-label={clinic.name}>
            <Image
              src="/logos/header.webp"
              alt={clinic.name}
              width={200}
              height={57}
              priority
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            ref={navRef}
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              if (item.kind === "mega-services") {
                const isOpen = openMenu === MEGA_KEY;
                return (
                  <div key={item.href} className="relative">
                    <button
                      type="button"
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)] rounded",
                        isOpen && "text-[var(--color-brand-500)]"
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => toggleMenu(MEGA_KEY)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                  </div>
                );
              }

              if (item.kind === "dropdown" && item.children) {
                const isOpen = openMenu === item.href;
                return (
                  <div key={item.href} className="relative">
                    <button
                      type="button"
                      className={cn(
                        "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)] rounded",
                        isOpen && "text-[var(--color-brand-500)]"
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => toggleMenu(item.href)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                        aria-hidden
                      />
                    </button>
                    {isOpen && (
                      <div className="absolute left-0 top-full mt-1 min-w-[14rem] rounded-md border border-[var(--color-surface-mute)] bg-white shadow-lg">
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className="block px-4 py-2 text-sm text-[var(--color-ink-700)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-brand-500)]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)] rounded"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={clinic.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-700)] hover:text-[var(--color-brand-500)]"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {clinic.phone}
            </a>
            <Button
              href={clinic.bookingUrl}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </Button>
            <button
              type="button"
              className="lg:hidden p-2 text-[var(--color-ink-700)]"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {openMenu === MEGA_KEY && (
          <div
            ref={megaPanelRef}
            className="hidden lg:block absolute inset-x-0 top-full bg-white border-t border-[var(--color-surface-mute)] shadow-lg"
          >
            <Container width="wide" className="py-8">
              <div className="grid grid-cols-3 gap-8">
                {servicesMegaMenu.map((cat) => (
                  <div key={cat.slug}>
                    <Link
                      href={cat.href}
                      className="block font-semibold text-[var(--color-ink-900)] hover:text-[var(--color-brand-500)]"
                      onClick={() => setOpenMenu(null)}
                    >
                      {cat.title}
                    </Link>
                    <ul className="mt-2 space-y-1">
                      {cat.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpenMenu(null)}
                            className="block text-sm text-[var(--color-ink-500)] hover:text-[var(--color-brand-500)]"
                          >
                            {sub.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        )}
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-surface-mute)] bg-white">
          <Container width="wide" className="py-4">
            <ul className="flex flex-col divide-y divide-[var(--color-surface-mute)]">
              {primaryNav.map((item) => {
                if (item.kind === "mega-services") {
                  return (
                    <li key={item.href} className="py-2">
                      <details className="group">
                        <summary className="flex items-center justify-between py-2 text-base font-medium text-[var(--color-ink-800)] cursor-pointer list-none">
                          {item.label}
                          <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <ul className="mt-2 pl-4 space-y-3">
                          {servicesMegaMenu.map((cat) => (
                            <li key={cat.slug}>
                              <Link
                                href={cat.href}
                                onClick={() => setMobileOpen(false)}
                                className="block font-medium text-[var(--color-ink-800)]"
                              >
                                {cat.title}
                              </Link>
                              <ul className="mt-1 pl-3 space-y-1">
                                {cat.items.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block text-sm text-[var(--color-ink-500)]"
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  );
                }

                if (item.kind === "dropdown" && item.children) {
                  return (
                    <li key={item.href} className="py-2">
                      <details className="group">
                        <summary className="flex items-center justify-between py-2 text-base font-medium text-[var(--color-ink-800)] cursor-pointer list-none">
                          {item.label}
                          <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                        </summary>
                        <ul className="mt-2 pl-4 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-[var(--color-ink-700)]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium text-[var(--color-ink-800)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href={clinic.phoneHref}
                  className="inline-flex items-center gap-2 text-[var(--color-brand-500)]"
                >
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};
