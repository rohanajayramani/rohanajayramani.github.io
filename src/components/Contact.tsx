import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile";
import { SectionHead } from "./SectionHead";
import { Mandala, OmGlyph } from "./decor/Motifs";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="section-pad container-page">
      <SectionHead
        num="07"
        kicker="Connect"
        title="Let's build"
        titleItalic="something"
        subtitle="An idea, a role, or a hello — my inbox is open."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.9fr_1.1fr]">
        {/* Direct */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass relative overflow-hidden rounded-[26px] p-8"
        >
          <Mandala className="absolute -right-12 -top-12 h-48 w-48 text-gold-400 opacity-[0.08] animate-spin-slow" />
          <OmGlyph className="absolute right-6 bottom-5 text-5xl text-gold-400/15" />

          <h3 className="heading-display relative text-[22px] font-medium">Reach me directly</h3>
          <div className="relative mt-5 space-y-1">
            <a
              href={profile.socials.email}
              className="group flex items-center gap-3 border-b border-dashed border-gold-400/15 py-3 text-[14px] transition hover:text-gold-400"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-400">
                <Mail className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </small>
                <span>{profile.emailAddress}</span>
              </span>
              <ArrowUpRight className="ml-auto size-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
            <a
              href={profile.socials.phone}
              className="group flex items-center gap-3 border-b border-dashed border-gold-400/15 py-3 text-[14px] transition hover:text-gold-400"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-400">
                <Phone className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Phone
                </small>
                <span>{profile.phoneNumber}</span>
              </span>
            </a>
            <div className="group flex items-center gap-3 py-3 text-[14px]">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-gold-400/25 bg-gold-400/10 text-gold-400">
                <MapPin className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Location
                </small>
                <span>{profile.location}</span>
              </span>
            </div>
          </div>

          <div className="relative mt-7 flex items-center gap-2">
            {[
              { href: profile.socials.linkedin, Icon: Linkedin },
              { href: profile.socials.github, Icon: Github },
              { href: profile.socials.twitter, Icon: Twitter },
              { href: profile.socials.instagram, Icon: Instagram },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener"
                className="grid h-10 w-10 place-items-center rounded-full border border-gold-400/25 bg-white/[0.025] text-muted-foreground transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-400"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          action="https://formsubmit.co/rohanajayramani@gmail.com"
          method="POST"
          onSubmit={() => setSending(true)}
          className="glass grid gap-4 rounded-[26px] p-8"
        >
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

          <Field id="cf-name" label="Your name" name="name" placeholder="Jane Doe" required />
          <Field
            id="cf-email"
            label="Your email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            required
          />
          <Field
            id="cf-message"
            label="Message"
            name="message"
            placeholder="What's on your mind?"
            textarea
            required
          />
          <button disabled={sending} type="submit" className="btn-saffron mt-1 justify-center">
            {sending ? "Sending…" : "Send message"}
            <Send className="size-4 transition group-hover:translate-x-0.5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({ id, label, name, type = "text", placeholder, required, textarea }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full rounded-2xl border border-gold-400/25 bg-background/40 px-4 py-3 text-[14px] outline-none ring-saffron-400/30 transition placeholder:text-muted-foreground focus:border-saffron-400 focus:ring-4"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-gold-400/25 bg-background/40 px-4 py-3 text-[14px] outline-none ring-saffron-400/30 transition placeholder:text-muted-foreground focus:border-saffron-400 focus:ring-4"
        />
      )}
    </div>
  );
}
