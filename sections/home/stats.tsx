"use client";

import Link from "next/link";
import { Award, Briefcase, Factory, Users } from "lucide-react";
import { homepageStats } from "@/lib/content";
import { useCountUp } from "@/hooks/use-count-up";
import { Container } from "@/components/ui/container";

const icons = [Award, Users, Briefcase, Factory];

function Stat({ value, suffix, label, Icon }: { value: number; suffix: string; label: string; Icon: typeof Award }) {
  const { value: count, ref } = useCountUp(value);
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-navy dark:text-cyan" size={26} />
      <div>
        <p className="font-display text-2xl font-extrabold text-navy dark:text-white">
          <span ref={ref}>{count}</span>
          {suffix}
        </p>
        <p className="text-xs font-medium text-navy/55 dark:text-white/50">{label}</p>
      </div>
    </div>
  );
}

export function HomeStats() {
  return (
    <section className="border-y border-navy/6 bg-surface-muted py-8 dark:border-white/8 dark:bg-midnight-100">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
          {homepageStats.map((item, index) => (
            <Stat key={item.label} {...item} Icon={icons[index]} />
          ))}
        </div>
        <div className="max-w-xs text-sm leading-6 text-navy/60 dark:text-white/55">
          Trusted by leading energy companies around the world.{" "}
          <Link href="/about" className="inline-flex items-center gap-1 font-semibold text-flame">
            Learn More About Us →
          </Link>
        </div>
      </Container>
    </section>
  );
}
