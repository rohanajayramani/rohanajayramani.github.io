import { motion } from "framer-motion";

type Props = {
  num: string;
  kicker: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
};

export function SectionHead({ num, kicker, title, titleItalic, subtitle }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-14 max-w-[820px] text-center md:mb-20"
    >
      <span className="kicker mb-6">
        <span className="text-gold-400">{num}</span>
        <span aria-hidden className="opacity-60">·</span>
        {kicker}
      </span>
      <h2 className="heading-display text-balance text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] text-foreground">
        {title}
        {titleItalic && (
          <>
            {" "}
            <em className="text-grad italic">{titleItalic}</em>
          </>
        )}
        <span className="text-gold-400">.</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-[680px] text-balance text-[16px] leading-[1.6] text-muted-foreground md:text-[17px]">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
