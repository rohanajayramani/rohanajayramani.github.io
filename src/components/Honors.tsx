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
        kicker="Honors"
        title="Recognised"
        titleItalic="work"
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {honors.map((h, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="glass flex gap-5 rounded-[24px] p-7"
            >
              <div
                className="grid h-12 w-12 flex-none place-items-center rounded-2xl border border-gold-400/35 text-gold-400"
                style={{ background: "linear-gradient(135deg, rgb(212 175 55 / 0.18), rgb(255 138 61 / 0.12))" }}
              >
                <Icon className="size-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {h.when}
                </p>
                <h3 className="heading-display mt-1 text-[20px] font-medium leading-tight">
                  {h.title}
                </h3>
                <p className="text-[13.5px] text-saffron-400">{h.issuer}</p>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-muted-foreground">
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
