import { marqueeItems } from "../data/profile";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-8"
      aria-label="Companies and communities"
    >
      <div className="mask-fade-edges">
        <div className="flex w-max animate-marquee items-center gap-12 px-6 font-display text-xl text-muted-foreground">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span className="opacity-70 transition hover:text-foreground hover:opacity-100">
                {item}
              </span>
              <span aria-hidden className="text-brand-cyan/40">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
