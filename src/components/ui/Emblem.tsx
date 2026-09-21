import { motion } from "framer-motion";

/**
 * Stylized circular badge inspired by the club's Instagram profile emblem:
 * "DALI BACHA BOXING CLUB" ring with stars around a central mark.
 */
export default function Emblem({ size = 96, spin = true }: { size?: number; spin?: boolean }) {
  const stars = Array.from({ length: 10 });

  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.6, rotate: -25 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="drop-shadow-[0_0_18px_rgba(212,175,55,0.35)]"
        animate={spin ? { rotate: 360 } : undefined}
        transition={spin ? { duration: 40, repeat: Infinity, ease: "linear" } : undefined}
      >
        <defs>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9c7a1f" />
            <stop offset="45%" stopColor="#f2d675" />
            <stop offset="55%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#9c7a1f" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="96" fill="#0a0a0a" stroke="url(#goldRing)" strokeWidth="4" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="url(#goldRing)" strokeWidth="2" />

        {/* Rotating star ring */}
        {stars.map((_, i) => {
          const angle = (i / stars.length) * Math.PI * 2 - Math.PI / 2;
          const r = 88;
          const x = 100 + r * Math.cos(angle);
          const y = 100 + r * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="url(#goldRing)"
              fontSize="10"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              ★
            </text>
          );
        })}

        {/* Curved text top */}
        <path id="curveTop" d="M 35 70 A 65 65 0 0 1 165 70" fill="none" />
        <text fontSize="13" fill="url(#goldRing)" fontWeight="700" letterSpacing="2">
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
            DALI BACHA
          </textPath>
        </text>

        {/* Curved text bottom */}
        <path id="curveBottom" d="M 35 130 A 65 65 0 0 0 165 130" fill="none" />
        <text fontSize="12" fill="url(#goldRing)" fontWeight="700" letterSpacing="2">
          <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
            BOXING CLUB
          </textPath>
        </text>
      </motion.svg>

      {/* Center glove glyph, stays upright even if ring spins */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width={size * 0.34} height={size * 0.34} viewBox="0 0 64 64" fill="none">
          <path
            d="M20 30c0-8 6-14 14-14s14 6 14 14v10c0 8-6 16-14 16s-14-8-14-16V30z"
            fill="#d4af37"
            opacity="0.9"
          />
          <path d="M14 34c0-4 3-7 7-7h2v18h-2c-4 0-7-3-7-7v-4z" fill="#f2d675" opacity="0.85" />
        </svg>
      </div>
    </motion.div>
  );
}
