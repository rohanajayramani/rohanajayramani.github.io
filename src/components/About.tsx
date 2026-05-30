import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { profile, skillGroups, stats } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { SriYantra, OmGlyph, CornerBracket } from "./decor/Motifs";
import { Counter } from "./Counter";

function renderMarkdownLite(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-medium text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function About() {
  return (
    <section id="about" className="section-pad container-page">
      <SectionHead
        num="01"
        kicker="INDEX · ABOUT"
        title="Engineer turned"
        titleEmphasis="Operator"
        subtitle="Code, commerce, community. Six years of building in parallel — full stack engineer at a global bank, operator at a Mumbai grocery business, AI/Data student at IIT Madras, and ten years deep in volunteering."
      />

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-5">
        {/* BIO — wide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="surface relative overflow-hidden rounded-lg p-7 md:col-span-2 md:row-span-2 md:p-9"
        >
          <SriYantra className="absolute -right-14 -top-14 h-56 w-56 text-saffron-400 opacity-[0.08] animate-spin-slow" />
          <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-saffron-400/8 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-saffron-400/60" />
              <span className="label-code text-saffron-400">DOSSIER · 01</span>
            </div>
            <div className="mt-5 space-y-5 text-balance text-[15px] leading-[1.7] text-muted-foreground md:text-[16px]">
              {profile.about.map((p, i) => (
                <p key={i}>{renderMarkdownLite(p)}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-1.5">
              {["Java", "Python", "React", "Vue.js", "PostgreSQL", "Operations", "Agile · Scrum"].map(
                (s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-sm border border-white/10 bg-white/[0.015] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="surface relative overflow-hidden rounded-lg"
        >
          <CornerBracket className="absolute left-3 top-3 z-10 size-4 text-saffron-400" />
          <CornerBracket className="absolute right-3 top-3 z-10 size-4 -scale-x-100 text-saffron-400" />
          <CornerBracket className="absolute left-3 bottom-3 z-10 size-4 -scale-y-100 text-cyan-400" />
          <CornerBracket className="absolute right-3 bottom-3 z-10 size-4 -scale-100 text-cyan-400" />

          <img
            src="/images/profile2.jpeg"
            alt="Rohan Ajay Ramani"
            className="aspect-[4/5] w-full object-cover object-[center_20%]"
            style={{ filter: "saturate(1.1) contrast(1.05)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent" />
          <div className="absolute left-5 top-5 z-10">
            <span className="label-pill text-saffron-400" style={{ borderColor: "rgb(255 122 38 / 0.4)", background: "rgb(6 6 15 / 0.55)" }}>
              <span className="size-1.5 rounded-full bg-emerald-400" /> Mumbai · MMR
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <p className="devanagari text-[14px] text-saffron-400">रोहन अजय रामानी</p>
            <p className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-foreground">
              Rohan A. Ramani
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Engineer · Operator · Builder
            </p>
          </div>
        </motion.div>

        {/* CONTACT mini */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="surface relative rounded-lg p-6"
        >
          <OmGlyph className="absolute right-5 top-4 text-2xl text-saffron-400/25" />
          <div className="flex items-center gap-2.5">
            <MapPin className="size-4 text-saffron-400" />
            <p className="label-code text-saffron-400">LOCATION</p>
          </div>
          <p className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">
            Mumbai, India
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Navi Mumbai · MMR
          </p>

          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5">
            <a
              href={profile.socials.email}
              className="flex items-center gap-2 text-[13px] text-muted-foreground transition hover:text-cyan-400"
            >
              <Mail className="size-3.5" />
              {profile.emailAddress}
            </a>
            <a
              href={profile.socials.phone}
              className="flex items-center gap-2 text-[13px] text-muted-foreground transition hover:text-cyan-400"
            >
              <Phone className="size-3.5" />
              {profile.phoneNumber}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.04 }}
            className="surface rounded-md p-5 text-left"
          >
            <p className="font-display text-[28px] font-bold leading-none text-chroma">
              <Counter value={s.value} />
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Section divider line + label */}
      <div className="my-16 flex items-center gap-3 text-muted-foreground md:my-20">
        <span aria-hidden className="h-px w-12 bg-saffron-400/60" />
        <span className="label-code">STACK · INDEX</span>
        <span aria-hidden className="h-px flex-1 bg-white/10" />
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="surface rounded-lg p-7"
          >
            <h3 className="mb-5 flex items-center gap-3 font-display text-lg font-bold uppercase tracking-tight">
              <span className={`size-2 rounded-full ${group.dot}`} />
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-sm border border-white/8 bg-white/[0.015] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground transition hover:border-cyan-400/60 hover:text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
