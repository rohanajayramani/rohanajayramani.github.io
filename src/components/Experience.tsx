import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "../data/profile";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="section-pad container-page">
      <SectionHead
        num="02"
        kicker="TRAIL · TIMELINE"
        title="A career told in"
        titleEmphasis="Chapters"
        subtitle="Engineering, ops, hospitality, community — most of these overlapped at once."
      />

      <ol className="relative mx-auto max-w-[920px] pl-10 md:pl-12">
        {/* Timeline rail */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-2 left-3 w-px md:left-4"
          style={{
            background:
              "linear-gradient(180deg, #ff7a26 0%, #ec4899 35%, #22d3ee 75%, #06b6d4 100%)",
            opacity: 0.65,
          }}
        />

        {experiences.map((exp, idx) => (
          <motion.li
            key={`${exp.company}-${idx}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-12 last:pb-0"
          >
            {/* Marker — small square with index */}
            <span
              className="absolute -left-7 top-5 grid h-6 w-6 place-items-center rounded-sm border border-white/20 bg-background font-mono text-[9px] font-semibold text-saffron-400 md:-left-[1.95rem]"
              style={{
                boxShadow:
                  "0 0 0 4px hsl(var(--background)), 0 0 18px rgb(255 122 38 / 0.5)",
              }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="surface group rounded-lg p-7 transition hover:-translate-y-0.5 hover:border-saffron-400/40">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-saffron-400">
                    {exp.start} — {exp.end}
                    {exp.duration && (
                      <span className="ml-2 text-muted-foreground">· {exp.duration}</span>
                    )}
                  </p>
                  <h3 className="mt-2.5 font-display text-[22px] font-bold uppercase leading-tight tracking-tight md:text-[26px]">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.16em] text-cyan-400">
                    {exp.company}
                    {exp.type && (
                      <span className="ml-2 normal-case tracking-normal text-muted-foreground">
                        · {exp.type}
                      </span>
                    )}
                  </p>
                </div>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 rounded-sm border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                )}
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[14px] leading-[1.65] text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 size-1 flex-none rounded-full bg-saffron-400/70"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-sm border border-white/8 bg-white/[0.015] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
