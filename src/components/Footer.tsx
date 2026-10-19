const cols = [
  {
    title: "Shop",
    links: ["All footwear", "New arrivals", "Last pairs", "Gift cards"],
  },
  {
    title: "Studio",
    links: ["Our story", "The workshop", "Repairs for life", "Press"],
  },
  {
    title: "Help",
    links: ["Shipping", "Returns", "Sizing", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-10 border-b border-ink/10 pb-14 md:grid-cols-5 md:pb-16">
          <div className="col-span-2 md:col-span-2">
            <p className="font-serif text-5xl leading-none text-ink md:text-6xl">
              S<span className="italic text-terracotta">ō</span>le
            </p>
            <p className="mt-6 max-w-sm text-sm text-ink/70">
              A small-batch footwear studio in Porto, Portugal. Making shoes
              the slow way since 2019.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "Pinterest", "Journal"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-ink/15 px-4 py-2 text-xs text-ink/70 transition-colors hover:border-ink hover:text-ink"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-ink/50">
                {c.title}
              </p>
              <ul className="space-y-3 text-sm text-ink/80">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="transition-colors hover:text-terracotta"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-[11px] uppercase tracking-[0.2em] text-ink/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sōle Atelier. Hand-made in Porto.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
