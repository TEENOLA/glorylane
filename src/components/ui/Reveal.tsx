import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SlideDirection = "left" | "right" | "up";

type RevealProps = {
  children: ReactNode;
  direction?: SlideDirection;
  delay?: number;
  distance?: number;
  className?: string;
};

function getHiddenOffset(direction: SlideDirection, distance: number) {
  if (direction === "left") return { x: -distance, y: 0 };
  if (direction === "right") return { x: distance, y: 0 };
  return { x: 0, y: distance };
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 48,
  className = "",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const hiddenOffset = getHiddenOffset(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hiddenOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
