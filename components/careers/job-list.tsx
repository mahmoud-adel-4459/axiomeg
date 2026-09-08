"use client";

import { useState } from "react";
import {
  MapPin,
  Clock,
  Award,
  ChevronRight,
  SlidersHorizontal,
  CheckCircle2,
} from "lucide-react";
import { jobOpenings } from "@/lib/content";
import type { JobDepartment, JobOpening } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JobApplicationModal } from "@/components/careers/job-application-modal";
import { cn } from "@/utils/cn";

const departments: JobDepartment[] = [
  "Engineering",
  "Field Operations",
  "Maintenance",
  "Quality & HSE",
];

export function JobList() {
  const [activeDept, setActiveDept] = useState<JobDepartment | "All">("All");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredJobs =
    activeDept === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === activeDept);

  function handleApply(job: JobOpening) {
    setSelectedJob(job);
    setModalOpen(true);
  }

  function handleGeneralApply() {
    setSelectedJob(null);
    setModalOpen(true);
  }

  return (
    <div className="space-y-8">
      {/* Department Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActiveDept("All")}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition duration-200 sm:text-sm",
            activeDept === "All"
              ? "bg-flame text-white shadow-axiom"
              : "border border-navy/10 bg-white text-navy hover:border-navy/20 dark:border-white/10 dark:bg-midnight-50 dark:text-white dark:hover:border-white/25",
          )}
        >
          <SlidersHorizontal size={14} />
          All Openings ({jobOpenings.length})
        </button>

        {departments.map((dept) => {
          const count = jobOpenings.filter((j) => j.department === dept).length;
          const isActive = activeDept === dept;
          return (
            <button
              key={dept}
              type="button"
              onClick={() => setActiveDept(dept)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition duration-200 sm:text-sm",
                isActive
                  ? "bg-flame text-white shadow-axiom"
                  : "border border-navy/10 bg-white text-navy hover:border-navy/20 dark:border-white/10 dark:bg-midnight-50 dark:text-white dark:hover:border-white/25",
              )}
            >
              {dept}
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

      {/* Job Cards Grid */}
      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="flex flex-col justify-between transition-all duration-300 hover:border-cyan/40 hover:shadow-axiom dark:border-white/10 dark:bg-midnight-50 lg:flex-row lg:items-center"
          >
            <div className="flex-1 space-y-3 pr-0 lg:pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{job.department}</Badge>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-navy/60 dark:text-white/50">
                  <MapPin size={13} className="text-flame" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-navy/60 dark:text-white/50">
                  <Clock size={13} className="text-teal" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-navy/60 dark:text-white/50">
                  <Award size={13} className="text-cyan" />
                  {job.experience}
                </span>
              </div>

              <h3 className="text-xl font-bold text-navy dark:text-white sm:text-2xl">
                {job.title}
              </h3>

              <p className="text-sm leading-relaxed text-navy/70 dark:text-white/65">
                {job.summary}
              </p>

              {/* Responsibilities list snippet */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-navy/40 dark:text-white/40">
                  Key Scope:
                </p>
                <ul className="mt-1.5 grid gap-1 sm:grid-cols-2">
                  {job.responsibilities.slice(0, 2).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-xs text-navy/75 dark:text-white/70">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-teal" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action */}
            <div className="mt-6 flex shrink-0 flex-col gap-2 border-t border-navy/6 pt-4 dark:border-white/8 lg:mt-0 lg:border-t-0 lg:pt-0">
              <Button
                onClick={() => handleApply(job)}
                size="md"
                className="w-full justify-center sm:w-auto"
              >
                Apply For Position
                <ChevronRight size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Talent Pool Banner */}
      <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-axiom-xl border border-navy/8 bg-surface-muted p-6 dark:border-white/10 dark:bg-midnight-50 sm:flex-row sm:p-8">
        <div>
          <h4 className="text-lg font-bold text-navy dark:text-white">
            Don&apos;t see your specific field specialization?
          </h4>
          <p className="mt-1 text-sm text-navy/65 dark:text-white/65">
            We are continuously seeking certified petroleum engineers, rig superintendents, and certified NDT inspectors for upcoming desert and offshore mobilizations.
          </p>
        </div>
        <Button variant="secondary" onClick={handleGeneralApply} className="shrink-0">
          Submit General CV
        </Button>
      </div>

      {/* Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
