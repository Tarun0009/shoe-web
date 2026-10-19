const quotes = [
  {
    body: "I've worn mine through two monsoons and a wedding. The leather just keeps getting better.",
    author: "Priya N.",
    meta: "Monsoon · owner since 2023",
  },
  {
    body: "Finally a shoe that doesn't scream for attention. It just quietly outlasts everything else in my closet.",
    author: "Marcus O.",
    meta: "Noir · owner since 2022",
  },
  {
    body: "The repair-for-life bit isn't marketing. They re-soled my Terras after 400 miles, no questions.",
    author: "Elena K.",
    meta: "Terra · owner since 2021",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-14">
        <div>
          <p className="mb-3 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/60">
            <span className="h-px w-10 bg-ink/40" />
            From the journal
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-tight text-ink">
            Loved by <span className="italic text-terracotta">12,000+</span>{" "}
            walkers.
          </h2>
        </div>
        <a
          href="#lead"
          className="text-sm text-ink/70 underline-offset-4 hover:text-ink hover:underline"
        >
          Read all reviews →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {quotes.map((q, i) => (
          <figure
            key={i}
            className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-cream-50 p-6 transition-colors hover:border-ink/30 md:rounded-[1.5rem] md:p-8"
          >
            <svg
              aria-hidden
              viewBox="0 0 32 32"
              className="mb-5 h-7 w-7 text-terracotta md:h-8 md:w-8"
              fill="currentColor"
            >
              <path d="M11 7c-4 2-7 6-7 11v7h9v-9H7c0-3 2-6 6-7V7Zm14 0c-4 2-7 6-7 11v7h9v-9h-6c0-3 2-6 6-7V7Z" />
            </svg>
            <blockquote className="font-serif text-lg leading-snug text-ink sm:text-xl">
              "{q.body}"
            </blockquote>
            <figcaption className="mt-8 border-t border-ink/10 pt-5">
              <p className="text-sm font-medium text-ink">{q.author}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink/55">
                {q.meta}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
