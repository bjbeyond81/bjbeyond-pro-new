import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type TechProduct = {
  slug: string;
  category: "casa" | "wearable" | "audio" | "phone";
  badge: L<string>;
  name: L<string>;
  headline?: L<string>;
  short: L<string>;
  lead: L<string>;
  price?: number;
  amazonUrl?: string;
  href?: string;
  network?: "amazon" | "awin";
  cta?: L<string>;
  image: string;
  highlights: L<string[]>;
  forWhom: L<string>;
  relatedGuide?: string;
  sections?: { title: L<string>; body: L<string> }[];
  discountCode?: string;
  discountNote?: L<string>;
  priceNote?: L<string>;
  seoTitle?: L<string>;
  seoDescription?: L<string>;
};

export function techHref(product: TechProduct) {
  return product.href ?? product.amazonUrl ?? "";
}

export function techNetwork(product: TechProduct): "amazon" | "awin" {
  return product.network ?? "amazon";
}

export function techCta(product: TechProduct, locale: Locale) {
  if (product.cta) return product.cta[locale];
  return locale === "it" ? "Vedi su Amazon" : "View on Amazon";
}
