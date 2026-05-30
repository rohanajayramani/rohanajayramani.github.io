import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full origin-left"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, #ff7a26, #ec4899 55%, #22d3ee)",
          boxShadow: "0 0 12px rgb(255 122 38 / 0.6)",
        }}
      />
    </div>
  );
}
