import { motion } from "framer-motion";
import { Flame, Trophy, Calendar, Users, Baby, Dumbbell } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { PROGRAMS } from "../../data/content";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  gloves: Dumbbell,
  kid: Baby,
  female: Users,
  fire: Flame,
  trophy: Trophy,
  calendar: Calendar,
};

export default function Programs() {
  return (
    <section id="programs" className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_90%,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="Programmes"
          title="Un entraînement pour chaque objectif"
          subtitle="De l'initiation à la compétition, nos programmes s'adaptent à ton niveau, ton âge et tes ambitions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[program.icon] ?? Dumbbell;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative bg-charcoal border border-gold/10 hover:border-gold/50 p-8 clip-corner transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 h-16 w-16 bg-gold/5 group-hover:bg-gold/15 transition-colors clip-corner" />

                <motion.div
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-gold group-hover:bg-gold group-hover:text-ink transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, -6, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={28} />
                </motion.div>

                <p className="text-gold text-xs uppercase tracking-widest mb-2">{program.subtitle}</p>
                <h3 className="font-display text-2xl uppercase text-bone mb-3">{program.title}</h3>
                <p className="text-bone/60 text-sm leading-relaxed">{program.description}</p>

                <div className="mt-6 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
