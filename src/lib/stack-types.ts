import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type StackAffPosition =
  | "index-card"
  | "detail-aside"
  | "detail-mid"
  | "detail-footer"
  | "detail-sticky";

export type StackCampaign = {
  slug: string;
  n: string;
  kicker: L<string>;
  name: string;
  benefit: L<string>;
  title: L<string>;
  short: L<string>;
  lead: L<string>;
  reasons: L<[string, string, string]>;
  audience: L<string>;
  cta: L<string>;
  shopCta: L<string>;
  hrefBase: string;
  network: "awin" | "tiddly" | "impact";
  awinmid?: string;
  image: string;
  gallery: string[];
  accent: string;
  visual: "desk" | "home" | "move" | "learn" | "water" | "ultrahuman";
  objectFit: "cover" | "contain";
  published: string;
  modified: string;
};
