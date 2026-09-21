import { Phone, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "./ui/icons";
import Emblem from "./ui/Emblem";
import { CLUB } from "../data/content";

const LINKS = [
  { label: "Le Club", href: "#about" },
  { label: "Programmes", href: "#programs" },
  { label: "Coachs", href: "#coaches" },
  { label: "Galerie", href: "#gallery" },
  { label: "Horaires", href: "#schedule" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-gold/15 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Emblem size={48} spin={false} />
              <div>
                <p className="font-display text-lg text-bone">DALI BACHA</p>
                <p className="text-[10px] tracking-[0.25em] text-gold uppercase -mt-1">Boxing Club</p>
              </div>
            </div>
            <p className="text-bone/50 text-sm leading-relaxed max-w-sm">
              « {CLUB.tagline} ». Un club de boxe familial à {CLUB.location}, pour hommes, femmes
              et enfants — de l'initiation à la compétition.
            </p>
          </div>

          <div>
            <p className="font-display uppercase text-sm text-gold mb-4 tracking-widest">Navigation</p>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-bone/50 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display uppercase text-sm text-gold mb-4 tracking-widest">Contact</p>
            <ul className="space-y-3 text-sm text-bone/50">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" /> {CLUB.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold" /> {CLUB.phone}
              </li>
              <li>
                <a
                  href={CLUB.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <InstagramIcon width={14} height={14} className="text-gold" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CLUB.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold transition-colors"
                >
                  <MessageCircle size={14} className="text-gold" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bone/40">
          <p>© {new Date().getFullYear()} {CLUB.name}. Tous droits réservés.</p>
          <p className="italic">{CLUB.slogan}.</p>
        </div>
      </div>
    </footer>
  );
}
