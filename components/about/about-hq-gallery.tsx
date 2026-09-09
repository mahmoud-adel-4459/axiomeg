"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Building2, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";

interface FacilityPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

const facilityPhotos: FacilityPhoto[] = [
  {
    id: "ext-day",
    title: "Axiom Corporate Tower — Daytime Exterior",
    subtitle: "New Maadi Corporate District, Cairo",
    category: "Architecture",
    image: "/images/about/hq-building-day.jpg",
    description:
      "A modern 6-story engineering headquarters housing Axiom Egypt's specialized petroleum services, project management teams, asset integrity archives, and commercial agency divisions.",
    features: [
      "6-Story Modern Architecture",
      "Prime New Maadi Energy Hub",
      "Executive & Technical Divisions",
    ],
  },
  {
    id: "ext-night",
    title: "Illuminated Facade — 24/7 Energy Operations",
    subtitle: "Round-the-Clock Emergency Support",
    category: "Operations",
    image: "/images/about/hq-building-night.jpg",
    description:
      "Axiom's night operations center coordinates urgent field turnarounds, emergency spare parts logistics, and continuous client communication across Western Desert, Gulf of Suez, and Mediterranean fields.",
    features: [
      "24/7 Rapid Dispatch Center",
      "Night Shift Logistics Desk",
      "Iconic Illuminated Flame Identity",
    ],
  },
  {
    id: "boardroom",
    title: "Executive Boardroom & Command Suite",
    subtitle: "Level 4 Strategic Operations",
    category: "Governance",
    image: "/images/about/hq-boardroom.jpg",
    description:
      "Featuring high-definition communications and integrated technical review displays, the boardroom hosts operator audits, IOC negotiations, and rigorous QHSE governance reviews.",
    features: [
      "High-Level Executive Governance",
      "Technical Proposal Reviews",
      "Illuminated Axiom Egypt Flame Wall",
    ],
  },
  {
    id: "reception",
    title: "Client Reception & Commercial Agency Center",
    subtitle: "Ground Floor Welcome Lobby",
    category: "Commercial",
    image: "/images/about/hq-reception.jpg",
    description:
      "Designed with refined finishes and gold-leaf 3D identity typography, welcoming international manufacturers, oilfield operators, and technology partners into a professional environment.",
    features: [
      "Dedicated Commercial Agency Office",
      "Vendor & Partner Onboarding",
      "Refined Architectural Finishes",
    ],
  },
  {
    id: "facade",
    title: "Engineering Facade & Technical Base",
    subtitle: "Precision Cladding & Structural Modernity",
    category: "Infrastructure",
    image: "/images/about/hq-facade.jpg",
    description:
      "The engineering base serves as the administrative backbone for API Q1 certified procedures, rig inspection reporting, and non-destructive examination (NDE) data processing.",
    features: [
      "API Q1 Aligned Documentation",
      "Certified Field Engineers",
      "Direct Logistics Coordination",
    ],
  },
];

export function AboutHqGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<FacilityPhoto | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openLightbox = (photo: FacilityPhoto, index: number) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
  };

  const nextPhoto = () => {
    const nextIdx = (selectedIndex + 1) % facilityPhotos.length;
    setSelectedIndex(nextIdx);
    setSelectedPhoto(facilityPhotos[nextIdx]);
  };

  const prevPhoto = () => {
    const prevIdx = (selectedIndex - 1 + facilityPhotos.length) % facilityPhotos.length;
    setSelectedIndex(prevIdx);
    setSelectedPhoto(facilityPhotos[prevIdx]);
  };

  return (
    <div id="facility-details" className="pt-8">
      <div className="mb-10 text-center">
        <MotionReveal direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-flame/30 bg-flame/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-flame dark:bg-flame/15">
            <Building2 className="h-3.5 w-3.5" />
            <span>Corporate Infrastructure</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
            Our Headquarters & Facilities
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
            Take an inside look at Axiom Egypt’s headquarters in New Maadi, Cairo — where strategic petroleum service management and international commercial agency partnerships unite.
          </p>
        </MotionReveal>
      </div>

      {/* Grid of 5 Photos with rich card layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilityPhotos.map((item, idx) => {
          // Feature the first two items on top row
          const isWide = idx === 0 || idx === 1;
          return (
            <MotionReveal
              key={item.id}
              direction="up"
              delay={idx * 0.1}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-midnight-50 ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative cursor-pointer overflow-hidden ${
                  isWide ? "h-72 sm:h-80" : "h-64"
                }`}
                onClick={() => openLightbox(item, idx)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Badges */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md dark:bg-white/20">
                    {item.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-flame-300">
                    <MapPin className="h-3 w-3" />
                    <span>{item.subtitle}</span>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="text-xs leading-relaxed text-navy/70 dark:text-white/65 sm:text-sm">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-navy/8 dark:border-white/8">
                  {item.features.map((feat) => (
                    <span
                      key={feat}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-navy/80 dark:text-white/75"
                    >
                      <CheckCircle2 className="h-3 w-3 text-flame" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </MotionReveal>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-midnight border border-white/15 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-flame"
                aria-label="Close image modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next in Modal */}
              <button
                type="button"
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-flame"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-flame"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image View */}
              <div className="relative h-[55vh] w-full bg-black sm:h-[65vh]">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Details Footer */}
              <div className="border-t border-white/10 bg-midnight-100 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-flame">
                      {selectedPhoto.category} • {selectedPhoto.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {selectedPhoto.title}
                    </h3>
                  </div>
                  <span className="text-xs text-white/50">
                    Photo {selectedIndex + 1} of {facilityPhotos.length}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {selectedPhoto.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedPhoto.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-xs text-white/90"
                    >
                      <CheckCircle2 className="h-3 w-3 text-flame" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
