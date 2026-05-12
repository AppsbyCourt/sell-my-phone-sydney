import Link from "next/link";
import SellForm from "./SellForm";

export const metadata = {
  title: "Get Your Quote — Sell My Phone Sydney",
  description: "Tell us about your phone and we'll send you a quote within 2 hours.",
};

export default function SellPage() {
  return (
    <main className="relative min-h-dvh">
      <header className="relative z-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500 text-neutral-950 font-black">
              S
            </span>
            <span className="font-semibold tracking-tight">
              Sell My Phone <span className="text-emerald-400">Sydney</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-200">
            ← Back
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 pb-24 pt-6">
        <div className="text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Get your quote
          </h1>
          <p className="mt-3 text-balance text-neutral-400">
            Takes about 60 seconds. We&apos;ll respond within 2 hours with a guaranteed offer.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <SellForm />
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          Your details stay private. We&apos;ll only use them to send your quote.
        </p>
      </div>
    </main>
  );
}
