/**
 * Ultrahuman Stack / buyer-guide Impact links (from bjbeyond.studio product pages).
 * Do NOT use for /tech — tech keeps its own links in src/lib/tech.ts.
 * Never link to bjbeyond.studio / Shopify from bjbeyond.pro.
 */
import type { Locale } from "@/lib/i18n";

export const ULTRAHUMAN_RING_AIR_HREF =
  "https://ultrahumanhealthcare.pxf.io/n46ev6";
export const ULTRAHUMAN_RING_PRO_HREF =
  "https://ultrahumanhealthcare.pxf.io/jR6236";

/** @deprecated Prefer ULTRAHUMAN_RING_AIR_HREF; hub defaults to AIR. */
export const ULTRAHUMAN_STACK_HREF = ULTRAHUMAN_RING_AIR_HREF;

/** Impact exclusive code (also grants 10% on brand checkout). */
export const ULTRAHUMAN_TRACKING_CODE = "BJBEYOND";

export type UltrahumanProductId = "ringair" | "ringpro";

export type UltrahumanProduct = {
  id: UltrahumanProductId;
  hrefBase: string;
  /** Short token for subId1 (stack_it_aside_ringair). */
  trackSlug: UltrahumanProductId;
  name: Record<Locale, string>;
  /** Display price as on Shopify (EUR). */
  priceLabel: Record<Locale, string>;
  priceNote: Record<Locale, string>;
  cta: Record<Locale, string>;
};

export const ULTRAHUMAN_PRODUCTS: UltrahumanProduct[] = [
  {
    id: "ringair",
    hrefBase: ULTRAHUMAN_RING_AIR_HREF,
    trackSlug: "ringair",
    name: { it: "Ultrahuman Ring AIR", en: "Ultrahuman Ring AIR" },
    priceLabel: { it: "€379", en: "€379" },
    priceNote: {
      it: "Prezzo finale visualizzato su Ultrahuman.com",
      en: "Final price shown on Ultrahuman.com",
    },
    cta: {
      it: "Acquista ora con il codice BJBEYOND →",
      en: "Shop now with code BJBEYOND →",
    },
  },
  {
    id: "ringpro",
    hrefBase: ULTRAHUMAN_RING_PRO_HREF,
    trackSlug: "ringpro",
    name: { it: "Ultrahuman Ring PRO", en: "Ultrahuman Ring PRO" },
    priceLabel: { it: "€499", en: "€499" },
    priceNote: {
      it: "Prezzo finale visualizzato su Ultrahuman.com",
      en: "Final price shown on Ultrahuman.com",
    },
    cta: {
      it: "Acquista ora con il codice BJBEYOND →",
      en: "Shop now with code BJBEYOND →",
    },
  },
];

export function getUltrahumanProduct(id: UltrahumanProductId) {
  return ULTRAHUMAN_PRODUCTS.find((p) => p.id === id);
}

/** Discount block copy — exact match to bjbeyond.studio product pages. */
export const ULTRAHUMAN_DISCOUNT = {
  label: {
    it: "Codice esclusivo BJ Beyond",
    en: "Exclusive BJ Beyond code",
  },
  code: ULTRAHUMAN_TRACKING_CODE,
  strong: {
    it: "10% di sconto, sempre.",
    en: "10% off, always.",
  },
  rest: {
    it: "Risparmi ancora maggiori durante eventi come Prime Day e Black Friday.",
    en: "Even bigger savings during sale events like Prime Day and Black Friday.",
  },
  note: {
    it: "Inserisci il codice al checkout sul sito del brand.",
    en: "Enter the code at checkout on the brand's site.",
  },
  cta: {
    it: "Acquista ora con il codice BJBEYOND →",
    en: "Shop now with code BJBEYOND →",
  },
} as const;

export function ultrahumanAffiliateUrl(
  product: UltrahumanProduct,
  locale: Locale,
  position: string,
): string {
  const token = `stack_${locale}_${position}_${product.trackSlug}`;
  const url = new URL(product.hrefBase);
  url.searchParams.set("subId1", token);
  return url.toString();
}

export function ultrahumanGuideAffiliateUrl(
  product: UltrahumanProduct,
  locale: Locale,
  slugShort: string,
): string {
  const token = `guide_${locale}_${slugShort}_${product.trackSlug}`;
  const url = new URL(product.hrefBase);
  url.searchParams.set("subId1", token);
  return url.toString();
}
