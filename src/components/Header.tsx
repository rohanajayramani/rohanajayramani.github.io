import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { num: "00", href: "#home", label: "Home" },
  { num: "01", href: "#about", label: "Index" },
  { num: "02", href: "#experience", label: "Trail" },
  { num: "03", href: "#work", label: "Work" },
  { num: "04", href: "#education", label: "Roots" },
  { num: "05", href: "#contact", label: "Signal" },
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
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 transition-colors md:px-6",
          "backdrop-blur-xl",
          scrolled
            ? "border-b border-white/10 bg-background/70"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="group flex items-center gap-3 font-display font-semibold tracking-tight">
          <span
            className="grid h-9 w-9 place-items-center rounded-md text-[14px] font-bold"
            style={{
              background: "linear-gradient(135deg, #ff8a3d 0%, #ec4899 70%, #22d3ee 130%)",
              color: "#06060f",
              boxShadow: "0 6px 22px -6px rgb(255 122 38 / 0.6)",
            }}
          >
            <span className="devanagari -translate-y-px text-[16px]">र</span>
          </span>
          <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground">
            Rohan A. Ramani
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 rounded-md border border-white/10 bg-white/[0.02] p-1 backdrop-blur-xl lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-2 rounded-sm px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              <span className="text-[9px] text-saffron-400/80">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.025] text-muted-foreground transition hover:rotate-[-15deg] hover:border-saffron-400 hover:text-saffron-400"
          >
            {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
          <a
            href="https://www.linkedin.com/in/rohanajayramani/"
            target="_blank"
            rel="noopener"
            className="hidden h-9 items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.02] px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:border-cyan-400 hover:text-cyan-400 md:inline-flex"
          >
            Connect
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-white/[0.025] lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-3 top-16 z-40 origin-top rounded-md border border-white/10 bg-background/95 p-3 backdrop-blur-xl transition lg:hidden",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition hover:bg-white/[0.04] hover:text-foreground"
              >
                <span className="text-[10px] text-saffron-400/80">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
