"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flame, Gauge, Wind } from "lucide-react";
import { whatWeDo } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

const icons = [Gauge, Droplets, Flame, Wind];

export function HomeWhatWeDo() {
  return (
    <Section tone="white">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <motion.div variants={fadeUp} className="max-w-md">
            <p className="eyebrow">What we do</p>
            <Heading className="mt-4">End-to-End Oil & Gas Engineering Solutions.</Heading>
            <p className="mt-4 text-sm leading-7 text-navy/65 dark:text-white/60">
              Axiom Egypt supports petroleum companies with testing, separation, heating, compression, power and
              maintenance — from first measurement to reliable operations.
            </p>
            <div className="mt-7">
              <ButtonLink href="/services">Explore All Services</ButtonLink>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whatWeDo.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.div key={item.title} variants={fadeUp}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-axiom-sm transition hover:-translate-y-1 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50"
                  >
                    <div className="relative h-36">
                      <Image src={item.image} alt={item.title} fill sizes="25vw" className="object-cover" />
                      <span className="absolute -bottom-5 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white shadow-axiom dark:bg-cyan dark:text-midnight">
                        <Icon size={16} />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-5 pb-5 pt-8">
                      <h3 className="font-display text-lg font-bold text-navy dark:text-white">{item.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-navy/60 dark:text-white/55">{item.text}</p>
                      <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-flame text-white">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
