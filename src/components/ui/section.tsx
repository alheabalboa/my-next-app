import { cn } from "@/lib/cn";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "surface" | "soft" | "mute" | "brand" | "ink";
  spacing?: "sm" | "md" | "lg";
};

const darkHeadings =
  "[&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white";

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  surface: "bg-[var(--color-surface)] text-[var(--color-ink-700)]",
  soft: "bg-[var(--color-surface-soft)] text-[var(--color-ink-700)]",
  mute: "bg-[var(--color-surface-mute)] text-[var(--color-ink-700)]",
  brand: `bg-[var(--color-brand-500)] text-white ${darkHeadings}`,
  ink: `bg-[var(--color-ink-900)] text-white ${darkHeadings}`,
};

const spacings: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-10 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

export const Section = ({
  tone = "surface",
  spacing = "md",
  className,
  children,
  ...rest
}: SectionProps) => (
  <section className={cn(tones[tone], spacings[spacing], className)} {...rest}>
    {children}
  </section>
);
