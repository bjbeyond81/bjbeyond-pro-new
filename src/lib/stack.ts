import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export const awinStoreUrl = "https://store.awin.com/bjbeyond";

export type StackCampaign = {
  slug: string;
  n: string;
  kicker: L<string>;
  name: string;
  /** Hub benefit headline */
  benefit: L<string>;
  title: L<string>;
  short: L<string>;
  lead: L<string>;
  body: L<string>;
  reasons: L<[string, string, string]>;
  audience: L<string>;
  cta: L<string>;
  href: string;
  /** Absolute path under /public or https URL, used for hub/detail + og:image */
  image: string;
  accent: string;
  visual: "desk" | "home" | "move" | "learn" | "water" | "tech" | "ultrahuman";
  network: "awin" | "merchant";
};

export const stackCampaigns: StackCampaign[] = [
  {
    slug: "esr",
    n: "01",
    kicker: { it: "Desk", en: "Desk" },
    name: "ESR",
    benefit: {
      it: "Ricarica magnetica per la scrivania",
      en: "Magnetic charging for your desk",
    },
    title: {
      it: "Ricarica magnetica per la scrivania",
      en: "Magnetic charging for your desk",
    },
    short: {
      it: "Ricarica magnetica per la scrivania",
      en: "Magnetic charging for your desk",
    },
    lead: {
      it: "Accessori e ricarica magnetica ESR. In foto: setup HaloLock su scrivania. Verifica la compatibilità con i tuoi dispositivi prima di acquistare.",
      en: "ESR accessories and magnetic charging. Pictured: a HaloLock-style desk setup. Check compatibility with your devices before purchasing.",
    },
    body: {
      it: "Dal 2009 ESR è un brand di accessori tech (cover, vetri, ricarica magnetica HaloLock & MagSafe). Commissioni affiliate dichiarate 12–15%, cookie 30 giorni. Confronta formato, connettori e dispositivi supportati sulla scheda del modello.",
      en: "Since 2009 ESR has been a tech-accessory brand (cases, glass, HaloLock & MagSafe magnetic charging). Affiliate programme highlights: 12–15% commission, 30-day cookie. Compare size, connectors and supported devices on the listing for your chosen model.",
    },
    reasons: {
      it: [
        "Aggancio magnetico che tiene fermo il telefono sul desk.",
        "Linea HaloLock & MagSafe pensata per ricarica wireless ordinata.",
        "Creatività e datafeed disponibili su Awin Toolbox.",
      ],
      en: [
        "Magnetic hold that keeps the phone still on the desk.",
        "HaloLock & MagSafe line built for calmer wireless charging.",
        "Banners and datafeed available in the Awin Toolbox.",
      ],
    },
    audience: {
      it: "Per chi vuole una scrivania più ordinata e già usa (o valuta) ricarica magnetica / MagSafe.",
      en: "For anyone who wants a calmer desk and already uses (or is considering) magnetic / MagSafe charging.",
    },
    cta: { it: "Vai su ESR", en: "Go to ESR" },
    href: "https://www.awin1.com/cread.php?awinmid=128639&awinaffid=3099482&ued=https%3A%2F%2Feu.esrtech.com%2F",
    image: "/scenes/desk.jpg",
    accent: "#c4894a",
    visual: "desk",
    network: "awin",
  },
  {
    slug: "imou",
    n: "02",
    kicker: { it: "Casa", en: "Home" },
    name: "IMOU",
    benefit: {
      it: "Controlla casa dal telefono",
      en: "Watch your home from your phone",
    },
    title: {
      it: "Controlla casa dal telefono",
      en: "Watch your home from your phone",
    },
    short: {
      it: "Controlla casa dal telefono",
      en: "Watch your home from your phone",
    },
    lead: {
      it: "Esplora le videocamere IMOU per gli spazi di ogni giorno. In foto: una camera domestica compatta. Commissione affiliate dichiarata 10%, cookie 30 giorni.",
      en: "Explore IMOU cameras for everyday spaces. Pictured: a compact home camera. Affiliate programme: 10% default commission, 30-day cookie.",
    },
    body: {
      it: "Videocamere indoor e outdoor da confrontare per risoluzione, alimentazione, archiviazione, privacy e compatibilità app. Le funzioni cloud e AI dipendono dal modello e dal piano.",
      en: "Compare indoor and outdoor cameras by resolution, power, storage, privacy and app compatibility. Cloud and AI features depend on the model and plan.",
    },
    reasons: {
      it: [
        "Controllo da app quando sei fuori casa.",
        "Gamma indoor/outdoor, batteria e 4G a seconda del modello.",
        "Un occhio in più senza montare un quadro operativo in salotto.",
      ],
      en: [
        "Check in from the app when you are away.",
        "Indoor/outdoor, battery and 4G options depending on the model.",
        "An extra eye without an operations board in the living room.",
      ],
    },
    audience: {
      it: "Per chi vuole vedere porta, corridoio o animali da remoto, senza un sistema di allarme certificato.",
      en: "For anyone who wants to see the door, hallway or pets remotely — not a certified alarm system.",
    },
    cta: { it: "Vai su IMOU", en: "Go to IMOU" },
    href: "https://www.awin1.com/cread.php?awinmid=122428&awinaffid=3099482",
    image: "/scenes/imou.jpg",
    accent: "#4a7c59",
    visual: "home",
    network: "awin",
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
      it: "Cammina mentre lavori",
      en: "Walk while you work",
    },
    short: {
      it: "Cammina mentre lavori",
      en: "Walk while you work",
    },
    lead: {
      it: "Walking pad e tapis roulant per gli spazi di casa. In foto: under-desk walking pad. Programma Awin: commissione dichiarata 8%+, cookie 30 giorni; bestseller TP5 & TEB5, new arrival TP8.",
      en: "Walking pads and treadmills for home spaces. Pictured: an under-desk walking pad. Awin programme: 8%+ commission, 30-day cookie; bestsellers TP5 & TEB5, new arrival TP8.",
    },
    body: {
      it: "Confronta ingombro, velocità, portata e spazio necessario all'uso sulla pagina del modello. La scelta dipende dalla stanza, dalla scrivania e dal tipo di attività. Toputure lavora spesso con codici sconto dedicati agli affiliati.",
      en: "Compare dimensions, speed, weight capacity and required clearance on the model page. Choose for your room, desk and intended activity. Toputure often works with affiliate discount codes.",
    },
    reasons: {
      it: [
        "Formato under-desk pensato per restare nella stanza di sempre.",
        "Più movimento nella routine senza montare una palestra.",
        "Supporto affiliati con creatività e (su richiesta) codici sconto.",
      ],
      en: [
        "Under-desk format meant to stay in the room you already have.",
        "More movement in the routine without installing a home gym.",
        "Affiliate support with creatives and (on request) discount codes.",
      ],
    },
    audience: {
      it: "Per chi lavora da casa e vuole camminare mentre risponde alle mail, con spazio e rumore reali da verificare.",
      en: "For anyone working from home who wants to walk while answering mail — check real space and noise first.",
    },
    cta: { it: "Vai su Toputure", en: "Go to Toputure" },
    href: "https://www.awin1.com/cread.php?awinmid=125464&awinaffid=3099482&ued=https%3A%2F%2Ftoputure.com%2F",
    image: "/scenes/move.jpg",
    accent: "#3d6b8a",
    visual: "move",
    network: "awin",
  },
  {
    slug: "lingzio",
    n: "04",
    kicker: { it: "Learn", en: "Learn" },
    name: "Lingzio",
    benefit: {
      it: "Una nuova lingua in un mese",
      en: "A new language in a month",
    },
    title: {
      it: "Una nuova lingua in un mese",
      en: "A new language in a month",
    },
    short: {
      it: "Una nuova lingua in un mese",
      en: "A new language in a month",
    },
    lead: {
      it: "Corso e app Lingzio di New Learning Network (10+ anni, 140.000+ corsi venduti sulle loro brand). Lingue: EN, ES, DE, FR, IT, JP. Commissione affiliate dichiarata 30–40%, cookie 30 giorni.",
      en: "Lingzio course and app from New Learning Network (10+ years, 140,000+ courses sold across their brands). Languages: EN, ES, DE, FR, IT, JP. Affiliate commission stated 30–40%, 30-day cookie.",
    },
    body: {
      it: "Valuta Lingzio per lingua disponibile, metodo (lezioni CEFR, flashcard, pratica conversazione AI, certificati), durata dell'accesso e frequenza reale di studio. Prima di acquistare, controlla prezzo, contenuti inclusi e condizioni aggiornate sul sito.",
      en: "Evaluate Lingzio by available language, method (CEFR lessons, flashcards, AI conversation practice, certificates), access duration and your real study cadence. Before buying, check price, included content and current terms on the site.",
    },
    reasons: {
      it: [
        "Più lingue sotto un unico abbonamento digitale.",
        "Metodo con lezioni, flashcard e pratica conversazione.",
        "Accesso a tempo: utile se studi sul serio, non un diploma automatico.",
      ],
      en: [
        "Multiple languages under one digital subscription.",
        "Method with lessons, flashcards and conversation practice.",
        "Timed access: useful if you study — not automatic fluency.",
      ],
    },
    audience: {
      it: "Per chi vuole studiare lingue per viaggio, lavoro, studio o immigrazione, con un impegno mensile realistico.",
      en: "For anyone learning languages for travel, work, study or immigration, with a realistic monthly commitment.",
    },
    cta: { it: "Vai su Lingzio", en: "Go to Lingzio" },
    href: "https://www.awin1.com/cread.php?awinmid=127997&awinaffid=3099482&ued=https%3A%2F%2Flingzio.com%2F",
    image: "/scenes/learn.jpg",
    accent: "#3b5bdb",
    visual: "learn",
    network: "awin",
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
      it: "Acqua pura dal rubinetto",
      en: "Pure water from your tap",
    },
    short: {
      it: "Acqua pura dal rubinetto",
      en: "Pure water from your tap",
    },
    lead: {
      it: "Sistemi di filtrazione Waterdrop per la cucina. In foto: Waterdrop G3P800 (RO). Brand globale di purificazione per Europa e Nord America.",
      en: "Waterdrop filtration systems for the kitchen. Pictured: Waterdrop G3P800 (RO). A global water-purification brand for Europe and North America.",
    },
    body: {
      it: "Confronta sistemi Waterdrop per spazio sotto-lavello o piano cucina, capacità, manutenzione, filtri di ricambio e certificazioni dichiarate nelle schede ufficiali. Non è una consulenza sanitaria.",
      en: "Compare Waterdrop systems by under-sink or countertop space, capacity, maintenance, replacement filters and certifications listed on official sheets. This is not health advice.",
    },
    reasons: {
      it: [
        "Acqua filtrata dal rubinetto di casa, meno plastica in giro.",
        "Opzioni RO sotto-lavello, da banco e caraffe a seconda dello spazio.",
        "Manutenzione e ciclo filtri da verificare prima dell'acquisto.",
      ],
      en: [
        "Filtered water from your home tap — less plastic around.",
        "Under-sink RO, countertop and pitcher options depending on space.",
        "Check maintenance and filter cycle before you buy.",
      ],
    },
    audience: {
      it: "Per chi vuole filtrare l'acqua in cucina e può gestire installazione e sostituzione filtri.",
      en: "For anyone who wants kitchen filtration and can handle installation plus filter changes.",
    },
    cta: { it: "Vai su Waterdrop", en: "Go to Waterdrop" },
    href: "https://www.awin1.com/cread.php?awinmid=117653&awinaffid=3099482",
    image: "https://cdn.shopify.com/s/files/1/0078/6156/7570/files/ui-wd-g3p800-w-no.png?v=1729671309",
    accent: "#2a9d8f",
    visual: "water",
    network: "awin",
  },
  {
    slug: "ultrahuman",
    n: "06",
    kicker: { it: "Wearable", en: "Wearable" },
    name: "Ultrahuman",
    benefit: {
      it: "Ring Pro, senza schermo",
      en: "Ring Pro, screen-free",
    },
    title: {
      it: "Ultrahuman Ring Pro, senza schermo.",
      en: "Ultrahuman Ring Pro, screen-free.",
    },
    short: {
      it: "Ring Pro: uno sguardo alle tue abitudini quotidiane.",
      en: "Ring Pro: a closer look at your daily rhythms.",
    },
    lead: {
      it: "Un wearable senza schermo, da esplorare attraverso le sue funzionalità e l'app. In foto: Ring Pro (immagine ufficiale Ultrahuman).",
      en: "A screen-free wearable to explore through its features and app. Pictured: Ring Pro (official Ultrahuman image).",
    },
    body: {
      it: "Ultrahuman Ring Pro è uno smart ring per sonno, recupero e trend wellness. Codice BJBEYOND10 da verificare al checkout. Non è un dispositivo medico.",
      en: "Ultrahuman Ring Pro is a smart ring for sleep, recovery and wellness trends. Code BJBEYOND10 must be confirmed at checkout. It is not a medical device.",
    },
    reasons: {
      it: [
        "Dati sul dito, senza un secondo display al polso.",
        "Metriche core da verificare in scheda, senza inventare claim clinici.",
        "Codice BJBEYOND10 da confermare al checkout.",
      ],
      en: [
        "Data on the finger — no second display on the wrist.",
        "Core metrics to verify on the listing; no invented clinical claims.",
        "Code BJBEYOND10 to confirm at checkout.",
      ],
    },
    audience: {
      it: "Per chi vuole un wearable discreto per sonno e recupero, non un dispositivo medico.",
      en: "For anyone who wants a discreet wearable for sleep and recovery — not a medical device.",
    },
    cta: { it: "Vai su Ultrahuman", en: "Go to Ultrahuman" },
    href: "https://tidd.ly/3UT6vdj",
    image: "https://public-web-assets.uh-static.com/web_v2/meta-assets/ring-pro-og-lg.png",
    accent: "#8a7a5a",
    visual: "ultrahuman",
    network: "awin",
  },
];

export function getStack(slug: string) {
  return stackCampaigns.find((c) => c.slug === slug);
}

export function stackImageUrl(campaign: StackCampaign) {
  if (campaign.image.startsWith("http")) return campaign.image;
  return `https://bjbeyond.pro${campaign.image}`;
}
