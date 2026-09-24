import type { StackCampaign } from "@/lib/stack-types";

const AFFID = "3099482";

function awinCread(mid: string, ued?: string) {
  const base = `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AFFID}`;
  return ued ? `${base}&ued=${encodeURIComponent(ued)}` : base;
}

export const campaign_toputure: StackCampaign = {
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
  };
