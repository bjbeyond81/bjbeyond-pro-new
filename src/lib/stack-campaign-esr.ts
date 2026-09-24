import type { StackCampaign } from "@/lib/stack-types";

const AFFID = "3099482";

function awinCread(mid: string, ued?: string) {
  const base = `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AFFID}`;
  return ued ? `${base}&ued=${encodeURIComponent(ued)}` : base;
}

export const campaign_esr: StackCampaign = {
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
  };
