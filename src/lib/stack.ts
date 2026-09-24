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
  /** Hub benefit headline */
  benefit: L<string>;
  /** Product/SEO title seed (used in meta description fallback) */
  title: L<string>;
  short: L<string>;
  lead: L<string>;
  reasons: L<[string, string, string]>;
  audience: L<string>;
  /** Hub/detail primary CTA label */
  cta: L<string>;
  /** Hub card shop CTA */
  shopCta: L<string>;
  /** Base destination or tracking URL without clickref */
  hrefBase: string;
  network: "awin" | "tiddly";
  awinmid?: string;
  /** Absolute path under /public, used for hub/detail + og:image */
  image: string;
  gallery: string[];
  accent: string;
  visual: "desk" | "home" | "move" | "learn" | "water" | "ultrahuman";
  objectFit: "cover" | "contain";
  published: string;
  modified: string;
};

const AFFID = "3099482";

function awinCread(mid: string, ued?: string) {
  const base = `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AFFID}`;
  return ued ? `${base}&ued=${encodeURIComponent(ued)}` : base;
}

export const stackCampaigns: StackCampaign[] = [
  {
    slug: "esr",
    n: "01",
    kicker: { it: "Desk", en: "Desk" },
    name: "ESR",
    benefit: {
      it: "Ricarica magnetica CryoBoost per la scrivania",
      en: "CryoBoost magnetic charging for your desk",
    },
    title: {
      it: "ESR CryoBoost 3-in-1: vale la pena per MagSafe e Qi2?",
      en: "ESR CryoBoost 3-in-1 desk charger: worth it for MagSafe & Qi2?",
    },
    short: {
      it: "Stazione 3-in-1 Qi2.2 25W con CryoBoost (EU).",
      en: "3-in-1 Qi2.2 25W station with CryoBoost (EU).",
    },
    lead: {
      it: "Stazione ESR CryoBoost 3-in-1 (25W Qi2.2, EU Plug) per iPhone, Watch e AirPods. Prezzo e specifiche dal sito ufficiale UE al 24 set 2026.",
      en: "ESR CryoBoost 3-in-1 station (25W Qi2.2, EU Plug) for iPhone, Watch and AirPods. Price and specs from the official EU site as of 24 Sep 2026.",
    },
    reasons: {
      it: [
        "Vero 3-in-1: iPhone, Watch e AirPods sulla stessa stazione.",
        "25W Qi2.2 con CryoBoost per velocità e gestione del calore (claim ESR).",
        "Adattatore 50W incluso e politiche UE chiare (spedizione / resi / garanzia).",
      ],
      en: [
        "True 3-in-1: iPhone, Watch and AirPods on one station.",
        "25W Qi2.2 with CryoBoost for speed and heat management (ESR claim).",
        "50W adapter included plus clear EU shipping / returns / warranty.",
      ],
    },
    audience: {
      it: "Per chi usa MagSafe/Qi2 e vuole meno cavi sulla scrivania.",
      en: "For MagSafe/Qi2 users who want fewer cables on the desk.",
    },
    cta: {
      it: "Vedi ESR CryoBoost sul sito ufficiale",
      en: "See ESR CryoBoost on the official site",
    },
    shopCta: { it: "Scopri ESR →", en: "Shop ESR →" },
    hrefBase: awinCread("128639", "https://eu.esrtech.com/products/cryoboost-3-in-1-magnetic-charging-station-25w-qi2-2-eu-plug-black"),
    network: "awin",
    awinmid: "128639",
    image: "/stack/esr/01.webp",
    gallery: ["/stack/esr/01.webp", "/stack/esr/02.webp", "/stack/esr/03.webp", "/stack/esr/04.webp"],
    accent: "#c4894a",
    visual: "desk",
    objectFit: "cover",
    published: "2026-09-24",
    modified: "2026-09-24",
  },
  {
    slug: "imou",
    n: "02",
    kicker: { it: "Casa", en: "Home" },
    name: "IMOU",
    benefit: {
      it: "Telecamere Wi-Fi per controllare casa",
      en: "Wi-Fi cameras to watch your home",
    },
    title: {
      it: "IMOU Ranger 2C Pro e Cruiser SE+: telecamere casa Wi-Fi",
      en: "IMOU Ranger 2C Pro & Cruiser SE+: home Wi-Fi cameras",
    },
    short: {
      it: "Ranger indoor e Cruiser outdoor su store IMOU.",
      en: "Indoor Ranger and outdoor Cruiser on the IMOU store.",
    },
    lead: {
      it: "Videocamere IMOU per interni ed esterni. Confronta risoluzione, Wi-Fi, storage e privacy sulle schede ufficiali.",
      en: "IMOU cameras for indoor and outdoor use. Compare resolution, Wi-Fi, storage and privacy on official listings.",
    },
    reasons: {
      it: [
        "AI IMOU SENSE® per persone, animali e suoni (claim brand).",
        "Ranger 2C Pro con Wi-Fi 6 dual-band; Cruiser SE+ outdoor IP66.",
        "Spedizione gratuita, garanzia 3 anni e storage SD/NVR senza cloud obbligatorio (messaggi store).",
      ],
      en: [
        "IMOU SENSE® AI for people, pets and sounds (brand claim).",
        "Ranger 2C Pro with dual-band Wi-Fi 6; Cruiser SE+ outdoor IP66.",
        "Free shipping, 3-year warranty and SD/NVR options without forced cloud (store messaging).",
      ],
    },
    audience: {
      it: "Per chi vuole vedere porta o animali da remoto, non un allarme certificato.",
      en: "For remote door/pet checks — not a certified alarm system.",
    },
    cta: {
      it: "Vedi le camere IMOU sullo store ufficiale",
      en: "See IMOU cameras on the official store",
    },
    shopCta: { it: "Scopri IMOU →", en: "Shop IMOU →" },
    // EN/UK store destination so English visitors are not forced to it-it
    hrefBase: awinCread("122428", "https://store.imou.com/en-uk"),
    network: "awin",
    awinmid: "122428",
    image: "/stack/imou/01.webp",
    gallery: ["/stack/imou/01.webp", "/stack/imou/02.webp", "/stack/imou/03.webp", "/stack/imou/04.webp"],
    accent: "#4a7c59",
    visual: "home",
    objectFit: "cover",
    published: "2026-09-24",
    modified: "2026-09-24",
  },
  {
    slug: "toputure",
    n: "03",
    kicker: { it: "Move", en: "Move" },
    name: "Toputure",
    benefit: {
      it: "Cammina mentre lavori",
      en: "Walk while you work",
    },
    title: {
      it: "Toputure TP8: walking pad under-desk silenzioso?",
      en: "Toputure TP8: quiet under-desk walking pad?",
    },
    short: {
      it: "TP8 under-desk con inclinazione 0/5/10%.",
      en: "TP8 under-desk pad with 0/5/10% incline.",
    },
    lead: {
      it: "Walking pad Toputure TP8 per smart working: motore brushless, inclinazione manuale e resi 90 giorni (sito ufficiale).",
      en: "Toputure TP8 walking pad for desk work: brushless motor, manual incline and 90-day returns (official site).",
    },
    reasons: {
      it: [
        "Formato sottile da usare sotto scrivania a inclinazione 0%.",
        "Motore brushless dichiarato sotto 45 dB + assorbimento urti.",
        "Inclinazione 0/5/10% e spedizione gratuita / resi 90 giorni sul sito.",
      ],
      en: [
        "Slim format for under-desk walking at 0% incline.",
        "Brushless motor rated under 45 dB plus shock absorption.",
        "0/5/10% incline with free shipping and 90-day returns on the site.",
      ],
    },
    audience: {
      it: "Per chi lavora da casa e vuole più passi senza una palestra in salotto.",
      en: "For remote workers who want more steps without a living-room gym.",
    },
    cta: {
      it: "Vedi il TP8 sul sito Toputure",
      en: "See the TP8 on Toputure",
    },
    shopCta: { it: "Scopri Toputure →", en: "Shop Toputure →" },
    hrefBase: awinCread("125464", "https://toputure.com/products/toputure-tp8-walking-pad"),
    network: "awin",
    awinmid: "125464",
    image: "/stack/toputure/01.webp",
    gallery: ["/stack/toputure/01.webp", "/stack/toputure/02.webp", "/stack/toputure/03.webp", "/stack/toputure/04.webp"],
    accent: "#3d6b8a",
    visual: "move",
    objectFit: "cover",
    published: "2026-09-24",
    modified: "2026-09-24",
  },
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
  {
    slug: "ultrahuman",
    n: "06",
    kicker: { it: "Wearable", en: "Wearable" },
    name: "Ultrahuman",
    benefit: {
      it: "Ring AIR: sonno e recupero senza abbonamento dati",
      en: "Ring AIR: sleep & recovery without a data subscription",
    },
    title: {
      it: "Ultrahuman Ring AIR: vale la pena? Sonno e recupero senza subscription",
      en: "Ultrahuman Ring AIR: worth it? Sleep & recovery without a data subscription",
    },
    short: {
      it: "Smart ring $349, accesso dati a vita (FAQ ufficiale).",
      en: "$349 smart ring with lifelong data access (official FAQ).",
    },
    lead: {
      it: "Ultrahuman Ring AIR per sonno e recupero. FAQ ufficiale: nessun abbonamento dati obbligatorio. Codice BJBEYOND10 da verificare al checkout.",
      en: "Ultrahuman Ring AIR for sleep and recovery. Official FAQ: no mandatory data subscription. Code BJBEYOND10 — confirm at checkout.",
    },
    reasons: {
      it: [
        "Nessun abbonamento dati obbligatorio (FAQ ufficiale).",
        "Sleep score, stadi del sonno e Dynamic Recovery (claim Ultrahuman).",
        "Da 2,4 g in titanio, sizing kit gratuito e prova 30 notti*.",
      ],
      en: [
        "No mandatory data subscription (official FAQ).",
        "Sleep score, sleep stages and Dynamic Recovery (Ultrahuman claims).",
        "From 2.4 g titanium, free sizing kit and 30-night trial*.",
      ],
    },
    audience: {
      it: "Per chi vuole metriche overnight senza orologio al polso né fee annuale sui dati.",
      en: "For overnight metrics without a wristwatch or yearly data fee.",
    },
    cta: {
      it: "Ring AIR con codice BJBEYOND10",
      en: "Ring AIR with code BJBEYOND10",
    },
    shopCta: {
      it: "Scopri Ultrahuman · BJBEYOND10 →",
      en: "Shop Ultrahuman · BJBEYOND10 →",
    },
    hrefBase: "https://tidd.ly/3UT6vdj",
    network: "tiddly",
    image: "/stack/ultrahuman/01.webp",
    gallery: ["/stack/ultrahuman/01.webp", "/stack/ultrahuman/02.webp", "/stack/ultrahuman/03.webp", "/stack/ultrahuman/04.webp"],
    accent: "#8a7a5a",
    visual: "ultrahuman",
    objectFit: "contain",
    published: "2026-09-24",
    modified: "2026-09-24",
  },
];

export function getStack(slug: string) {
  return stackCampaigns.find((c) => c.slug === slug);
}

export function stackImageUrl(campaign: StackCampaign) {
  if (campaign.image.startsWith("http")) return campaign.image;
  return `https://bjbeyond.pro${campaign.image}`;
}

/** Append Awin clickref (and keep Ultrahuman tidd.ly queryable). */
export function stackAffiliateUrl(
  campaign: StackCampaign,
  locale: Locale,
  position: StackAffPosition,
): string {
  const clickref = `stack_${locale}_${position}_${campaign.slug}`;
  const url = new URL(campaign.hrefBase);
  url.searchParams.set("clickref", clickref);
  return url.toString();
}

export function stackAffAttrs(
  campaign: StackCampaign,
  locale: Locale,
  position: StackAffPosition,
) {
  return {
    className: "js-aff-cta",
    "data-product": campaign.slug,
    "data-network": campaign.network === "tiddly" ? "tiddly" : "awin",
    "data-position": position,
    "data-locale": locale,
  } as const;
}
