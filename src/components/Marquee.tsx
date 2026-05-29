import { marqueeItems } from "../data/profile";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <section
      className="relative overflow-hidden border-y border-white/8 bg-gradient-to-r from-transparent via-saffron-400/5 to-transparent py-6"
      aria-label="Companies and communities"
    >
      <div className="mask-fade-edges">
        <div className="flex w-max animate-marquee items-center gap-10 px-6 font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="transition hover:text-saffron-400">{item}</span>
              <span aria-hidden className="text-saffron-400/40">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
