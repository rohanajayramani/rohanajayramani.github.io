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
import { Volunteering } from "./components/Volunteering";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";
import { BootLoader } from "./components/BootLoader";
import { Cursor } from "./components/Cursor";

export default function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (!booted) return;
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
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
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.6 });
    };
    document.addEventListener("click", onAnchorClick);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, [booted]);

  return (
    <div className="relative min-h-screen overflow-clip">
      <Ambient />
      <Cursor />
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
        <Volunteering />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
