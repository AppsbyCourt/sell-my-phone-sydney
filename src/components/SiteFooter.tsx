export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream border-t-[3px] border-ink mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              aria-hidden
              className="grid place-items-center w-[38px] h-[38px] rounded-full bg-wattle border-[2.5px] border-ink -rotate-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                <rect x="6" y="2" width="12" height="20" rx="2"/>
                <path d="M10 18h4"/>
              </svg>
            </span>
            <span className="chunk text-[22px] leading-none text-cream">
              Sell My Phone <em className="not-italic font-display italic-soft text-wattle" style={{ fontWeight: 600 }}>Sydney</em>
            </span>
          </div>
          <p className="text-pink leading-relaxed max-w-sm">
            Local Sydney phone buyers. Honest quotes, same-day cash, no haggling.
          </p>
        </div>
        <div>
          <h4 className="chunk text-[20px] mb-3">Get in touch</h4>
          <ul className="space-y-2">
            <li><a className="hover:text-wattle transition" href="mailto:hello@sellmyphonesydney.com.au">hello@sellmyphonesydney.com.au</a></li>
            <li><a className="hover:text-wattle transition" href="tel:+61400000000">0400 000 000</a></li>
            <li className="text-pink">Sydney CBD · metro pickup</li>
          </ul>
        </div>
        <div>
          <h4 className="chunk text-[20px] mb-3">Hours</h4>
          <ul className="space-y-2 text-pink">
            <li><span className="text-cream font-semibold">Mon–Fri</span> · 9am – 7pm</li>
            <li><span className="text-cream font-semibold">Saturday</span> · 10am – 4pm</li>
            <li><span className="text-cream font-semibold">Sunday</span> · by appointment</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-5 text-sm text-pink flex flex-col md:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Sell My Phone Sydney</span>
          <span>Made in Sydney · ABN 00 000 000 000</span>
        </div>
      </div>
    </footer>
  );
}
