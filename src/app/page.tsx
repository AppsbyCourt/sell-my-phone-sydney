import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-16 md:pt-20 pb-24 md:pb-28">
          {/* decorative bursts */}
          <span
            aria-hidden
            className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-pink border-[2.5px] border-ink hidden md:block"
          />
          <span
            aria-hidden
            className="absolute top-1/2 -left-20 w-40 h-40 rounded-full bg-wattle border-[2.5px] border-ink hidden lg:block"
          />

          <div className="relative mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            <div className="rise rise-1">
              <span className="eyebrow mb-7 inline-block">
                Sydney&apos;s honest phone buyer · est. 2019
              </span>
              <h1 className="display text-[clamp(56px,8vw,112px)] mt-4">
                <span className="block">Sell your phone.</span>
                <span
                  className="inline-block italic-soft text-tomato"
                  style={{ transform: "rotate(-2deg)", transformOrigin: "left center" }}
                >
                  Get paid
                </span>{" "}
                <span className="inline-block">today</span>
                <span aria-hidden className="inline-block text-wattle-deep" style={{ transform: "translateY(-6px) scale(1.4)", marginLeft: 4 }}>.</span>
              </h1>
              <svg
                aria-hidden
                viewBox="0 0 280 14"
                className="block ml-1 -mt-2 text-tomato"
                width="280"
                height="14"
              >
                <path
                  d="M2 8 C 30 -2, 60 14, 90 8 S 160 -2, 200 8 S 260 14, 278 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <p className="mt-7 text-[21px] max-w-[520px] text-aubergine leading-relaxed">
                A two-minute form. A fair quote in hours. Cash, bank transfer, or PayID — your call.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="/sell" className="btn btn-tomato btn-lg">
                  Sell my phone
                  <span aria-hidden>→</span>
                </Link>
                <a href="#how" className="btn btn-ghost btn-lg">
                  How it works
                </a>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-5 text-aubergine">
                <span className="inline-flex items-center gap-2 font-semibold">
                  <span className="block w-2.5 h-2.5 rounded-full bg-leaf" />
                  Same-day payment
                </span>
                <span className="inline-flex items-center gap-2 font-semibold">
                  <span className="block w-2.5 h-2.5 rounded-full bg-tomato" />
                  No bait pricing
                </span>
                <span className="inline-flex items-center gap-2 font-semibold">
                  <span className="block w-2.5 h-2.5 rounded-full bg-wattle-deep" />
                  Sydney local
                </span>
              </div>
            </div>

            {/* Sticker collage */}
            <div className="relative h-[440px] md:h-[480px] hidden lg:block rise rise-3">
              <div
                className="sticker absolute"
                style={{ top: 10, left: 40, width: 220, height: 360, background: "var(--navy)", transform: "rotate(-6deg)" }}
              >
                <div
                  className="absolute inset-3 rounded-2xl grid place-items-center text-center px-4"
                  style={{ background: "linear-gradient(160deg, var(--wattle) 0%, var(--tomato) 100%)" }}
                >
                  <div>
                    <div className="text-[13px] font-bold uppercase tracking-wider text-ink/70">Your quote</div>
                    <div className="chunk text-[44px] leading-none mt-1 text-ink">$680</div>
                    <div className="mt-3 text-sm text-ink/80">iPhone 14 Pro · 256GB</div>
                  </div>
                </div>
              </div>
              <div
                className="sticker absolute px-5 py-4"
                style={{ top: 30, right: 30, transform: "rotate(8deg)", background: "var(--wattle)" }}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-aubergine">Paid same day</div>
                <div className="chunk text-2xl mt-1">PayID · cash · transfer</div>
              </div>
              <div
                className="sticker absolute grid place-items-center text-cream chunk text-2xl"
                style={{ bottom: 50, right: 60, width: 110, height: 110, borderRadius: "50%", background: "var(--tomato)", transform: "rotate(-12deg)" }}
              >
                Sydney
              </div>
              <div
                className="sticker absolute px-4 py-3"
                style={{ bottom: 30, left: 0, background: "var(--pink)", transform: "rotate(4deg)" }}
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-aubergine">Honest quote</div>
                <div className="chunk text-xl mt-0.5">No bait pricing</div>
              </div>
              {/* burst */}
              <svg aria-hidden className="absolute" style={{ top: -10, left: 0, color: "var(--wattle-deep)" }} width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/>
              </svg>
              <svg aria-hidden className="absolute" style={{ bottom: 0, right: -10, color: "var(--leaf)" }} width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/>
              </svg>
            </div>
          </div>
        </section>

        {/* BRANDS STRIP */}
        <section className="bg-navy text-cream border-y-[3px] border-ink">
          <div className="mx-auto max-w-7xl px-6 md:px-8 py-8 flex items-center gap-8 flex-wrap">
            <span className="chunk text-wattle text-[22px]">We buy</span>
            <span className="hidden md:block w-px h-6 bg-cream/30" />
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[17px] font-semibold">
              {["iPhone", "Samsung", "Google Pixel", "OnePlus", "Oppo", "Xiaomi", "Sony", "iPad"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 mb-16 items-end">
              <div>
                <span className="eyebrow mb-5 inline-block">How it works</span>
                <h2 className="display text-[clamp(40px,6vw,72px)] mt-4">
                  Three steps. <span className="italic-soft text-tomato">No haggling.</span>
                </h2>
              </div>
              <p className="text-[19px] text-aubergine max-w-lg lg:justify-self-end leading-relaxed">
                We&apos;ve done this thousands of times. The process is fast because we&apos;ve made it that way on purpose.
              </p>
            </div>

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                {
                  n: "01",
                  title: "Tell us what you have",
                  body: "List your devices, condition, any issues. Two minutes, maybe three.",
                  bg: "var(--wattle)",
                  rot: "-1deg",
                  mt: "0",
                },
                {
                  n: "02",
                  title: "We send a fair quote",
                  body: "A real person reviews your form and replies — usually within a couple of hours.",
                  bg: "var(--pink)",
                  rot: "1deg",
                  mt: "1.5rem",
                },
                {
                  n: "03",
                  title: "Get paid same day",
                  body: "Meet in Sydney CBD, or free pickup in metro. Paid on the spot.",
                  bg: "var(--tomato)",
                  color: "var(--cream)",
                  rot: "-1deg",
                  mt: "0",
                },
              ].map((step, i) => (
                <li
                  key={step.n}
                  className="sticker px-8 pt-12 pb-8 relative"
                  style={{ background: step.bg, color: step.color ?? "var(--ink)", transform: `rotate(${step.rot})`, marginTop: step.mt }}
                >
                  <span
                    className="absolute -top-6 left-7 grid place-items-center chunk text-[26px]"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      border: "2.5px solid var(--ink)",
                      background: i === 2 ? "var(--cream)" : "var(--ink)",
                      color: i === 2 ? "var(--tomato)" : "var(--cream)",
                      transform: "rotate(-8deg)",
                      boxShadow: "3px 3px 0 var(--cream-deep)",
                    }}
                  >
                    {step.n}
                  </span>
                  <h3 className="chunk text-[28px] mt-4 leading-tight">{step.title}</h3>
                  <p className="mt-3 text-[16px]" style={{ color: i === 2 ? "var(--cream)" : "var(--aubergine)" }}>
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY US */}
        <section id="why" className="bg-navy text-cream border-y-[3px] border-ink py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14 items-end">
              <div>
                <span className="eyebrow mb-5 inline-block" style={{ background: "var(--tomato)", color: "var(--cream)", borderColor: "var(--cream)" }}>
                  Why us
                </span>
                <h2 className="display text-[clamp(40px,6vw,72px)] mt-4 text-cream">
                  The quote you see is{" "}
                  <span className="italic-soft text-wattle">the quote you get.</span>
                </h2>
              </div>
              <p className="text-pink text-[19px] max-w-lg leading-relaxed">
                Most of our business comes from referrals. We don&apos;t play games — it&apos;s why people send their mates.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "No bait pricing", body: "We quote on what you tell us. We don't slash the price when you show up.", accent: "var(--wattle)" },
                { title: "Same-day payment", body: "Cash, bank transfer or PayID — paid before you leave.", accent: "var(--tomato)" },
                { title: "Sydney based", body: "Local team. Meet at a café in the CBD or arrange a free pickup in metro.", accent: "var(--pink-deep)" },
                { title: "Data wiped properly", body: "Verified factory reset in front of you. Your data never leaves your hands.", accent: "var(--wattle)" },
              ].map((v, i) => (
                <li
                  key={v.title}
                  className="sticker p-7 text-ink"
                  style={{ boxShadow: `5px 5px 0 ${v.accent}` }}
                >
                  <span
                    aria-hidden
                    className="block w-11 h-11 rounded-xl border-2 border-ink grid place-items-center mb-4"
                    style={{ background: v.accent, color: i === 1 ? "var(--cream)" : "var(--ink)" }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </span>
                  <h3 className="chunk text-[22px] leading-tight mb-1.5">{v.title}</h3>
                  <p className="text-[15px] text-aubergine">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-end">
              <div>
                <span className="eyebrow mb-5 inline-block" style={{ background: "var(--pink)" }}>FAQ</span>
                <h2 className="display text-[clamp(40px,6vw,72px)] mt-4">
                  Things <span className="italic-soft text-tomato">people ask.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: "How long does a quote take?", a: "Most quotes go out within 2-3 hours during business hours, faster on weekdays. Submit overnight and we'll reply first thing." },
                { q: "What if my phone has issues?", a: "We still buy it. Cracked screen, dead battery, water damage — flag it on the form and we'll quote accordingly. No surprises later." },
                { q: "Do I need the box or charger?", a: "No. Box and charger are a small bonus, not a requirement. We only need the phone itself." },
                { q: "How do I get paid?", a: "Cash on the spot, instant bank transfer, or PayID. Whichever you prefer." },
              ].map((item) => (
                <details key={item.q} className="sticker p-6 cursor-pointer group">
                  <summary className="chunk text-[20px] flex items-center justify-between gap-4 list-none">
                    {item.q}
                    <span aria-hidden className="text-tomato text-2xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-aubergine leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-wattle border-y-[3px] border-ink py-24 md:py-32 relative overflow-hidden">
          <span
            aria-hidden
            className="absolute -bottom-20 -right-12 w-64 h-64 rounded-full bg-tomato border-[2.5px] border-ink"
          />
          <span
            aria-hidden
            className="absolute -top-12 left-1/3 w-32 h-32 rounded-full bg-pink border-[2.5px] border-ink"
          />
          <div className="relative mx-auto max-w-7xl px-6 md:px-8 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <h2 className="display text-[clamp(44px,7vw,96px)] max-w-2xl">
              Ready <span className="italic-soft text-tomato">when you are.</span>
            </h2>
            <Link href="/sell" className="btn btn-tomato btn-lg" style={{ boxShadow: "6px 6px 0 var(--ink)" }}>
              Start my quote
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
