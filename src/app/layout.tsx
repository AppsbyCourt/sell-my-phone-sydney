import type { Metadata } from "next";
import { Caprasimo, Familjen_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const familjen = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sell My Phone Sydney — Fair quotes. Same-day cash.",
  description:
    "Sell your iPhone, Samsung or other mobile in Sydney. Fair quote in hours. Cash, bank transfer or PayID. No haggling.",
  metadataBase: new URL("https://sellmyphonesydney.com.au"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${caprasimo.variable} ${familjen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
