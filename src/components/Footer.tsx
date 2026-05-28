import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Story" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Learning" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Connect" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold-400/10 bg-background/40 backdrop-blur-xl">
      <div className="container-page grid grid-cols-1 gap-8 py-14 md:grid-cols-3 md:items-center md:gap-6">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 font-display font-medium">
            <span
              className="grid h-9 w-9 place-items-center rounded-full text-sm"
              style={{
                background: "linear-gradient(135deg, #ff9d4d 0%, #d4af37 100%)",
                color: "#0b0710",
              }}
            >
              <span className="devanagari text-[18px] -translate-y-px">र</span>
            </span>
            <span className="text-base">
              Rohan<span className="text-gold-400">.</span>
            </span>
          </a>
          <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">
            Built with chai in Mumbai.
            <br />
            React, Tailwind, three.js — and a lot of late nights.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-muted-foreground transition hover:text-gold-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <ul className="flex items-center justify-end gap-2">
          {[
            { href: profile.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: profile.socials.github, Icon: Github, label: "GitHub" },
            { href: profile.socials.twitter, Icon: Twitter, label: "Twitter" },
            { href: profile.socials.email, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/25 bg-white/[0.025] text-muted-foreground transition hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-400"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-page border-t border-dashed border-gold-400/15 py-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <span className="devanagari mr-3 normal-case tracking-normal text-gold-400/70">© मुंबई</span>
        © {new Date().getFullYear()} Rohan Ajay Ramani · All rights reserved
      </div>
    </footer>
  );
}
