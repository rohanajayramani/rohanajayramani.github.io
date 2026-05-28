import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { num: "01", href: "#home", label: "Home" },
  { num: "02", href: "#about", label: "About" },
  { num: "03", href: "#experience", label: "Story" },
  { num: "04", href: "#work", label: "Work" },
  { num: "05", href: "#education", label: "Learning" },
  { num: "06", href: "#contact", label: "Connect" },
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
            ? "border-b border-gold-400/15 bg-background/60"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="flex items-center gap-3 font-display font-medium tracking-tight">
          <span
            className="grid h-9 w-9 place-items-center rounded-full text-[15px] font-medium"
            style={{
              background: "linear-gradient(135deg, #ff9d4d 0%, #d4af37 100%)",
              color: "#0b0710",
              boxShadow: "0 8px 24px -8px rgb(255 138 61 / 0.5), inset 0 1px 0 rgb(255 255 255 / 0.3)",
            }}
          >
            <span className="devanagari -translate-y-px text-[18px]">र</span>
          </span>
          <span className="text-base text-foreground">
            Rohan<span className="text-gold-400">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-gold-400/20 bg-white/[0.025] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[9px] text-gold-400/70">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/25 bg-white/[0.025] text-muted-foreground transition hover:rotate-[-15deg] hover:text-saffron-400"
          >
            {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <a
            href="https://www.linkedin.com/in/rohanajayramani/"
            target="_blank"
            rel="noopener"
            className="hidden h-9 items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/[0.02] px-4 text-[13px] font-semibold transition hover:border-gold-400 hover:text-gold-400 md:inline-flex"
          >
            Connect
            <span className="inline-block">→</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-xl border border-gold-400/25 bg-white/[0.025] lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-3 top-16 z-40 origin-top rounded-2xl border border-gold-400/20 bg-background/95 p-3 backdrop-blur-xl transition lg:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/[0.04] hover:text-foreground"
              >
                <span className="font-mono text-[10px] text-gold-400/70">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
