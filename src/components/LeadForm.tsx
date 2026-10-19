"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const interests = ["Monsoon drop", "Terra pre-order", "Studio tour", "General updates"];

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [selected, setSelected] = useState<string[]>([interests[0]]);

  function toggle(interest: string) {
    setSelected((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = "Please tell us your name.";
    if (!email) nextErrors.email = "An email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That email doesn't look right.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // simulate network — this is a static site, no backend wired
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section
      id="lead"
      className="relative overflow-hidden bg-ink text-cream"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/50">
            <span className="h-px w-10 bg-cream/40" />
            Early access
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
            Reserve a pair before they <span className="italic text-terracotta">disappear</span>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
            Each weekly drop sells out in hours. Join the list and we'll notify
            you 24 hours before the public release, with a private link to
            reserve your size.
          </p>

          <ul className="mt-10 space-y-3 text-sm text-cream/70">
            {[
              "24-hour head start on every drop",
              "First access to one-of-one pairs",
              "Invitations to studio open days",
            ].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-5 w-5 place-items-center rounded-full bg-terracotta text-cream"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-cream/15 bg-cream/5 p-6 backdrop-blur md:p-10">
            {status === "success" ? (
              <SuccessPanel onReset={() => setStatus("idle")} />
            ) : (
              <form
                noValidate
                onSubmit={onSubmit}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field
                    label="Name"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Mendes"
                    error={errors.name}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@domain.com"
                    error={errors.email}
                  />
                </div>

                <Field
                  label="Shoe size (optional)"
                  name="size"
                  placeholder="EU 42 / US 9"
                />

                <fieldset>
                  <legend className="mb-3 text-[11px] uppercase tracking-[0.25em] text-cream/55">
                    I'm interested in
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((i) => {
                      const active = selected.includes(i);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggle(i)}
                          aria-pressed={active}
                          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            active
                              ? "border-terracotta bg-terracotta text-cream"
                              : "border-cream/20 text-cream/70 hover:border-cream/60 hover:text-cream"
                          }`}
                        >
                          {i}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <label className="flex items-start gap-3 text-xs text-cream/55">
                  <input
                    type="checkbox"
                    name="consent"
                    defaultChecked
                    className="mt-0.5 h-4 w-4 accent-terracotta"
                  />
                  <span>
                    I'd like to hear from Sōle about drops and studio news. One
                    email a month, unsubscribe anytime.
                  </span>
                </label>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/10 pt-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
                    No spam. Ever.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-3.5 text-sm text-cream transition-colors hover:bg-cream hover:text-ink disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <Spinner />
                        Sending…
                      </>
                    ) : (
                      <>
                        Reserve my spot
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = `f-${name}`;
  const described = error ? `${id}-err` : undefined;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.25em] text-cream/55"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={described}
        className={`h-12 rounded-full border bg-transparent px-5 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-terracotta ${
          error ? "border-terracotta" : "border-cream/20"
        }`}
      />
      {error && (
        <p
          id={described}
          role="alert"
          className="text-xs text-terracotta"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4 animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M12 3a9 9 0 1 0 9 9" strokeLinecap="round" />
    </svg>
  );
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start gap-6 py-6">
      <span className="grid h-14 w-14 place-items-center rounded-full bg-terracotta text-cream">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12l5 5L20 7" />
        </svg>
      </span>
      <div>
        <h3 className="font-serif text-3xl leading-tight">
          You're on the list.
        </h3>
        <p className="mt-3 max-w-md text-cream/70">
          Keep an eye on your inbox — we'll send your early-access link 24 hours
          before Friday's drop.
        </p>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="text-sm text-cream/60 underline-offset-4 hover:text-cream hover:underline"
      >
        Add another email
      </button>
    </div>
  );
}
