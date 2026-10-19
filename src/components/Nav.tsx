"use client";

import { useState } from "react";

const categories = [
  { label: "Men", href: "#men" },
  { label: "Women", href: "#women" },
  { label: "Kids", href: "#kids" },
  { label: "New Arrivals", href: "#collection" },
  { label: "Collections", href: "#featured" },
  { label: "Story", href: "#story" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="hidden items-center justify-center bg-ink py-2 text-[10px] uppercase tracking-[0.25em] text-cream sm:flex">
        Free shipping over ₹1999 · Easy 30-day returns · Repair-for-life
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        {/* mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <a
          href="#top"
          className="font-serif text-2xl leading-none tracking-tight text-ink md:text-3xl"
        >
          S<span className="italic text-terracotta">ō</span>le
        </a>

        <ul className="hidden items-center gap-7 text-sm text-ink/80 lg:flex">
          {categories.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="hidden h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink sm:grid"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" />
            </svg>
          </button>
          <button
            aria-label="Account"
            className="hidden h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink sm:grid"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1-4 5-6 8-6s7 2 8 6" />
            </svg>
          </button>
          <button
            aria-label="Bag"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M4 7h16l-1.5 12.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 7Z" />
              <path d="M8 7a4 4 0 0 1 8 0" />
            </svg>
            <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-terracotta text-[9px] font-medium text-cream">
              2
            </span>
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {categories.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/5 py-3 text-base text-ink/80 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
