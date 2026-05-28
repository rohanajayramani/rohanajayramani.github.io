import { motion } from "framer-motion";
import { education, certifications } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-pad container-page">
      <SectionHead
        num="04"
        kicker="Education"
        title="Where I learned."
        subtitle="Two parallel undergraduate programmes. Five years of late nights."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((e, idx) => (
          <motion.article
            key={e.school}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="glass relative overflow-hidden rounded-3xl p-7"
          >
            <div className="flex items-start gap-5">
              <div className="grid h-16 w-16 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={`${e.school} crest`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <GraduationCap className="size-7 text-brand-cyan" />
                )}
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-amber">
                  {e.start} — {e.end}
                </p>
                <h3 className="mt-1 heading-display text-xl leading-tight">{e.degree}</h3>
                {e.spec && (
                  <p className="mt-0.5 text-sm text-muted-foreground">{e.spec}</p>
                )}
                <p className="mt-2 text-sm font-medium text-brand-cyan">{e.school}</p>
              </div>
            </div>

            {e.grade && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-amber/30 bg-brand-amber/10 px-3 py-1 text-[12.5px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Result
                </span>
                <span className="font-display font-semibold text-brand-amber">{e.grade}</span>
              </div>
            )}

            <ul className="mt-6 space-y-2">
              {e.activities.map((a, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[13.5px] leading-relaxed text-muted-foreground"
                >
                  <span aria-hidden className="mt-2 size-1.5 flex-none rounded-full bg-brand-violet/70" />
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass flex items-center justify-between gap-4 rounded-2xl p-5"
          >
            <div>
              <p className="font-display text-base font-semibold">{c.title}</p>
              <p className="text-sm text-muted-foreground">
                {c.issuer} · {c.when}
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              ID {c.cred}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
