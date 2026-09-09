"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { defaultViewport } from "@/lib/motion";

type MotionDirection = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface MotionRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: MotionDirection;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export function MotionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  distance = 32,
  ...props
}: MotionRevealProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: -distance };
      case "right":
        return { opacity: 0, x: distance };
      case "zoom":
        return { opacity: 0, scale: 0.92 };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "zoom":
        return { opacity: 1, scale: 1 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getAnimate()}
      viewport={defaultViewport}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
