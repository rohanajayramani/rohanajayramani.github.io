import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { builds, type Build } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { cn } from "../lib/utils";

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

/* Live status pill — white-on-dark over imagery, black-on-light over a bright gradient. */
function CoverStatus({ b, dark }: { b: Build; dark?: boolean }) {
  return (
    <span
      className={cn(
        "absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] backdrop-blur-sm",
        dark ? "border-black/20 bg-black/15 text-black/80" : "border-white/20 bg-black/35 text-white/90",
      )}
    >
      <span className="relative grid h-1.5 w-1.5 place-items-center">
        <span
          className={cn(
            "absolute inset-0 animate-ping rounded-full",
            dark ? "bg-black/40" : "bg-emerald-400/60",
          )}
        />
        <span
          className={cn("relative h-1.5 w-1.5 rounded-full", dark ? "bg-black/70" : "bg-emerald-400")}
        />
      </span>
      {b.status}
    </span>
  );
}

/**
 * Designed cover for each build: the real screenshot framed as a floating
 * browser window peeking up from the project's brand-colour band. Percentage
 * positioning keeps it composed at every poster size — phone to desktop.
 * Builds with no screenshot fall back to the gradient + glyph poster.
 */
function BuildCover({ b, wide }: { b: Build; wide: boolean }) {
  if (!b.image) {
    return (
      <div className="absolute inset-0 grid place-items-center" style={{ backgroundImage: b.gradient }}>
        <div
          aria-hidden
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            background: "radial-gradient(120% 120% at 28% 18%, rgba(255,255,255,0.7), transparent 55%)",
          }}
        />
        <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-30" />
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
        <CoverStatus b={b} dark />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundImage: b.gradient }}>
      {/* light sheen + faint texture over the brand band */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 mix-blend-soft-light"
        style={{
          background: "radial-gradient(130% 95% at 18% -10%, rgba(255,255,255,0.7), transparent 60%)",
        }}
      />
      <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-[0.12]" />

      {/* brand mark */}
      <span
        className={cn(
          "absolute left-3 top-3 z-20 inline-grid h-7 min-w-7 place-items-center rounded-md border border-white/30 bg-black/20 px-1.5 font-display text-[13px] font-black uppercase leading-none tracking-tight text-white shadow-sm backdrop-blur-sm",
          isDevanagari(b.glyph) && "devanagari font-bold normal-case",
        )}
      >
        {b.glyph}
      </span>

      <CoverStatus b={b} />

      {/* the screenshot, framed as a browser window peeking up from the band */}
      <div
        className={cn(
          "absolute z-10 transition-transform duration-500 ease-out group-hover:-translate-y-1.5",
          wide
            ? "bottom-[-15%] left-7 right-[-7%] top-[16%]"
            : "bottom-[-19%] left-5 right-[-9%] top-[31%]",
        )}
      >
        <div className="flex h-full w-full flex-col overflow-hidden rounded-t-xl border border-white/15 bg-[#0b0e14] shadow-[0_26px_60px_-20px_rgba(0,0,0,0.75)] ring-1 ring-black/20">
          <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            {b.domain && (
              <span className="ml-2 hidden max-w-[60%] truncate rounded-[3px] bg-white/[0.06] px-2 py-[3px] font-mono text-[8px] tracking-[0.06em] text-white/55 sm:inline-block">
                {b.domain}
              </span>
            )}
          </div>
          <div className="relative flex-1 overflow-hidden bg-white/5">
            <img
              src={b.image}
              alt={`${b.name} — product screenshot`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
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
                      "relative shrink-0 overflow-hidden",
                      wide ? "h-56 md:h-auto md:w-[46%]" : "h-44",
                    )}
                  >
                    <BuildCover b={b} wide={wide} />
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
