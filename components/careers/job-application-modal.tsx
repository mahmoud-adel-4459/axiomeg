"use client";

import { useState } from "react";
import { X, UploadCloud, CheckCircle2, FileText } from "lucide-react";
import { siteConfig, jobOpenings } from "@/lib/content";
import type { JobOpening } from "@/types";
import { Button } from "@/components/ui/button";

type JobApplicationModalProps = {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
};

export function JobApplicationModal({
  job,
  isOpen,
  onClose,
}: JobApplicationModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    // Simulate submission / dispatch
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-midnight/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-axiom-xl border border-navy/10 bg-white shadow-2xl dark:border-white/15 dark:bg-midnight">
        <div className="flex items-center justify-between border-b border-navy/8 px-6 py-4 dark:border-white/10">
          <div>
            <h3 className="text-lg font-bold text-navy dark:text-white">
              {job ? `Apply: ${job.title}` : "General Engineering Application"}
            </h3>
            <p className="text-xs text-navy/60 dark:text-white/50">
              {job ? `${job.department} • ${job.location}` : "Join Axiom Egypt Energy Team"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 text-navy hover:bg-navy/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            <X size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/20 text-teal-600 dark:text-cyan">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="mt-4 text-xl font-bold text-navy dark:text-white">
              Application Submitted Successfully
            </h4>
            <p className="mx-auto mt-2 max-w-sm text-sm text-navy/70 dark:text-white/65">
              Thank you for applying. Our talent acquisition engineering team will review your qualifications against our operational requirements and reach out shortly.
            </p>
            <Button className="mt-6" onClick={onClose}>
              Close Window
            </Button>
          </div>
        ) : (
          <form
            action={siteConfig.formAction}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4 p-6 overflow-y-auto max-h-[80vh]"
          >
            <input type="hidden" name="_subject" value={`Axiom Career Application: ${job?.title || "General"}`} />
            <input type="hidden" name="applied_position" value={job?.title || "General Application"} />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
                Full Name *
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Eng. Ahmed Hassan"
                  className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight-50 dark:text-white"
                />
              </label>

              <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
                Email Address *
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="ahmed@example.com"
                  className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight-50 dark:text-white"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
                Phone / WhatsApp *
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+20 10X XXX XXXX"
                  className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight-50 dark:text-white"
                />
              </label>

              <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
                Target Position
                <select
                  name="position_select"
                  defaultValue={job?.id || "general"}
                  className="h-11 rounded-axiom border border-navy/15 bg-white px-3.5 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight-50 dark:text-white"
                >
                  <option value="general">General Application / Talent Pool</option>
                  {jobOpenings.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* CV / Resume Upload */}
            <div className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
              Attach CV / Resume (PDF or DOCX) *
              <label className="relative flex cursor-pointer flex-col items-center justify-center rounded-axiom border-2 border-dashed border-navy/20 bg-surface-muted p-5 transition hover:border-flame dark:border-white/20 dark:bg-midnight-50 dark:hover:border-cyan">
                <input
                  type="file"
                  name="resume_file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                {file ? (
                  <div className="flex items-center gap-2 text-sm font-medium text-flame dark:text-cyan">
                    <FileText size={18} />
                    <span>{file.name}</span>
                    <span className="text-xs text-navy/50 dark:text-white/40">
                      ({(file.size / 1024).toFixed(0)} KB)
                    </span>
                  </div>
                ) : (
                  <>
                    <UploadCloud size={24} className="text-navy/40 dark:text-white/40" />
                    <p className="mt-1 text-xs text-navy/70 dark:text-white/65">
                      Click to upload or drag & drop your CV
                    </p>
                    <p className="text-[11px] text-navy/40 dark:text-white/40">
                      Max file size: 10MB
                    </p>
                  </>
                )}
              </label>
            </div>

            {/* Cover Note */}
            <label className="grid gap-1.5 text-xs font-semibold text-navy dark:text-white">
              Professional Summary / Cover Note
              <textarea
                name="message"
                rows={3}
                placeholder="Briefly describe your field experience, key certifications (IWCF, ASNT, NEBOSH), and availability..."
                className="rounded-axiom border border-navy/15 bg-white p-3 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight-50 dark:text-white"
              />
            </label>

            <div className="pt-2">
              <Button type="submit" size="lg" className="w-full justify-center" disabled={sending}>
                {sending ? "Transmitting Application..." : "Submit Formal Application"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
