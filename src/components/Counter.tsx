import { useEffect, useRef, useState } from "react";

type Props = {
  value: string; // e.g. "2.5y", "6k+", "9.76"
  duration?: number;
  className?: string;
};

// Parse a string like "9.76", "2.5y", "6k+", "8k+", "3+" into a numeric end + suffix/prefix
function parse(value: string) {
  const m = value.match(/^([^\d.-]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return { prefix: "", num: NaN, suffix: value };
  return { prefix: m[1] ?? "", num: parseFloat(m[2]), suffix: m[3] ?? "" };
}

export function Counter({ value, duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const parsed = useRef(parse(value));
  const startedRef = useRef(false);

  useEffect(() => {
    parsed.current = parse(value);
    if (Number.isNaN(parsed.current.num)) {
      setDisplay(value);
      return;
    }

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTs = performance.now();
      const { num, prefix, suffix } = parsed.current;
      const decimals = value.includes(".") ? (value.split(".")[1].match(/^\d+/)?.[0].length ?? 0) : 0;
      const final = `${prefix}${num.toFixed(decimals)}${suffix}`;
      const step = (now: number) => {
        const t = Math.max(0, Math.min(1, (now - startTs) / duration));
        // ease-out cubic
        const e = 1 - Math.pow(1 - t, 3);
        const v = Math.max(0, num * e);
        setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`);
        if (t < 1) requestAnimationFrame(step);
      };
      // Start from 0 immediately for a visible jump
      setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
      requestAnimationFrame(step);
      // Safety net — guarantee the final value even if rAF stalls (backgrounded tab)
      window.setTimeout(() => setDisplay(final), duration + 200);
    };

    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      start();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
}
