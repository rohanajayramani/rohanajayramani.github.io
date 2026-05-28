import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { volunteering } from "../data/profile";
import { SectionHead } from "./SectionHead";

export function Volunteering() {
  return (
    <section id="volunteering" className="section-pad container-page">
      <SectionHead
        num="06"
        kicker="Volunteering"
        title="Off-the-clock."
        subtitle="The work that doesn't show up on a paycheck."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {volunteering.map((v, idx) => (
          <motion.div
            key={v.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="glass rounded-3xl p-7"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-pink/30 bg-brand-pink/10 text-brand-pink">
                <HeartHandshake className="size-5" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">{v.org}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {v.period}
                </p>
              </div>
            </div>
            <p className="mt-3 text-[13px] font-medium text-brand-cyan">{v.role}</p>
            <ul className="mt-4 space-y-2">
              {v.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[13.5px] leading-relaxed text-muted-foreground"
                >
                  <span aria-hidden className="mt-2 size-1.5 flex-none rounded-full bg-brand-pink/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
