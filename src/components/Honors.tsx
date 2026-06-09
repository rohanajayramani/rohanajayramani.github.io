import { motion } from "framer-motion";
import { Award, Medal, Sparkles, Trophy } from "lucide-react";
import { honors } from "../data/profile";
import { SectionHead } from "./SectionHead";

const icons = [Trophy, Medal, Sparkles, Award];

export function Honors() {
  return (
    <section id="honors" className="section-pad container-page">
      <SectionHead
        num="06"
        kicker="HONORS · MEDALS"
        title="Recognised"
        titleEmphasis="Work"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {honors.map((h, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="surface flex gap-5 rounded-lg p-7"
            >
              <div
                className="grid h-12 w-12 flex-none place-items-center rounded-md border border-saffron-400/40 text-saffron-400"
                style={{ background: "linear-gradient(135deg, rgb(255 122 38 / 0.16), rgb(236 72 153 / 0.10))" }}
              >
                <Icon className="size-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {h.when}
                </p>
                <h3 className="mt-1 font-display text-[20px] font-bold uppercase leading-tight tracking-tight">
                  {h.title}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-400">{h.issuer}</p>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-muted-foreground">
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
