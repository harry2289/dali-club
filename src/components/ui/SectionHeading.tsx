import { motion } from "framer-motion";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : "justify-start"}`}
      >
        <span className="h-[2px] w-8 bg-gold" />
        <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">{kicker}</span>
        <span className="h-[2px] w-8 bg-gold" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-[1.05] text-bone"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-bone/60 text-base leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
