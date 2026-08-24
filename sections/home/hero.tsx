"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

function Title({ text }: { text: string }) {
  const parts = text.split(".");
  return (
    <h1 className="mt-4 max-w-xl text-[2rem] font-extrabold leading-[1.1] tracking-tight text-navy dark:text-white sm:mt-5 sm:text-[2.5rem] md:text-6xl">
      {parts.filter(Boolean).map((part, index) => (
        <span key={part}>
          {part.trim()}
          <span className="text-flame">.</span>
          {index < parts.filter(Boolean).length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-midnight">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image src={slide.image} alt="" fill priority sizes="70vw" className="object-cover object-center" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-midnight dark:via-midnight/75 dark:to-transparent lg:from-white lg:via-white/55 lg:to-transparent dark:lg:from-midnight dark:lg:via-midnight/70" />
      </div>

      <div className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:left-6 lg:flex">
        {heroSlides.map((item, slideIndex) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={cnDot(slideIndex === index)}
          >
            {String(slideIndex + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      <Container className="relative grid min-h-[70vh] items-center py-12 sm:py-16 lg:min-h-[84vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12 }}
            variants={stagger}
            className="max-w-xl"
          >
            <motion.p variants={fadeUp} className="eyebrow">
              {slide.eyebrow}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Title text={slide.title} />
            </motion.div>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-sm leading-7 text-navy/65 dark:text-white/65 sm:mt-6 sm:text-base">
              {slide.text}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <ButtonLink href="/solutions" size="lg" className="w-full sm:w-auto">
                Explore Solutions
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg" className="w-full sm:w-auto">
                Our Services <ArrowRight size={16} />
              </ButtonLink>
            </motion.div>
            <motion.a
              variants={fadeUp}
              href="https://www.youtube.com/channel/UCFykSCdLnJAq6UDBb8IF2Tw"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 lg:hidden"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-flame text-white">
                <Play size={14} fill="currentColor" />
              </span>
              <span className="text-sm font-semibold text-navy dark:text-white">Watch Company Video</span>
            </motion.a>
            <div className="mt-8 flex gap-4 lg:hidden">
              {heroSlides.map((item, slideIndex) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setIndex(slideIndex)}
                  className={cnDot(slideIndex === index)}
                >
                  {String(slideIndex + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <a
        href="https://www.youtube.com/channel/UCFykSCdLnJAq6UDBb8IF2Tw"
        target="_blank"
        rel="noreferrer"
        className="absolute right-[18%] top-1/2 hidden -translate-y-1/2 items-center gap-3 rounded-full bg-white/95 px-3 py-3 pr-5 shadow-axiom dark:bg-midnight-50/90 lg:flex"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flame text-white">
          <Play size={16} fill="currentColor" />
        </span>
        <span className="text-sm font-semibold text-navy dark:text-white">Watch Company Video</span>
      </a>
    </section>
  );
}

function cnDot(active: boolean) {
  return `text-left text-sm font-bold ${active ? "text-flame" : "text-navy/30 hover:text-navy dark:text-white/30 dark:hover:text-white"}`;
}
