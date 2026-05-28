import { motion } from "framer-motion";
import { Award, Medal, Sparkles, Trophy } from "lucide-react";
import { honors } from "../data/profile";
import { SectionHead } from "./SectionHead";

const icons = [Trophy, Medal, Sparkles, Award];

export function Honors() {
  return (
    <section id="honors" className="section-pad container-page">
      <SectionHead
        num="05"
        kicker="Honors & Awards"
        title="Recognised work."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {honors.map((h, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass flex gap-5 rounded-3xl p-6"
            >
              <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-brand-amber/30 bg-brand-amber/10 text-brand-amber">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {h.when}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{h.title}</h3>
                <p className="text-sm text-brand-cyan">{h.issuer}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {h.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
