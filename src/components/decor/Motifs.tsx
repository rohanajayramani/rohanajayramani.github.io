// Indo-futurist SVG motifs. Sharper, more geometric than the previous soft mandalas.

type SvgProps = React.SVGProps<SVGSVGElement>;

/* ---------- Sri Yantra — interlocking triangles, the classic sacred geometry ---------- */
export function SriYantra({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      aria-hidden
      className={className}
      {...rest}
    >
      {/* Outer square */}
      <rect x="6" y="6" width="188" height="188" opacity=".25" />
      {/* Outer circle */}
      <circle cx="100" cy="100" r="92" opacity=".35" />
      <circle cx="100" cy="100" r="78" opacity=".25" />

      {/* 16 petal-ring (octagon split) */}
      {[...Array(16)].map((_, i) => {
        const a = (i / 16) * Math.PI * 2;
        const r1 = 62;
        const r2 = 78;
        return (
          <line
            key={`r-${i}`}
            x1={100 + Math.cos(a) * r1}
            y1={100 + Math.sin(a) * r1}
            x2={100 + Math.cos(a) * r2}
            y2={100 + Math.sin(a) * r2}
            opacity=".35"
          />
        );
      })}

      {/* Inner circle */}
      <circle cx="100" cy="100" r="62" opacity=".55" />

      {/* 9 interlocking triangles — 4 upward, 5 downward, the heart of Sri Yantra */}
      {/* upward */}
      <polygon points="100,40 144,108 56,108" opacity=".7" />
      <polygon points="100,55 130,98 70,98" opacity=".8" />
      <polygon points="100,68 122,95 78,95" opacity=".75" />
      <polygon points="100,76 116,92 84,92" opacity=".6" />
      {/* downward */}
      <polygon points="100,160 56,92 144,92" opacity=".7" />
      <polygon points="100,145 70,102 130,102" opacity=".8" />
      <polygon points="100,132 78,105 122,105" opacity=".75" />
      <polygon points="100,124 84,108 116,108" opacity=".6" />
      <polygon points="100,116 90,110 110,110" opacity=".5" />

      {/* Central bindu */}
      <circle cx="100" cy="100" r="2.5" fill="currentColor" stroke="none" opacity="1" />
    </svg>
  );
}

/* ---------- Chakra wheel — 8-spoke holographic disc ---------- */
export function ChakraWheel({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden className={className} {...rest}>
      <circle cx="100" cy="100" r="96" opacity=".25" />
      <circle cx="100" cy="100" r="82" opacity=".4" />
      <circle cx="100" cy="100" r="64" opacity=".55" />
      <circle cx="100" cy="100" r="28" opacity=".75" />
      <circle cx="100" cy="100" r="3" fill="currentColor" stroke="none" />
      {[...Array(24)].map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * 28}
            y1={100 + Math.sin(a) * 28}
            x2={100 + Math.cos(a) * 96}
            y2={100 + Math.sin(a) * 96}
            opacity={i % 3 === 0 ? 0.6 : 0.25}
            strokeWidth={i % 3 === 0 ? 1 : 0.5}
          />
        );
      })}
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 64;
        const y = 100 + Math.sin(a) * 64;
        return <circle key={`d-${i}`} cx={x} cy={y} r="2" fill="currentColor" stroke="none" opacity=".8" />;
      })}
    </svg>
  );
}

/* ---------- Circuit Jaali — geometric mughal lattice with circuit-board feel ---------- */
export function CircuitJaali({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden className={className} {...rest}>
      <polygon points="50,4 96,28 96,72 50,96 4,72 4,28" opacity=".7" />
      <polygon points="50,16 84,32 84,68 50,84 16,68 16,32" opacity=".5" />
      <polygon points="50,28 72,38 72,62 50,72 28,62 28,38" opacity=".4" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" opacity=".9" />
      <circle cx="50" cy="4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="96" cy="50" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="50" cy="96" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="4" cy="50" r="1.5" fill="currentColor" stroke="none" />
      <line x1="50" y1="4" x2="50" y2="96" opacity=".2" />
      <line x1="4" y1="28" x2="96" y2="72" opacity=".2" />
      <line x1="96" y1="28" x2="4" y2="72" opacity=".2" />
    </svg>
  );
}

/* ---------- OM glyph ---------- */
export function OmGlyph({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`devanagari leading-none ${className ?? ""}`} style={{ fontWeight: 400 }}>
      ॐ
    </span>
  );
}

/* ---------- Corner bracket — like targeting reticle ---------- */
export function CornerBracket({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden className={className} {...rest}>
      <path d="M2 8 V2 H8" />
      <path d="M22 8 V2 H16" />
      <path d="M2 16 V22 H8" />
      <path d="M22 16 V22 H16" />
    </svg>
  );
}
