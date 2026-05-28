export function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Soft gradient orbs */}
      <span
        className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, #8b5cf6 0%, transparent 70%)",
          animation: "ambient-drift 22s ease-in-out infinite alternate",
        }}
      />
      <span
        className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full opacity-50 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, #22d3ee 0%, transparent 70%)",
          animation: "ambient-drift 28s ease-in-out infinite alternate-reverse",
        }}
      />
      <span
        className="absolute bottom-[-200px] left-1/3 h-[540px] w-[540px] rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at center, #f59e0b 0%, transparent 70%)",
          animation: "ambient-drift 34s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      <style>{`
        @keyframes ambient-drift {
          from { transform: translate3d(0,0,0) scale(1); }
          to   { transform: translate3d(40px,-30px,0) scale(1.08); }
        }
      `}</style>
    </div>
  );
}
