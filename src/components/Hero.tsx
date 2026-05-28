import { ArrowRight, ArrowUpRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";
import { profile } from "../data/profile";
import { OmGlyph } from "./decor/Motifs";

const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length),
      2400,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-36"
    >
      {/* 3D scene — full background, fades in from center-right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/85" />
      </div>

      {/* Mobile scene on top */}
      <div className="pointer-events-none relative mx-auto block h-[300px] w-full md:hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Foreground content */}
      <div className="container-page relative z-20 grid grid-cols-1 items-center gap-12 pb-24 md:grid-cols-[1.1fr_0.9fr] md:pb-32">
        <div>
          {/* Devanagari eyebrow */}
          <div className="hero-in mb-7 flex items-center gap-3" style={{ animationDelay: "0ms" }}>
            <span className="devanagari text-2xl text-gold-400" aria-hidden>
              नमस्ते
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-gold-400/60 to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Namaste — welcome
            </span>
          </div>

          <h1
            className="heading-display hero-in text-balance text-[clamp(2.6rem,7vw,5.2rem)] leading-[0.96]"
            style={{ animationDelay: "80ms", fontVariationSettings: "'opsz' 144" }}
          >
            <span className="text-foreground">I'm </span>
            <span className="text-grad italic">Rohan&nbsp;Ajay</span>
            <br />
            <span className="text-foreground">Ramani</span>
            <span className="text-grad-warm">.</span>
          </h1>

          <p
            className="hero-in mt-7 max-w-[560px] font-sans text-balance text-[18px] leading-[1.55] text-muted-foreground"
            style={{ animationDelay: "200ms" }}
          >
            <span className="relative inline-block min-w-[9ch] align-baseline">
              <span
                key={roleIndex}
                className="absolute inset-0 text-grad font-semibold italic font-display animate-fade-up"
                style={{ fontStyle: "italic" }}
              >
                {profile.rotatingRoles[roleIndex]}
              </span>
              <span className="invisible font-display font-semibold italic">
                {profile.rotatingRoles[roleIndex]}
              </span>
            </span>{" "}
            Currently building{" "}
            <span className="font-medium text-foreground">Fresh &amp; Select Gro</span>, fresh
            off 2.5+ years of{" "}
            <span className="font-medium text-foreground">Data &amp; Tech at JPMorganChase</span>
            <span className="text-gold-400">.</span>
          </p>

          <div
            className="hero-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "300ms" }}
          >
            <a href="#experience" className="btn-saffron group">
              See my story
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
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

          <ul
            className="hero-in mt-10 flex items-center gap-3"
            style={{ animationDelay: "400ms" }}
          >
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/25 bg-white/[0.025] text-foreground/80 transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* "Currently" card — editorial */}
        <aside
          className="hero-in relative hidden md:block"
          style={{ animationDelay: "450ms" }}
        >
          <div className="relative ml-auto max-w-[420px] glass rounded-[28px] p-7 shadow-2xl shadow-black/40">
            {/* Om watermark in corner */}
            <OmGlyph className="absolute right-5 top-4 text-4xl text-gold-400/25" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">
              Currently
            </p>
            <h3 className="heading-display mt-3 text-3xl leading-[1.05]">
              Engineer turned <em className="text-grad italic">operator</em>.
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
              Building <span className="text-foreground">Fresh &amp; Select Gro</span> across the
              Mumbai Metropolitan Region — and putting{" "}
              <span className="text-foreground">KyRo Core</span> together brick by brick.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gold-400/15 pt-4">
              <div>
                <p className="heading-display text-3xl font-medium text-grad">2.5y</p>
                <p className="mt-0.5 text-[10.5px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                  at JPMC
                </p>
              </div>
              <div>
                <p className="heading-display text-3xl font-medium text-grad">6k+</p>
                <p className="mt-0.5 text-[10.5px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                  Mumbai Ignite
                </p>
              </div>
              <div>
                <p className="heading-display text-3xl font-medium text-grad">9.76</p>
                <p className="mt-0.5 text-[10.5px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                  SRM CGPA
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground"
        style={{ animation: "scroll-cue 2.2s ease-in-out infinite" }}
      >
        Scroll
        <ChevronDown className="size-3 text-gold-400" />
      </a>

      <style>{`
        .hero-in {
          opacity: 0;
          transform: translateY(18px);
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
