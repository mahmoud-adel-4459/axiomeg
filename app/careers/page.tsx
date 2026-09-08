import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { careerPerks, culturePillars, siteConfig } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { JobList } from "@/components/careers/job-list";
import { ShieldCheck, Wrench, GraduationCap, Users, HeartHandshake, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Build Your Future With Axiom Egypt",
  description:
    "Join Egypt's premier petroleum services and energy engineering team. Explore career opportunities in petroleum engineering, well testing, QA/QC inspection, rotating equipment, and field operations.",
  path: "/careers",
});

const cultureIcons: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Wrench,
  GraduationCap,
  Users,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Energy Engineering Team"
        title="Build Your Future With Us."
        description="At Axiom Egypt, we engineer reliability across the petroleum energy lifecycle. We invest in driven engineers, technicians, and field specialists who thrive in demanding environments and are passionate about operational excellence."
        image={siteConfig.teamImage}
      />

      {/* Why Work With Us */}
      <Section tone="white">
        <Container>
          <div className="text-center">
            <Badge>Why Axiom Egypt</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Engineered For Impact. Built On People.
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              We operate at the forefront of petroleum infrastructure — from high-pressure desert well testing to strategic pipeline yards. Working at Axiom means direct exposure to world-class equipment and leadership.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culturePillars.map((pillar) => {
              const Icon = cultureIcons[pillar.icon] || ShieldCheck;
              return (
                <Card
                  key={pillar.title}
                  className="flex flex-col justify-between border-navy/8 transition duration-300 hover:border-cyan/50 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-axiom bg-teal/20 text-teal-600 dark:text-cyan">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-navy/70 dark:text-white/65">
                      {pillar.text}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Company Culture & Life at Axiom */}
      <Section tone="muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-axiom-xl border border-navy/10 shadow-axiom">
              <Image
                src={siteConfig.teamImage}
                alt="Axiom Egypt Engineers and Technicians in Field"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <Badge>Company Culture</Badge>
              <Heading className="mt-4">
                A Culture of Mutual Trust, Ownership, and Technical Rigor
              </Heading>
              <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">
                We believe that complex well testing campaigns and heavy machinery maintenance succeed because of the people behind the controls. We foster an environment where field personnel and management speak the same language: integrity, mutual accountability, and technical mastery.
              </p>
              <p className="mt-3 leading-8 text-navy/70 dark:text-white/65">
                Every team member undergoes continuous safety training, is empowered with unequivocal Stop Work Authority, and receives access to state-of-the-art diagnostic tooling from day one.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-lg border border-navy/6 bg-white p-3 text-xs font-semibold text-navy dark:border-white/8 dark:bg-midnight dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Equal Opportunity Employer
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-navy/6 bg-white p-3 text-xs font-semibold text-navy dark:border-white/8 dark:bg-midnight dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  International Standards & Mentorship
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-navy/6 bg-white p-3 text-xs font-semibold text-navy dark:border-white/8 dark:bg-midnight dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Merit-Driven Fast Promotion Tracks
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-navy/6 bg-white p-3 text-xs font-semibold text-navy dark:border-white/8 dark:bg-midnight dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Family Medical Coverage
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits and Compensation */}
      <Section tone="white">
        <Container>
          <div className="text-center">
            <Badge>Benefits & Rewards</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Comprehensive Benefits That Support You & Your Family
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              We reward dedication with highly competitive compensation packages and benefits tailored to field and office lifestyles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerPerks.map((perk, idx) => (
              <div
                key={idx}
                className="rounded-axiom-lg border border-navy/8 bg-surface-muted p-6 dark:border-white/10 dark:bg-midnight-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-flame/15 text-flame">
                  <HeartHandshake size={20} />
                </div>
                <h4 className="mt-4 text-base font-bold text-navy dark:text-white">
                  {perk.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-navy/65 dark:text-white/60">
                  {perk.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Available Positions & Job List */}
      <Section tone="muted" id="positions">
        <Container>
          <div className="text-center">
            <Badge>Current Vacancies</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Available Positions Across Operations
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Explore active job openings in engineering, field operations, mechanical maintenance, and quality assurance. Click any role to inspect detailed responsibilities and submit your application directly.
            </p>
          </div>

          <div className="mt-12">
            <JobList />
          </div>
        </Container>
      </Section>
    </>
  );
}
