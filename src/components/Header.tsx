import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { num: "01", href: "#home", label: "Home" },
  { num: "02", href: "#about", label: "About" },
  { num: "03", href: "#experience", label: "Experience" },
  { num: "04", href: "#work", label: "Work" },
  { num: "05", href: "#education", label: "Education" },
  { num: "06", href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("rohan-theme");
    const initial: "dark" | "light" =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("rohan-theme", next);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 transition-colors md:px-8",
          "backdrop-blur-xl",
          scrolled
            ? "border-b border-white/10 bg-background/70"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              boxShadow: "0 8px 24px -8px rgba(139,92,246,0.6)",
            }}
          >
            R
          </span>
          <span className="text-base tracking-tight">
            Rohan<span className="text-brand-cyan">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[9px] opacity-60">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:rotate-[-15deg] hover:text-brand-amber"
          >
            {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <a
            href="https://www.linkedin.com/in/rohanajayramani/"
            target="_blank"
            rel="noopener"
            className="hidden h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 text-[13px] font-semibold transition hover:border-brand-violet hover:text-brand-cyan md:inline-flex"
          >
            Connect
            <span className="inline-block transition group-hover:translate-x-0.5">→</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-3 top-16 z-40 origin-top rounded-2xl border border-white/10 bg-background/90 p-3 backdrop-blur-xl transition lg:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                <span className="font-mono text-[10px] opacity-60">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
