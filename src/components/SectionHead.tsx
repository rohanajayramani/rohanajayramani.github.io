import { motion } from "framer-motion";

type Props = {
  num: string;
  kicker: string;
  title: string;
  titleEmphasis?: string;
  subtitle?: string;
};

export function SectionHead({ num, kicker, title, titleEmphasis, subtitle }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 max-w-[920px] md:mb-20"
    >
      {/* coded section label */}
      <div className="mb-7 flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-saffron-400/60" />
        <span className="label-code text-saffron-400">
          <span className="text-foreground">[{num}]</span>
          {kicker}
        </span>
        <span aria-hidden className="h-px flex-1 max-w-[140px] bg-white/10" />
      </div>

      <h2 className="font-display text-balance text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-foreground">
        {title}
        {titleEmphasis && (
          <>
            <br />
            <span className="text-chroma">{titleEmphasis}</span>
          </>
        )}
        <span className="text-saffron-400">.</span>
      </h2>

      {subtitle && (
        <p className="mt-6 max-w-[640px] text-balance text-[15.5px] leading-[1.6] text-muted-foreground md:text-[16.5px]">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
