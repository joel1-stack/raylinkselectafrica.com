"use client";

import { motion } from "framer-motion";

export function WaveDivider({ className, reverse = false }: { className?: string; reverse?: boolean }) {
  const wavePath = reverse
    ? "M0,0 C150,100 350,100 500,0 L500,100 L0,100 Z"
    : "M0,100 C150,0 350,0 500,100 L500,0 L0,0 Z";

  return (
    <motion.div
      className={`relative h-20 w-full overflow-hidden ${className || ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111111" />
            <stop offset="50%" stopColor="#C96A40" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#111111" />
          </linearGradient>
        </defs>
        <motion.path
          d={wavePath}
          fill="url(#waveGradient)"
          className="transition-all duration-1000"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d={reverse
            ? "M0,100 C150,20 350,20 500,100 L500,120 L0,120 Z"
            : "M0,0 C150,80 350,80 500,0 L500,-20 L0,-20 Z"}
          fill="#111111"
          className="transition-all duration-1000"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    </motion.div>
  );
}