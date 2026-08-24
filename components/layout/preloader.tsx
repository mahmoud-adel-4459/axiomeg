"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const previous = sessionStorage.getItem("axiom-preloader");
    if (previous === "done") {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("axiom-preloader", "done");
      setVisible(false);
    }, 2400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-honeydew-50 dark:bg-midnight"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-[min(92vw,28rem)] flex-col items-center px-6 text-center">
            <svg viewBox="0 0 320 220" className="h-44 w-full" aria-hidden="true">
              <defs>
                <linearGradient id="oil" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#102F47" />
                  <stop offset="100%" stopColor="#1c4d6e" />
                </linearGradient>
                <linearGradient id="water" x1="0" x2="0" y1="1" y2="0">
                  <stop offset="0%" stopColor="#8CDCCD" />
                  <stop offset="100%" stopColor="#5ECBB6" />
                </linearGradient>
              </defs>
              <path d="M30 118 H290" stroke="#102F47" strokeOpacity="0.15" strokeWidth="2" />
              <motion.rect
                x="48"
                y="70"
                width="224"
                height="88"
                rx="44"
                fill="#ffffff"
                stroke="#102F47"
                strokeWidth="2.4"
              />
              <motion.path
                d="M72 140 C110 140 120 118 160 118 C200 118 210 140 248 140"
                fill="url(#water)"
                initial={{ opacity: 0.35 }}
                animate={{ opacity: [0.35, 0.9, 0.35] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                d="M80 148 C118 148 126 132 160 132 C194 132 202 148 240 148 V158 H80 Z"
                fill="url(#oil)"
                initial={{ y: 8 }}
                animate={{ y: [8, 0, 8] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="96"
                cy="108"
                r="4"
                fill="#EC4E20"
                animate={{ cy: [112, 96, 112], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              <motion.circle
                cx="160"
                cy="100"
                r="4"
                fill="#8CDCCD"
                animate={{ cy: [108, 92, 108], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.circle
                cx="224"
                cy="104"
                r="4"
                fill="#102F47"
                animate={{ cy: [110, 94, 110], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.3, repeat: Infinity, delay: 0.35 }}
              />
              <path d="M160 70 V42" stroke="#102F47" strokeWidth="2.4" />
              <rect x="146" y="22" width="28" height="20" rx="4" fill="#102F47" />
              <path d="M48 114 H20 V90" stroke="#EC4E20" strokeWidth="2.4" fill="none" />
              <path d="M272 114 H300 V90" stroke="#8CDCCD" strokeWidth="2.4" fill="none" />
              <text x="20" y="82" fill="#EC4E20" fontSize="10" fontWeight="700">
                OIL
              </text>
              <text x="276" y="82" fill="#2E8C7B" fontSize="10" fontWeight="700">
                GAS
              </text>
              <text x="132" y="192" fill="#102F47" fontSize="11" fontWeight="600">
                WELL TEST SEPARATOR
              </text>
            </svg>
            <p className="mt-2 font-display text-xl font-semibold text-navy dark:text-white">Axiom Egypt</p>
            <p className="mt-1 text-sm text-navy/60 dark:text-white/55">Preparing petroleum services</p>
            <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
              <motion.div
                className="h-full rounded-full bg-flame"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
