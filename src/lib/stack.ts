import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export const awinStoreUrl = "https://store.awin.com/bjbeyond";

export type StackCampaign = {
  slug: string;
  n: string;
  kicker: L<string>;
  name: string;
  title: L<string>;
  short: L<string>;
  lead: L<string>;
  body: L<string>;
  why: L<string>;
  takes: L<string>;
  not: L<string>;
  cta: L<string>;
  href: string;
  visual: "desk" | "home" | "move" | "learn" | "water" | "tech" | "ultrahuman";
  network: "awin" | "merchant";
};

export const stackCampaigns: StackCampaign[] = [
  {
    slug: "esr",
    n: "01",
    kicker: { it: "Desk", en: "Desk" },
    name: "ESR",
    title: {
      it: "Il caricatore che tiene fermo il tavolo.",
      en: "The charger that keeps the table still.",
    },
    short: {
      it: "Ricarica e accessori per una scrivania più essenziale.",
      en: "Charging and accessories for a more considered desk.",
    },
    lead: {
      it: "Accessori e ricarica magnetica ESR. In foto: CryoBoost 3-in-1. Verifica la compatibilità con i tuoi dispositivi prima di acquistare.",
      en: "ESR accessories and magnetic charging. Pictured: CryoBoost 3-in-1. Check compatibility with your devices before purchasing.",
    },
    body: {
      it: "Una selezione di accessori per telefono, ricarica e protezione. Confronta formato, connettori e dispositivi supportati sulla scheda del modello che scegli.",
      en: "Explore phone accessories, charging and protection. Compare size, connectors and supported devices on the listing for your chosen model.",
    },
    why: {
      it: "La foto mostra una stazione di ricarica: il valore è nella scrivania più ordinata, non nel claim.",
      en: "The photo shows a charging station: the value is a cleaner desk, not a bigger claim.",
    },
    takes: {
      it: "Controlla sempre standard di ricarica, alimentatore incluso e compatibilità MagSafe/Qi del modello.",
      en: "Always check the charging standard, included power adapter and MagSafe/Qi compatibility for the model.",
    },
    not: {
      it: "Non tutti i telefoni o accessori supportano la stessa velocità o aggancio magnetico.",
      en: "Not every phone or accessory supports the same charging speed or magnetic hold.",
    },
    cta: { it: "Vai su ESR", en: "Go to ESR" },
    href: "https://www.awin1.com/cread.php?awinmid=24915&awinaffid=3099482&ued=https%3A%2F%2Feu.esrtech.com%2F",
    visual: "desk",
    network: "awin",
  },
  {
    slug: "imou",
    n: "02",
    kicker: { it: "Casa", en: "Home" },
    name: "IMOU",
    title: {
      it: "Un occhio in più. Non un film di allarmi.",
      en: "One extra eye. Not a siren movie.",
    },
    short: {
      it: "Videocamere e accessori per la casa connessa.",
      en: "Cameras and accessories for a connected home.",
    },
    lead: {
      it: "Esplora le videocamere IMOU per gli spazi di ogni giorno. In foto: Ranger 2C Pro.",
      en: "Explore IMOU cameras for everyday spaces. Pictured: Ranger 2C Pro.",
    },
    body: {
      it: "Videocamere indoor e outdoor da confrontare per risoluzione, alimentazione, archiviazione, privacy e compatibilità app. Le funzioni cloud e AI dipendono dal modello e dal piano.",
      en: "Compare indoor and outdoor cameras by resolution, power, storage, privacy and app compatibility. Cloud and AI features depend on the model and plan.",
    },
    why: {
      it: "La foto mostra una videocamera domestica compatta: deve sparire nello spazio, non dominare la stanza.",
      en: "The photo shows a compact home camera: it should sit quietly in the space, not dominate the room.",
    },
    takes: {
      it: "Verifica alimentazione, memoria locale/cloud, audio bidirezionale e copertura Wi-Fi prima di scegliere.",
      en: "Check power, local/cloud storage, two-way audio and Wi-Fi coverage before choosing.",
    },
    not: {
      it: "Non sostituisce un sistema di sicurezza certificato o una valutazione professionale.",
      en: "It does not replace a certified security system or a professional assessment.",
    },
    cta: { it: "Vai su IMOU", en: "Go to IMOU" },
    href: "https://www.awin1.com/cread.php?awinmid=122428&awinaffid=3099482",
    visual: "home",
    network: "awin",
  },
  {
    slug: "toputure",
    n: "03",
    kicker: { it: "Move", en: "Move" },
    name: "Toputure",
    title: {
      it: "Cammina. La stanza resta la stessa.",
      en: "Walk. The room stays the same.",
    },
    short: {
      it: "Walking pad e tapis roulant per gli spazi di casa.",
      en: "Walking pads and treadmills for your home.",
    },
    lead: {
      it: "Più movimento nella routine, con un formato adatto al tuo spazio. In foto: Toputure TP8 Walking Pad.",
      en: "Make room for movement in your routine. Pictured: Toputure TP8 Walking Pad.",
    },
    body: {
      it: "Confronta ingombro, velocità, portata e spazio necessario all'uso sulla pagina del modello. La scelta dipende dalla stanza, dalla scrivania e dal tipo di attività.",
      en: "Compare dimensions, speed, weight capacity and required clearance on the model page. Choose for your room, desk and intended activity.",
    },
    why: {
      it: "La foto mostra il prodotto in uso accanto alla scrivania: la domanda giusta è spazio reale, rumore e routine.",
      en: "The photo shows it used near a desk: the right questions are real space, noise and routine.",
    },
    takes: {
      it: "Dotazione e specifiche dipendono dal modello selezionato.",
      en: "Included equipment and specifications depend on the selected model.",
    },
    not: {
      it: "Non sostituisce un programma di allenamento o una valutazione medica.",
      en: "It does not replace a training plan or medical advice.",
    },
    cta: { it: "Vai su Toputure", en: "Go to Toputure" },
    href: "https://toputure.com/",
    visual: "move",
    network: "merchant",
  },
  {
    slug: "lingzio",
    n: "04",
    kicker: { it: "Learn", en: "Learn" },
    name: "Lingzio",
    title: {
      it: "Una lingua. Non un master da 400 euro.",
      en: "A language. Not a €400 master's.",
    },
    short: {
      it: "Uno spazio digitale per studiare le lingue.",
      en: "A digital space for language learning.",
    },
    lead: {
      it: "Una destinazione digitale per studiare lingue. Qui il visual resta tipografico per non inventare schermate o prodotti fisici inesistenti.",
      en: "A digital destination for language learning. The visual stays typographic so the site does not invent screens or physical products.",
    },
    body: {
      it: "Valuta Lingzio per lingua disponibile, metodo, durata dell'accesso e frequenza reale di studio. Prima di acquistare, controlla prezzo, contenuti inclusi e condizioni aggiornate sul sito.",
      en: "Evaluate Lingzio by available language, method, access duration and your real study cadence. Before buying, check price, included content and current terms on the site.",
    },
    why: {
      it: "La coerenza qui è onesta: testo e tipografia per un servizio digitale, non una finta foto prodotto.",
      en: "The honest match here is text and typography for a digital service, not a fake product photo.",
    },
    takes: {
      it: "Verifica lingue, livello, esercizi, durata e condizioni direttamente sulla pagina Lingzio.",
      en: "Check languages, level, exercises, duration and terms directly on Lingzio.",
    },
    not: {
      it: "Non promette fluenza automatica: resta uno strumento, non il risultato.",
      en: "It does not promise automatic fluency: it is a tool, not the result.",
    },
    cta: { it: "Vai su Lingzio", en: "Go to Lingzio" },
    href: "https://lingzio.com/",
    visual: "learn",
    network: "merchant",
  },
  {
    slug: "waterdrop",
    n: "05",
    kicker: { it: "Water", en: "Water" },
    name: "Waterdrop",
    title: {
      it: "Prima l'acqua. Poi i claim.",
      en: "Water first. Claims later.",
    },
    short: {
      it: "Filtrazione dell'acqua per la tua cucina.",
      en: "Water filtration for your kitchen.",
    },
    lead: {
      it: "Sistemi da valutare in base a spazio, installazione e manutenzione. In foto: Waterdrop G3P800.",
      en: "Explore systems by space, installation and maintenance needs. Pictured: Waterdrop G3P800.",
    },
    body: {
      it: "Confronta sistemi Waterdrop per spazio sotto-lavello o piano cucina, capacità, manutenzione, filtri di ricambio e certificazioni dichiarate nelle schede ufficiali.",
      en: "Compare Waterdrop systems by under-sink or countertop space, capacity, maintenance, replacement filters and certifications listed on official sheets.",
    },
    why: {
      it: "La foto mostra un sistema da cucina: la scelta deve partire da installazione, filtro e manutenzione.",
      en: "The photo shows a kitchen filtration system: start from installation, filter and maintenance.",
    },
    takes: {
      it: "Controlla misure, rubinetto, pressione richiesta e ciclo dei filtri prima dell'acquisto.",
      en: "Check dimensions, tap, required pressure and filter cycle before purchasing.",
    },
    not: {
      it: "Non è una consulenza sanitaria o una promessa universale sulla qualità dell'acqua.",
      en: "It is not health advice or a universal promise about water quality.",
    },
    cta: { it: "Vai su Waterdrop", en: "Go to Waterdrop" },
    href: "https://www.awin1.com/cread.php?awinmid=117653&awinaffid=3099482",
    visual: "water",
    network: "awin",
  },
  {
    slug: "ultrahuman",
    n: "06",
    kicker: { it: "Wearable", en: "Wearable" },
    name: "Ultrahuman",
    title: {
      it: "Ultrahuman Ring Pro, senza schermo.",
      en: "Ultrahuman Ring Pro, screen-free.",
    },
    short: {
      it: "Ring Pro: uno sguardo alle tue abitudini quotidiane.",
      en: "Ring Pro: a closer look at your daily rhythms.",
    },
    lead: {
      it: "Un wearable senza schermo, da esplorare attraverso le sue funzionalità e l'app. In foto: Ring Pro, Bionic Gold.",
      en: "A screen-free wearable to explore through its features and app. Pictured: Ring Pro, Bionic Gold.",
    },
    body: {
      it: "Ultrahuman Ring Pro è uno smart ring per sonno, recupero e trend wellness. La foto ufficiale mostra la finitura Bionic Gold. Codice BJBEYOND10 da verificare al checkout. Non è un dispositivo medico.",
      en: "Ultrahuman Ring Pro is a smart ring for sleep, recovery and wellness trends. The official photo shows Bionic Gold. Code BJBEYOND10 must be confirmed at checkout. It is not a medical device.",
    },
    why: {
      it: "La parola chiave è discrezione: un anello, non un secondo display.",
      en: "The key word is discretion: a ring, not a second display.",
    },
    takes: {
      it: "Verifica taglia, finitura, dotazione e validità del codice BJBEYOND10 al checkout.",
      en: "Check sizing, finish, included accessories and code BJBEYOND10 at checkout.",
    },
    not: {
      it: "Non è un dispositivo medico. Queste sono informazioni per l'acquisto, non una prova indipendente.",
      en: "Not a medical device. These are buying notes, not an independent hands-on test.",
    },
    cta: { it: "Vai su Ultrahuman", en: "Go to Ultrahuman" },
    href: "https://tidd.ly/3UT6vdj",
    visual: "ultrahuman",
    network: "awin",
  },
];

export function getStack(slug: string) {
  return stackCampaigns.find((c) => c.slug === slug);
}
