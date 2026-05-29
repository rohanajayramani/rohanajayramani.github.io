import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { projects } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { cn } from "../lib/utils";
import { CornerBracket } from "./decor/Motifs";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 8;
    el.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1400px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
      style={{
        backgroundImage:
          "radial-gradient(560px circle at var(--mx,50%) var(--my,50%), rgb(255 122 38 / 0.10), transparent 40%)",
      }}
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="section-pad container-page">
      <SectionHead
        num="03"
        kicker="WORK · RESEARCH"
        title="Selected projects and"
        titleEmphasis="Papers"
        subtitle="Two published papers, IIT Madras' best-project recognition, plus my favourite SRM coursework."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={cn(p.span === "wide" && "md:col-span-2")}
          >
            <TiltCard className="rounded-lg">
              <article className="surface group relative flex h-full flex-col overflow-hidden rounded-lg p-7 transition hover:border-saffron-400/40">
                <CornerBracket className="absolute right-3 top-3 size-4 -scale-x-100 text-saffron-400/50" />

                <div className="relative flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-sm border border-saffron-400/35 bg-saffron-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-saffron-400">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.period}
                  </span>
                </div>

                <h3 className="relative mt-5 font-display text-[28px] font-bold uppercase leading-tight tracking-tight md:text-[30px]">
                  {p.title}
                </h3>
                <p className="relative mt-3 max-w-prose text-[14px] leading-[1.65] text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <ArrowUpRight className="size-3.5" />
                      Read
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <Github className="size-3.5" />
                      Source
                    </a>
                  )}
                  {p.doc && (
                    <a
                      href={p.doc}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.025] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      <FileText className="size-3.5" />
                      Report
                    </a>
                  )}
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
