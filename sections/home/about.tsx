"use client";

import { useState } from "react";
import Image from "next/image";
import { leaderQuote } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Building2, MapPin, Sun, Moon, ArrowRight, ShieldCheck } from "lucide-react";

export function HomeAbout() {
  const [viewNight, setViewNight] = useState(false);

  return (
    <Section tone="white">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* HQ Building Visual with Day / Night Toggle */}
        <MotionReveal direction="left" className="relative">
          <div className="group relative min-h-[22rem] overflow-hidden rounded-3xl shadow-xl sm:min-h-[26rem] lg:min-h-[30rem]">
            <Image
              src={viewNight ? "/images/about/hq-building-night.jpg" : "/images/about/hq-building-day.jpg"}
              alt="Axiom Egypt Corporate Headquarters Building in New Maadi, Cairo"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

            {/* Floating Info Pill */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 rounded-2xl border border-white/20 bg-navy/80 p-4 text-white backdrop-blur-md sm:flex-row sm:items-center sm:justify-between dark:bg-midnight/85">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-flame/20 text-flame border border-flame/30">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white">Axiom Egypt Headquarters</h4>
                  <p className="flex items-center gap-1 text-xs text-white/70">
                    <MapPin className="h-3 w-3 text-flame" /> New Maadi Energy Hub, Cairo
                  </p>
                </div>
              </div>

              {/* Day / Night Switcher */}
              <button
                type="button"
                onClick={() => setViewNight(!viewNight)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/25"
                title={viewNight ? "Switch to Daytime View" : "Switch to Nighttime View"}
              >
                {viewNight ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-amber-400" />
                    <span>Day View</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-blue-300" />
                    <span>Night View</span>
                  </>
                )}
              </button>
            </div>

            {/* Top Status Badge */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-flame" />
              <span>Official Corporate HQ</span>
            </div>
          </div>
        </MotionReveal>

        {/* Content Side */}
        <MotionReveal direction="right">
          <p className="eyebrow">About Axiom Egypt</p>
          <Heading className="mt-4">
            A comprehensive partner for the petroleum & energy industry.
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-navy/70 dark:text-white/65">
            Headquartered in Cairo with operational reach across the Western Desert, Gulf of Suez, and Mediterranean basins, Axiom Egypt delivers preventive maintenance, certified rig inspections, production testing, power generation, and commercial agency solutions.
          </p>

          <blockquote className="mt-6 border-l-4 border-flame pl-5 text-sm leading-7 text-navy/75 dark:text-white/70 bg-honeydew-50/60 p-4 rounded-r-xl dark:bg-midnight-50/60">
            “{leaderQuote.text}”
            <cite className="mt-2 block not-italic font-semibold text-navy dark:text-white">
              — {leaderQuote.author}
            </cite>
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href="/about" variant="primary">
              Explore Our Story & Facilities <ArrowRight className="ml-1.5 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Get in Touch
            </ButtonLink>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
