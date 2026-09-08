"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { globalAgents, partnerLogos } from "@/lib/content";
import type { GlobalAgentRegion } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/cn";

const regions: GlobalAgentRegion[] = [
  "Middle East & Africa",
  "Europe",
  "North America",
  "Asia-Pacific",
];

export function AgentsDirectory() {
  const [activeRegion, setActiveRegion] = useState<GlobalAgentRegion | "All">("All");

  const filteredAgents =
    activeRegion === "All"
      ? globalAgents
      : globalAgents.filter((agent) => agent.region === activeRegion);

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveRegion("All")}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition duration-200 sm:text-sm",
            activeRegion === "All"
              ? "bg-flame text-white shadow-axiom"
              : "border border-navy/10 bg-white text-navy hover:border-navy/20 dark:border-white/10 dark:bg-midnight-50 dark:text-white dark:hover:border-white/25",
          )}
        >
          <Globe size={14} />
          All Global Offices & Agents ({globalAgents.length})
        </button>

        {regions.map((region) => {
          const count = globalAgents.filter((a) => a.region === region).length;
          const isActive = activeRegion === region;
          return (
            <button
              key={region}
              type="button"
              onClick={() => setActiveRegion(region)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition duration-200 sm:text-sm",
                isActive
                  ? "bg-flame text-white shadow-axiom"
                  : "border border-navy/10 bg-white text-navy hover:border-navy/20 dark:border-white/10 dark:bg-midnight-50 dark:text-white dark:hover:border-white/25",
              )}
            >
              {region}
              <span
                className={cn(
                  "inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px]",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-navy/5 text-navy/60 dark:bg-white/10 dark:text-white/70",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Agents Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredAgents.map((agent) => (
          <Card
            key={agent.id}
            className="flex flex-col justify-between border-navy/10 transition-all duration-300 hover:border-cyan/50 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50"
          >
            <div>
              {/* Top Row: Flag & Region */}
              <div className="flex items-center justify-between gap-2 border-b border-navy/6 pb-4 dark:border-white/8">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl" role="img" aria-label={agent.country}>
                    {agent.flag}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy dark:text-white">
                      {agent.country}
                    </h3>
                    <p className="text-xs text-navy/55 dark:text-white/50">{agent.city}</p>
                  </div>
                </div>
                <Badge tone={agent.id.includes("hq") ? "flame" : "teal"}>
                  {agent.id.includes("hq") ? "Global HQ" : "Authorized"}
                </Badge>
              </div>

              {/* Company & Scope */}
              <div className="mt-4">
                <div className="flex items-start gap-2">
                  <Building2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                  <div>
                    <h4 className="text-sm font-semibold text-navy dark:text-white">
                      {agent.companyName}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-navy/70 dark:text-white/65">
                      {agent.scope}
                    </p>
                  </div>
                </div>
              </div>

              {/* Authorized Lines List */}
              <div className="mt-5 rounded-lg border border-navy/6 bg-surface-muted p-3 dark:border-white/6 dark:bg-midnight-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-navy/50 dark:text-white/40">
                  Authorized Representation Scope
                </p>
                <ul className="mt-2 space-y-1.5">
                  {agent.authorizedLines.map((line) => (
                    <li key={line} className="flex items-start gap-1.5 text-xs text-navy/80 dark:text-white/75">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-teal" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="mt-5 space-y-2 text-xs text-navy/70 dark:text-white/65">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-navy dark:text-white">Contact:</span>
                  <span>{agent.contactPerson} ({agent.role})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="shrink-0 text-flame" />
                  <a
                    href={`mailto:${agent.email}`}
                    className="truncate hover:text-flame dark:hover:text-cyan"
                  >
                    {agent.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="shrink-0 text-teal" />
                  <a href={`tel:${agent.phone}`} className="hover:text-flame dark:hover:text-cyan">
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-navy/40 dark:text-white/40" />
                  <span className="leading-tight text-navy/60 dark:text-white/50">{agent.address}</span>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="mt-6 border-t border-navy/6 pt-4 dark:border-white/8">
              <ButtonLink
                href={`/contact?agent=${encodeURIComponent(agent.country)}`}
                variant="outline"
                size="sm"
                className="w-full justify-center"
              >
                Inquire With {agent.country} Representative
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>

      {/* Authorized International Manufacturers / Principals Grid */}
      <div className="mt-16 rounded-axiom-xl border border-navy/8 bg-surface-muted p-8 dark:border-white/10 dark:bg-midnight-50">
        <div className="text-center">
          <p className="eyebrow">Strategic Manufacturer Alliances</p>
          <h3 className="mt-2 text-xl font-bold text-navy dark:text-white sm:text-2xl">
            Representing World-Class Petroleum Equipment Manufacturers
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-navy/65 dark:text-white/65">
            Through exclusive and authorized agency agreements, Axiom Egypt connects regional operators with API-certified manufacturers across North America, Europe, and Asia.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
          {partnerLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex h-20 w-full max-w-[200px] items-center justify-center rounded-axiom border border-navy/6 bg-white p-4 shadow-axiom-sm dark:border-white/8 dark:bg-midnight"
            >
              <Image
                src={logo}
                alt="Authorized Principal Manufacturer"
                width={130}
                height={50}
                className="max-h-12 w-auto object-contain opacity-80 transition hover:opacity-100 dark:brightness-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
