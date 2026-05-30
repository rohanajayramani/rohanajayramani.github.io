import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { volunteering } from "../data/profile";
import { SectionHead } from "./SectionHead";

export function Volunteering() {
  return (
    <section id="volunteering" className="section-pad container-page">
      <SectionHead
        num="07"
        kicker="SERVICE · COMMUNITY"
        title="Off"
        titleEmphasis="The Clock"
        subtitle="The work that doesn't show up on a paycheck."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {volunteering.map((v, idx) => (
          <motion.div
            key={v.org}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="surface rounded-lg p-8"
          >
            <div className="flex items-center gap-4">
              <div
                className="grid h-12 w-12 place-items-center rounded-md border border-magenta-400/35 text-magenta-400"
                style={{ background: "linear-gradient(135deg, rgb(236 72 153 / 0.16), rgb(34 211 238 / 0.10))" }}
              >
                <HeartHandshake className="size-5" />
              </div>
              <div>
                <p className="font-display text-[20px] font-bold uppercase leading-tight tracking-tight">
                  {v.org}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {v.period}
                </p>
              </div>
            </div>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-cyan-400">{v.role}</p>
            <ul className="mt-4 space-y-2.5">
              {v.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[13.5px] leading-[1.65] text-muted-foreground"
                >
                  <span aria-hidden className="mt-2 size-1 flex-none rounded-full bg-magenta-400/70" />
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
