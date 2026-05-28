import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { profile, skillGroups, stats } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { Mandala, OmGlyph } from "./decor/Motifs";

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
        kicker="About"
        title="Engineer turned operator. Builder with a"
        titleItalic="generalist's curiosity"
        subtitle="Code, commerce, and community — the threads of the last six years, told plain."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
        {/* BIO — wide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-[26px] p-8 md:col-span-2 md:row-span-2 md:p-10"
        >
          {/* Subtle mandala in corner */}
          <Mandala className="absolute -right-12 -top-12 h-56 w-56 text-gold-400 opacity-[0.07] animate-spin-slow" />
          <div className="absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-saffron-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-3">
              <Sparkles className="size-4 text-gold-400" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">
                On record
              </p>
            </div>
            <div className="mt-5 space-y-5 text-balance text-[15.5px] leading-[1.7] text-muted-foreground md:text-[16.5px]">
              {profile.about.map((p, i) => (
                <p key={i}>{renderMarkdownLite(p)}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Java", "Python", "React", "Vue.js", "PostgreSQL", "Operations", "Agile · Scrum"].map(
                (s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-gold-400/20 bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="glass relative overflow-hidden rounded-[26px]"
        >
          <img
            src="/images/profile2.jpeg"
            alt="Rohan Ajay Ramani"
            className="aspect-[4/5] w-full object-cover object-[center_20%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/0 to-transparent" />
          <div className="absolute left-5 top-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/35 bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gold-400 backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-400" /> Mumbai
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="devanagari text-[15px] text-gold-400">रोहन अजय रामानी</p>
            <p className="heading-display mt-1 text-xl font-medium text-foreground">
              Rohan Ajay Ramani
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {profile.shortIdentity}
            </p>
          </div>
        </motion.div>

        {/* Contact mini card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          className="glass relative rounded-[26px] p-6"
        >
          <OmGlyph className="absolute right-5 top-4 text-3xl text-gold-400/25" />
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-gold-400" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">
              Based in
            </p>
          </div>
          <p className="heading-display mt-2 text-2xl">Mumbai, India</p>
          <p className="text-[13px] text-muted-foreground">Navi Mumbai · MMR</p>

          <div className="mt-5 grid gap-3 border-t border-gold-400/15 pt-5">
            <a
              href={profile.socials.email}
              className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition hover:text-gold-400"
            >
              <Mail className="size-3.5" />
              {profile.emailAddress}
            </a>
            <a
              href={profile.socials.phone}
              className="flex items-center gap-2 text-[13.5px] text-muted-foreground transition hover:text-gold-400"
            >
              <Phone className="size-3.5" />
              {profile.phoneNumber}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.04 }}
            className="glass rounded-[18px] p-5 text-center"
          >
            <p className="heading-display text-[28px] font-medium text-grad leading-none">
              {s.value}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="divider-mandala">
        <span />
      </div>

      {/* Skills */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="glass rounded-[24px] p-7"
          >
            <h3 className="heading-display mb-5 flex items-center gap-3 text-xl">
              <span className={`size-2.5 rounded-full ${group.dot}`} />
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-gold-400/15 bg-white/[0.015] px-3 py-1 font-mono text-[11px] text-muted-foreground transition hover:border-gold-400/60 hover:text-foreground"
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
