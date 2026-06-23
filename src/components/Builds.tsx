import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { builds } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { cn } from "../lib/utils";
import { CornerBracket } from "./decor/Motifs";

// True when the glyph carries a non-ASCII (e.g. Devanagari) character.
const isDevanagari = (s: string) => [...s].some((c) => c.charCodeAt(0) > 127);

function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1500px) rotateX(${(py - 0.5) * -6}deg) rotateY(${(px - 0.5) * 6}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1500px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
      style={{
        backgroundImage:
          "radial-gradient(560px circle at var(--mx,50%) var(--my,50%), rgb(255 255 255 / 0.06), transparent 40%)",
      }}
    >
      {children}
    </div>
  );
}

export function Builds() {
  return (
    <section id="work" className="section-pad container-page">
      <SectionHead
        num="03"
        kicker="STUDIO · SHIPPED"
        title="Things I've"
        titleEmphasis="Shipped"
        subtitle="Live products from the last year — KyRo One (the command centre behind a quick-commerce dark-store network), the venture's own site, a corporate-events agency, an interior-design studio, a real-world dating club, an invite-only concert series, a hair atelier, and a memorial poetry archive. Built, deployed, in the wild."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {builds.map((b, idx) => {
          const wide = b.span === "wide";
          return (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(wide && "md:col-span-2")}
            >
              <TiltCard className="h-full rounded-lg">
                <article
                  className={cn(
                    "surface group relative flex h-full overflow-hidden rounded-lg transition hover:border-white/20",
                    wide ? "flex-col md:flex-row" : "flex-col",
                  )}
                >
                  {/* POSTER */}
                  <div
                    className={cn(
                      "relative flex shrink-0 items-center justify-center overflow-hidden",
                      wide ? "h-52 md:h-auto md:w-[46%]" : "h-44",
                    )}
                    style={b.image ? undefined : { backgroundImage: b.gradient }}
                  >
                    {b.image ? (
                      <>
                        {/* real product screenshot */}
                        <img
                          src={b.image}
                          alt={`${b.name} — product screenshot`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/10"
                        />
                        <CornerBracket className="absolute left-3 top-3 size-4 text-white/75" />
                        <CornerBracket className="absolute right-3 top-3 size-4 -scale-x-100 text-white/75" />

                        {/* live status */}
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                          <span className="relative grid h-1.5 w-1.5 place-items-center">
                            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          {b.status}
                        </span>
                      </>
                    ) : (
                      <>
                        <div
                          aria-hidden
                          className="absolute inset-0 mix-blend-overlay opacity-40"
                          style={{
                            background:
                              "radial-gradient(120% 120% at 28% 18%, rgba(255,255,255,0.7), transparent 55%)",
                          }}
                        />
                        <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-30" />
                        <CornerBracket className="absolute left-3 top-3 size-4 text-black/50" />
                        <CornerBracket className="absolute right-3 top-3 size-4 -scale-x-100 text-black/50" />

                        <span
                          className={cn(
                            "relative select-none font-display font-black uppercase tracking-tight text-black/85",
                            wide ? "text-6xl md:text-7xl" : "text-5xl",
                            isDevanagari(b.glyph) && "devanagari font-bold normal-case",
                          )}
                          style={{ textShadow: "0 2px 24px rgb(0 0 0 / 0.18)" }}
                        >
                          {b.glyph}
                        </span>

                        {/* live status */}
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-sm border border-black/20 bg-black/15 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-black/80 backdrop-blur-sm">
                          <span className="relative grid h-1.5 w-1.5 place-items-center">
                            <span className="absolute inset-0 animate-ping rounded-full bg-black/40" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-black/70" />
                          </span>
                          {b.status}
                        </span>
                      </>
                    )}
                  </div>

                  {/* BODY */}
                  <div className="relative flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-sm border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                        {b.category}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {b.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[26px] font-bold uppercase leading-tight tracking-tight md:text-[28px]">
                      {b.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-[14px] leading-[1.65] text-muted-foreground",
                        wide ? "max-w-[56ch]" : "max-w-prose",
                      )}
                    >
                      {b.blurb}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {b.stack.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-sm border border-white/8 bg-white/[0.015] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {b.href && (
                        <a
                          href={b.href}
                          target="_blank"
                          rel="noopener"
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.05]",
                            b.accent,
                          )}
                        >
                          <ArrowUpRight className="size-3.5" />
                          {b.domain ?? "Visit"}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
