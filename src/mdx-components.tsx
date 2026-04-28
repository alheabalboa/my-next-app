import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="text-3xl sm:text-4xl font-semibold text-[var(--color-ink-900)] mt-0 mb-4"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-2xl sm:text-3xl font-semibold text-[var(--color-ink-900)] mt-10 mb-3"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-xl font-semibold text-[var(--color-ink-900)] mt-6 mb-2"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p
      className="text-[var(--color-ink-700)] leading-7 my-4"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc list-outside ml-6 space-y-2 my-4 text-[var(--color-ink-700)]"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-outside ml-6 space-y-2 my-4 text-[var(--color-ink-700)]"
      {...props}
    >
      {children}
    </ol>
  ),
  a: ({ href = "#", children, ...props }) => (
    <Link
      href={href}
      className="text-[var(--color-brand-500)] underline underline-offset-2 hover:text-[var(--color-brand-600)]"
      {...props}
    >
      {children}
    </Link>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-[var(--color-ink-900)]" {...props}>
      {children}
    </strong>
  ),
};

export const useMDXComponents = (): MDXComponents => components;
