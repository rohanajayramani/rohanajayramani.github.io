import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Suspense, lazy } from "react";
import { profile } from "../data/profile";
import { OmGlyph, CornerBracket } from "./decor/Motifs";
import { Counter } from "./Counter";

const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden pt-24 md:pt-28"
    >
      {/* Full-bleed 3D backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        {/* dark vignette so foreground text reads */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Mobile 3D — smaller, on top */}
      <div className="pointer-events-none relative block h-[300px] w-full md:hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Foreground — cinematic left-aligned */}
      <div className="container-page relative z-10 grid grid-cols-1 gap-8 pb-24 pt-10 md:grid-cols-12 md:gap-6 md:pb-32 md:pt-16">
        <div className="md:col-span-7">
          {/* TOP CODED BAR */}
          <div
            className="hero-in mb-8 flex flex-wrap items-center gap-3 text-muted-foreground"
            style={{ animationDelay: "0ms" }}
          >
            <span className="label-pill text-saffron-400" style={{ borderColor: "rgb(255 122 38 / 0.3)" }}>
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Status · Available
            </span>
            <span className="label-pill">
              19.0760°N · 72.8777°E
            </span>
            <span className="label-pill">
              Mumbai · IST
            </span>
          </div>

          {/* DEVANAGARI WHISPER */}
          <p
            className="devanagari hero-in mb-3 text-[18px] text-saffron-400/80"
            style={{ animationDelay: "80ms" }}
          >
            रोहन अजय रामानी
          </p>

          {/* MONUMENTAL NAME — with chromatic glow under RAMANI */}
          <h1
            className="hero-in relative font-display text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] text-foreground"
            style={{ animationDelay: "120ms" }}
          >
            ROHAN<br />
            AJAY{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute inset-0 blur-2xl opacity-60 text-chroma">
                RAMANI
              </span>
              <span className="relative text-chroma">RAMANI</span>
            </span>
          </h1>

          {/* TAGLINE */}
          <p
            className="hero-in mt-7 max-w-[640px] text-balance text-[17px] leading-[1.55] text-muted-foreground md:text-[18px]"
            style={{ animationDelay: "240ms" }}
          >
            Engineer <span className="text-foreground">→</span> Operator. Currently building{" "}
            <span className="font-semibold text-foreground">Fresh &amp; Select Gro</span> and{" "}
            <span className="font-semibold text-foreground">KyRo Core</span>, fresh off 2.5+ years of{" "}
            <span className="font-semibold text-foreground">Data &amp; Tech at JPMorganChase</span>.
            Two published papers, one academic medal, ten years of community work.
          </p>

          {/* CTAs */}
          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a href="#experience" className="btn-primary group">
              See the Trail
              <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="btn-ghost group"
            >
              Résumé
              <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
            </a>
          </div>

          {/* SOCIALS row + ID */}
          <div
            className="hero-in mt-10 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "400ms" }}
          >
            <ul className="flex items-center gap-2">
              {[
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.socials.github, icon: Github, label: "GitHub" },
                { href: profile.socials.email, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white/[0.025] text-foreground/80 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="label-code">
              <span aria-hidden className="h-px w-6 bg-white/15" />
              ID/0001 · Mumbai-born
            </div>
          </div>
        </div>

        {/* RIGHT — Data panel (replaces card) */}
        <aside
          className="hero-in relative hidden md:col-span-5 md:flex md:items-center"
          style={{ animationDelay: "460ms" }}
        >
          <div className="relative ml-auto w-full max-w-[440px]">
            {/* Corner brackets — sci-fi targeting */}
            <CornerBracket className="absolute -left-2 -top-2 size-5 text-saffron-400" />
            <CornerBracket className="absolute -right-2 -top-2 size-5 -scale-x-100 text-saffron-400" />
            <CornerBracket className="absolute -left-2 -bottom-2 size-5 -scale-y-100 text-cyan-400" />
            <CornerBracket className="absolute -right-2 -bottom-2 size-5 -scale-100 text-cyan-400" />

            <div className="surface scanlines noise rounded-lg p-7 shadow-2xl shadow-black/40">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="label-code text-saffron-400">SYS.CURRENT</span>
                <OmGlyph className="text-xl text-saffron-400/80" />
              </div>

              <h3 className="mt-4 font-display text-[26px] font-bold uppercase leading-tight tracking-tight">
                Engineer<br />
                <span className="text-chroma">turned Operator.</span>
              </h3>

              <p className="mt-3 text-[13.5px] leading-[1.6] text-muted-foreground">
                Building <span className="text-foreground">Fresh &amp; Select Gro</span> across the
                Mumbai Metropolitan Region · Putting{" "}
                <span className="text-foreground">KyRo Core</span> together brick by brick.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                <div>
                  <p className="font-display text-[28px] font-bold leading-none text-saffron-400">
                    <Counter value="2.5y" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    at JPMC
                  </p>
                </div>
                <div>
                  <p className="font-display text-[28px] font-bold leading-none text-cyan-400">
                    <Counter value="6k+" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Mumbai Ignite
                  </p>
                </div>
                <div>
                  <p className="font-display text-[28px] font-bold leading-none text-magenta-400">
                    <Counter value="9.76" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    SRM CGPA
                  </p>
                </div>
              </div>

              {/* Bottom row — pulsing dots */}
              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 animate-glow-pulse rounded-full bg-emerald-400" />
                  Signal · Open
                </span>
                <span>v2025.11</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground"
        style={{ animation: "scroll-cue 2.4s ease-in-out infinite" }}
      >
        <span aria-hidden className="h-px w-8 bg-saffron-400/50" />
        Scroll
        <ArrowDown className="size-3 text-cyan-400" />
      </a>

      <style>{`
        .hero-in {
          opacity: 0;
          transform: translateY(20px);
          animation: hero-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes hero-in {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-cue {
          0%,100% { transform: translate(-50%, 0); }
          50%     { transform: translate(-50%, 5px); }
        }
      `}</style>
    </section>
  );
}
