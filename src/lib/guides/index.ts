import type { Locale } from "@/lib/i18n";
import type { Guide } from "./types";
import { guide as g0 } from "./come-scegliere-smartwatch";
import { guide as g1 } from "./regali-tech-sotto-50";
import { guide as g2 } from "./come-scegliere-abbonamento-digitale";
import { guide as g3 } from "./apple-watch-ultra-4-vs-garmin-fenix-8";
import { guide as g4 } from "./audible-vs-kindle-unlimited";
import { guide as g5 } from "./prime-vs-prime-student";

export type { Guide } from "./types";

export const guides: Guide[] = [g0, g1, g2, g3, g4, g5];

export function getGuide(locale: Locale, slug: string) {
  return guides.find((g) =>
    locale === "en" ? g.slugEn === slug : g.slugIt === slug,
  );
}

export function guidePath(locale: Locale, guide: Guide) {
  return locale === "en"
    ? `/en/guides/${guide.slugEn}`
    : `/guides/${guide.slugIt}`;
}

export function guideImageUrl(guide: Guide) {
  if (guide.image.startsWith("http")) return guide.image;
  return `https://bjbeyond.pro${guide.image}`;
}
