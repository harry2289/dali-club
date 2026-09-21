import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { InstagramIcon } from "../ui/icons";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { GALLERY, CLUB } from "../../data/content";

const GRADIENTS = [
  "from-amber-900/60 via-ink to-ink",
  "from-red-950/60 via-ink to-ink",
  "from-yellow-900/50 via-ink to-ink",
  "from-neutral-800 via-ink to-ink",
  "from-amber-950/70 via-ink to-ink",
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="Galerie"
          title="La vie du club, en images"
          subtitle="Entraînements, sparring, stages et moments de famille — suis-nous sur Instagram pour ne rien manquer."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className={`relative aspect-square overflow-hidden bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} border border-gold/10 group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <span className="font-display text-5xl text-gold">{i + 1}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 text-bone text-xs uppercase tracking-wider translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </p>
              </div>
              <span className="absolute top-2 right-2 text-bone/70 group-hover:text-gold transition-colors">
                <Play size={16} fill="currentColor" />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="text-bone/50 text-sm">
            Rejoins nos <span className="text-gold font-semibold">{CLUB.followers.toLocaleString("fr-FR")}+</span> followers
          </p>
          <Button href={CLUB.instagram} target="_blank" variant="outline">
            <InstagramIcon width={16} height={16} /> @boxing_club_dali_bacha
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
