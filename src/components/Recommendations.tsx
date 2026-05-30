import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { recommendations } from "../data/profile";
import { SectionHead } from "./SectionHead";

export function Recommendations() {
  return (
    <section id="recommendations" className="section-pad container-page">
      <SectionHead
        num="06"
        kicker="VOUCHED · ENDORSEMENTS"
        title="In their"
        titleEmphasis="words"
        subtitle="From the mentors who taught me — verbatim from LinkedIn."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {recommendations.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="surface relative flex flex-col rounded-lg p-8"
          >
            <Quote className="size-7 text-saffron-400/40" />
            <blockquote className="mt-4 flex-1 text-pretty text-[15px] leading-[1.7] text-foreground/90">
              {r.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
              <span
                className="grid h-11 w-11 flex-none place-items-center rounded-full font-mono text-[13px] font-semibold text-background"
                style={{ background: "linear-gradient(135deg, #ff8a3d, #ec4899)" }}
              >
                {r.initials}
              </span>
              <span>
                <span className="block font-display text-[15px] font-bold uppercase tracking-tight text-foreground">
                  {r.name}
                </span>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.16em] text-cyan-400">
                  {r.title}
                </span>
                <span className="block text-[11.5px] text-muted-foreground">{r.note}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
