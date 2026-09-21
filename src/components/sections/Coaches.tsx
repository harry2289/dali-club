import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { COACHES } from "../../data/content";

export default function Coaches() {
  return (
    <section id="coaches" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="L'équipe"
          title="Des coachs qui font la différence"
          subtitle="Expérience, pédagogie et exigence : notre équipe accompagne chaque boxeur, du premier gant au premier gala."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group [perspective:1200px]"
            >
              <div className="relative h-96 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-ink border border-gold/15 [backface-visibility:hidden] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_60%)]" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 h-28 w-28 rounded-full border-2 border-gold/40 flex items-center justify-center text-4xl font-display text-gold">
                    {coach.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="relative z-10 pb-8 text-center px-4">
                    <h3 className="font-display text-2xl uppercase text-bone">{coach.name}</h3>
                    <p className="text-gold text-xs uppercase tracking-widest mt-1">{coach.role}</p>
                  </div>
                  <div className="absolute bottom-3 text-bone/30 text-[10px] uppercase tracking-widest">
                    Survolez pour découvrir
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gold text-ink p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="font-display text-2xl uppercase mb-2">{coach.name}</h3>
                  <span className="h-px w-10 bg-ink/40 mb-4" />
                  <p className="text-sm leading-relaxed">{coach.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
