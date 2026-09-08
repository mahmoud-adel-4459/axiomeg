"use client";

import { useState } from "react";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { siteConfig, trainingPrograms } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function TrainingRequestForm() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 850);
  }

  if (submitted) {
    return (
      <div className="rounded-axiom-xl border border-teal/30 bg-teal/5 p-8 text-center dark:bg-midnight-50">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/20 text-teal-600 dark:text-cyan">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy dark:text-white">
          Training Consultation Request Received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-navy/70 dark:text-white/65">
          Our technical training director will review your curriculum requirements, customize the practical modules, and send an official corporate syllabus with scheduling options within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      action={siteConfig.formAction}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4 rounded-axiom-xl border border-navy/10 bg-white p-6 shadow-axiom-sm dark:border-white/10 dark:bg-midnight-50 sm:p-8"
    >
      <input type="hidden" name="_subject" value="Axiom Egypt Corporate Training Request" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Company / Operating Entity *
          <input
            name="companyName"
            type="text"
            required
            placeholder="e.g. Belayim Petroleum (Petrobel) / BAPETCO"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Contact Person & Title *
          <input
            name="contactPerson"
            type="text"
            required
            placeholder="Eng. Mohamed Tawfik — Training Manager"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Corporate Email *
          <input
            name="email"
            type="email"
            required
            placeholder="m.tawfik@petrobel.org"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          />
        </label>

        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Phone / Direct Mobile *
          <input
            name="phone"
            type="tel"
            required
            placeholder="+20 1X XXXX XXXX"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Selected Training Program *
          <select
            name="program"
            required
            defaultValue=""
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          >
            <option value="" disabled>
              Select Curriculum
            </option>
            {trainingPrograms.map((tp) => (
              <option key={tp.id} value={tp.title}>
                {tp.title} ({tp.category})
              </option>
            ))}
            <option value="Custom Integrated Program">Custom Tailored Multi-Discipline Program</option>
          </select>
        </label>

        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Number of Candidates
          <select
            name="candidateCount"
            defaultValue="5-10"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          >
            <option value="1-4">Individual / Small Team (1 – 4 Candidates)</option>
            <option value="5-10">Standard Cohort (5 – 10 Candidates)</option>
            <option value="11-25">Large Department Spread (11 – 25 Candidates)</option>
            <option value="25+">Enterprise / Full Field Crew (25+ Candidates)</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Preferred Delivery Venue
          <select
            name="venue"
            defaultValue="Suez Free Zone Equipment Yard"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          >
            <option value="Suez Free Zone Equipment Yard">
              Axiom Suez Free Zone Staging Yard (Live Equipment Workshop)
            </option>
            <option value="Client Rig / Field Site">Client Rig Site / Operating Field Facility</option>
            <option value="Cairo Headquarters Training Center">Cairo New Maadi Training Classrooms</option>
            <option value="Virtual & Hybrid">Virtual Theoretical + On-Site Practical</option>
          </select>
        </label>

        <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
          Target Start Window
          <input
            name="targetDate"
            type="text"
            placeholder="e.g. Next Month / Q4 2026"
            className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
        Specific Requirements / Wellsite Challenges
        <textarea
          name="notes"
          rows={3}
          placeholder="Mention specific well depths, H2S concentrations, separator models, or customized certification needs..."
          className="rounded-axiom border border-navy/15 bg-white p-3 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
        />
      </label>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={sending}>
        <GraduationCap size={18} />
        {sending ? "Registering Request..." : "Request Corporate Training Proposal"}
      </Button>
    </form>
  );
}
