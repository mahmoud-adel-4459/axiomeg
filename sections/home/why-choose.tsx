"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock3, Cpu, Handshake, Users } from "lucide-react";
import { leaderQuote, siteConfig, whyChoose } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { IconBox } from "@/components/ui/icon-box";
import { Section } from "@/components/ui/section";

const icons = [Clock3, Cpu, Users, Handshake];

export function HomeWhyChoose() {
  return (
    <Section id="why-choose-us" tone="white">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[20rem] overflow-hidden rounded-axiom-xl">
              <Image
                src={siteConfig.teamImage}
                alt="Axiom Egypt team"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div id="about-us">
              <Badge>Why choose us</Badge>
              <Heading className="mt-4">We provide</Heading>
              <p className="mt-4 text-navy/70 dark:text-white/65">
                We strive to develop according to the demands of the market and market trends.
              </p>
              <blockquote className="mt-6 rounded-axiom-xl border border-navy/8 bg-honeydew-50 p-6 dark:border-white/10 dark:bg-midnight-50">
                <p className="text-sm leading-7 text-navy/75 dark:text-white/70">“{leaderQuote.text}”</p>
                <footer className="mt-4 text-sm font-semibold text-navy dark:text-white">— {leaderQuote.author}</footer>
              </blockquote>
            </div>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {whyChoose.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-axiom-lg border border-navy/8 bg-surface-muted p-6 dark:border-white/10"
                >
                  <IconBox>
                    <Icon size={20} />
                  </IconBox>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-navy/70 dark:text-white/65">{item.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
