import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { profile, skillGroups, stats } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { SriYantra, ChakraWheel, OmGlyph, CornerBracket } from "./decor/Motifs";
import { Counter } from "./Counter";

/* Color-code known entities so the bio reads designed, not flat */
const HL_MAP: [string, string][] = [
  ["JPMorganChase", "hl hl-cyan"],
  ["KyRo Core", "hl hl-gold"],
  ["KyRo Automation", "hl hl-gold"],
  ["Fresh & Select", "hl hl-saffron"],
  ["IIT Madras", "hl hl-cyan"],
  ["SRM", "hl hl-cyan"],
  ["Mumbai Ignite", "hl hl-magenta"],
  ["Zepto", "hl hl-saffron"],
  ["Blinkit", "hl hl-saffron"],
  ["Amazon", "hl hl-saffron"],
  ["That One Wall", "hl hl-gold"],
  ["Silli", "hl hl-magenta"],
  ["K-Hair", "hl hl-cyan"],
  ["Bhumi", "hl hl-magenta"],
  ["Rotary Club", "hl hl-magenta"],
];

const HL_RE = new RegExp(
  "(" + HL_MAP.map(([k]) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")",
  "g",
);

function highlightBio(text: string) {
  const clean = text.replace(/\*\*/g, "");
  return clean.split(HL_RE).map((part, i) => {
    const hit = HL_MAP.find(([k]) => k === part);
    if (hit) return (
      <span key={i} className={hit[1]}>
        {part}
      </span>
    );
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
          className="surface relative overflow-hidden rounded-lg p-8 md:col-span-2 md:row-span-2 md:p-10"
        >
          <SriYantra className="absolute -right-14 -top-14 h-56 w-56 text-saffron-400 opacity-[0.08] animate-spin-slow" />
          <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-saffron-400/8 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-saffron-400/60" />
              <span className="label-code text-saffron-400">DOSSIER · 01</span>
            </div>

            {/* Lead line — bigger, brighter */}
            <p className="mt-5 font-display text-[20px] font-semibold leading-snug text-foreground md:text-[23px]">
              I build at the intersection of{" "}
              <span className="text-chroma">code, commerce &amp; community</span>.
            </p>

            <div className="mt-5 space-y-4 text-pretty text-[14.5px] leading-[1.75] text-muted-foreground md:text-[15.5px]">
              {profile.about.map((p, i) => (
                <p key={i}>{highlightBio(p)}</p>
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

        {/* IDENTITY EMBLEM — replaces the duplicate photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="surface relative flex flex-col items-center justify-center overflow-hidden rounded-lg p-8"
        >
          <CornerBracket className="absolute left-3 top-3 size-4 text-saffron-400" />
          <CornerBracket className="absolute right-3 top-3 size-4 -scale-x-100 text-saffron-400" />
          <CornerBracket className="absolute left-3 bottom-3 size-4 -scale-y-100 text-cyan-400" />
          <CornerBracket className="absolute right-3 bottom-3 size-4 -scale-100 text-cyan-400" />

          {/* glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(255_122_38/0.12),transparent_65%)]" />

          {/* layered chakra emblem */}
          <div className="relative grid place-items-center py-6">
            <SriYantra className="size-44 text-saffron-400/80 animate-spin-slow" style={{ animationDuration: "40s" }} />
            <ChakraWheel
              className="absolute size-44 text-cyan-400/40 animate-spin-reverse"
              style={{ animationDuration: "55s" }}
            />
            <span className="absolute grid size-14 place-items-center rounded-full border border-saffron-400/30 bg-background/70 backdrop-blur">
              <OmGlyph className="text-3xl text-saffron-400" />
            </span>
          </div>

          <p className="devanagari mt-6 text-center text-[15px] text-saffron-400">
            रोहन अजय रामानी
          </p>
          <p className="mt-1 text-center font-display text-xl font-bold uppercase tracking-tight text-foreground">
            Rohan A. Ramani
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            19.0760°N · 72.8777°E
          </p>
          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-400">
            <span className="size-1.5 animate-glow-pulse rounded-full bg-emerald-400" />
            Mumbai · Operating
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
          <div className="flex items-center gap-2.5">
            <MapPin className="size-4 text-saffron-400" />
            <p className="label-code text-saffron-400">DIRECT LINE</p>
          </div>

          <div className="mt-4 grid gap-3">
            <a
              href={profile.socials.email}
              className="group flex items-center gap-3 text-[13px] text-muted-foreground transition hover:text-cyan-400"
            >
              <span className="grid h-9 w-9 flex-none place-items-center rounded-md border border-white/10 bg-white/[0.02] text-saffron-400 transition group-hover:border-cyan-400/50">
                <Mail className="size-3.5" />
              </span>
              <span className="truncate">{profile.emailAddress}</span>
            </a>
            <a
              href={profile.socials.phone}
              className="group flex items-center gap-3 text-[13px] text-muted-foreground transition hover:text-cyan-400"
            >
              <span className="grid h-9 w-9 flex-none place-items-center rounded-md border border-white/10 bg-white/[0.02] text-saffron-400 transition group-hover:border-cyan-400/50">
                <Phone className="size-3.5" />
              </span>
              {profile.phoneNumber}
            </a>
          </div>

          <a
            href="#contact"
            className="mt-5 flex items-center justify-between rounded-md border border-saffron-400/25 bg-saffron-400/5 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-saffron-400 transition hover:bg-saffron-400/10"
          >
            Open a channel
            <span aria-hidden>→</span>
          </a>
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
            className="surface group relative overflow-hidden rounded-md p-5 text-left transition hover:border-saffron-400/30"
          >
            <span aria-hidden className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-saffron-400/10 blur-xl opacity-0 transition group-hover:opacity-100" />
            <p className="font-display text-[30px] font-bold leading-none text-chroma">
              <Counter value={s.value} />
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-16 flex items-center gap-3 text-muted-foreground md:my-20">
        <span aria-hidden className="h-px w-12 bg-saffron-400/60" />
        <span className="label-code">STACK · CAPABILITY</span>
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
              <span className="ml-auto font-mono text-[10px] font-normal tracking-[0.16em] text-muted-foreground">
                0{i + 1}
              </span>
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
