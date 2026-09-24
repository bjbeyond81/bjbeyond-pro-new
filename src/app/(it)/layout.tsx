import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bjbeyond.pro"),
  title: {
    default: "BJ Beyond — Smart choices, sharper buying",
    template: "%s",
  },
  description:
    "English and Italian editorial portal for curated tech, gift ideas, Amazon offers, guides and Awin Stack campaigns.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    siteName: "BJ Beyond",
    type: "website",
  },
};

export default function ItRootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="it"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
