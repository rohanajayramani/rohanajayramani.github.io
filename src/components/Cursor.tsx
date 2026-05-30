import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, label';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No custom cursor on touch / coarse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let active = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = e.target as HTMLElement | null;
      const hit = el?.closest(INTERACTIVE_SELECTOR);
      active = !!hit;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onDown = () => {
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(0.85)`;
    };
    const onUp = () => {
      // animate frame will reset
    };

    const tick = () => {
      // Spring follow
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      const scale = active ? 1.7 : 1;
      ring.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scale})`;
      ring.style.borderColor = active ? "rgb(34 211 238 / 0.9)" : "rgb(212 175 55 / 0.6)";
      raf = requestAnimationFrame(tick);
    };

    document.body.style.cursor = "none";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[110] h-9 w-9 rounded-full border border-gold-400/60 opacity-0 transition-[border-color,transform] duration-150 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[111] h-1.5 w-1.5 rounded-full bg-saffron-400 opacity-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)", boxShadow: "0 0 12px rgb(255 122 38 / 0.8)" }}
      />
    </>
  );
}
