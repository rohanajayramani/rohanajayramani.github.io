import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
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
import { SriYantra, OmGlyph } from "./decor/Motifs";

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="section-pad container-page">
      <SectionHead
        num="09"
        kicker="SIGNAL · CONTACT"
        title="Let's build"
        titleEmphasis="Something"
        subtitle="An idea, a role, or a hello — my inbox is open."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.9fr_1.1fr]">
        {/* Direct */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="surface relative overflow-hidden rounded-lg p-8"
        >
          <SriYantra className="absolute -right-14 -top-14 h-52 w-52 text-saffron-400 opacity-[0.08] animate-spin-slow" />
          <OmGlyph className="absolute right-6 bottom-5 text-5xl text-saffron-400/12" />

          <h3 className="relative font-display text-[20px] font-bold uppercase tracking-tight">
            Reach me directly
          </h3>
          <div className="relative mt-5 space-y-1">
            <a
              href={profile.socials.email}
              className="group flex items-center gap-3 border-b border-dashed border-white/10 py-3 text-[14px] transition hover:text-cyan-400"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md border border-saffron-400/30 bg-saffron-400/10 text-saffron-400">
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
              className="group flex items-center gap-3 border-b border-dashed border-white/10 py-3 text-[14px] transition hover:text-cyan-400"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md border border-saffron-400/30 bg-saffron-400/10 text-saffron-400">
                <Phone className="size-4" />
              </span>
              <span className="flex flex-col">
                <small className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Phone
                </small>
                <span>{profile.phoneNumber}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 py-3 text-[14px]">
              <span className="grid h-10 w-10 place-items-center rounded-md border border-saffron-400/30 bg-saffron-400/10 text-saffron-400">
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
                className="grid h-10 w-10 place-items-center rounded-md border border-white/15 bg-white/[0.025] text-muted-foreground transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <a
            href="/rohan-ajay-ramani.vcf"
            download
            className="relative mt-5 flex items-center justify-between rounded-md border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-400 transition hover:bg-cyan-400/10"
          >
            <span className="inline-flex items-center gap-2">
              <Download className="size-3.5" />
              Save contact (.vcf)
            </span>
            <span aria-hidden>↓</span>
          </a>
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
          className="surface grid gap-4 rounded-lg p-8"
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
          <button disabled={sending} type="submit" className="btn-primary mt-1 justify-center">
            {sending ? "Sending…" : "Send Signal"}
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
          className="w-full rounded-md border border-white/15 bg-background/40 px-4 py-3 text-[14px] outline-none ring-saffron-400/30 transition placeholder:text-muted-foreground focus:border-saffron-400 focus:ring-4"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-md border border-white/15 bg-background/40 px-4 py-3 text-[14px] outline-none ring-saffron-400/30 transition placeholder:text-muted-foreground focus:border-saffron-400 focus:ring-4"
        />
      )}
    </div>
  );
}
