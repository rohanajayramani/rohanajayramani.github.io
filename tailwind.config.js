/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      fontFamily: {
        // Editorial serif — Fraunces is variable, has opsz axis
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        // Body sans — Geist is Vercel's, very clean
        sans: ['"Geist"', "ui-sans-serif", "system-ui", "sans-serif"],
        // Devanagari for Indic accents
        devanagari: ['"Tiro Devanagari Hindi"', '"Noto Sans Devanagari"', "serif"],
        // Mono accent
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand — India-inspired
        saffron: {
          DEFAULT: "#ff8a3d",
          50: "#fff4ea",
          100: "#ffe5cf",
          200: "#ffc59a",
          300: "#ffa45f",
          400: "#ff8a3d",
          500: "#f86c1c",
          600: "#d54e0e",
          700: "#a93b0d",
          800: "#7b2c10",
          900: "#56210d",
        },
        gold: {
          DEFAULT: "#d4af37",
          100: "#f7eccd",
          200: "#ebd494",
          300: "#dec05d",
          400: "#d4af37",
          500: "#b8932a",
          600: "#8e6e1e",
          700: "#6c5417",
        },
        indigo: {
          DEFAULT: "#3b2c8c",
          400: "#6a5cd1",
          500: "#4f3fc3",
          600: "#3b2c8c",
          700: "#2a1f64",
          800: "#1d1648",
          900: "#120e2e",
        },
        teal: {
          DEFAULT: "#0fa6a6",
        },
        parchment: "#faf3e0",
        ink: "#0b0710",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
        breathe: {
          "0%,100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 60s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "spin-reverse": "spin-reverse 36s linear infinite",
        breathe: "breathe 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
