import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="bg-cream sticky top-0 z-50 border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            aria-hidden
            className="grid place-items-center w-[38px] h-[38px] rounded-full bg-wattle border-[2.5px] border-ink shadow-[3px_3px_0_var(--ink)] -rotate-6 transition-transform group-hover:rotate-0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
              <rect x="6" y="2" width="12" height="20" rx="2"/>
              <path d="M10 18h4"/>
            </svg>
          </span>
          <span className="chunk text-[22px] leading-none">
            Sell My Phone <em className="not-italic font-display italic-soft text-tomato" style={{ fontWeight: 600 }}>Sydney</em>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[16px] font-medium">
          <a href="/#how" className="hover:text-tomato transition">How it works</a>
          <a href="/#why" className="hover:text-tomato transition">Why us</a>
          <a href="/#faq" className="hover:text-tomato transition">FAQ</a>
        </nav>
        <Link href="/sell" className="btn btn-tomato">
          Get a quote
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
