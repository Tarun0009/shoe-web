import Image from "next/image";
import { heroImage, products } from "@/data/products";

export function Hero() {
  const featured = products[0];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream"
    >
      <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl grid-cols-1 items-stretch gap-0 sm:min-h-[calc(100svh-100px)] lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* text panel */}
        <div className="order-2 flex flex-col justify-center px-4 pt-10 pb-14 md:px-8 lg:order-1 lg:px-0 lg:py-16">
          <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/60 sm:text-[11px]">
            <span className="h-px w-10 bg-ink/40" />
            Autumn Edit · 2026
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.98] tracking-tight text-ink">
            Step into
            <br />
            your <span className="italic text-terracotta">next</span> chapter.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            A curated line of footwear for men, women and kids — honest
            materials, made for the long walk.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-colors hover:bg-terracotta"
            >
              Shop the collection
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
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink/80 transition-colors hover:border-ink hover:text-ink"
            >
              Browse categories
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-ink/55">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              30-day returns
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              4.8/5 · 12k reviews
            </span>
          </div>
        </div>

        {/* image panel */}
        <div className="relative order-1 h-[55svh] w-full lg:order-2 lg:h-auto lg:min-h-full">
          <div className="relative h-full w-full overflow-hidden bg-sand lg:rounded-l-3xl">
            <Image
              src={heroImage}
              alt="Sōle Ember Court sneaker on a warm neutral backdrop"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            {/* product chip */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-cream/95 px-4 py-3 backdrop-blur sm:left-5 sm:right-auto sm:w-auto sm:pr-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">
                  {featured.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  {featured.tag} · {featured.colorway}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-serif text-lg leading-none text-ink">
                  ₹{featured.price.toLocaleString("en-IN")}
                </p>
                {featured.mrp && (
                  <p className="mt-1 text-[10px] text-ink/50 line-through">
                    ₹{featured.mrp.toLocaleString("en-IN")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
