import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  { l: "नमस्ते", w: 220 },
  { l: "init :: mumbai · 19.0760°N · 72.8777°E", w: 360 },
  { l: "loading :: sri yantra · 9 triangles · ∞ rotations", w: 520 },
  { l: "loading :: typography · geist + tiro devanagari", w: 480 },
  { l: "loading :: 3d engine · webgl · r3f", w: 380 },
  { l: "ready :: rohan ajay ramani · engineer turned operator", w: 720 },
];

export function BootLoader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // If user has visited before in this session, skip
    const seen = sessionStorage.getItem("rohan-booted");
    if (seen) {
      setDone(true);
      onDone();
      return;
    }

    let cancelled = false;
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      i += 1;
      if (i >= LINES.length) {
        setStep(LINES.length);
        setTimeout(() => {
          if (cancelled) return;
          sessionStorage.setItem("rohan-booted", "1");
          setDone(true);
          onDone();
        }, 360);
        return;
      }
      setStep(i);
      setTimeout(tick, 220 + Math.random() * 160);
    };
    setStep(1);
    setTimeout(tick, 280);
    return () => {
      cancelled = true;
    };
  }, [onDone]);

  // Skip on click
  const skip = () => {
    sessionStorage.setItem("rohan-booted", "1");
    setDone(true);
    onDone();
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onClick={skip}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background"
        >
          {/* corner brackets */}
          <span className="absolute left-6 top-6 size-3 border-l border-t border-saffron-400/60" />
          <span className="absolute right-6 top-6 size-3 border-r border-t border-saffron-400/60" />
          <span className="absolute left-6 bottom-6 size-3 border-b border-l border-cyan-400/60" />
          <span className="absolute right-6 bottom-6 size-3 border-b border-r border-cyan-400/60" />

          {/* center brand */}
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
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={
                    i === LINES.length - 1
                      ? "text-saffron-400"
                      : i === 0
                        ? "devanagari text-[22px] text-saffron-400"
                        : "text-muted-foreground"
                  }
                >
                  <span className="mr-3 text-saffron-400/70">▸</span>
                  {line.l}
                </motion.li>
              ))}
              {/* Blinking cursor */}
              {step > 0 && step < LINES.length && (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-saffron-400"
                >
                  <span className="mr-3 text-saffron-400/70">▸</span>
                  <span className="inline-block h-3 w-2 align-middle bg-saffron-400" />
                </motion.li>
              )}
            </ul>

            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              click anywhere to skip
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
