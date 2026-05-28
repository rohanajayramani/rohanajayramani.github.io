import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-background/40 backdrop-blur-xl">
      <div className="container-page grid grid-cols-1 gap-8 py-12 md:grid-cols-3 md:items-center md:gap-6">
        <div>
          <a href="#home" className="inline-flex items-center gap-2 font-display font-bold">
            <span
              className="grid h-9 w-9 place-items-center rounded-xl text-sm text-white"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee)" }}
            >
              R
            </span>
            <span className="text-base">
              Rohan<span className="text-brand-cyan">.</span>
            </span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Built from scratch in Mumbai · React, Tailwind, three.js.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition hover:text-brand-cyan"
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
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:-translate-y-0.5 hover:border-brand-violet hover:text-brand-cyan"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-page border-t border-dashed border-white/5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rohan Ajay Ramani — all rights reserved.
      </div>
    </footer>
  );
}
