"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { BRANDS, type Brand, MODELS, CONDITIONS, ISSUES } from "@/lib/devices";

type FormState = {
  brand: Brand | "";
  model: string;
  condition: string;
  issues: string[];
  notes: string;
  name: string;
  phone: string;
  email: string;
};

const initial: FormState = {
  brand: "",
  model: "",
  condition: "",
  issues: [],
  notes: "",
  name: "",
  phone: "",
  email: "",
};

export default function SellForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const models = useMemo(
    () => (state.brand ? MODELS[state.brand] : []),
    [state.brand],
  );

  const toggleIssue = (issue: string) => {
    setState((s) => ({
      ...s,
      issues: s.issues.includes(issue)
        ? s.issues.filter((i) => i !== issue)
        : [...s.issues, issue],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !state.brand ||
      !state.model ||
      !state.condition ||
      !state.name.trim() ||
      !state.phone.trim() ||
      !state.email.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }
      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Device */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          1. Your device
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Brand" required>
            <select
              value={state.brand}
              onChange={(e) =>
                setState({ ...state, brand: e.target.value as Brand, model: "" })
              }
              className={selectCls}
              required
            >
              <option value="" disabled>
                Select brand…
              </option>
              {BRANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Model" required>
            <select
              value={state.model}
              onChange={(e) => setState({ ...state, model: e.target.value })}
              className={selectCls}
              disabled={!state.brand}
              required
            >
              <option value="" disabled>
                {state.brand ? "Select model…" : "Pick a brand first"}
              </option>
              {models.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Condition" required>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {CONDITIONS.map((c) => (
              <label
                key={c.value}
                className={`cursor-pointer rounded-xl border p-3 text-center text-sm transition ${
                  state.condition === c.value
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                    : "border-white/10 bg-white/[0.02] text-neutral-300 hover:border-white/20"
                }`}
              >
                <input
                  type="radio"
                  name="condition"
                  value={c.value}
                  checked={state.condition === c.value}
                  onChange={() => setState({ ...state, condition: c.value })}
                  className="sr-only"
                />
                <div className="font-semibold">{c.label}</div>
                <div className="mt-1 text-xs text-neutral-400">{c.hint}</div>
              </label>
            ))}
          </div>
        </Field>

        <Field label="Any issues? (Tick all that apply)">
          <div className="flex flex-wrap gap-2">
            {ISSUES.map((issue) => {
              const active = state.issues.includes(issue);
              return (
                <button
                  type="button"
                  key={issue}
                  onClick={() => toggleIssue(issue)}
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    active
                      ? "border-emerald-500 bg-emerald-500/15 text-emerald-300"
                      : "border-white/10 bg-white/[0.02] text-neutral-300 hover:border-white/20"
                  }`}
                >
                  {active ? "✓ " : ""}
                  {issue}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Anything else we should know? (Optional)">
          <textarea
            value={state.notes}
            onChange={(e) => setState({ ...state, notes: e.target.value })}
            rows={3}
            placeholder="Storage size, accessories included, etc."
            className={inputCls}
          />
        </Field>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
          2. Your details
        </h2>

        <Field label="Full name" required>
          <input
            type="text"
            autoComplete="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className={inputCls}
            required
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone number" required>
            <input
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="04xx xxx xxx"
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              className={inputCls}
              required
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className={inputCls}
              required
            />
          </Field>
        </div>
      </section>

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get my quote"}
        {!submitting && (
          <svg
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-neutral-200">
        {label}
        {required && <span className="ml-1 text-emerald-400">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none transition focus:border-emerald-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-emerald-500/20";

const selectCls =
  inputCls + " appearance-none bg-[length:1rem] bg-no-repeat pr-10";
