import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { Ambient } from "./components/Ambient";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Honors } from "./components/Honors";
import { Recommendations } from "./components/Recommendations";
import { Volunteering } from "./components/Volunteering";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";
import { ScrollProgress } from "./components/ScrollProgress";
import { BootLoader } from "./components/BootLoader";
import { Cursor } from "./components/Cursor";

export default function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (!booted) return;

    // Respect reduced-motion: skip smooth scroll entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1, // frame-based smoothing — tracks the wheel, no floaty lag
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 1.5,
      syncTouch: false,
    });

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72, duration: 0.9 });
    };
    document.addEventListener("click", onAnchorClick);

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, [booted]);

  return (
    <div className="relative min-h-screen overflow-clip">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-md focus:bg-saffron-500 focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-[0.16em] focus:text-background"
      >
        Skip to content
      </a>
      <Ambient />
      <Cursor />
      <ScrollProgress />
      <BootLoader onDone={() => setBooted(true)} />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Honors />
        <Recommendations />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
