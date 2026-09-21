import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Emblem from "../ui/Emblem";
import Button from "../ui/Button";
import { CLUB } from "../../data/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [impact, setImpact] = useState(false);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const t = setTimeout(() => setImpact(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background layers */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(212,175,55,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.65)_60%,#060606_100%)]" />
        {/* Diagonal ring-rope texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none">
          <defs>
            <pattern id="ropes" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M0 40h80M40 0v80" stroke="#d4af37" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ropes)" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/40"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Emblem size={110} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-gold uppercase tracking-[0.35em] text-xs font-semibold">
            {CLUB.location} {CLUB.hashtag}
          </span>
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        {/* Impact title */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-display uppercase leading-[0.95] text-bone select-none"
            style={{ fontSize: "clamp(2.8rem, 10vw, 8rem)" }}
          >
            <motion.span
              className="block"
              initial={{ x: -300, opacity: 0, rotate: -6 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
            >
              DALI BACHA
            </motion.span>
            <motion.span
              className="block text-gold-gradient"
              initial={{ x: 300, opacity: 0, rotate: 6 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            >
              BOXING CLUB
            </motion.span>
          </motion.h1>

          {/* Impact shockwave ring */}
          {impact && (
            <motion.span
              initial={{ opacity: 0.9, scale: 0.3 }}
              animate={{ opacity: 0, scale: 2.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-none absolute inset-0 m-auto h-40 w-40 rounded-full border-2 border-gold"
              style={{ top: "50%", left: "50%", translate: "-50% -50%" }}
            />
          )}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-6 max-w-xl text-bone/70 text-lg md:text-xl font-light italic"
        >
          « {CLUB.tagline} » — {CLUB.slogan}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#contact">Rejoindre le Club</Button>
          <Button
            href={`https://wa.me/${CLUB.whatsapp}`}
            target="_blank"
            variant="outline"
            className="border-bone/30 text-bone hover:border-gold"
          >
            <MessageCircle size={16} /> WhatsApp
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex items-center gap-8 text-bone/50 text-xs uppercase tracking-widest"
        >
          <span>{CLUB.followers.toLocaleString("fr-FR")}+ Followers</span>
          <span className="h-4 w-px bg-bone/20" />
          <span>Hommes & Femmes</span>
          <span className="h-4 w-px bg-bone/20" />
          <span>Tous niveaux</span>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div className="absolute bottom-16 left-0 w-full overflow-hidden border-y border-gold/15 bg-black/40 py-2.5 z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {Array.from({ length: 6 }).map((__, j) => (
                <span key={j} className="flex items-center gap-8 font-display text-sm uppercase tracking-widest text-gold/70">
                  Plus qu'un club, une famille
                  <span className="text-bone/30">•</span>
                  Dépasse tes limites
                  <span className="text-bone/30">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4 }, y: { duration: 1.6, repeat: Infinity } }}
        className="absolute bottom-4 z-10 text-gold/70 hover:text-gold"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
