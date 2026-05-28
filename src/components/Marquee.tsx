import { marqueeItems } from "../data/profile";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="relative overflow-hidden border-y border-gold-400/10 bg-gradient-to-r from-transparent via-saffron-500/5 to-transparent py-7"
      aria-label="Companies and communities"
    >
      <div className="mask-fade-edges">
        <div className="flex w-max animate-marquee items-center gap-10 px-6 font-display text-[26px] font-light tracking-tight text-foreground/70">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="transition hover:text-gold-400">{item}</span>
              <span aria-hidden className="text-gold-400/40">
                ❋
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
