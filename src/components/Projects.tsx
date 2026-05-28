import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { projects } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { cn } from "../lib/utils";

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -10;
    const ry = (px - 0.5) * 10;
    el.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgb(212 175 55 / 0.10), transparent 40%)",
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
        kicker="Work · Research"
        title="Selected projects and"
        titleItalic="papers"
        subtitle="Two published papers, IIT Madras' best-project recognition, plus my favourite SRM coursework."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={cn(p.span === "wide" && "md:col-span-2")}
          >
            <TiltCard className="rounded-[26px]">
              <article className="glass relative flex h-full flex-col overflow-hidden rounded-[26px] p-8 transition hover:border-gold-400/40">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-saffron-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-saffron-400/35 bg-saffron-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-saffron-400">
                    {p.tag}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.period}
                  </span>
                </div>

                <h3 className="heading-display relative mt-5 text-[28px] leading-tight md:text-[32px]">
                  {p.title}
                </h3>
                <p className="relative mt-4 max-w-prose text-[14.5px] leading-[1.65] text-muted-foreground">
                  {p.blurb}
                </p>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-7">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-white/[0.025] px-3 py-1.5 text-[12.5px] font-medium transition hover:border-gold-400 hover:text-gold-400"
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-white/[0.025] px-3 py-1.5 text-[12.5px] font-medium transition hover:border-gold-400 hover:text-gold-400"
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-white/[0.025] px-3 py-1.5 text-[12.5px] font-medium transition hover:border-gold-400 hover:text-gold-400"
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
