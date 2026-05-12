import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500 font-black text-neutral-950">
              S
            </span>
            <span className="font-semibold tracking-tight">
              Sell My Phone <span className="text-emerald-400">Sydney</span>
            </span>
          </Link>
          <Link
            href="/sell"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-400 sm:inline-block"
          >
            Get a quote
          </Link>
        </div>
      </header>

      <section className="hero-glow relative">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sydney-wide · Same-day pickup
            </span>
            <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Sell your phone.{" "}
              <span className="text-emerald-400">Get paid today.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-neutral-300">
              Sydney&apos;s fastest phone buyback. Top dollar for Apple, Samsung &
              Google — any condition, instant quote, cash or bank transfer the same day.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/sell"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:w-auto"
              >
                Sell My Phone
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
              </Link>
              <p className="text-sm text-neutral-400">
                Quote in <span className="font-semibold text-neutral-200">under 60 seconds</span>
              </p>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                title: "Top dollar",
                desc: "Higher offers than carrier trade-ins. Always.",
                icon: (
                  <path d="M10 1.75a.75.75 0 0 1 .75.75v1.5h.5a3.25 3.25 0 0 1 0 6.5h-.5v2.25h.5a1.75 1.75 0 1 1 0 3.5h-.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-.5a3.25 3.25 0 0 1 0-6.5h.5v-2.25h-.5a1.75 1.75 0 1 1 0-3.5h.5v-1.5a.75.75 0 0 1 .75-.75Z" />
                ),
              },
              {
                title: "Same-day pickup",
                desc: "We come to you across Sydney metro.",
                icon: (
                  <path d="M3.75 3A1.75 1.75 0 0 0 2 4.75v9.5C2 15.216 2.784 16 3.75 16h2a2.5 2.5 0 0 0 4.9 0h2.7a2.5 2.5 0 0 0 4.9 0h.25A1.5 1.5 0 0 0 20 14.5V11a.75.75 0 0 0-.22-.53l-3-3A.75.75 0 0 0 16.25 7H15V4.75A1.75 1.75 0 0 0 13.25 3H3.75ZM15 8.5h1.19l2.31 2.31V13.5H17a2.5 2.5 0 0 0-2-1V8.5Z" />
                ),
              },
              {
                title: "Paid instantly",
                desc: "Cash or bank transfer on the spot.",
                icon: (
                  <path d="M1 5.75A2.75 2.75 0 0 1 3.75 3h12.5A2.75 2.75 0 0 1 19 5.75v8.5A2.75 2.75 0 0 1 16.25 17H3.75A2.75 2.75 0 0 1 1 14.25v-8.5ZM3.75 4.5c-.69 0-1.25.56-1.25 1.25v1.5h15v-1.5c0-.69-.56-1.25-1.25-1.25H3.75ZM17.5 9h-15v5.25c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V9Z" />
                ),
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    {f.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to cash
            </h2>
            <p className="mt-3 text-neutral-400">
              No haggling. No surprises. Just a fast, fair offer.
            </p>
          </div>
          <ol className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "Tell us about your phone",
                desc: "Quick form — model, condition, any issues. Takes under a minute.",
              },
              {
                n: "02",
                title: "Get your offer",
                desc: "We respond within 2 hours with a guaranteed price.",
              },
              {
                n: "03",
                title: "Get paid same day",
                desc: "Drop-off in Sydney or we pick up. Cash or transfer on the spot.",
              },
            ].map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
              >
                <div className="font-mono text-sm text-emerald-400">{s.n}</div>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{s.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex justify-center">
            <Link
              href="/sell"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-neutral-950 transition hover:bg-emerald-400"
            >
              Start my quote
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Sell My Phone Sydney</p>
          <p>Servicing all Sydney metro suburbs</p>
        </div>
      </footer>
    </main>
  );
}
