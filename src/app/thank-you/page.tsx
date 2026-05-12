import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Thanks — we'll be in touch",
  description: "Your quote request is in.",
};

export default function ThankYou() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 relative overflow-hidden">
        <span
          aria-hidden
          className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-wattle border-[2.5px] border-ink"
        />
        <span
          aria-hidden
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-pink border-[2.5px] border-ink"
        />

        <section className="relative mx-auto max-w-4xl px-6 md:px-8 pt-20 md:pt-28 pb-24 text-center">
          <span className="eyebrow mb-7 inline-block rise rise-1" style={{ background: "var(--tomato)", color: "var(--cream)" }}>
            ● Received · {new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short" })}
          </span>
          <h1 className="display text-[clamp(52px,8vw,108px)] rise rise-2">
            Got it.<br />
            <span className="italic-soft text-tomato">Quote on the way.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-[19px] md:text-[21px] leading-relaxed text-aubergine rise rise-3">
            A real person is reviewing your devices now. You&apos;ll hear back from us — usually within a couple of hours during business hours, first thing tomorrow if it&apos;s late.
          </p>

          <ol className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-7 text-left rise rise-4">
            {[
              { n: "01", title: "Check your email", body: "We'll reply to the address you gave us. If nothing's landed in a few hours, check spam.", bg: "var(--wattle)", rot: "-1deg", mt: "0" },
              { n: "02", title: "Quote arrives", body: "A real number, not a range. If we need a photo of anything, we'll ask.", bg: "var(--pink)", rot: "1deg", mt: "1.5rem" },
              { n: "03", title: "Pick a time", body: "CBD meet-up or free pickup in metro Sydney. Paid same day.", bg: "var(--tomato)", color: "var(--cream)", rot: "-1deg", mt: "0" },
            ].map((step, i) => (
              <li
                key={step.n}
                className="sticker px-7 pt-12 pb-8 relative"
                style={{ background: step.bg, color: step.color ?? "var(--ink)", transform: `rotate(${step.rot})`, marginTop: step.mt }}
              >
                <span
                  className="absolute -top-6 left-6 grid place-items-center chunk text-[24px]"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    border: "2.5px solid var(--ink)",
                    background: i === 2 ? "var(--cream)" : "var(--ink)",
                    color: i === 2 ? "var(--tomato)" : "var(--cream)",
                    transform: "rotate(-8deg)",
                  }}
                >
                  {step.n}
                </span>
                <h3 className="chunk text-[24px] mt-3 leading-tight">{step.title}</h3>
                <p className="mt-2.5" style={{ color: i === 2 ? "var(--cream)" : "var(--aubergine)" }}>
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-20 sticker px-7 py-8 bg-cream-deep flex flex-col md:flex-row items-center justify-between gap-6 text-left rise rise-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-aubergine mb-1.5">Need to reach us sooner?</p>
              <a
                href="mailto:hello@sellmyphonesydney.com.au"
                className="chunk text-[22px] md:text-[26px] hover:text-tomato transition"
              >
                hello@sellmyphonesydney.com.au
              </a>
            </div>
            <Link href="/" className="btn btn-yellow">
              ← Back to home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
