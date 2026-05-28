import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "../data/profile";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="section-pad container-page">
      <SectionHead
        num="02"
        kicker="Experience"
        title="A career told in chapters."
        subtitle="Engineering, ops, hospitality, community — most of these overlapped at once."
      />

      <ol className="relative mx-auto max-w-[900px] pl-9 md:pl-12">
        {/* Gradient timeline rail */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-2 left-3 w-px md:left-4"
          style={{
            background:
              "linear-gradient(180deg, #8b5cf6 0%, #22d3ee 50%, #f59e0b 100%)",
            opacity: 0.55,
          }}
        />

        {experiences.map((exp, idx) => (
          <motion.li
            key={`${exp.company}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: idx * 0.04 }}
            className="relative pb-10 last:pb-0"
          >
            {/* Marker */}
            <span
              className={`absolute -left-6 top-4 grid h-5 w-5 place-items-center rounded-full border-2 border-background md:-left-[1.85rem] ${exp.color}`}
              style={{ boxShadow: "0 0 0 4px hsl(var(--background))" }}
            />

            <div className="glass group rounded-3xl p-6 transition hover:-translate-y-0.5 hover:border-white/20">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-amber">
                    {exp.start} — {exp.end}
                    {exp.duration && (
                      <span className="ml-2 text-muted-foreground">· {exp.duration}</span>
                    )}
                  </p>
                  <h3 className="mt-2 heading-display text-xl md:text-2xl">{exp.role}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-cyan">
                    {exp.company}
                    {exp.type && (
                      <span className="ml-2 text-muted-foreground">· {exp.type}</span>
                    )}
                  </p>
                </div>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                )}
              </div>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden className="mt-2 size-1.5 flex-none rounded-full bg-brand-cyan/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
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
