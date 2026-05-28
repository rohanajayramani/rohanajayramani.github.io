import { motion } from "framer-motion";

type Props = {
  num: string;
  kicker: string;
  title: string;
  subtitle?: string;
};

export function SectionHead({ num, kicker, title, subtitle }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-[760px] text-center md:mb-16"
    >
      <span className="kicker mb-5">
        <span className="text-brand-cyan">{num}</span> {kicker}
      </span>
      <h2 className="heading-display text-balance text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
