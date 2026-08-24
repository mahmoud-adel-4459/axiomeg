"use client";

import { useState } from "react";
import { quoteOptions, siteConfig } from "@/lib/content";
import { Button } from "@/components/ui/button";

type QuoteFormProps = {
  compact?: boolean;
};

export function QuoteForm({ compact = false }: QuoteFormProps) {
  const [sending, setSending] = useState(false);

  return (
    <form
      action={siteConfig.formAction}
      method="POST"
      className="grid gap-4"
      onSubmit={() => setSending(true)}
    >
      <input type="hidden" name="_subject" value="Axiom Egypt quote request" />
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <Field label="Your Name" name="name" type="text" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <label className="grid gap-2 text-sm font-medium text-navy dark:text-white">
          Select Solutions
          <select
            name="solution"
            required
            defaultValue=""
            className="h-12 rounded-axiom border border-navy/15 bg-white px-4 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
          >
            <option value="" disabled>
              Select Solutions
            </option>
            {quoteOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto sm:justify-self-start" disabled={sending}>
        {sending ? "Sending..." : "Get A Quote"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-navy dark:text-white">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-axiom border border-navy/15 bg-white px-4 text-sm font-normal text-navy outline-none transition focus:border-cyan dark:border-white/15 dark:bg-midnight dark:text-white"
      />
    </label>
  );
}
