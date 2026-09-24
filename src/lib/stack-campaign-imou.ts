import type { StackCampaign } from "@/lib/stack-types";

const AFFID = "3099482";

function awinCread(mid: string, ued?: string) {
  const base = `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AFFID}`;
  return ued ? `${base}&ued=${encodeURIComponent(ued)}` : base;
}

export const campaign_imou: StackCampaign = {
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
  };
