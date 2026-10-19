import Image from "next/image";
import { products } from "@/data/products";

export function FeaturedDrop() {
  const featured = products[2]; // Terra Trail

  return (
    <section id="featured" className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-soft md:rounded-[1.75rem] lg:aspect-[5/6]">
            <Image
              src={featured.image}
              alt={`${featured.name} ${featured.tag} — ${featured.colorway}`}
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 85vw, 100vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-terracotta px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">
              {featured.badge ?? "Featured"}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 lg:col-span-6 lg:py-6">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-cream/50">
              <span className="h-px w-10 bg-cream/40" />
              This week's drop
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.98] tracking-tight">
              {featured.name} — <br className="hidden sm:block" />
              <span className="italic text-terracotta">reworked.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
              Rebuilt on a slimmer last with a taller stack, hidden gusset and a
              hand-stitched welt. Vegetable-tanned leather, cork-latex footbed,
              Vibram® outsole.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-cream/15 pt-6 sm:gap-6 sm:pt-8">
            <Meta k="Edition" v="120 pairs" />
            <Meta
              k="Price"
              v={`₹${featured.price.toLocaleString("en-IN")}`}
            />
            <Meta k="Ships" v="Nov 7" />
          </dl>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#lead"
              className="group inline-flex items-center gap-3 rounded-full bg-terracotta px-6 py-3 text-sm text-cream transition-colors hover:bg-cream hover:text-ink sm:px-7 sm:py-3.5"
            >
              Reserve a pair
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
              href="#collection"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-3 text-sm text-cream/80 transition-colors hover:border-cream hover:text-cream sm:px-6 sm:py-3.5"
            >
              Full line sheet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.22em] text-cream/50">
        {k}
      </dt>
      <dd className="mt-2 font-serif text-xl sm:text-2xl">{v}</dd>
    </div>
  );
}
