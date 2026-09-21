import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CLUB } from "../data/content";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${CLUB.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)]"
      aria-label="Contacter sur WhatsApp"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
      <MessageCircle size={26} className="relative z-10" />
    </motion.a>
  );
}
