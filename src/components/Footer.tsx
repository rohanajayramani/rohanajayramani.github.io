import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "Index" },
  { href: "#experience", label: "Trail" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Roots" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Signal" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-background/40 backdrop-blur-xl">
      <div className="container-page grid grid-cols-1 gap-8 py-14 md:grid-cols-3 md:items-center md:gap-6">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 font-display font-semibold">
            <span
              className="grid h-9 w-9 place-items-center rounded-md text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, #ff8a3d 0%, #ec4899 70%, #22d3ee 130%)",
                color: "#06060f",
              }}
            >
              <span className="devanagari text-[16px] -translate-y-px">र</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
              Rohan A. Ramani
            </span>
          </a>
          <p className="mt-4 max-w-[280px] text-[12.5px] leading-[1.65] text-muted-foreground">
            Engineer turned operator · Mumbai. Building, shipping, repeating — with chai.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-cyan-400"
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
                className="grid h-9 w-9 place-items-center rounded-md border border-white/15 bg-white/[0.025] text-muted-foreground transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-white/10 py-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>
          <span className="devanagari mr-3 normal-case tracking-normal text-saffron-400/70">मुंबई</span>
          © {new Date().getFullYear()} · All rights reserved
        </span>
        <span>v2025.11 · built in mumbai · with chai</span>
      </div>
    </footer>
  );
}
