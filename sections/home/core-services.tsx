"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { coreServices } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function HomeCoreServices() {
  return (
    <Section tone="white">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.div variants={fadeUp}>
            <Badge>Services</Badge>
            <Heading className="mt-4 max-w-2xl">Petroleum services that keep operations moving.</Heading>
          </motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {coreServices.map((service) => (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link href={service.href} className="block h-full">
                  <Card className="group h-full">
                    <Image src={service.icon} alt="" width={72} height={72} className="h-16 w-16 object-contain" />
                    <h3 className="mt-5 text-heading-3">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/65">{service.summary}</p>
                    <p className="mt-5 text-sm font-semibold text-flame">Know more</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
