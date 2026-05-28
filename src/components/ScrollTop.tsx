import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full text-white shadow-lg shadow-violet-500/40 transition-all",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
      style={{ background: "linear-gradient(135deg, #8b5cf6, #22d3ee)" }}
    >
      <ArrowUp className="size-4" />
    </a>
  );
}
