import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import {
  trainingIndustries,
  trainingMethodology,
  trainingPrograms,
  trainingStats,
} from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { TrainingRequestForm } from "@/components/training/training-request-form";
import {
  GraduationCap,
  Users,
  Award,
  CheckCircle2,
  BookOpen,
  Wrench,
  ShieldCheck,
  Building,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Professional Training Solutions — Petroleum Workforce Development",
  description:
    "Accredited petroleum industry training solutions by Axiom Egypt. Practical hands-on workshops in well testing, IWCF well control, process engineering, and rotating machinery maintenance.",
  path: "/services/training",
});

const categoryIcons: Record<string, typeof GraduationCap> = {
  "Technical Training": Wrench,
  "Safety & HSE Training": ShieldCheck,
  "Engineering Training": BookOpen,
  "Operational Training": GraduationCap,
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Services • Workforce Development"
        title="Professional Training Solutions."
        description="Empowering the next generation of energy specialists through certified field training, live equipment workshops in the Suez Free Zone, and rigorous safety simulation courses designed to international industry standards."
        image="/images/solutions/maintenance.jpg"
      />

      {/* Stats Bar */}
      <section className="border-b border-navy/8 bg-surface-muted py-8 dark:border-white/8 dark:bg-midnight-100">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {trainingStats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-bold tracking-tight text-navy dark:text-white sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy/55 dark:text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Training Overview */}
      <Section tone="white" id="overview">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge>Engineering Excellence</Badge>
              <Heading className="mt-4">
                Bridging Classroom Theory With Direct Hands-On Field Exposure
              </Heading>
              <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">
                Modern petroleum operations demand engineers and operators who not only understand fluid thermodynamics and API standards but can also confidently troubleshoot choke washouts, diagnose gas compressor valve unloaders, and handle emergency shut-ins under pressure.
              </p>
              <p className="mt-3 leading-8 text-navy/70 dark:text-white/65">
                Axiom Egypt&apos;s training division combines senior field consultants with immediate access to our fully operational staging yard in the Suez Free Zone. Trainees interact with full-scale 3-phase test separators, indirect line heaters, high-pressure manifold spreads, and pumping units, turning theoretical knowledge into instinctive field competence.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-navy dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Accredited Instructors with 15+ Years Field Leadership
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-navy dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Practical Live Equipment Workshops in Suez
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-navy dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Customized Syllabi Tailored to Client Well Concessions
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-axiom-xl border border-navy/10 shadow-axiom">
              <Image
                src="/images/solutions/well-testing.jpg"
                alt="Axiom Egypt Well Testing Training Spread"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Training Programs */}
      <Section tone="muted" id="programs">
        <Container>
          <div className="text-center">
            <Badge>Comprehensive Curriculum</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Structured Energy Training Programs
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Explore our core training disciplines spanning technical field operations, safety and well control, process engineering design, and rotating machinery overhaul.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {trainingPrograms.map((program) => {
              const Icon = categoryIcons[program.category] || GraduationCap;
              return (
                <Card
                  key={program.id}
                  className="flex flex-col justify-between border-navy/10 transition-all duration-300 hover:border-cyan/40 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-navy/6 pb-4 dark:border-white/8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-flame/15 text-flame">
                          <Icon size={20} />
                        </div>
                        <div>
                          <Badge tone="navy">{program.category}</Badge>
                          <span className="ml-2 text-xs font-medium text-navy/55 dark:text-white/45">
                            {program.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy dark:text-white">
                      {program.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-navy/70 dark:text-white/65">
                      {program.summary}
                    </p>

                    {/* Target Audience */}
                    <div className="flex items-center gap-2 text-xs text-navy/60 dark:text-white/50">
                      <Users size={14} className="shrink-0 text-cyan" />
                      <span><strong>Target:</strong> {program.targetAudience}</span>
                    </div>

                    {/* Modules List */}
                    <div className="rounded-lg border border-navy/6 bg-surface-muted p-4 dark:border-white/6 dark:bg-midnight-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-navy/50 dark:text-white/40">
                        Course Modules & Hands-on Practicals
                      </p>
                      <ul className="mt-2.5 space-y-1.5">
                        {program.modules.map((mod, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-navy/80 dark:text-white/75">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-teal" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Certification & Venues */}
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-navy/80 dark:text-white/75">
                        <Award size={14} className="text-flame" />
                        <span className="font-semibold">{program.certification}</span>
                      </div>
                      <p className="text-navy/50 dark:text-white/40">
                        Venues: {program.deliveryMethods.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-navy/6 dark:border-white/8">
                    <a
                      href="#request-training"
                      className="inline-flex items-center gap-1 text-xs font-bold text-flame transition hover:text-flame-600 dark:text-cyan"
                    >
                      Book Cohort For This Program <ArrowRight size={14} />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Training Methodology */}
      <Section tone="white" id="methodology">
        <Container>
          <div className="text-center">
            <Badge>Instructional Framework</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Our 4-Stage Training Methodology
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              A systematic progression that transforms candidates into field-confident, safety-disciplined operators.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingMethodology.map((stage) => (
              <div
                key={stage.step}
                className="relative rounded-axiom-xl border border-navy/8 bg-surface-muted p-6 transition duration-300 hover:border-cyan/50 dark:border-white/10 dark:bg-midnight-50"
              >
                <span className="font-display text-4xl font-extrabold text-teal/40 dark:text-cyan/30">
                  {stage.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-navy dark:text-white">
                  {stage.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy/65 dark:text-white/60">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries We Serve */}
      <Section tone="muted">
        <Container>
          <div className="text-center">
            <Badge>Industrial Sectors</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Industries Benefiting From Our Programs
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              We deliver specialized workforce training tailored to every segment of the petroleum and heavy energy value chain.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingIndustries.map((ind) => (
              <Card
                key={ind.name}
                className="border-navy/8 dark:border-white/10 dark:bg-midnight-50"
              >
                <Building size={24} className="text-cyan" />
                <h4 className="mt-3 text-base font-bold text-navy dark:text-white">
                  {ind.name}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-navy/65 dark:text-white/60">
                  {ind.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Request Training Section with Form */}
      <Section tone="white" id="request-training">
        <Container className="max-w-4xl">
          <div className="text-center">
            <Badge tone="flame">Corporate Enrollment</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Request Training Proposal & Schedule
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Fill out the training inquiry form below. Our training directorate will customize the curriculum, arrange logistics at our Suez yard or your field concession, and provide an official quotation.
            </p>
          </div>

          <div className="mt-10">
            <TrainingRequestForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
