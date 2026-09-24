import type { Locale } from "@/lib/i18n";

export type BuyerGuideMeta = {
  id: string;
  slugIt: string;
  slugEn: string;
  stackSlug: string;
  clickrefShort: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tag: Record<Locale, string>;
  datePublished: string;
  dateModified: string;
};

export const buyerGuides: BuyerGuideMeta[] = [
  {
    id: "walking-pad",
    slugIt: "migliore-walking-pad-per-scrivania",
    slugEn: "best-under-desk-walking-pad",
    stackSlug: "toputure",
    clickrefShort: "walking-pad",
    title: {
      it: "Migliore walking pad per scrivania 2026",
      en: "Best under-desk walking pad 2026",
    },
    description: {
      it: "Confronto walking pad under-desk 2026: Toputure TP8/TP5 vs Merach, KingSmith, UREVO, Sperax. Dati da schede ufficiali.",
      en: "2026 under-desk walking pad comparison: Toputure TP8/TP5 vs Merach, KingSmith, UREVO, Sperax. Specs from official pages.",
    },
    tag: { it: "Walking pad", en: "Walking pad" },
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
  },
  {
    id: "ro-filter",
    slugIt: "depuratore-acqua-osmosi-inversa",
    slugEn: "reverse-osmosis-under-sink-filter",
    stackSlug: "waterdrop",
    clickrefShort: "ro-filter",
    title: {
      it: "Depuratore acqua a osmosi inversa: guida 2026",
      en: "Reverse osmosis under-sink filter guide 2026",
    },
    description: {
      it: "Guida RO 2026: Waterdrop G3P800 vs G3P600, BWT, Ecosoft CROSS90. Citazioni Altroconsumo verificate.",
      en: "2026 RO buyer guide: Waterdrop G3P800 vs G3P600, BWT, Ecosoft CROSS90, with verified Altroconsumo quotes.",
    },
    tag: { it: "Acqua", en: "Water" },
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
  },
  {
    id: "ultrahuman-ring",
    slugIt: "ultrahuman-ring-recensione-2026",
    slugEn: "ultrahuman-ring-review-2026",
    stackSlug: "ultrahuman",
    clickrefShort: "uh-ring",
    title: {
      it: "Ultrahuman Ring recensione 2026",
      en: "Ultrahuman Ring review 2026",
    },
    description: {
      it: "Ultrahuman Ring Pro e AIR vs Oura Ring 4, Samsung Galaxy Ring, RingConn Gen 2. Citazioni PCMag e NBC Select.",
      en: "Ultrahuman Ring Pro and AIR vs Oura Ring 4, Samsung Galaxy Ring, RingConn Gen 2, with PCMag and NBC Select quotes.",
    },
    tag: { it: "Wearable", en: "Wearable" },
    datePublished: "2026-09-24",
    dateModified: "2026-09-24",
  },
];

export function getBuyerGuide(locale: Locale, slug: string) {
  return buyerGuides.find((g) => (locale === "en" ? g.slugEn : g.slugIt) === slug);
}

export function buyerGuidePath(locale: Locale, guide: BuyerGuideMeta) {
  return locale === "en"
    ? `/en/guide/${guide.slugEn}`
    : `/guide/${guide.slugIt}`;
}

export function buyerGuideByStack(stackSlug: string) {
  return buyerGuides.find((g) => g.stackSlug === stackSlug);
}
