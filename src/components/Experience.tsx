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
        title="A career told in"
        titleItalic="chapters"
        subtitle="Engineering, ops, hospitality, community — most of these overlapped at once."
      />

      <ol className="relative mx-auto max-w-[900px] pl-10 md:pl-14">
        {/* Gold timeline rail */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-2 left-3 w-px md:left-5"
          style={{
            background:
              "linear-gradient(180deg, #ff8a3d 0%, #d4af37 50%, #3b2c8c 100%)",
            opacity: 0.55,
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
            {/* Marker — gold rim with saffron core */}
            <span
              className="absolute -left-7 top-5 grid h-6 w-6 place-items-center rounded-full md:-left-[2.35rem] md:h-7 md:w-7"
              style={{
                background: "linear-gradient(135deg, #ff9d4d, #d4af37)",
                boxShadow:
                  "0 0 0 4px hsl(var(--background)), 0 0 0 5px rgb(212 175 55 / 0.4), 0 0 24px rgb(255 138 61 / 0.55)",
              }}
            >
              <span className="size-1.5 rounded-full bg-background" />
            </span>

            <div className="glass group rounded-[24px] p-7 transition hover:-translate-y-0.5 hover:border-gold-400/40">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">
                    {exp.start} — {exp.end}
                    {exp.duration && (
                      <span className="ml-2 text-muted-foreground">· {exp.duration}</span>
                    )}
                  </p>
                  <h3 className="heading-display mt-2.5 text-[22px] leading-tight md:text-[26px]">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] font-medium text-saffron-400">
                    {exp.company}
                    {exp.type && (
                      <span className="ml-2 text-muted-foreground">· {exp.type}</span>
                    )}
                  </p>
                </div>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold-400/20 bg-white/[0.025] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                )}
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[14.5px] leading-[1.65] text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-[10px] size-1 flex-none rounded-full bg-gold-400/70"
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
                      className="inline-flex items-center rounded-full border border-gold-400/15 bg-white/[0.015] px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
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
