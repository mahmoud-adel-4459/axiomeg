"use client";

import { motion } from "framer-motion";
import { approach } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HomeApproach() {
  return (
    <Section tone="honeydew">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2"
        >
          {approach.map((item) => (
            <motion.article key={item.number} variants={fadeUp} className="rounded-axiom-lg bg-white p-7 shadow-axiom-sm">
              <p className="font-display text-3xl font-semibold text-teal-500">{item.number}.</p>
              <h3 className="mt-3 text-heading-3">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
