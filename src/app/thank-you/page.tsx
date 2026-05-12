import Link from "next/link";

export const metadata = {
  title: "Quote on the way — Sell My Phone Sydney",
  description: "Thanks for your enquiry. We'll be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="hero-glow relative grid min-h-dvh place-items-center px-6">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
          <svg
            className="h-8 w-8 text-emerald-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M16.704 5.296a1 1 0 0 1 0 1.408l-7.5 7.5a1 1 0 0 1-1.408 0l-3.5-3.5a1 1 0 1 1 1.408-1.408L8.5 12.092l6.796-6.796a1 1 0 0 1 1.408 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          You&apos;re all set.
        </h1>
        <p className="mt-4 text-balance text-neutral-300">
          We&apos;ve received your details and will be in touch{" "}
          <span className="font-semibold text-emerald-400">within 2 hours</span>{" "}
          with your guaranteed offer.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            What happens next
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-neutral-300">
            <li className="flex gap-3">
              <span className="font-mono text-emerald-400">01</span>
              <span>We review your device details and prepare your offer.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-emerald-400">02</span>
              <span>
                You&apos;ll get a call or SMS from a Sydney number with your
                guaranteed quote.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-emerald-400">03</span>
              <span>
                Accept the offer and we&apos;ll arrange same-day pickup or
                drop-off, plus instant payment.
              </span>
            </li>
          </ol>
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:border-white/30 hover:bg-white/5"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
