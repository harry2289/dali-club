import { motion } from "framer-motion";
import { Phone, Zap } from "lucide-react";
import Button from "../ui/Button";
import { EVENT } from "../../data/content";

export default function EventSection() {
  return (
    <section id="event" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(212,175,55,0.04)_0px,rgba(212,175,55,0.04)_2px,transparent_2px,transparent_14px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_30%,rgba(6,6,6,0.9)_100%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative border-2 border-gold bg-ink px-8 py-14 md:px-16 md:py-20 text-center clip-corner"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="inline-flex items-center gap-2 border border-gold/50 text-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6"
          >
            <Zap size={14} /> Événement à ne pas manquer
          </motion.div>

          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl text-bone leading-tight">
            {EVENT.title}
          </h2>
          <p className="font-display text-2xl md:text-3xl text-gold-gradient mt-2">{EVENT.partner}</p>

          <p className="mt-6 max-w-xl mx-auto text-bone/70 leading-relaxed">{EVENT.description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-bone/70 text-sm">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-gold" /> {EVENT.contact.join(" • ")}
            </span>
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="#contact">Je m'inscris</Button>
          </div>

          {/* Corner accents */}
          <span className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-gold/60" />
          <span className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-gold/60" />
        </motion.div>
      </div>
    </section>
  );
}
