import { useEffect, useRef, useState } from "react";

const LINES = [
  { l: "नमस्ते", devanagari: true },
  { l: "init :: mumbai · 19.0760°N · 72.8777°E" },
  { l: "loading :: sri yantra · 9 triangles · ∞ rotations" },
  { l: "loading :: typography · geist + tiro devanagari" },
  { l: "loading :: 3d engine · webgl · r3f" },
  { l: "ready :: rohan ajay ramani · engineer turned operator", ready: true },
];

export function BootLoader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);
  const doneCalled = useRef(false);

  const finish = () => {
    if (doneCalled.current) return;
    doneCalled.current = true;
    try {
      sessionStorage.setItem("rohan-booted", "1");
    } catch (_) {}
    setFading(true);
    onDone();
    // Hard removal — never relies on animation callbacks
    window.setTimeout(() => setRemoved(true), 620);
  };

  useEffect(() => {
    // Skip entirely if booted earlier this session
    let seen = false;
    try {
      seen = sessionStorage.getItem("rohan-booted") === "1";
    } catch (_) {}
    if (seen) {
      doneCalled.current = true;
      onDone();
      setRemoved(true);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      i += 1;
      if (i >= LINES.length) {
        setStep(LINES.length);
        timers.push(window.setTimeout(finish, 420));
        return;
      }
      setStep(i);
      timers.push(window.setTimeout(tick, 230 + Math.random() * 150));
    };
    setStep(1);
    timers.push(window.setTimeout(tick, 300));

    // Absolute safety net — boot can never last more than 4s
    const safety = window.setTimeout(finish, 4000);
    timers.push(safety);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (removed) return null;

  return (
    <div
      onClick={finish}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out ${
        fading ? "pointer-events-none opacity-0" : "cursor-pointer opacity-100"
      }`}
    >
      {/* corner brackets */}
      <span className="absolute left-6 top-6 size-3 border-l border-t border-saffron-400/60" />
      <span className="absolute right-6 top-6 size-3 border-r border-t border-saffron-400/60" />
      <span className="absolute left-6 bottom-6 size-3 border-b border-l border-cyan-400/60" />
      <span className="absolute right-6 bottom-6 size-3 border-b border-r border-cyan-400/60" />

      <div className="relative w-full max-w-[640px] px-6">
        <div className="mb-7 flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-md text-[15px] font-bold"
            style={{
              background: "linear-gradient(135deg, #ff8a3d 0%, #ec4899 70%, #22d3ee 130%)",
              color: "#06060f",
            }}
          >
            <span className="devanagari text-[18px] -translate-y-px">र</span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            ROHAN A. RAMANI · BOOT
          </span>
          <span aria-hidden className="ml-auto inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 animate-glow-pulse rounded-full bg-emerald-400" />
            online
          </span>
        </div>

        <ul className="space-y-2 font-mono text-[12.5px] leading-relaxed">
          {LINES.slice(0, step).map((line, i) => (
            <li
              key={i}
              className={
                line.ready
                  ? "text-saffron-400"
                  : line.devanagari
                    ? "devanagari text-[22px] text-saffron-400"
                    : "text-muted-foreground"
              }
              style={{ animation: "boot-line 0.25s ease-out both" }}
            >
              <span className="mr-3 text-saffron-400/70">▸</span>
              {line.l}
            </li>
          ))}
          {step > 0 && step < LINES.length && (
            <li className="text-saffron-400">
              <span className="mr-3 text-saffron-400/70">▸</span>
              <span className="inline-block h-3 w-2 animate-glow-pulse align-middle bg-saffron-400" />
            </li>
          )}
        </ul>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          click anywhere to skip
        </p>
      </div>

      <style>{`
        @keyframes boot-line {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
