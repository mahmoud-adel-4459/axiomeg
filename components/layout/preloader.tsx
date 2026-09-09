"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Quick skip if already shown in this tab session
    const previous = sessionStorage.getItem("axiom-preloader");
    if (previous === "done") {
      setVisible(false);
      return;
    }

    // Progress counter animation
    const interval = window.setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + step);
      });
    }, 90);

    // Auto dismiss
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("axiom-preloader", "done");
      setVisible(false);
    }, 2500);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 px-4 backdrop-blur-2xl transition-colors duration-300 dark:bg-midnight/95"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full max-w-[28rem] flex-col items-center text-center sm:max-w-[32rem]">
            {/* Cinematic Pumpjack Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-axiom-xl border border-navy/12 bg-surface shadow-axiom-lg transition-all duration-300 dark:border-cyan/30 dark:bg-midnight-50 dark:shadow-[0_0_40px_rgba(64,196,255,0.18)]"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <Image
                  src="/images/home/pumpjack-preloader.jpg"
                  alt="Axiom Egypt Petroleum Pumpjack Operations"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, 512px"
                  className="object-cover object-center"
                />
              </motion.div>

              {/* Contrast gradients for Light & Dark mode readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-midnight/50" />

              {/* HUD / Top Bar inside image */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3.5 sm:p-4">
                <div className="flex items-center gap-2 rounded-full bg-midnight/70 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-cyan">
                    Field Spread Active
                  </span>
                </div>

                <span className="rounded-full bg-midnight/70 px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest text-white/85 backdrop-blur-md border border-white/10">
                  {percent}%
                </span>
              </div>

              {/* Bottom Caption inside image with Official Logo */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-5">
                <Image
                  src="/images/home/axiom-logo-dark.png"
                  alt="Axiom Egypt — Petroleum Services & Commercial Agencies"
                  width={220}
                  height={64}
                  priority
                  className="h-11 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:h-12"
                />
              </div>
            </motion.div>

            {/* Brand and Progress Bar below image */}
            <div className="mt-5 w-full space-y-3 px-1">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-navy/70 dark:text-white/70">
                  Initializing Wellsite Systems...
                </span>
                <span className="font-mono text-flame dark:text-cyan">
                  {percent}%
                </span>
              </div>

              {/* Progress track */}
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-navy/10 dark:bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-flame via-orange-500 to-teal shadow-[0_0_12px_rgba(255,110,32,0.45)] dark:from-flame dark:via-cyan dark:to-teal"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-navy/50 dark:text-white/40">
                <span>Production • Testing • Tubulars</span>
                <span>ISO 9001 / API Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
