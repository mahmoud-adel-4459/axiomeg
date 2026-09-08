import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { AgentsDirectory } from "@/components/agents/agents-directory";
import { Handshake, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Agents Around The World — Global Representatives",
  description:
    "Discover Axiom Egypt's global network of authorized representatives, international sourcing offices, and certified petroleum equipment agencies spanning MENA, Europe, North America, and Asia.",
  path: "/agents",
});

const globalMetrics = [
  { value: "8+", label: "International Hubs & Agents" },
  { value: "15+", label: "Countries Served by Our Supply Chain" },
  { value: "100%", label: "API & ISO Certified Sourcing" },
  { value: "24/7", label: "Global Expediting & Logistics" },
];

const partnershipCriteria = [
  {
    title: "Established Energy Market Foothold",
    text: "Proven commercial presence, existing operating concession relationships, and approved vendor listings with national oil companies (NOCs) and international operators.",
  },
  {
    title: "Technical Engineering Capability",
    text: "Dedicated technical staff capable of interpreting client wellsite P&IDs, separator calculations, and downhole casing specifications.",
  },
  {
    title: "Uncompromising Compliance & Ethics",
    text: "Full adherence to international anti-bribery regulations, FCPA compliance, and stringent Zero-Harm HSE standards.",
  },
  {
    title: "Local Logistics & Warehouse Staging",
    text: "Ability to support rapid equipment mobilization, customs clearance, and local spare parts warehousing.",
  },
];

export default function AgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Energy Network"
        title="Our Agents Around The World."
        description="Axiom Egypt bridges international petroleum equipment manufacturers and local operating concessions. Explore our authorized agents, strategic regional hubs, and global sourcing offices delivering certified energy technology worldwide."
        image="/images/slides/slide01.jpg"
      />

      {/* Metrics Bar */}
      <section className="border-b border-navy/8 bg-surface-muted py-8 dark:border-white/8 dark:bg-midnight-100">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {globalMetrics.map((metric) => (
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

      {/* Strategic Hub Overview */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge>Strategic Crossroads</Badge>
              <Heading className="mt-4">
                The Gateway Between Mediterranean, African, and Gulf Energy Corridors
              </Heading>
              <p className="mt-4 leading-8 text-navy/70 dark:text-white/65">
                Headquartered in Cairo with major bonded staging facilities in the Suez Free Zone, Axiom Egypt serves as the operational anchor connecting European engineering precision, North American oilfield technologies, and Asian manufacturing with active drilling campaigns across Egypt, the Middle East, and North Africa.
              </p>
              <p className="mt-3 leading-8 text-navy/70 dark:text-white/65">
                Our authorized agency model enables major international principals to supply high-pressure well testing spreads, line heaters, gas compressors, and heavy tubular goods without administrative friction, backed by in-country commissioning, maintenance, and warranty support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Authorized Exclusive Agency Agreements
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  In-Country Field Support & Warranty
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy dark:text-white">
                  <CheckCircle2 size={16} className="text-teal" />
                  Bonded Suez Free Zone Storage
                </div>
              </div>
            </div>

            {/* Strategic Presence Card */}
            <div className="rounded-axiom-xl border border-navy/10 bg-surface-muted p-8 shadow-axiom-sm dark:border-white/10 dark:bg-midnight-50">
              <h3 className="text-lg font-bold text-navy dark:text-white">
                Global Operations Architecture
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-navy/70 dark:text-white/65">
                Each regional hub specializes in dedicated equipment categories and geographic facilitation:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-axiom border border-navy/6 bg-white p-4 dark:border-white/8 dark:bg-midnight">
                  <span className="text-xs font-bold uppercase tracking-wider text-flame">Cairo & Suez (Egypt HQ)</span>
                  <p className="mt-1 text-xs text-navy/75 dark:text-white/70">
                    Executive leadership, engineering design, well test operations center, and 50,000-ton capacity tubular staging depot.
                  </p>
                </div>

                <div className="rounded-axiom border border-navy/6 bg-white p-4 dark:border-white/8 dark:bg-midnight">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan">Houston, Texas (USA Office)</span>
                  <p className="mt-1 text-xs text-navy/75 dark:text-white/70">
                    OEM manufacturer liaisons, API equipment auditing, and gas compressor engineering procurement.
                  </p>
                </div>

                <div className="rounded-axiom border border-navy/6 bg-white p-4 dark:border-white/8 dark:bg-midnight">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal">Abu Dhabi & Al Khobar (Gulf Hubs)</span>
                  <p className="mt-1 text-xs text-navy/75 dark:text-white/70">
                    Cross-border drilling support, Aramco/ADNOC vendor alignment, and high-pressure artificial lift pumps.
                  </p>
                </div>

                <div className="rounded-axiom border border-navy/6 bg-white p-4 dark:border-white/8 dark:bg-midnight">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy dark:text-white">Europe & APAC Network</span>
                  <p className="mt-1 text-xs text-navy/75 dark:text-white/70">
                    Aberdeen, Frankfurt, Milan, and Singapore providing precision instrumentation, heavy forged flanges, and subsea inspection tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Global Directory Section */}
      <Section tone="muted" id="directory">
        <Container>
          <div className="text-center">
            <Badge>Authorized Representatives</Badge>
            <Heading className="mt-4 text-heading-2 md:text-heading-1">
              Global Agency & Representative Directory
            </Heading>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
              Connect directly with our authorized regional agents and international offices. Filter by geographical territory to locate contact details, representative entities, and authorized equipment portfolios.
            </p>
          </div>

          <div className="mt-12">
            <AgentsDirectory />
          </div>
        </Container>
      </Section>

      {/* Become an Agent / Representative Section */}
      <Section tone="white">
        <Container>
          <div className="rounded-axiom-xl border border-navy/10 bg-surface-muted p-8 dark:border-white/10 dark:bg-midnight-50 md:p-12">
            <div className="max-w-3xl">
              <Badge tone="flame">Partnership & Representation</Badge>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy dark:text-white sm:text-3xl">
                Become an Authorized Axiom Representative or Partner
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/70 dark:text-white/65 sm:text-base">
                We are actively evaluating strategic commercial agency agreements with qualified petroleum equipment suppliers, engineering consultancies, and regional distributors looking to expand their presence in North Africa and the Middle East.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {partnershipCriteria.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-axiom border border-navy/6 bg-white p-5 shadow-axiom-sm dark:border-white/8 dark:bg-midnight"
                >
                  <span className="font-display text-lg font-bold text-flame">0{idx + 1}.</span>
                  <h3 className="mt-2 text-sm font-bold text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy/65 dark:text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 border-t border-navy/8 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-base font-bold text-navy dark:text-white">
                  Ready to discuss commercial agency representation?
                </h4>
                <p className="text-xs text-navy/60 dark:text-white/50">
                  Submit your company dossier and product portfolio for review by our commercial directorate.
                </p>
              </div>
              <ButtonLink href="/contact?subject=Agency%20Partnership" size="lg" className="shrink-0">
                <Handshake size={18} />
                Submit Agency Proposal
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
