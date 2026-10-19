"use client";

import Image from "next/image";
import { useState } from "react";
import { products, type Gender } from "@/data/products";

const filters: { label: string; value: "all" | Gender }[] = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Unisex", value: "unisex" },
];

function discountPct(price: number, mrp?: number) {
  if (!mrp || mrp <= price) return null;
  return Math.round(((mrp - price) / mrp) * 100);
}

export function Collection() {
  const [active, setActive] = useState<"all" | Gender>("all");

  const visible =
    active === "all" ? products : products.filter((p) => p.gender === active);

  return (
    <section
      id="collection"
      className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
    >
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-14">
        <div>
          <p className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/60">
            <span className="h-px w-10 bg-ink/40" />
            The 2026 line
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-tight text-ink">
            Shoes for{" "}
            <span className="italic text-terracotta">every</span> step.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-ink/70">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`rounded-full border px-4 py-2 transition-colors ${
                active === f.value
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/15 hover:border-ink hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
        {visible.map((p) => {
          const off = discountPct(p.price, p.mrp);
          return (
            <article key={p.id} className="group relative flex flex-col">
              <a
                href={`#${p.id}`}
                aria-label={`${p.name} — view product`}
                className="relative block aspect-[3/4] overflow-hidden rounded-xl bg-sand md:rounded-2xl"
              >
                <Image
                  src={p.image}
                  alt={`${p.name} ${p.tag} — ${p.colorway}`}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 768px) 30vw, 48vw"
                  className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink backdrop-blur">
                    {p.badge}
                  </span>
                )}
                {off && (
                  <span className="absolute right-3 top-3 rounded-full bg-terracotta px-3 py-1 text-[11px] font-semibold text-cream">
                    −{off}%
                  </span>
                )}

                {/* floating action pills */}
                <div className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <button
                    type="button"
                    className="pointer-events-auto w-full rounded-full bg-ink py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-cream shadow-lg transition-colors hover:bg-terracotta"
                  >
                    Add to bag
                  </button>
                </div>
              </a>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-serif text-lg leading-tight text-ink md:text-xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 truncate text-[11px] uppercase tracking-[0.14em] text-ink/50">
                    {p.tag}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-serif text-base leading-none text-ink md:text-lg">
                    ₹{p.price.toLocaleString("en-IN")}
                  </p>
                  {p.mrp && (
                    <p className="mt-1 text-[10px] text-ink/45 line-through">
                      ₹{p.mrp.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
              </div>

              <div
                className="mt-3 flex items-center gap-1.5"
                aria-label="Available colorways"
              >
                <span
                  className="h-3 w-3 rounded-full ring-1 ring-ink/20"
                  style={{ background: p.swatch }}
                />
                <span className="h-3 w-3 rounded-full bg-sand ring-1 ring-ink/20" />
                <span className="h-3 w-3 rounded-full bg-ink/80 ring-1 ring-ink/20" />
                <span className="ml-1 text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  +2
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
