import Image from "next/image";
import { categories } from "@/data/products";

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
        <div>
          <p className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/60">
            <span className="h-px w-10 bg-ink/40" />
            Shop by category
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-tight text-ink">
            Find <span className="italic text-terracotta">your</span> fit.
          </h2>
        </div>
        <a
          href="#collection"
          className="text-sm text-ink/70 underline-offset-4 hover:text-ink hover:underline"
        >
          View everything →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {categories.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group relative block overflow-hidden rounded-2xl bg-sand md:rounded-[1.5rem]"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={c.image}
                alt={`${c.label} — ${c.count} styles`}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 text-cream">
                <div>
                  <h3 className="font-serif text-2xl leading-none md:text-3xl">
                    {c.label}
                  </h3>
                  <p className="mt-1 hidden text-xs text-cream/80 sm:block">
                    {c.tagline}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-cream/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">
                  {c.count}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
