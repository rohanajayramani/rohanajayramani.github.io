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
      {/* 3D yantra — positioned as a halo behind the portrait (right side on desktop) */}
      <div className="pointer-events-none absolute inset-y-0 right-[-12%] z-0 hidden w-[64%] md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
      </div>

      {/* Mobile 3D — behind portrait at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 block h-[460px] w-full md:hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="container-page relative z-10 grid grid-cols-1 items-center gap-10 pb-24 pt-6 md:grid-cols-12 md:gap-8 md:pb-28 md:pt-12">
        {/* LEFT — text */}
        <div className="order-2 md:order-1 md:col-span-7">
          {/* coded pills */}
          <div
            className="hero-in mb-7 flex flex-wrap items-center gap-2.5 text-muted-foreground"
            style={{ animationDelay: "0ms" }}
          >
            <span className="label-pill text-saffron-400" style={{ borderColor: "rgb(255 122 38 / 0.3)" }}>
              <span className="relative grid h-1.5 w-1.5 place-items-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Status · Available
            </span>
            <span className="label-pill">19.0760°N · 72.8777°E</span>
            <span className="label-pill">Mumbai · IST</span>
          </div>

          {/* devanagari whisper */}
          <p
            className="devanagari hero-in mb-3 text-[18px] text-saffron-400/80"
            style={{ animationDelay: "80ms" }}
          >
            रोहन अजय रामानी
          </p>

          {/* monumental name */}
          <h1
            className="hero-in relative font-display text-[clamp(2.8rem,8vw,6.4rem)] font-bold leading-[0.92] tracking-[-0.04em] text-foreground"
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

          {/* tagline */}
          <p
            className="hero-in mt-7 max-w-[600px] text-balance text-[16.5px] leading-[1.55] text-muted-foreground md:text-[17.5px]"
            style={{ animationDelay: "240ms" }}
          >
            Engineer <span className="text-foreground">→</span> Operator. Currently building{" "}
            <span className="font-semibold text-foreground">Fresh &amp; Select Gro</span> and{" "}
            <span className="font-semibold text-foreground">KyRo Core</span>, fresh off 2.5+ years of{" "}
            <span className="font-semibold text-foreground">Data &amp; Tech at JPMorganChase</span>.
            Two papers, one academic medal, ten years of community work.
          </p>

          {/* CTAs */}
          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <a href="#experience" className="btn-primary group">
              See the Trail
              <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener" className="btn-ghost group">
              Résumé
              <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
            </a>
          </div>

          {/* socials + stats strip */}
          <div
            className="hero-in mt-9 flex flex-col gap-6"
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

            {/* inline stats */}
            <div className="flex items-center gap-7 border-t border-white/10 pt-5">
              <Stat value="2.5y" label="at JPMC" tone="text-saffron-400" />
              <span aria-hidden className="h-8 w-px bg-white/10" />
              <Stat value="6k+" label="Mumbai Ignite" tone="text-cyan-400" />
              <span aria-hidden className="h-8 w-px bg-white/10" />
              <Stat value="9.76" label="SRM CGPA" tone="text-magenta-400" />
            </div>
          </div>
        </div>

        {/* RIGHT — portrait framed by the yantra halo */}
        <div className="order-1 md:order-2 md:col-span-5">
          <div
            className="hero-in relative mx-auto w-full max-w-[380px]"
            style={{ animationDelay: "200ms" }}
          >
            {/* corner brackets */}
            <CornerBracket className="absolute -left-2.5 -top-2.5 z-20 size-6 text-saffron-400" />
            <CornerBracket className="absolute -right-2.5 -top-2.5 z-20 size-6 -scale-x-100 text-saffron-400" />
            <CornerBracket className="absolute -left-2.5 -bottom-2.5 z-20 size-6 -scale-y-100 text-cyan-400" />
            <CornerBracket className="absolute -right-2.5 -bottom-2.5 z-20 size-6 -scale-100 text-cyan-400" />

            <div className="relative overflow-hidden rounded-xl border border-white/12 bg-ink-900/40 shadow-2xl shadow-black/50 backdrop-blur-sm">
              {/* portrait */}
              <picture>
                <source srcSet="/images/portrait.webp" type="image/webp" />
                <img
                  src="/images/portrait.jpg"
                  alt="Rohan Ajay Ramani"
                  className="aspect-[4/5] w-full object-cover object-[center_15%]"
                  style={{ filter: "contrast(1.06) saturate(1.05) brightness(0.98)" }}
                />
              </picture>

              {/* theme tint — saffron from top-left, cyan from bottom-right */}
              <div
                className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(255 122 38 / 0.35) 0%, transparent 45%, transparent 60%, rgb(34 211 238 / 0.30) 100%)",
                }}
              />
              {/* scanlines */}
              <div className="scanlines pointer-events-none absolute inset-0" />
              {/* bottom fade for label */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-900 via-ink-900/60 to-transparent" />

              {/* top label */}
              <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
                <span className="label-pill text-saffron-400" style={{ borderColor: "rgb(255 122 38 / 0.4)", background: "rgb(6 6 15 / 0.6)" }}>
                  <span className="size-1.5 animate-glow-pulse rounded-full bg-emerald-400" />
                  SYS · LIVE
                </span>
                <OmGlyph className="text-2xl text-saffron-400/80" />
              </div>

              {/* bottom identity */}
              <div className="absolute inset-x-4 bottom-4 z-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400">
                  Engineer · Operator · Builder
                </p>
                <p className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-foreground">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground md:flex"
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
        @keyframes hero-in { to { opacity: 1; transform: translateY(0); } }
        @keyframes scroll-cue {
          0%,100% { transform: translate(-50%, 0); }
          50%     { transform: translate(-50%, 5px); }
        }
      `}</style>
    </section>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone: string }) {
  return (
    <div>
      <p className={`font-display text-[26px] font-bold leading-none ${tone}`}>
        <Counter value={value} />
      </p>
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
