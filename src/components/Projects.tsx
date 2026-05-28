import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { projects } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { cn } from "../lib/utils";

export function Projects() {
  return (
    <section id="work" className="section-pad container-page">
      <SectionHead
        num="03"
        kicker="Work · Research"
        title="Selected projects and papers."
        subtitle="Two published papers, IIT Madras' best-project recognition, plus my favourite SRM coursework."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className={cn(
              "glass group relative flex flex-col overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:border-white/20",
              p.span === "wide" && "md:col-span-2",
            )}
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-violet/15 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-brand-violet/30 bg-brand-violet/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-cyan">
                {p.tag}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {p.period}
              </span>
            </div>

            <h3 className="relative mt-4 heading-display text-2xl md:text-3xl">{p.title}</h3>
            <p className="relative mt-3 max-w-prose text-[14.5px] leading-relaxed text-muted-foreground">
              {p.blurb}
            </p>

            <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12.5px] font-medium transition hover:border-brand-cyan hover:text-brand-cyan"
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12.5px] font-medium transition hover:border-brand-cyan hover:text-brand-cyan"
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12.5px] font-medium transition hover:border-brand-cyan hover:text-brand-cyan"
                >
                  <FileText className="size-3.5" />
                  Report
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
