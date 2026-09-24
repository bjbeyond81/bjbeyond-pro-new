import type { StackCampaign } from "@/lib/stack-types";

const AFFID = "3099482";

function awinCread(mid: string, ued?: string) {
  const base = `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AFFID}`;
  return ued ? `${base}&ued=${encodeURIComponent(ued)}` : base;
}

export const awinStackCampaignsB: StackCampaign[] = [
{
    slug: "lingzio",
    n: "04",
    kicker: { it: "Learn", en: "Learn" },
    name: "Lingzio",
    benefit: {
      it: "Impara una lingua con percorso CEFR",
      en: "Learn a language with a CEFR path",
    },
    title: {
      it: "Lingzio: corso lingua online con CEFR e pratica conversazione",
      en: "Lingzio: online language learning with CEFR & conversation practice",
    },
    short: {
      it: "Lezioni CEFR, flashcard, conversazione AI, certificati.",
      en: "CEFR lessons, flashcards, AI conversation, certificates.",
    },
    lead: {
      it: "Piattaforma Lingzio (New Learning Network): lezioni A1–C2, flashcard e pratica conversazione. Prezzi USD dal client ufficiale al 24 set 2026.",
      en: "Lingzio platform (New Learning Network): A1–C2 lessons, flashcards and conversation practice. USD prices from the official client as of 24 Sep 2026.",
    },
    reasons: {
      it: [
        "Percorso CEFR A1–C2 con certificato di livello.",
        "Scoring pronuncia e pratica conversazione (claim ufficiali).",
        "Plus cancellabile o Lifetime Premium una tantum ($199,99).",
      ],
      en: [
        "CEFR A1–C2 path with level completion certificates.",
        "Pronunciation scoring and conversation practice (official claims).",
        "Cancel-anytime Plus or one-time Lifetime Premium ($199.99).",
      ],
    },
    audience: {
      it: "Per chi studia lingue per viaggio, lavoro o immigrazione con un impegno realistico.",
      en: "For language learners aiming at travel, work or immigration with a realistic study cadence.",
    },
    cta: {
      it: "Inizia su Lingzio",
      en: "Start on Lingzio",
    },
    shopCta: { it: "Scopri Lingzio →", en: "Shop Lingzio →" },
    hrefBase: awinCread("127997", "https://lingzio.com/"),
    network: "awin",
    awinmid: "127997",
    image: "/stack/lingzio/01.webp",
    gallery: ["/stack/lingzio/01.webp", "/stack/lingzio/02.webp", "/stack/lingzio/03.webp", "/stack/lingzio/04.webp"],
    accent: "#3b5bdb",
    visual: "learn",
    objectFit: "cover",
    published: "2026-09-24",
    modified: "2026-09-24",
  },
{
    slug: "waterdrop",
    n: "05",
    kicker: { it: "Water", en: "Water" },
    name: "Waterdrop",
    benefit: {
      it: "Acqua pura dal rubinetto",
      en: "Pure water from your tap",
    },
    title: {
      it: "Waterdrop G3P800: RO tankless da 800 GPD con UV",
      en: "Waterdrop G3P800: 800 GPD tankless RO with UV",
    },
    short: {
      it: "RO sotto-lavello 800 GPD, certificazioni NSF, UV.",
      en: "Under-sink 800 GPD RO, NSF certifications, UV.",
    },
    lead: {
      it: "Sistema RO Waterdrop G3P800 (tankless, UV). Prezzo e kit dal sito UE al 24 set 2026.",
      en: "Waterdrop G3P800 tankless RO with UV. Price and kit from the EU site as of 24 Sep 2026.",
    },
    reasons: {
      it: [
        "Certificazioni NSF/ANSI 42, 53, 58, 372 + UV (claim Waterdrop).",
        "800 GPD, rapporto 3:1 e rubinetto smart TDS.",
        "Kit completo in scatola, resi 30 giorni e garanzia 1 anno sul sito UE.",
      ],
      en: [
        "NSF/ANSI 42, 53, 58, 372 certifications + UV (Waterdrop claims).",
        "800 GPD, 3:1 pure-to-drain and smart TDS faucet.",
        "Full install kit, 30-day returns and 1-year warranty on the EU site.",
      ],
    },
    audience: {
      it: "Per chi può installare sotto-lavello e gestire la manutenzione filtri.",
      en: "For households that can install under-sink and maintain filters.",
    },
    cta: {
      it: "Vedi il G3P800 su Waterdrop UE",
      en: "See the G3P800 on Waterdrop EU",
    },
    shopCta: { it: "Scopri Waterdrop →", en: "Shop Waterdrop →" },
    hrefBase: awinCread("117653", "https://www.waterdropfilter.eu/products/tankless-reverse-osmosis-system-g3p800"),
    network: "awin",
    awinmid: "117653",
    image: "/stack/waterdrop/01.webp",
    gallery: ["/stack/waterdrop/01.webp", "/stack/waterdrop/02.webp", "/stack/waterdrop/03.webp", "/stack/waterdrop/04.webp"],
    accent: "#2a9d8f",
    visual: "water",
    objectFit: "contain",
    published: "2026-09-24",
    modified: "2026-09-24",
  },
];
