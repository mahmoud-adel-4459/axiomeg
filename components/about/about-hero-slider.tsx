"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Building2, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export interface AboutSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
  location: string;
}

export const aboutSlides: AboutSlide[] = [
  {
    id: "hq-day",
    badge: "Corporate Headquarters",
    title: "The Nerve Center of Axiom-Egypt",
    subtitle:
      "Located in New Maadi, Cairo, our multi-story corporate headquarters anchors Axiom's nationwide petroleum services, asset integrity divisions, and international commercial agency partnerships.",
    image: "/images/about/hq-building-day.jpg",
    highlights: ["6-Story Engineering Complex", "Central Technical Command", "New Maadi, Cairo"],
    location: "New Maadi, Cairo, Egypt",
  },
  {
    id: "hq-night",
    badge: "24/7 Readiness",
    title: "Round-the-Clock Engineering & Dispatch",
    subtitle:
      "Our operations never stop. Illuminated day and night, Axiom's rapid response teams coordinate emergency rig interventions, critical turnaround logistics, and uninterrupted technical support across all Egyptian basins.",
    image: "/images/about/hq-building-night.jpg",
    highlights: ["24/7 Field Support", "Rapid Mobilization", "Night Shift Logistics"],
    location: "Axiom Tower, Cairo",
  },
  {
    id: "hq-boardroom",
    badge: "Executive Governance",
    title: "Executive Boardroom & Strategic Alliances",
    subtitle:
      "Where high-impact petroleum solutions take shape. Our executive suite hosts operator alignments, joint venture strategy sessions, and rigorous QHSE compliance reviews with international energy leaders.",
    image: "/images/about/hq-boardroom.jpg",
    highlights: ["Strategic Governance", "Operator Alignments", "Executive Decisions"],
    location: "Executive Level 4",
  },
  {
    id: "hq-reception",
    badge: "Commercial Agencies",
    title: "Client Reception & Commercial Agency Center",
    subtitle:
      "Welcoming global partners and IOC operators. As official commercial agents for top-tier worldwide petroleum equipment manufacturers, we provide end-to-end procurement, warranty, and technical service.",
    image: "/images/about/hq-reception.jpg",
    highlights: ["Exclusive Agencies", "Global Equipment", "Client-First Culture"],
    location: "Ground Floor Welcome Lobby",
  },
  {
    id: "hq-facade",
    badge: "Modern Architecture",
    title: "Purpose-Built Engineering Infrastructure",
    subtitle:
      "Designed specifically for the energy sector, our facility houses specialized departments for rig inspection data, non-destructive testing analysis, pipeline engineering, and customer technical training.",
    image: "/images/about/hq-facade.jpg",
    highlights: ["API-Compliant Offices", "Asset Data Labs", "Specialized Engineers"],
    location: "Engineering Complex",
  },
];

export function AboutHeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % aboutSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = aboutSlides[current];

  return (
    <section
      className="relative isolate min-h-[640px] overflow-hidden bg-navy text-white sm:min-h-[720px] lg:min-h-[780px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Axiom Egypt Headquarters Tour"
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.05]"
          />
          {/* Gradients overlay for optimal contrast and brand feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-flame/15 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Header Badges / Active Location */}
      <div className="absolute left-6 right-6 top-6 z-20 mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
          <MapPin className="h-3.5 w-3.5 text-flame" />
          <span>{slide.location}</span>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
          className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md transition hover:bg-white/20 hover:text-white"
        >
          {isPaused ? (
            <>
              <Play className="h-3 w-3 text-flame fill-flame" />
              <span>Play</span>
            </>
          ) : (
            <>
              <Pause className="h-3 w-3 text-white" />
              <span>Pause</span>
            </>
          )}
        </button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:min-h-[720px] sm:pb-24 lg:min-h-[780px] lg:justify-center lg:py-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-flame backdrop-blur-md">
                <Building2 className="h-3.5 w-3.5" />
                <span>{slide.badge}</span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg sm:leading-8">
                {slide.subtitle}
              </p>

              {/* Highlights Pills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {slide.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-flame" />
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href="/contact" variant="primary">
                  Visit Our Headquarters <ArrowRight className="ml-1.5 h-4 w-4" />
                </ButtonLink>
                <a
                  href="#facility-details"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/40"
                >
                  Explore Facility & Operations
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Navigation & Indicator Bar */}
      <div className="absolute inset-x-0 bottom-6 z-20 mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Thumbnails / Indicators */}
        <div className="flex items-center gap-2">
          {aboutSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              aria-label={`Go to slide ${index + 1}: ${item.title}`}
              className={`group relative h-2.5 transition-all duration-300 rounded-full ${
                index === current
                  ? "w-10 bg-flame shadow-md shadow-flame/50"
                  : "w-2.5 bg-white/35 hover:bg-white/60"
              }`}
            >
              <span className="sr-only">{item.badge}</span>
            </button>
          ))}
          <span className="ml-3 hidden text-xs font-semibold tracking-wider text-white/70 sm:inline-block">
            0{current + 1} / 0{aboutSlides.length}
          </span>
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-flame hover:border-flame"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-flame hover:border-flame"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
