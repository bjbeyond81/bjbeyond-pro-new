import type { Metadata } from "next";
import { copy } from "@/lib/copy";
import { getGuide } from "@/lib/guides";
import { getStack } from "@/lib/stack";
import { getTech } from "@/lib/tech";
import { canonicalFor, type RouteMatch } from "@/lib/routes";

export function metadataFor(match: RouteMatch): Metadata {
  const locale = match.locale;
  const t = copy[locale];
  const canonical = canonicalFor(match);
  const languages = hreflang(match);

  const base = {
    metadataBase: new URL("https://bjbeyond.pro"),
    alternates: { canonical, languages },
    openGraph: {
      type: "website" as const,
      url: canonical,
      siteName: "BJ Beyond",
      locale: locale === "it" ? "it_IT" : "en_GB",
    },
  };

  switch (match.kind) {
    case "home":
      return {
        ...base,
        title: locale === "it" ? "BJ Beyond — Portale di scelta" : "BJ Beyond — Discover better choices",
        description:
          locale === "it"
            ? "Scelte poche e ferme: gift finder, tech selezionata, offerte Amazon, guide e lo Stack."
            : "A quiet discovery portal: gifts, selected tech, Amazon offers, buying guides and the Stack.",
      };
    case "gifts":
      return {
        ...base,
        title:
          locale === "it"
            ? "BJ Beyond Gift Finder | Trova il regalo in 3 domande"
            : "BJ Beyond Gift Finder | Find the gift in 3 questions",
        description:
          locale === "it"
            ? "BJ Beyond Gift Finder: idee regalo e prodotti Tech selezionati su Amazon.it. Filtra per destinatario, budget e categoria in tre domande."
            : "BJ Beyond Gift Finder: gift ideas and selected Tech products on Amazon.it. Filter by recipient, budget and category in three questions.",
      };
    case "tech":
      return {
        ...base,
        title: `Tech | ${t.siteName}`,
        description:
          locale === "it"
            ? "Tecnologia selezionata da BJ Beyond: smartphone, wearable, audio e accessori con link affiliati chiaramente indicati."
            : "Selected technology from BJ Beyond: smartphones, wearables, audio and accessories, with affiliate links clearly marked.",
      };
    case "tech-detail": {
      const p = getTech(match.slug);
      return {
        ...base,
        title: `${p?.name[locale] ?? "Tech"} | ${t.siteName}`,
        description: p?.short[locale],
      };
    }
    case "amazon":
      return {
        ...base,
        title:
          locale === "it"
            ? "Offerte e Servizi Amazon | BJ Beyond"
            : "Amazon Offers and Services | BJ Beyond",
        description:
          locale === "it"
            ? "Servizi e offerte Amazon selezionati: Prime, Prime Video, Audible, Amazon Music Unlimited, Kindle Unlimited, Prime Student e registri regalo."
            : "Selected Amazon services and offers: Prime, Prime Video, Audible, Amazon Music Unlimited, Kindle Unlimited, Prime Student and registries.",
      };
    case "guides":
      return {
        ...base,
        title: `Guide | ${t.siteName}`,
        description:
          locale === "it"
            ? "Guide pratiche BJ Beyond per scegliere tecnologia, regali e servizi digitali in modo più semplice."
            : "Practical BJ Beyond guides for choosing tech, gifts and digital services more clearly.",
      };
    case "guide-detail": {
      const g = getGuide(locale, match.slug);
      return {
        ...base,
        title: `${g?.title[locale] ?? "Guide"} | ${t.siteName}`,
        description: g?.description[locale],
      };
    }
    case "stack":
      return {
        ...base,
        title:
          locale === "it" ? "Lo stack | BJ Beyond" : "The stack | BJ Beyond",
        description:
          locale === "it"
            ? "Cinque campagne curate: ESR, IMOU, Toputure, Lingzio, Waterdrop."
            : "Five curated campaigns: ESR, IMOU, Toputure, Lingzio, Waterdrop.",
      };
    case "stack-detail": {
      const c = getStack(match.slug);
      return {
        ...base,
        title: `${c?.name ?? "Stack"} | BJ Beyond`,
        description: c?.short[locale],
      };
    }
    default:
      return { title: t.notFoundTitle };
  }
}

function hreflang(match: RouteMatch): Record<string, string> {
  if (match.kind === "not-found") return {};
  if (match.kind === "guide-detail") {
    const g = getGuide(match.locale, match.slug);
    if (!g) return {};
    return {
      it: `https://bjbeyond.pro/guides/${g.slugIt}/`,
      en: `https://bjbeyond.pro/en/guides/${g.slugEn}/`,
      "x-default": `https://bjbeyond.pro/guides/${g.slugIt}/`,
    };
  }
  const it = canonicalFor({ ...match, locale: "it" } as RouteMatch);
  const en = canonicalFor({ ...match, locale: "en" } as RouteMatch);
  return { it, en, "x-default": it };
}
