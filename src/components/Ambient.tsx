import { SriYantra, ChakraWheel } from "./decor/Motifs";

export function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Saffron + magenta + cyan electric orbs */}
      <span
        className="absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full opacity-50 blur-[140px]"
        style={{
          background: "radial-gradient(circle at center, #ff7a26 0%, transparent 70%)",
          animation: "ambient-drift 28s ease-in-out infinite alternate",
        }}
      />
      <span
        className="absolute -right-48 top-1/3 h-[580px] w-[580px] rounded-full opacity-45 blur-[140px]"
        style={{
          background: "radial-gradient(circle at center, #22d3ee 0%, transparent 70%)",
          animation: "ambient-drift 32s ease-in-out infinite alternate-reverse",
        }}
      />
      <span
        className="absolute bottom-[-240px] left-1/3 h-[680px] w-[680px] rounded-full opacity-40 blur-[160px]"
        style={{
          background: "radial-gradient(circle at center, #ec4899 0%, transparent 70%)",
          animation: "ambient-drift 36s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(255 255 255 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      {/* Sri Yantra watermark in top-right + Chakra wheel in bottom-left */}
      <SriYantra
        className="absolute -right-32 -top-32 h-[440px] w-[440px] text-saffron-400 opacity-[0.08] animate-spin-slow"
        style={{ animationDuration: "90s" }}
      />
      <ChakraWheel
        className="absolute -bottom-44 -left-44 h-[520px] w-[520px] text-cyan-400 opacity-[0.07] animate-spin-reverse"
        style={{ animationDuration: "110s" }}
      />

      {/* Film grain — subtle texture across the whole page */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <style>{`
        @keyframes ambient-drift {
          from { transform: translate3d(0,0,0) scale(1); }
          to   { transform: translate3d(50px,-40px,0) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
