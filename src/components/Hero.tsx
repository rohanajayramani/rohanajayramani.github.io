import { ArrowRight, ArrowUpRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";
import { profile } from "../data/profile";

const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.rotatingRoles.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 md:pt-36"
    >
      {/* 3D backdrop — right half on desktop, full top on mobile, both with fades */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] md:block">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </div>

      <div className="pointer-events-none relative mx-auto block h-[260px] w-full md:hidden">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Foreground content */}
      <div className="container-page relative z-20 grid grid-cols-1 items-center gap-12 pb-24 md:grid-cols-[1.05fr_0.95fr] md:pb-32">
        <div>
          <div className="kicker mb-6 hero-in" style={{ animationDelay: "0ms" }}>
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.status.label} · {profile.status.detail}
          </div>

          <h1
            className="heading-display text-balance text-[clamp(2.4rem,6.5vw,4.6rem)] leading-[1.02] hero-in"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-grad">Rohan&nbsp;Ajay</span>
            <br />
            <span className="text-grad-warm">Ramani.</span>
          </h1>

          <p
            className="mt-5 max-w-[520px] text-balance text-[17px] text-muted-foreground hero-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="relative inline-block min-w-[8.5ch] align-baseline">
              <span
                key={roleIndex}
                className="absolute inset-0 text-grad font-semibold animate-fade-up"
              >
                {profile.rotatingRoles[roleIndex]}
              </span>
              <span className="invisible font-semibold">{profile.rotatingRoles[roleIndex]}</span>
            </span>{" "}
            Currently building{" "}
            <span className="font-semibold text-foreground">Fresh &amp; Select Gro</span>, fresh
            off 2.5+ years of{" "}
            <span className="font-semibold text-foreground">Data &amp; Tech at JPMorganChase</span>.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3 hero-in"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:shadow-violet-500/50"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee)" }}
            >
              See my story
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-brand-violet"
            >
              Résumé
              <ArrowUpRight className="size-4 transition group-hover:rotate-45" />
            </a>
          </div>

          <ul
            className="mt-10 flex items-center gap-3 hero-in"
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-foreground/80 transition hover:-translate-y-0.5 hover:border-brand-violet hover:text-brand-cyan"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Currently card — sits on top of the 3D backdrop */}
        <aside
          className="relative hidden md:block hero-in"
          style={{ animationDelay: "450ms" }}
        >
          <div className="relative ml-auto max-w-[420px] glass rounded-3xl p-6 shadow-2xl shadow-black/30">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Currently
            </p>
            <h3 className="mt-2 heading-display text-2xl">Engineer turned operator.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Building <span className="text-foreground">Fresh &amp; Select Gro</span> across
              the Mumbai Metropolitan Region. Putting{" "}
              <span className="text-foreground">KyRo Core</span> together brick by brick. Two
              published papers along the way.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="font-display text-2xl font-bold text-grad">2.5y</p>
                <p className="text-[11px] text-muted-foreground">at JPMC</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-grad">6k+</p>
                <p className="text-[11px] text-muted-foreground">Mumbai Ignite</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-grad">9.76</p>
                <p className="text-[11px] text-muted-foreground">SRM CGPA</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
        style={{ animation: "scroll-cue 2.2s ease-in-out infinite" }}
      >
        Scroll
        <ChevronDown className="size-3 text-brand-cyan" />
      </a>
      <style>{`
        .hero-in {
          opacity: 0;
          transform: translateY(16px);
          animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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
