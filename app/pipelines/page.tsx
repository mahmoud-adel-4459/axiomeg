import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { PipelineGallery } from "@/components/gallery/pipeline-gallery";
import { ShieldCheck, Factory, Warehouse, Award } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pipeline & Tubular Goods Gallery",
  description:
    "Explore Axiom Egypt's extensive inventory of API 5CT casing, drill pipe, and API 5L line pipe. High-density storage yards, covered warehouses, and precision NDT inspection in Suez Free Zone.",
  path: "/pipelines",
});

const pipelineMetrics = [
  { value: "50,000+", label: "Metric Tons Tubular Staged" },
  { value: "API Spec 5CT/5L", label: "Certified Manufacturing Standard" },
  { value: "100% NDT", label: "Ultrasonic & Magnetic Inspected" },
  { value: "3 Hubs", label: "Strategic Staging Terminals in Egypt" },
];

const inspectionPillars = [
  {
    title: "Full-Length Ultrasonic Wall Thickness (UT)",
    text: "Continuous digital ultrasonic gauging detecting mid-wall laminations, eccentricity, and wall thinning below API tolerances.",
    icon: Award,
  },
  {
    title: "Fluorescent Wet Magnetic Particle Testing (MPI)",
    text: "High-intensity ultraviolet inspection locating microscopic longitudinal and transverse fatigue cracks on thread roots and seal shoulders.",
    icon: ShieldCheck,
  },
  {
    title: "Optical Laser Thread Profilometry",
    text: "Laser profile verification of thread pitch, taper, height, and lead angle to guarantee gas-tight integrity on premium casing strings.",
    icon: Factory,
  },
  {
    title: "Protective Thread Compound & Heavy Guarding",
    text: "Controlled application of API-modified thread compounds followed by composite closed-end protectors torqued to prevent transit damage.",
    icon: Warehouse,
  },
];

export default function PipelinePage() {
  return (
    <>
      <PageHero
        eyebrow="Tubular Goods & Pipeline Capabilities"
        title="Pipes, Casing & Field Pipeline Infrastructure."
        description="From high-pressure API 5CT casing and premium tubing to large-diameter transmission line pipe. Comprehensive warehousing, precision NDT inspection, and rapid field deployment across Egypt and the Middle East."
        image="/images/pipelines/yard-logistics-crane.jpg"
      />

      {/* Metrics Banner */}
      <section className="border-b border-navy/8 bg-surface-muted py-8 dark:border-white/8 dark:bg-midnight-100">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {pipelineMetrics.map((metric) => (
              <div key={metric.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-bold tracking-tight text-navy dark:text-white sm:text-3xl lg:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-navy/55 dark:text-white/45">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Gallery Section */}
      <Section tone="white" id="gallery">
        <Container>
          <div className="text-center">
            <Badge>Field Asset Gallery</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Industrial Piping & Tubular Inventory
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Explore authentic images from our Suez Free Zone staging terminals, covered warehouse racking systems, and Western Desert pipeline construction spreads. Click any image for full engineering specifications.
            </p>
          </div>

          <div className="mt-12">
            <PipelineGallery />
          </div>
        </Container>
      </Section>

      {/* Quality Assurance & Non-Destructive Testing */}
      <Section tone="muted">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge>Quality & Integrity</Badge>
              <Heading className="mt-4">
                Rigorous API RP 5A5 & DS-1 Inspection Regimens
              </Heading>
              <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">
                In downhole and high-pressure surface pipelines, material integrity is paramount. Axiom Egypt enforces strict receipt inspection protocols on every mill shipment. Certified Level II and III technicians verify chemical composition, mechanical properties, and dimensional tolerances prior to release to operating concessions.
              </p>

              <div className="mt-8 space-y-4">
                {inspectionPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-3.5 rounded-axiom border border-navy/6 bg-white p-4 dark:border-white/6 dark:bg-midnight-50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/20 text-teal-600 dark:text-cyan">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-navy dark:text-white">
                          {pillar.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-navy/65 dark:text-white/60">
                          {pillar.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Visual Side */}
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-axiom-xl border border-navy/8 shadow-axiom">
                <Image
                  src="/images/pipelines/tubular-inspection.jpg"
                  alt="Precision Casing Thread Inspection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="rounded-axiom-xl border border-navy/8 bg-white p-6 shadow-axiom-sm dark:border-white/10 dark:bg-midnight-50">
                <h3 className="text-base font-bold text-navy dark:text-white">
                  Strategic Suez Free Zone Logistics Hub
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy/70 dark:text-white/65">
                  Located directly on the Suez maritime corridor, our bonded yard provides customs-exempt storage, automated handling, and same-day transit access to Gulf of Suez offshore platforms, Mediterranean gas terminals, and Western Desert concessions.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-navy dark:text-white">
                  <span className="rounded bg-honeydew-100 px-2.5 py-1 text-navy dark:bg-midnight-100 dark:text-cyan">
                    Duty-Free Bonded Staging
                  </span>
                  <span className="rounded bg-honeydew-100 px-2.5 py-1 text-navy dark:bg-midnight-100 dark:text-cyan">
                    24/7 Heavy Rig Mobilization
                  </span>
                  <span className="rounded bg-honeydew-100 px-2.5 py-1 text-navy dark:bg-midnight-100 dark:text-cyan">
                    Rail & Sea Port Intermodal Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <section className="bg-navy py-16 text-white dark:bg-midnight-50">
        <Container className="text-center">
          <Badge tone="flame">Procurement & Staging Inquiries</Badge>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Need High-Grade Casing, Tubing, or Line Pipe for Your Drilling Spread?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Contact our tubular goods engineering division for stock availability, mill test certifications, or customized cross-country pipeline supply packages.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Request Casing / Line Pipe RFQ
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Explore Integrated Services
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
