import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sell My Phone Sydney — Same-Day Cash for Your Old Phone",
  description:
    "Sydney's fastest phone buyback. Get a quote in minutes, same-day cash or bank transfer. Apple, Samsung, Google — any condition.",
  metadataBase: new URL("https://sellmyphonesydney.com.au"),
  openGraph: {
    title: "Sell My Phone Sydney",
    description: "Same-day cash for your old phone. Top prices, Sydney-wide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}
