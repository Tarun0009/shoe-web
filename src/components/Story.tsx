import Image from "next/image";
import { storyImage } from "@/data/products";

const stats = [
  { k: "2019", v: "Founded in Porto" },
  { k: "19", v: "Craftspeople in the workshop" },
  { k: "0", v: "Seasonal collections — ever" },
  { k: "∞", v: "Free repairs, for life" },
];

export function Story() {
  return (
    <section id="story" className="relative bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/60">
              <span className="h-px w-10 bg-ink/40" />
              Behind the shoe
            </p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] tracking-tight text-ink">
              Made the <span className="italic text-terracotta">slow</span>{" "}
              way, on purpose.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
              Sōle began in a two-room atelier above a bakery. Nine years in,
              the recipe hasn't changed: honest materials, long hours on the
              last, and a refusal to make a shoe we wouldn't walk in ourselves.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
              We release a maximum of 24 pairs each week. When they're gone,
              they're gone.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream md:rounded-[1.75rem] lg:aspect-[5/6]">
            <Image
              src={storyImage}
              alt="A craftsperson stitching the welt of a leather sneaker by hand"
              fill
              sizes="(min-width: 1024px) 55vw, (min-width: 640px) 85vw, 100vw"
              className="object-cover"
            />
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-8 md:grid-cols-4 md:gap-y-10 md:pt-10">
            {stats.map((s) => (
              <div key={s.k}>
                <dt className="font-serif text-3xl leading-none text-ink sm:text-4xl md:text-5xl">
                  {s.k}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
