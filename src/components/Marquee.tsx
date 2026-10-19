const items = [
  "Hand-finished",
  "Full-grain leather",
  "Vegetable-tanned",
  "Carbon-neutral shipping",
  "Repair-for-life",
  "Small-batch",
  "Made in India",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-cream-50 py-5">
      <div className="animate-marquee flex gap-10 whitespace-nowrap font-serif text-2xl text-ink/70 sm:text-3xl md:gap-14 md:text-4xl">
        {row.map((word, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-14">
            <span>{word}</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta md:h-2 md:w-2" />
          </span>
        ))}
      </div>
    </div>
  );
}
