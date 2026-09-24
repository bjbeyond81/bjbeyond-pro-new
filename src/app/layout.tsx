import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang =
    pathname === "/en" || pathname.startsWith("/en/") ? "en" : "it";

  return (
    <html
      lang={lang}
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
