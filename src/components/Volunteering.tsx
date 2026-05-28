import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { volunteering } from "../data/profile";
import { SectionHead } from "./SectionHead";

export function Volunteering() {
  return (
    <section id="volunteering" className="section-pad container-page">
      <SectionHead
        num="06"
        kicker="Service"
        title="Off"
        titleItalic="the-clock"
        subtitle="The work that doesn't show up on a paycheck."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {volunteering.map((v, idx) => (
          <motion.div
            key={v.org}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-[26px] p-8"
          >
            <div className="flex items-center gap-4">
              <div
                className="grid h-12 w-12 place-items-center rounded-2xl border border-saffron-400/30 text-saffron-400"
                style={{ background: "linear-gradient(135deg, rgb(255 138 61 / 0.18), rgb(212 175 55 / 0.12))" }}
              >
                <HeartHandshake className="size-5" />
              </div>
              <div>
                <p className="heading-display text-[20px] font-medium leading-tight">{v.org}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {v.period}
                </p>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] font-medium text-saffron-400">{v.role}</p>
            <ul className="mt-4 space-y-2.5">
              {v.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[13.5px] leading-[1.65] text-muted-foreground"
                >
                  <span aria-hidden className="mt-2 size-1 flex-none rounded-full bg-saffron-400/70" />
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
