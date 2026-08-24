"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partnerLogos } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomePartners() {
  return (
    <Section tone="honeydew" className="py-16">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="eyebrow">Clients & Partners</p>
          <Heading className="mt-3">Be Trusted</Heading>
          <p className="mt-4 max-w-2xl text-navy/70 dark:text-white/65">
            We always strive to add value and are proactive in solving problems and in adopting client procedures.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {partnerLogos.map((src) => (
              <div key={src} className="flex items-center justify-center rounded-axiom border border-navy/10 bg-white px-4 py-6">
                <Image src={src} alt="Axiom Egypt partner" width={160} height={64} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
