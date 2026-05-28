// Lightweight SVG-based Indic motifs. No external deps, fully scalable.

type SvgProps = React.SVGProps<SVGSVGElement>;

/* ---------- Mandala — concentric ornament for backgrounds + dividers ---------- */
export function Mandala({ className, ...rest }: SvgProps) {
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
      <circle cx="100" cy="100" r="98" opacity=".22" />
      <circle cx="100" cy="100" r="80" opacity=".35" />
      <circle cx="100" cy="100" r="62" opacity=".5" />
      <circle cx="100" cy="100" r="44" opacity=".7" />
      <circle cx="100" cy="100" r="26" opacity=".9" />
      <circle cx="100" cy="100" r="3" fill="currentColor" stroke="none" />
      {[...Array(24)].map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const r1 = 26;
        const r2 = 80;
        return (
          <line
            key={i}
            x1={100 + Math.cos(a) * r1}
            y1={100 + Math.sin(a) * r1}
            x2={100 + Math.cos(a) * r2}
            y2={100 + Math.sin(a) * r2}
            opacity=".35"
          />
        );
      })}
      {[...Array(12)].map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 62;
        const y = 100 + Math.sin(a) * 62;
        return <circle key={`p-${i}`} cx={x} cy={y} r="2.5" fill="currentColor" stroke="none" opacity=".7" />;
      })}
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const x1 = 100 + Math.cos(a) * 44;
        const y1 = 100 + Math.sin(a) * 44;
        const x2 = 100 + Math.cos(a) * 98;
        const y2 = 100 + Math.sin(a) * 98;
        return <line key={`s-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} opacity=".15" />;
      })}
    </svg>
  );
}

/* ---------- Paisley — a single decorative paisley shape ---------- */
export function Paisley({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      className={className}
      {...rest}
    >
      <path
        d="M60 12 C 40 12, 18 38, 18 78 C 18 118, 42 148, 70 148 C 96 148, 110 130, 110 108 C 110 90, 96 80, 80 80 C 66 80, 56 90, 56 102 C 56 112, 64 120, 74 120"
        opacity=".75"
      />
      <path
        d="M60 24 C 44 24, 28 46, 28 78 C 28 110, 48 138, 70 138 C 90 138, 100 124, 100 108 C 100 94, 90 86, 80 86"
        opacity=".5"
      />
      <circle cx="74" cy="120" r="2" fill="currentColor" stroke="none" opacity=".7" />
      <circle cx="44" cy="60" r="1.5" fill="currentColor" stroke="none" opacity=".5" />
      <circle cx="52" cy="42" r="1" fill="currentColor" stroke="none" opacity=".4" />
    </svg>
  );
}

/* ---------- Jaali — a tile-able geometric lattice (Mughal screen) ---------- */
export function JaaliTile({ className, ...rest }: SvgProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden
      className={className}
      {...rest}
    >
      <polygon points="50,2 98,26 98,74 50,98 2,74 2,26" opacity=".7" />
      <polygon points="50,18 84,34 84,66 50,82 16,66 16,34" opacity=".55" />
      <polygon points="50,34 70,42 70,58 50,66 30,58 30,42" opacity=".4" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" opacity=".7" />
      <line x1="50" y1="2" x2="50" y2="98" opacity=".25" />
      <line x1="2" y1="26" x2="98" y2="74" opacity=".25" />
      <line x1="98" y1="26" x2="2" y2="74" opacity=".25" />
    </svg>
  );
}

/* ---------- Om — ॐ as a graphic (uses Tiro Devanagari) ---------- */
export function OmGlyph({ className }: { className?: string }) {
  return (
    <span aria-hidden className={`devanagari leading-none ${className ?? ""}`} style={{ fontWeight: 400 }}>
      ॐ
    </span>
  );
}

/* ---------- Decorative star/sun for kickers ---------- */
export function StarBurst({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...rest}>
      <path d="M12 1l1.5 6 5.5-2-2 5.5 6 1.5-6 1.5 2 5.5-5.5-2L12 23l-1.5-6-5.5 2 2-5.5L1 12l6-1.5-2-5.5 5.5 2L12 1z" />
    </svg>
  );
}

/* ---------- Lotus petal accent (small) ---------- */
export function LotusAccent({ className, ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden className={className} {...rest}>
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * 360;
        return (
          <ellipse
            key={i}
            cx="40"
            cy="20"
            rx="6"
            ry="18"
            opacity=".7"
            transform={`rotate(${a} 40 40)`}
          />
        );
      })}
      <circle cx="40" cy="40" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
