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

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="section-pad container-page">
      <SectionHead
        num="07"
        kicker="Contact"
        title="Let's build something."
        subtitle="An idea, a role, or a hello — my inbox is open."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.9fr_1.1fr]">
        {/* Direct */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass relative overflow-hidden rounded-3xl p-7"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-cyan/15 blur-3xl" />
          <h3 className="relative font-display text-xl font-semibold">Reach me directly</h3>
          <div className="relative mt-5 space-y-1">
            <a
              href={profile.socials.email}
              className="group flex items-center gap-3 border-b border-dashed border-white/10 py-3 text-sm transition hover:text-brand-cyan"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-violet/30 bg-brand-violet/10 text-brand-cyan">
                <Mail className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Email
                </small>
                <span>{profile.emailAddress}</span>
              </span>
              <ArrowUpRight className="ml-auto size-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
            </a>
            <a
              href={profile.socials.phone}
              className="group flex items-center gap-3 border-b border-dashed border-white/10 py-3 text-sm transition hover:text-brand-cyan"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-violet/30 bg-brand-violet/10 text-brand-cyan">
                <Phone className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Phone
                </small>
                <span>{profile.phoneNumber}</span>
              </span>
            </a>
            <div className="group flex items-center gap-3 py-3 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-brand-violet/30 bg-brand-violet/10 text-brand-cyan">
                <MapPin className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
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
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:-translate-y-0.5 hover:border-brand-violet hover:text-brand-cyan"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          action="https://formsubmit.co/rohanajayramani@gmail.com"
          method="POST"
          onSubmit={() => setSending(true)}
          className="glass grid gap-4 rounded-3xl p-7"
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
          <button
            disabled={sending}
            type="submit"
            className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:shadow-violet-500/50 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee)" }}
          >
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
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full rounded-2xl border border-white/15 bg-background/50 px-4 py-3 text-sm outline-none ring-brand-violet/40 transition focus:border-brand-violet focus:ring-4"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-white/15 bg-background/50 px-4 py-3 text-sm outline-none ring-brand-violet/40 transition focus:border-brand-violet focus:ring-4"
        />
      )}
    </div>
  );
}
