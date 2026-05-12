import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SellForm } from "@/components/SellForm";

export const metadata = {
  title: "Get a quote — Sell My Phone Sydney",
  description: "Two-minute form. Fair quote in hours.",
};

export default function SellPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-cream-deep border-b-[3px] border-ink">
        <section className="mx-auto max-w-3xl px-6 md:px-8 pt-16 md:pt-20 pb-24">
          <div className="text-center mb-12">
            <span className="eyebrow mb-6 inline-block">Step 1 of 1 · ~2 minutes</span>
            <h1 className="display text-[clamp(44px,6vw,76px)] mt-4">
              Let&apos;s see <span className="italic-soft text-tomato">what you&apos;ve got.</span>
            </h1>
            <p className="mt-5 text-[19px] text-aubergine max-w-xl mx-auto leading-relaxed">
              Add each device, tell us its condition, and leave your details. We&apos;ll come back with a real quote — not a placeholder.
            </p>
          </div>
          <SellForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
