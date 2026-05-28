import { useEffect } from "react";
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

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative min-h-screen overflow-clip">
      <Ambient />
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
