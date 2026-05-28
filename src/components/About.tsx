import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Sparkles, Trophy, Users } from "lucide-react";
import { profile, skillGroups, stats } from "../data/profile";
import { SectionHead } from "./SectionHead";

function renderMarkdownLite(text: string) {
  // very lightweight **bold** support
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
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
        title="Engineer turned operator. Builder with a generalist's curiosity."
        subtitle="Code, commerce, and community — the threads of the last six years."
      />

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-5">
        {/* BIO — wide */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-7 md:col-span-2 md:row-span-2 md:p-9"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-violet/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-brand-amber" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                On record
              </p>
            </div>
            <div className="mt-4 space-y-4 text-balance text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {profile.about.map((p, i) => (
                <p key={i}>{renderMarkdownLite(p)}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Java", "Python", "React", "Vue.js", "PostgreSQL", "Operations", "Agile · Scrum"].map(
                (s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="glass relative overflow-hidden rounded-3xl"
        >
          <img
            src="/images/profile2.jpeg"
            alt="Rohan Ajay Ramani"
            className="aspect-[4/5] w-full object-cover object-[center_20%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <p className="font-display text-lg font-semibold">Rohan Ajay Ramani</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {profile.shortIdentity}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Location / contact card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass relative rounded-3xl p-6"
        >
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-brand-cyan" />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Based in
            </p>
          </div>
          <p className="mt-2 font-display text-xl">Mumbai, India</p>
          <p className="text-sm text-muted-foreground">Navi Mumbai · MMR</p>

          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5">
            <a
              href={profile.socials.email}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-cyan"
            >
              <Mail className="size-3.5" />
              {profile.emailAddress}
            </a>
            <a
              href={profile.socials.phone}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-cyan"
            >
              <Phone className="size-3.5" />
              {profile.phoneNumber}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:mt-5 md:grid-cols-6 md:gap-5">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-4 text-center"
          >
            <p className="font-display text-2xl font-bold text-grad">{s.value}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg">
              <span className={`size-2.5 rounded-full ${group.dot}`} />
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-muted-foreground transition hover:border-brand-violet hover:text-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <Trophy className="size-4 text-brand-amber" />
          University Rank 3 · AICTE
        </span>
        <span className="opacity-30">•</span>
        <span className="inline-flex items-center gap-2">
          <Users className="size-4 text-brand-cyan" />
          6k+ Mumbai Ignite community
        </span>
      </div>
    </section>
  );
}
