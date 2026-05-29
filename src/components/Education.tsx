import { motion } from "framer-motion";
import { education, certifications } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-pad container-page">
      <SectionHead
        num="04"
        kicker="ROOTS · LEARNING"
        title="Where I"
        titleEmphasis="Learned"
        subtitle="Two parallel undergraduate programmes. Five years of late nights."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((e, idx) => (
          <motion.article
            key={e.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="surface relative overflow-hidden rounded-lg p-8"
          >
            <div className="flex items-start gap-6">
              <div className="grid h-16 w-16 flex-none place-items-center rounded-md border border-white/15 bg-white/[0.025] p-2">
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={`${e.school} crest`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <GraduationCap className="size-7 text-saffron-400" />
                )}
              </div>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-saffron-400">
                  {e.start} — {e.end}
                </p>
                <h3 className="mt-2 font-display text-[22px] font-bold uppercase leading-tight tracking-tight">
                  {e.degree}
                </h3>
                {e.spec && (
                  <p className="mt-1 text-[13.5px] text-muted-foreground">{e.spec}</p>
                )}
                <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.16em] text-cyan-400">
                  {e.school}
                </p>
              </div>
            </div>

            {e.grade && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-saffron-400/35 bg-saffron-400/8 px-3 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Result
                </span>
                <span className="font-mono text-[12.5px] font-semibold text-saffron-400">
                  {e.grade}
                </span>
              </div>
            )}

            <ul className="mt-6 space-y-2.5">
              {e.activities.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[13.5px] leading-[1.65] text-muted-foreground"
                >
                  <span aria-hidden className="mt-2 size-1 flex-none rounded-full bg-cyan-400/70" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="surface flex items-center justify-between gap-4 rounded-md p-5"
          >
            <div>
              <p className="font-display text-[16px] font-bold uppercase tracking-tight">{c.title}</p>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {c.issuer} · {c.when}
              </p>
            </div>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-saffron-400">
              ID {c.cred}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
