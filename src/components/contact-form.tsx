"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";
import { serviceCategories } from "@/content/services";

// Web3Forms endpoint — form posts directly to their API from the browser.
// Configure NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (see .env.example).
// The access key is tied to info@rundlehornsmilesdental.com; CC/BCC below
// copy the appointments team.
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const CC_EMAIL = "appointments@oakdental.ca";
const BCC_EMAIL = "appointments@pracpros.com";

type Status = "idle" | "submitting" | "success" | "error";

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message ?? "Something went wrong. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please try again, or call us at " + clinic.phone + "."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-[var(--color-brand-50)] border border-[var(--color-brand-300)] p-8">
        <div className="flex gap-4">
          <CheckCircle2 className="h-6 w-6 text-[var(--color-brand-500)] shrink-0" aria-hidden />
          <div>
            <h2 className="text-xl font-semibold text-[var(--color-ink-900)]">
              Thanks — we got your message
            </h2>
            <p className="mt-2 text-[var(--color-ink-700)]">
              We'll reach back within one business day. For something urgent,
              call us at{" "}
              <a href={clinic.phoneHref} className="text-[var(--color-brand-600)] font-medium">
                {clinic.phone}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 text-sm font-medium text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)]"
            >
              Send another message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white border border-[var(--color-surface-mute)] p-6 sm:p-8 space-y-4"
    >
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="New enquiry — Rundlehorn Smiles Dental website" />
      <input type="hidden" name="from_name" value="Rundlehorn Smiles Dental website" />
      <input type="hidden" name="cc" value={CC_EMAIL} />
      <input type="hidden" name="bcc" value={BCC_EMAIL} />
      {/* Honeypot — bots fill this, humans don't; Web3Forms drops the submission. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-[var(--color-ink-900)]"
          >
            What's this about?
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="mt-1.5 w-full h-11 rounded-lg border border-[var(--color-surface-mute)] bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]"
          >
            <option value="" disabled>
              Choose a topic
            </option>
            <option value="New patient">Booking as a new patient</option>
            <option value="Existing patient">Existing patient question</option>
            <option value="Emergency">Dental emergency</option>
            <option value="Billing / insurance">Billing or insurance</option>
            <option value="CDCP">CDCP / Canadian Dental Care Plan</option>
            {serviceCategories.map((cat) => (
              <option key={cat.slug} value={cat.title}>
                {cat.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--color-ink-900)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-[var(--color-surface-mute)] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]"
        />
      </div>

      {status === "error" && (
        <div className="flex gap-3 rounded-lg bg-red-50 text-red-800 border border-red-200 p-3 text-sm">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden />
          <p>{errorMsg}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
        <p className="text-xs text-[var(--color-ink-500)]">
          We reply within one business day. For urgent issues call {clinic.phone}.
        </p>
        <Button type="submit" disabled={status === "submitting"}>
          <Send className="h-4 w-4" aria-hidden />
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
};

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const Field = ({ label, name, type = "text", ...rest }: FieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-[var(--color-ink-900)]">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className="mt-1.5 w-full h-11 rounded-lg border border-[var(--color-surface-mute)] bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-500)]"
      {...rest}
    />
  </div>
);
