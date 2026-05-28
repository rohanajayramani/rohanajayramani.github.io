import { Mandala } from "./decor/Motifs";

export function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Warm Indic gradient orbs — saffron, indigo, gold */}
      <span
        className="absolute -left-40 -top-32 h-[560px] w-[560px] rounded-full opacity-50 blur-[120px]"
        style={{
          background: "radial-gradient(circle at center, #ff8a3d 0%, transparent 70%)",
          animation: "ambient-drift 26s ease-in-out infinite alternate",
        }}
      />
      <span
        className="absolute -right-48 top-1/3 h-[520px] w-[520px] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle at center, #d4af37 0%, transparent 70%)",
          animation: "ambient-drift 30s ease-in-out infinite alternate-reverse",
        }}
      />
      <span
        className="absolute bottom-[-220px] left-1/3 h-[600px] w-[600px] rounded-full opacity-50 blur-[140px]"
        style={{
          background: "radial-gradient(circle at center, #3b2c8c 0%, transparent 70%)",
          animation: "ambient-drift 36s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle gold grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(212 175 55 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(212 175 55 / 0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
        }}
      />

      {/* Corner mandala watermarks */}
      <Mandala
        className="absolute -right-32 -top-32 h-[420px] w-[420px] text-gold-400 opacity-[0.08] animate-spin-slow"
        style={{ animationDuration: "60s" }}
      />
      <Mandala
        className="absolute -bottom-40 -left-40 h-[480px] w-[480px] text-saffron-400 opacity-[0.07] animate-spin-reverse"
        style={{ animationDuration: "80s" }}
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
