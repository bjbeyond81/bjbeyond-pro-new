import type { Locale } from "@/lib/i18n";
import {
  ULTRAHUMAN_STACK_HREF,
  ULTRAHUMAN_PRODUCTS,
  ultrahumanAffiliateUrl,
} from "@/lib/ultrahuman-stack-href";

/** Ultrahuman Stack campaign fields (Impact AIR+PRO). */
export const ultrahumanCampaignFields = {
  slug: "ultrahuman" as const,
  n: "06",
  kicker: { it: "Wearable", en: "Wearable" },
  name: "Ultrahuman",
  benefit: {
    it: "Ring AIR e Ring PRO: sonno e recupero senza abbonamento",
    en: "Ring AIR & Ring PRO: sleep & recovery without a subscription",
  },
  title: {
    it: "Ultrahuman Ring AIR e Ring PRO: vale la pena? Nessun abbonamento",
    en: "Ultrahuman Ring AIR & Ring PRO: worth it? No subscription",
  },
  short: {
    it: "Ring AIR €379 · Ring PRO €499 · codice BJBEYOND (−10%).",
    en: "Ring AIR €379 · Ring PRO €499 · code BJBEYOND (−10%).",
  },
  lead: {
    it: "Ultrahuman Ring AIR (€379) e Ring PRO (€499): sonno, recupero e attività 24/7 senza abbonamento. Codice esclusivo BJ Beyond: BJBEYOND (−10% sempre). Prezzo finale su Ultrahuman.com.",
    en: "Ultrahuman Ring AIR (€379) and Ring PRO (€499): sleep, recovery and all-day activity with no subscription. Exclusive BJ Beyond code: BJBEYOND (10% off, always). Final price on Ultrahuman.com.",
  },
  reasons: {
    it: [
      "Nessun abbonamento: acquisti una volta, accesso dati a vita.",
      "Ring AIR da 2,4 g / 2,4 mm; Ring PRO fino a 15 giorni (45 con PRO Charger).",
      "Codice BJBEYOND: 10% di sconto sempre (e di più in saldi).",
    ] as [string, string, string],
    en: [
      "No subscription: buy once, lifelong data access.",
      "Ring AIR from 2.4 g / 2.4 mm; Ring PRO up to 15 days (45 with PRO Charger).",
      "Code BJBEYOND: 10% off always (more during sales).",
    ] as [string, string, string],
  },
  audience: {
    it: "Per chi vuole metriche overnight senza orologio al polso né fee annuale sui dati.",
    en: "For overnight metrics without a wristwatch or yearly data fee.",
  },
  cta: {
    it: "Acquista ora con il codice BJBEYOND →",
    en: "Shop now with code BJBEYOND →",
  },
  shopCta: {
    it: "Acquista ora con il codice BJBEYOND →",
    en: "Shop now with code BJBEYOND →",
  },
  hrefBase: ULTRAHUMAN_STACK_HREF,
  network: "impact" as const,
  image: "/stack/ultrahuman/01.webp",
  gallery: [
    "/stack/ultrahuman/01.webp",
    "/stack/ultrahuman/02.webp",
    "/stack/ultrahuman/03.webp",
    "/stack/ultrahuman/04.webp",
  ],
  accent: "#8a7a5a",
  visual: "ultrahuman" as const,
  objectFit: "contain" as const,
  published: "2026-09-24",
  modified: "2026-09-24",
};

export function ultrahumanStackAffiliateUrl(
  locale: Locale,
  position: string,
  productId: "ringair" | "ringpro" = "ringair",
): string {
  const product =
    ULTRAHUMAN_PRODUCTS.find((p) => p.id === productId) ?? ULTRAHUMAN_PRODUCTS[0];
  return ultrahumanAffiliateUrl(product, locale, position);
}
