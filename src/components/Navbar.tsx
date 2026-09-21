import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Emblem from "./ui/Emblem";
import { CLUB } from "../data/content";

const LINKS = [
  { label: "Accueil", href: "#home" },
  { label: "Le Club", href: "#about" },
  { label: "Programmes", href: "#programs" },
  { label: "Coachs", href: "#coaches" },
  { label: "Galerie", href: "#gallery" },
  { label: "Événements", href: "#event" },
  { label: "Horaires", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/90 backdrop-blur-md border-b border-gold/15 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <Emblem size={scrolled ? 44 : 54} />
            <div className="hidden sm:block">
              <p className="font-display text-lg leading-tight text-bone group-hover:text-gold transition-colors">
                DALI BACHA
              </p>
              <p className="text-[10px] tracking-[0.25em] text-gold uppercase -mt-1">Boxing Club</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm uppercase tracking-wider text-bone/80 hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`https://wa.me/${CLUB.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-bone/80 hover:text-gold transition-colors"
            >
              <Phone size={15} />
              {CLUB.phone}
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gold text-ink font-display text-xs uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              Rejoindre
            </a>
          </div>

          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center gap-2"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="font-display text-3xl uppercase text-bone hover:text-gold py-3 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * LINKS.length }}
              href={`https://wa.me/${CLUB.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-8 py-3 bg-gold text-ink font-display uppercase tracking-widest"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
