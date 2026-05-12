"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type Submission,
  submissionSchema,
  conditionLabels,
  conditionValues,
} from "@/lib/schema";

type FormValues = Submission;

const blankDevice = {
  model: "",
  condition: undefined as unknown as FormValues["devices"][number]["condition"],
  issues: "",
};

export function SellForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(submissionSchema),
    mode: "onBlur",
    defaultValues: { devices: [blankDevice], name: "", phone: "", email: "" },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "devices" });
  const devices = watch("devices");

  async function onSubmit(values: FormValues) {
    setServerError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      router.push("/thank-you");
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Submission failed. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-7" noValidate>
      {/* DEVICES */}
      <ul className="grid gap-6 list-none">
        {fields.map((field, index) => {
          const current = devices?.[index]?.condition;
          const showIssues = current === "has-issues";
          const deviceErrors = errors.devices?.[index];

          return (
            <li
              key={field.id}
              className="sticker px-7 md:px-8 pt-8 pb-7"
              style={{ transform: index % 2 === 0 ? "rotate(-0.4deg)" : "rotate(0.4deg)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid place-items-center w-9 h-9 rounded-full bg-wattle border-2 border-ink text-base font-bold -rotate-6"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="chunk text-[22px] md:text-[24px]">Device {index + 1}</h3>
                </div>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-sm text-tomato underline underline-offset-2 hover:text-tomato-deep transition"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Model */}
              <div className="mb-5">
                <label className="block">
                  <span className="block font-bold text-[15px] mb-2">
                    Model
                    <span className="ml-1.5 font-normal text-aubergine text-[13px]">
                      (be specific — storage, colour helps)
                    </span>
                  </span>
                  <input
                    {...register(`devices.${index}.model` as const)}
                    placeholder="e.g. iPhone 14 Pro 256GB, Galaxy S23 Ultra"
                    className="field-input"
                    autoComplete="off"
                  />
                </label>
                {deviceErrors?.model && (
                  <p className="mt-1.5 text-sm text-tomato-deep font-medium">
                    {deviceErrors.model.message}
                  </p>
                )}
              </div>

              {/* Condition */}
              <Controller
                control={control}
                name={`devices.${index}.condition` as const}
                render={({ field: { value, onChange } }) => (
                  <div className="mb-5">
                    <span className="block font-bold text-[15px] mb-2">Condition</span>
                    <div className="flex flex-wrap gap-2.5">
                      {conditionValues.map((opt) => {
                        const active = value === opt;
                        const isWarn = opt === "has-issues";
                        return (
                          <button
                            key={opt}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            onClick={() => onChange(opt)}
                            className={[
                              "pill",
                              active ? "active" : "",
                              isWarn ? "warn" : "",
                            ].join(" ")}
                          >
                            {conditionLabels[opt]}
                          </button>
                        );
                      })}
                    </div>
                    {deviceErrors?.condition && (
                      <p className="mt-2 text-sm text-tomato-deep font-medium">
                        {deviceErrors.condition.message}
                      </p>
                    )}
                  </div>
                )}
              />

              {showIssues && (
                <div className="rise">
                  <label className="block">
                    <span className="block font-bold text-[15px] mb-2">
                      What&apos;s wrong with it?
                    </span>
                    <textarea
                      {...register(`devices.${index}.issues` as const)}
                      placeholder="Cracked screen, battery doesn't hold charge, button stuck, water damage…"
                      className="field-input"
                      rows={3}
                    />
                  </label>
                  {deviceErrors?.issues && (
                    <p className="mt-1.5 text-sm text-tomato-deep font-medium">
                      {deviceErrors.issues.message}
                    </p>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => append(blankDevice)}
        className="w-full bg-cream border-[2.5px] border-dashed border-ink rounded-[22px] py-5 chunk text-[19px] flex items-center justify-center gap-3 hover:bg-wattle transition"
      >
        <span className="text-tomato text-2xl leading-none">+</span>
        Add another device
      </button>
      {errors.devices && !Array.isArray(errors.devices) && (
        <p className="text-sm text-tomato-deep font-medium -mt-3">
          {errors.devices.message as string}
        </p>
      )}

      {/* CONTACT */}
      <div
        className="sticker p-7 md:p-8 bg-pink"
        style={{ background: "var(--pink)", boxShadow: "6px 6px 0 var(--ink)" }}
      >
        <h3 className="chunk text-[24px] md:text-[26px] mb-1.5">
          Where do we send your quote?
        </h3>
        <p className="text-aubergine mb-6">
          We&apos;ll email the quote and may text if we have a quick question.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block">
              <span className="block font-bold text-[15px] mb-2">Full name</span>
              <input
                {...register("name")}
                className="field-input"
                autoComplete="name"
                placeholder="Jamie Tran"
              />
            </label>
            {errors.name && (
              <p className="mt-1.5 text-sm text-tomato-deep font-medium">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block">
              <span className="block font-bold text-[15px] mb-2">Phone</span>
              <input
                {...register("phone")}
                inputMode="tel"
                autoComplete="tel"
                className="field-input"
                placeholder="04xx xxx xxx"
              />
            </label>
            {errors.phone && (
              <p className="mt-1.5 text-sm text-tomato-deep font-medium">{errors.phone.message}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block">
              <span className="block font-bold text-[15px] mb-2">Email</span>
              <input
                {...register("email")}
                type="email"
                inputMode="email"
                autoComplete="email"
                className="field-input"
                placeholder="you@example.com"
              />
            </label>
            {errors.email && (
              <p className="mt-1.5 text-sm text-tomato-deep font-medium">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      {serverError && (
        <p
          role="alert"
          className="sticker px-5 py-4 text-tomato-deep font-medium"
          style={{ background: "var(--cream)", borderColor: "var(--tomato)" }}
        >
          {serverError}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-2">
        <p className="text-[14px] text-aubergine max-w-sm leading-relaxed">
          By submitting you agree we&apos;ll contact you about your quote. We don&apos;t share your details with anyone else. Ever.
        </p>
        <button type="submit" disabled={submitting} className="btn btn-tomato btn-lg">
          {submitting ? "Sending…" : "Send me a quote"}
          {!submitting && <span aria-hidden>→</span>}
        </button>
      </div>
    </form>
  );
}
