"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ShieldCheck,
  MapPin,
  Tag,
  SlidersHorizontal,
  Info,
} from "lucide-react";
import { pipelineCategories, pipelineGallery } from "@/lib/content";
import type { PipelineGalleryCategory, PipelineGalleryItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/utils/cn";

export function PipelineGallery() {
  const [activeCategory, setActiveCategory] = useState<PipelineGalleryCategory | "All">("All");
  const [selectedItem, setSelectedItem] = useState<PipelineGalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? pipelineGallery
      : pipelineGallery.filter((item) => item.category === activeCategory);

  const activeIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setSelectedItem(filteredItems[activeIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  }, [activeIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (activeIndex >= 0 && activeIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[activeIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  }, [activeIndex, filteredItems]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, handlePrev, handleNext]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div className="space-y-10">
      {/* Category filter bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("All")}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition duration-200 sm:text-sm",
            activeCategory === "All"
              ? "bg-flame text-white shadow-axiom"
              : "border border-navy/10 bg-white text-navy hover:border-navy/20 dark:border-white/10 dark:bg-midnight-50 dark:text-white dark:hover:border-white/25",
          )}
        >
          <SlidersHorizontal size={14} />
          All Capabilities ({pipelineGallery.length})
        </button>

        {pipelineCategories.map((cat) => {
          const count = pipelineGallery.filter((i) => i.category === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition duration-200 sm:text-sm",
                isActive
                  ? "bg-flame text-white shadow-axiom"
                  : "border border-navy/10 bg-white text-navy hover:border-navy/20 dark:border-white/10 dark:bg-midnight-50 dark:text-white dark:hover:border-white/25",
              )}
            >
              {cat}
              <span
                className={cn(
                  "inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px]",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-navy/5 text-navy/60 dark:bg-white/10 dark:text-white/70",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of pipeline items */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col overflow-hidden rounded-axiom-lg border border-navy/8 bg-white shadow-axiom-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50 dark:hover:border-cyan/40"
            >
              {/* Image with zoom overlay */}
              <div
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-navy/5 dark:bg-midnight-100"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-axiom group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

                {/* Badges on image */}
                <div className="absolute left-3 top-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-midnight/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                    <Tag size={12} className="text-cyan" />
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-axiom opacity-0 transition duration-300 group-hover:opacity-100 dark:bg-midnight dark:text-white">
                  <Maximize2 size={16} />
                </div>

                {item.specs.standard ? (
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/90">
                      <ShieldCheck size={13} className="text-teal" />
                      {item.specs.standard}
                    </span>
                  </div>
                ) : null}
              </div>

              {/* Content block */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug text-navy group-hover:text-flame dark:text-white dark:group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-navy/70 dark:text-white/65">
                  {item.summary}
                </p>

                {/* Specs pill row */}
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-navy/6 pt-3 dark:border-white/6">
                  {item.specs.diameter ? (
                    <span className="inline-block rounded bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-navy/75 dark:bg-midnight-100 dark:text-white/70">
                      OD: {item.specs.diameter}
                    </span>
                  ) : null}
                  {item.specs.grade ? (
                    <span className="inline-block rounded bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-navy/75 dark:bg-midnight-100 dark:text-white/70">
                      {item.specs.grade}
                    </span>
                  ) : null}
                </div>

                {/* Facility location */}
                {item.specs.facility ? (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-navy/55 dark:text-white/50">
                    <MapPin size={12} className="shrink-0 text-flame" />
                    <span className="truncate">{item.specs.facility}</span>
                  </div>
                ) : null}

                {/* Trigger button */}
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg border border-navy/10 py-2 text-xs font-semibold text-navy transition hover:bg-navy/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  <Info size={13} />
                  Inspect Technical Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Specification Modal */}
      <AnimatePresence>
        {selectedItem ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-midnight/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-axiom-xl border border-navy/10 bg-white shadow-2xl dark:border-white/15 dark:bg-midnight"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-navy/8 px-6 py-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Badge>{selectedItem.category}</Badge>
                  <span className="text-xs text-navy/50 dark:text-white/45">
                    {activeIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous item"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-navy/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next item"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-navy/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    aria-label="Close details"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy hover:bg-navy/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="grid flex-1 overflow-y-auto lg:grid-cols-12">
                {/* Image side */}
                <div className="relative min-h-[300px] bg-black lg:col-span-7 lg:min-h-[500px]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain p-2"
                  />
                </div>

                {/* Technical specifications side */}
                <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-8">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-navy dark:text-white sm:text-2xl">
                      {selectedItem.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-navy/70 dark:text-white/70">
                      {selectedItem.summary}
                    </p>

                    {/* Technical Specs List */}
                    <div className="mt-6 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-navy/50 dark:text-white/40">
                        Engineering Specifications
                      </h3>
                      <div className="grid gap-2.5">
                        {Object.entries(selectedItem.specs).map(([key, val]) => {
                          if (!val) return null;
                          return (
                            <div
                              key={key}
                              className="rounded-lg border border-navy/6 bg-surface-muted px-3.5 py-2 text-xs dark:border-white/8 dark:bg-midnight-50"
                            >
                              <span className="font-semibold uppercase tracking-wider text-navy/50 dark:text-white/40">
                                {key}:{" "}
                              </span>
                              <span className="font-medium text-navy dark:text-white">
                                {val}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Detailed field notes */}
                    <div className="mt-6 rounded-axiom border border-navy/8 bg-honeydew-50 p-4 dark:border-white/8 dark:bg-midnight-100">
                      <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy dark:text-cyan">
                        <ShieldCheck size={14} /> QA/QC & Logistics Protocol
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-navy/75 dark:text-white/70">
                        {selectedItem.details}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-col gap-3 pt-4 border-t border-navy/8 dark:border-white/10 sm:flex-row">
                    <ButtonLink
                      href={`/contact?rfq=${encodeURIComponent(selectedItem.title)}`}
                      size="sm"
                      className="w-full justify-center sm:flex-1"
                    >
                      Request RFQ / Casing Specs
                    </ButtonLink>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedItem(null)}
                      className="w-full justify-center sm:w-auto"
                    >
                      Back to Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
