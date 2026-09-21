import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { InstagramIcon } from "../ui/icons";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { SCHEDULE, CLUB } from "../../data/content";

export default function ScheduleContact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour Dali Boxing Club,\nNom: ${form.name}\nTéléphone: ${form.phone}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${CLUB.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="schedule" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          kicker="Horaires & Contact"
          title="Prêt à monter dans le ring ?"
          subtitle="Consulte nos horaires et contacte-nous pour réserver ton premier cours d'essai."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl uppercase text-gold mb-6">Planning des cours</h3>
            <div className="space-y-3">
              {SCHEDULE.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between border border-gold/10 hover:border-gold/40 bg-ink px-5 py-4 transition-colors"
                >
                  <span className="font-display text-sm uppercase text-bone w-24">{day.day}</span>
                  <div className="flex-1 flex flex-col items-end gap-1 text-right">
                    {day.classes.map((c) => (
                      <span key={c.name} className="text-xs text-bone/60">
                        <span className="text-gold">{c.name}</span> — {c.time}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div id="contact" className="mt-10 space-y-4">
              <a
                href={CLUB.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-bone/70 hover:text-gold transition-colors"
              >
                <MapPin size={18} className="text-gold" /> {CLUB.location} — Voir sur la carte
              </a>
              <a
                href={`tel:${CLUB.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-bone/70 hover:text-gold transition-colors"
              >
                <Phone size={18} className="text-gold" /> {CLUB.phone}
              </a>
              <a
                href={CLUB.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-bone/70 hover:text-gold transition-colors"
              >
                <InstagramIcon width={18} height={18} className="text-gold" /> @boxing_club_dali_bacha
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-ink border border-gold/15 p-8 md:p-10 clip-corner"
          >
            <h3 className="font-display text-2xl uppercase text-gold mb-2">Réserve ton essai gratuit</h3>
            <p className="text-bone/50 text-sm mb-8">
              Remplis le formulaire, on te répond directement sur WhatsApp.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <p className="font-display text-2xl text-gold mb-2">Merci !</p>
                <p className="text-bone/60 text-sm">On t'attend sur WhatsApp pour finaliser ta réservation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-bone/50 mb-2">Nom complet</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-charcoal border border-gold/20 focus:border-gold px-4 py-3 text-bone outline-none transition-colors"
                    placeholder="Ton nom"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-bone/50 mb-2">Téléphone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-charcoal border border-gold/20 focus:border-gold px-4 py-3 text-bone outline-none transition-colors"
                    placeholder="+216 XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-bone/50 mb-2">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-charcoal border border-gold/20 focus:border-gold px-4 py-3 text-bone outline-none transition-colors resize-none"
                    placeholder="Boxe anglaise, boxe junior, femmes..."
                  />
                </div>
                <Button className="w-full justify-center">
                  <Send size={16} /> Envoyer via WhatsApp
                </Button>
              </form>
            )}

            <a
              href={`https://wa.me/${CLUB.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 text-sm text-bone/50 hover:text-gold transition-colors"
            >
              <MessageCircle size={15} /> ou contacte-nous directement
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
