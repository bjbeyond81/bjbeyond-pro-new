import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

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
  visual: "desk" | "home" | "move" | "learn" | "water" | "tech";
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
      it: "Il telefono sta. Il cavo non vola. HaloLock, non teatro.",
      en: "The phone stays. The cable stays. HaloLock, not theatre.",
    },
    lead: {
      it: "HaloLock, CryoBoost, Xtend. Il telefono sta sul noce. Il resto è rumore da scheda prodotto.",
      en: "HaloLock, CryoBoost, Xtend. The phone sits on the walnut. The rest is spec-sheet noise.",
    },
    body: {
      it: "Dal 2009. 130 milioni di utenti dichiarati, 43 Paesi. Cover, vetri, pad magnetici, wallet. Non è Apple. Non è eterno. Tiene fermo il telefono.",
      en: "Since 2009. 130 million claimed users, 43 countries. Cases, glass, magnetic pads, wallets. It is not Apple. It is not forever. It holds the phone still.",
    },
    why: {
      it: "Magnete che morde. Cavo che non balla. Un solo gesto sul desk.",
      en: "A magnet that bites. A cable that does not dance. One gesture on the desk.",
    },
    takes: {
      it: "HaloLock, CryoBoost 25W, Xtend retrattile, Cyber Tough.",
      en: "HaloLock, CryoBoost 25W, retractable Xtend, Cyber Tough.",
    },
    not: {
      it: "Non un rito. Non un upgrade di identità. Un oggetto che sta.",
      en: "Not a ritual. Not an identity upgrade. An object that stays.",
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
      it: "Vedi chi entra. Senza un film di sirene.",
      en: "See who comes in. No siren movie.",
    },
    lead: {
      it: "Vedi la porta, il corridoio, il cane. Poi chiudi l'app e vivi.",
      en: "See the door, the hallway, the dog. Then close the app and live.",
    },
    body: {
      it: "Marchio consumer di Dahua. App Imou Life. Ranger, outdoor, batteria, 4G, campanelli. Cloud a pagamento. Non è un allarme certificato: è vedere, non recitare la sicurezza.",
      en: "Dahua's consumer brand. Imou Life app. Ranger, outdoor, battery, 4G, doorbells. Paid cloud. It is not a certified alarm: it is seeing, not performing security.",
    },
    why: {
      it: "Controllo in tre tocchi. Senza un quadro operativo in salotto.",
      en: "Three taps of control. No operations board in the living room.",
    },
    takes: {
      it: "IMOU SENSE, indoor/outdoor, batteria, 4G se il Wi-Fi muore.",
      en: "IMOU SENSE, indoor/outdoor, battery, 4G if Wi-Fi dies.",
    },
    not: {
      it: "Non un contratto di paura. Un occhio, quando serve.",
      en: "Not a fear contract. An eye, when you need it.",
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
      it: "Cammini mentre lavori. Poi si piega a 13 cm.",
      en: "Walk while you work. Then it folds to 13 cm.",
    },
    lead: {
      it: "Under-desk. Si piega. Non ti vende un nuovo carattere.",
      en: "Under-desk. It folds. It does not sell you a new personality.",
    },
    body: {
      it: "TP5: 2,5 HP, 1–16 km/h, nastro 104×42, inclinazione 1/6/12%, 136 kg, piegato 13 cm. Niente dimagrimento garantito. Niente codice inventato.",
      en: "TP5: 2.5 HP, 1–16 km/h, 104×42 belt, 1/6/12% incline, 136 kg, 13 cm folded. No guaranteed weight loss. No invented code.",
    },
    why: {
      it: "Passi mentre rispondi. Poi sparisce sotto il tavolo.",
      en: "Steps while you answer mail. Then it disappears under the table.",
    },
    takes: {
      it: "Motore 2,5 HP, inclinazione, ingombro da appartamento.",
      en: "2.5 HP motor, incline, apartment-scale footprint.",
    },
    not: {
      it: "Non una palestra. Un nastro. Il resto lo fai tu.",
      en: "Not a gym. A belt. The rest is on you.",
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
      it: "Una lingua al mese. Non un master da 400 euro.",
      en: "A language by the month. Not a €400 master's.",
    },
    lead: {
      it: "Lezioni, flashcard, conversazione. Accesso a mesi. La fluenza non è in offerta.",
      en: "Lessons, flashcards, conversation. Access by the month. Fluency is not on sale.",
    },
    body: {
      it: "Lingzio: sei lingue. Tempo limitato, non un diploma. Utile se studi sul serio. Inutile se cerchi un badge.",
      en: "Lingzio: six languages. Limited time, not a diploma. Useful if you study. Useless if you want a badge.",
    },
    why: {
      it: "Apri, fai 20 minuti, chiudi. Senza un portale da università.",
      en: "Open, do 20 minutes, close. No university portal.",
    },
    takes: {
      it: "Lezioni, flashcard, conversazione. EN, ES, DE, FR, IT, JP.",
      en: "Lessons, flashcards, conversation. EN, ES, DE, FR, IT, JP.",
    },
    not: {
      it: "Non fluenza in 30 giorni. Uno stack. Il lavoro resta tuo.",
      en: "Not fluency in 30 days. A stack. The work stays yours.",
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
      it: "Prima l'acqua. I claim dopo, se servono.",
      en: "Water first. Claims later, if needed.",
    },
    lead: {
      it: "RO sotto-lavello, da banco, caraffe. I filtri si cambiano. Il detox non è in lista.",
      en: "Under-sink RO, countertop, pitchers. Filters get changed. Detox is not on the list.",
    },
    body: {
      it: "Certificazioni dichiarate dal produttore sulle schede Waterdrop. Non è un protocollo wellness: è un filtro. Bevi. Sostituisci il filtro. Fine.",
      en: "Certifications claimed by the manufacturer on Waterdrop's own sheets. Not a wellness protocol: a filter. Drink. Replace the filter. Done.",
    },
    why: {
      it: "Rubinetto in casa. Meno plastica in giro. Un gesto solo.",
      en: "A tap at home. Less plastic around. One gesture.",
    },
    takes: {
      it: "RO sotto-lavello o da banco. Caraffe se vuoi stare leggero.",
      en: "Under-sink or countertop RO. Pitchers if you want to stay light.",
    },
    not: {
      it: "Non un protocollo wellness. Acqua. Poi decidi tu i claim.",
      en: "Not a wellness protocol. Water. Then you decide on the claims.",
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
      it: "La salute sul dito. Non sul polso.",
      en: "Health on the finger. Not the wrist.",
    },
    short: {
      it: "Ring Pro, 15 giorni, niente abbonamento obbligatorio.",
      en: "Ring Pro, 15 days, no mandatory subscription.",
    },
    lead: {
      it: "Salute e sonno senza orologio. Senza fee mensile sulle metriche core.",
      en: "Health and sleep without a watch. No monthly fee on the core metrics.",
    },
    body: {
      it: "Ultrahuman Ring Pro: titanio unibody, batteria dichiarata fino a 15 giorni, custodia inclusa. Recensione su Tech, codice BJBEYOND10 da verificare al checkout. Non è un dispositivo medico.",
      en: "Ultrahuman Ring Pro: unibody titanium, claimed battery up to 15 days, case included. Review on Tech, code BJBEYOND10 to confirm at checkout. It is not a medical device.",
    },
    why: {
      it: "Dati sul dito. Niente schermo. Niente abbonamento obbligatorio.",
      en: "Data on the finger. No screen. No mandatory subscription.",
    },
    takes: {
      it: "Ring Pro, custodia PRO, metriche core senza fee mensile, codice 10%.",
      en: "Ring Pro, PRO case, core metrics with no monthly fee, 10% code.",
    },
    not: {
      it: "Non un dispositivo medico. Non un rito Oura. Un anello da verificare in scheda.",
      en: "Not a medical device. Not an Oura ritual. A ring to check on the listing.",
    },
    cta: { it: "Vai su Ultrahuman", en: "Go to Ultrahuman" },
    href: "https://tidd.ly/3UT6vdj",
    visual: "tech",
    network: "awin",
  },
];

export function getStack(slug: string) {
  return stackCampaigns.find((c) => c.slug === slug);
}
