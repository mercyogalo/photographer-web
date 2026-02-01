"use client"

import { motion } from "framer-motion";

interface FRMonogramLogoProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  animated?: boolean;
}

export default function FRMonogramLogo({
  size = "md",
  color = "white",
  animated = false,
}: FRMonogramLogoProps) {
  const sizes = {
    sm: "text-3xl md:text-4xl",
    md: "text-5xl md:text-6xl lg:text-7xl",
    lg: "text-6xl md:text-7xl lg:text-8xl",
  };

  const Wrapper = animated ? motion.div : "div";

  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.2, ease: "easeOut" },
      })}
      className={`flex items-center leading-none ${sizes[size]}`}
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        color,
      }}
    >
      {/* Flipped F */}
      <span
        className="inline-block font-normal"
        style={{ transform: "scaleX(-1)" }}
      >
        F
      </span>

      {/* Attached R */}
      <span className="-ml-3 font-normal">
        R
      </span>
    </Wrapper>
  );
}
