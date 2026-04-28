"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  /** Stagger in milliseconds. Useful when revealing siblings in sequence. */
  delay?: number;
  /** Initial direction. Default "up". */
  from?: "up" | "left" | "right" | "none";
};

const fromClass: Record<NonNullable<Props["from"]>, string> = {
  up: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
  none: "",
};

const ENTRY_MS = 700;

export const Reveal = ({
  delay = 0,
  from = "up",
  className,
  children,
  style,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      setSettled(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = window.setTimeout(() => setSettled(true), ENTRY_MS + delay);
    return () => window.clearTimeout(t);
  }, [visible, delay]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: settled ? undefined : `${delay}ms`, ...style }}
      className={cn(
        "transition-all ease-out will-change-transform motion-reduce:transition-none",
        settled ? "duration-200" : "duration-700",
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${fromClass[from]}`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
