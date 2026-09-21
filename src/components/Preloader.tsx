import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Emblem from "./ui/Emblem";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 140);
    const timeout = setTimeout(() => setVisible(false), 1900);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Emblem size={90} />
          </motion.div>
          <p className="mt-6 font-display uppercase tracking-[0.3em] text-gold text-sm">
            Dali Bacha Boxing Club
          </p>
          <div className="mt-6 h-[2px] w-48 bg-bone/10 overflow-hidden">
            <motion.div
              className="h-full bg-gold"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
