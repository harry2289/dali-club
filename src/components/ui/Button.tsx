import { type ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  target?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  target,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden group";

  const styles: Record<string, string> = {
    solid:
      "bg-gold text-ink hover:text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_45px_rgba(212,175,55,0.55)]",
    outline:
      "border-2 border-gold text-gold hover:text-ink",
    ghost: "text-bone hover:text-gold",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {variant !== "ghost" && (
        <span className="absolute inset-0 -translate-x-full bg-gold-light transition-transform duration-300 group-hover:translate-x-0 -z-10" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={target ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
