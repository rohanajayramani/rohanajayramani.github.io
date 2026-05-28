import { motion } from "framer-motion";
import { education, certifications } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-pad container-page">
      <SectionHead
        num="04"
        kicker="Learning"
        title="Where I"
        titleItalic="learned"
        subtitle="Two parallel undergraduate programmes. Five years of late nights."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {education.map((e, idx) => (
          <motion.article
            key={e.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative overflow-hidden rounded-[26px] p-8"
          >
            <div className="flex items-start gap-6">
              <div className="grid h-16 w-16 flex-none place-items-center rounded-2xl border border-gold-400/25 bg-white/[0.025] p-2">
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={`${e.school} crest`}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <GraduationCap className="size-7 text-gold-400" />
                )}
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">
                  {e.start} — {e.end}
                </p>
                <h3 className="heading-display mt-2 text-[22px] leading-tight">
                  {e.degree}
                </h3>
                {e.spec && (
                  <p className="mt-1 text-[13.5px] text-muted-foreground">{e.spec}</p>
                )}
                <p className="mt-2 text-[14px] font-medium text-saffron-400">{e.school}</p>
              </div>
            </div>

            {e.grade && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-400/35 bg-gold-400/10 px-3.5 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Result
                </span>
                <span className="font-display text-[14px] font-medium text-gold-400">
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
                  <span aria-hidden className="mt-2 size-1 flex-none rounded-full bg-saffron-400/80" />
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
            className="glass flex items-center justify-between gap-4 rounded-[20px] p-5"
          >
            <div>
              <p className="heading-display text-[17px] font-medium">{c.title}</p>
              <p className="text-[13px] text-muted-foreground">
                {c.issuer} · {c.when}
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400/80">
              ID {c.cred}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
