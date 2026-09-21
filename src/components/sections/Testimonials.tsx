import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { TESTIMONIALS } from "../../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        <SectionHeading kicker="Témoignages" title="La voix de notre famille" />

        <div className="relative min-h-[260px] flex items-center justify-center">
          <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold/15" size={64} />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <p className="font-display text-xl md:text-3xl text-bone leading-snug italic">
                « {t.quote} »
              </p>
              <p className="mt-6 text-gold uppercase tracking-widest text-sm font-semibold">{t.name}</p>
              <p className="text-bone/50 text-xs uppercase tracking-wider">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-bone/20"
                }`}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="h-10 w-10 flex items-center justify-center rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-ink transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
