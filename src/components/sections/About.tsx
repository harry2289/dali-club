import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import Counter from "../ui/Counter";
import Emblem from "../ui/Emblem";
import { STATS, CLUB } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_10%,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeading
              kicker="Le Club"
              title="Bien plus qu'une salle de boxe"
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-bone/70 leading-relaxed text-lg mb-5"
            >
              Fondé à {CLUB.location}, le club <span className="text-gold font-semibold">Dali Bacha</span>{" "}
              est né d'une conviction simple : la boxe change des vies. Ici, chaque coup de poing
              se travaille avec rigueur, mais chaque membre est accueilli comme un membre de la famille.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-bone/70 leading-relaxed text-lg mb-8"
            >
              Hommes, femmes, enfants, débutants ou futurs compétiteurs — notre équipe de coachs
              accompagne chaque parcours avec la même exigence et la même passion. Notre philosophie :{" "}
              <span className="italic text-bone">« {CLUB.tagline} »</span>.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-gold/40 pl-4"
                >
                  <p className="font-display text-3xl md:text-4xl text-gold-gradient">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-bone/50 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md rounded-full border border-gold/20 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border border-gold/10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-gold/15"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Emblem size={240} spin={false} />
              </motion.div>
            </div>

            {/* Orbiting badges */}
            {[
              { text: "BOXE ANGLAISE", pos: "top-2 -left-4" },
              { text: "FAMILLE", pos: "bottom-8 -right-6" },
              { text: "DISCIPLINE", pos: "bottom-0 left-0" },
            ].map((b, i) => (
              <motion.span
                key={b.text}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                className={`absolute ${b.pos} bg-ink border border-gold/40 px-4 py-2 text-[10px] font-display uppercase tracking-widest text-gold shadow-lg`}
              >
                {b.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
