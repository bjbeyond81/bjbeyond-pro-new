import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type TechProduct = {
  slug: string;
  category: "casa" | "wearable" | "audio" | "phone";
  badge: L<string>;
  name: L<string>;
  short: L<string>;
  lead: L<string>;
  price?: number;
  amazonUrl: string;
  image: string;
  highlights: L<string[]>;
  forWhom: L<string>;
  relatedGuide?: string;
};

export const techProducts: TechProduct[] = [
  {
    slug: "echo-show-5",
    category: "casa",
    badge: { it: "Casa", en: "Home" },
    name: { it: "Echo Show 5", en: "Echo Show 5" },
    short: {
      it: "Smart display 5.5\", casa intelligente e Alexa in formato compatto.",
      en: "5.5\" smart display: home control and Alexa, kept small.",
    },
    lead: {
      it: "Un display da piano, non un televisore da cucina. Timer, chiamate, meteo, luci: Alexa resta nel formato che sta sul noce.",
      en: "A countertop display, not a kitchen television. Timers, calls, weather, lights: Alexa stays in a size that belongs on the desk.",
    },
    amazonUrl: "https://amzn.to/4jf0d1q",
    image: "/products/echo-show-5.jpg",
    highlights: {
      it: [
        "Schermo 5.5\" compatto da piano",
        "Alexa, casa intelligente, timer e chiamate",
        "Fotocamera con otturatore fisico",
      ],
      en: [
        "Compact 5.5\" countertop screen",
        "Alexa, smart home, timers and calls",
        "Camera with a physical shutter",
      ],
    },
    forWhom: {
      it: "Per chi vuole Alexa visibile senza occupare il piano con un tablet.",
      en: "For anyone who wants visible Alexa without a tablet eating the counter.",
    },
  },
  {
    slug: "huawei-watch-gt7-pro",
    category: "wearable",
    badge: { it: "Wearable", en: "Wearable" },
    name: { it: "HUAWEI WATCH GT 7 Pro", en: "HUAWEI WATCH GT 7 Pro" },
    short: {
      it: "Titanio e ceramica, GPS, ECG e autonomia fino a 21 giorni.",
      en: "Titanium and ceramic, GPS, ECG and up to 21 days of battery.",
    },
    lead: {
      it: "Un orologio da portare settimane, non da ricaricare ogni sera. Materiali da fascia alta, GPS e ECG: la scheda tecnica serve, il teatro no.",
      en: "A watch to wear for weeks, not to charge every night. Premium materials, GPS and ECG: the spec sheet matters, the theatre does not.",
    },
    amazonUrl: "https://amzn.to/3T8Kfvn",
    image: "/products/huawei-watch-gt7-pro.jpg",
    highlights: {
      it: [
        "Cassa in titanio, lunetta in ceramica",
        "GPS e ECG",
        "Autonomia dichiarata fino a 21 giorni",
      ],
      en: [
        "Titanium case, ceramic bezel",
        "GPS and ECG",
        "Claimed battery life up to 21 days",
      ],
    },
    forWhom: {
      it: "Per chi vuole salute e GPS senza vivere attaccato al cavo.",
      en: "For health and GPS without living next to a charger.",
    },
  },
  {
    slug: "airpods-5",
    category: "audio",
    badge: { it: "Nuovo", en: "New" },
    name: { it: "AirPods 5", en: "AirPods 5" },
    short: {
      it: "ANC open-ear, chip H2, Audio Adattivo e Traduzione in tempo reale.",
      en: "Open-ear ANC, H2 chip, Adaptive Audio and live Translation.",
    },
    lead: {
      it: "Open-ear con isolamento quando serve. Chip H2, Audio Adattivo, traduzione: tre funzioni, non un catalogo di badge.",
      en: "Open-ear, with isolation when you need it. H2, Adaptive Audio, translation: three functions, not a badge catalogue.",
    },
    amazonUrl: "https://amzn.to/4gZ6n4u",
    image: "/products/airpods-5.jpg",
    highlights: {
      it: [
        "Design open-ear con ANC",
        "Chip H2 e Audio Adattivo",
        "Traduzione in tempo reale nell'ecosistema Apple",
      ],
      en: [
        "Open-ear design with ANC",
        "H2 chip and Adaptive Audio",
        "Live translation inside the Apple ecosystem",
      ],
    },
    forWhom: {
      it: "Per chi vive in iPhone e vuole ascoltare senza chiudere il mondo.",
      en: "For iPhone users who want to listen without sealing the world out.",
    },
  },
  {
    slug: "iphone-18-pro",
    category: "phone",
    badge: { it: "Nuovo", en: "New" },
    name: { it: "iPhone 18 Pro", en: "iPhone 18 Pro" },
    short: {
      it: "Chip A20 Pro, fotocamera Fusion 48MP e funzioni Apple Intelligence.",
      en: "A20 Pro chip, 48MP Fusion camera and Apple Intelligence.",
    },
    lead: {
      it: "Il Pro della generazione: A20 Pro, Fusion 48MP, Apple Intelligence. Si compra per il sistema, non per la scheda.",
      en: "This generation's Pro: A20 Pro, 48MP Fusion, Apple Intelligence. You buy the system, not the spec sheet.",
    },
    amazonUrl: "https://amzn.to/4xZNNPH",
    image: "/products/iphone-18-pro.jpg",
    highlights: {
      it: [
        "Chip A20 Pro",
        "Fotocamera Fusion 48MP",
        "Apple Intelligence sul dispositivo",
      ],
      en: [
        "A20 Pro chip",
        "48MP Fusion camera",
        "On-device Apple Intelligence",
      ],
    },
    forWhom: {
      it: "Per chi resta in Apple e vuole il telefono di riferimento, non l'intermedio.",
      en: "For anyone staying in Apple and wanting the reference phone, not the mid-range.",
    },
  },
  {
    slug: "garmin-venu-4",
    category: "wearable",
    badge: { it: "Wearable", en: "Wearable" },
    name: { it: "Garmin Venu 4", en: "Garmin Venu 4" },
    short: {
      it: "GPS, salute, fitness e autonomia fino a 12 giorni.",
      en: "GPS, health, fitness and up to 12 days of battery.",
    },
    lead: {
      it: "Garmin da polso urbano: GPS, salute, 12 giorni. Meno app, più allenamento. Android e iPhone restano entrambi in gioco.",
      en: "Urban Garmin: GPS, health, 12 days. Fewer apps, more training. Android and iPhone both stay in play.",
    },
    amazonUrl: "https://amzn.to/3TE2AAA",
    image: "/products/garmin-venu-4.png",
    highlights: {
      it: [
        "GPS e monitoraggio salute Garmin",
        "Autonomia fino a 12 giorni",
        "Compatibile iOS e Android",
      ],
      en: [
        "Garmin GPS and health tracking",
        "Battery life up to 12 days",
        "Works with iOS and Android",
      ],
    },
    forWhom: {
      it: "Per chi vuole sport e salute senza chiudersi in un solo telefono.",
      en: "For sport and health without locking into one phone.",
    },
    relatedGuide: "come-scegliere-smartwatch",
  },
  {
    slug: "iphone-17-pro",
    category: "phone",
    badge: { it: "Smartphone", en: "Smartphone" },
    name: {
      it: "Apple iPhone 17 Pro 256 GB Blu profondo",
      en: "Apple iPhone 17 Pro 256 GB Deep Blue",
    },
    short: {
      it: "Il Pro della generazione precedente, ancora il riferimento per chi non vuole il nuovo a ogni ciclo.",
      en: "Last generation's Pro — still the reference if you skip every launch.",
    },
    lead: {
      it: "256 GB, Blu profondo. Un Pro già sul tavolo, non un preordine. Il prezzo è indicativo e si muove su Amazon.",
      en: "256 GB, Deep Blue. A Pro already on the table, not a pre-order. The price is indicative and moves on Amazon.",
    },
    price: 1149,
    amazonUrl: "https://www.amazon.it/dp/B0FQGPJCJK?tag=357921-21",
    image: "/products/iphone-17-pro.jpg",
    highlights: {
      it: [
        "256 GB, finitura Blu profondo",
        "Fotocamera Pro e chip della serie A",
        "Prezzo indicativo: verifica su Amazon",
      ],
      en: [
        "256 GB, Deep Blue finish",
        "Pro camera and A-series chip",
        "Indicative price: confirm on Amazon",
      ],
    },
    forWhom: {
      it: "Per chi vuole un iPhone Pro senza inseguire l'ultimo numero.",
      en: "For anyone who wants an iPhone Pro without chasing the latest number.",
    },
  },
  {
    slug: "earpods-usb-c",
    category: "audio",
    badge: { it: "Sotto 20€", en: "Under €20" },
    name: {
      it: "Apple EarPods USB-C originali",
      en: "Apple EarPods USB-C (original)",
    },
    short: {
      it: "Cavo, USB-C, suono chiaro. Il regalo tech che non ha bisogno di spiegazioni.",
      en: "A cable, USB-C, clear sound. The tech gift that needs no explanation.",
    },
    lead: {
      it: "Auricolari cablati originali Apple, connettore USB-C. Niente batteria da ricordare, niente pairing. Funzionano.",
      en: "Original Apple wired earbuds, USB-C. No battery to remember, no pairing. They work.",
    },
    price: 16,
    amazonUrl: "https://www.amazon.it/dp/B0DCNWN8NZ?tag=357921-21",
    image: "/products/earpods-usb-c.jpg",
    highlights: {
      it: [
        "Connettore USB-C originale Apple",
        "Niente carica, niente Bluetooth",
        "Regalo sotto i 20 euro con uso reale",
      ],
      en: [
        "Original Apple USB-C connector",
        "No charging, no Bluetooth",
        "A sub-€20 gift with actual daily use",
      ],
    },
    forWhom: {
      it: "Per chi ha un iPhone USB-C e vuole un secondo paio che non si perde nella custodia.",
      en: "For anyone with a USB-C iPhone who wants a second pair that will not vanish in a case.",
    },
    relatedGuide: "regali-tech-sotto-50",
  },
  {
    slug: "apple-watch-ultra-4",
    category: "wearable",
    badge: { it: "Wearable", en: "Wearable" },
    name: {
      it: "Apple Watch Ultra 4 GPS + Cellular 49mm Black Titanium",
      en: "Apple Watch Ultra 4 GPS + Cellular 49mm Black Titanium",
    },
    short: {
      it: "Titanio 49 mm, chip S11, fino a 50 ore. Lo smartwatch Apple da endurance.",
      en: "49 mm titanium, S11 chip, up to 50 hours. Apple's endurance watch.",
    },
    lead: {
      it: "Il nuovo Ultra 4 punta su sensori salute più evoluti, autonomia maggiore e funzioni sportive più profonde, restando fortemente legato all'ecosistema iPhone.",
      en: "Ultra 4 leans on deeper health sensors, more battery and stronger sport tools — still tightly bound to iPhone.",
    },
    price: 909,
    amazonUrl: "https://www.amazon.it/dp/B0HJB281DM?tag=357921-21",
    image: "/products/apple-watch-ultra-4.jpg",
    highlights: {
      it: [
        "Cassa da 49 mm in titanio e chip S11",
        "Fino a 50 ore di autonomia; 84 ore in Low Power Mode",
        "GPS avanzato, Readiness score, SOS satellitare",
      ],
      en: [
        "49 mm titanium case and S11 chip",
        "Up to 50 hours; 84 hours in Low Power Mode",
        "Advanced GPS, Readiness score, satellite SOS",
      ],
    },
    forWhom: {
      it: "Ha più senso per chi usa iPhone e cerca un orologio premium per sport, salute e uso quotidiano. Per autonomia estrema, confrontalo con Garmin.",
      en: "It makes most sense if you use iPhone and want a premium watch for sport, health and daily use. For extreme battery life, compare it with Garmin.",
    },
    relatedGuide: "apple-watch-ultra-4-vs-garmin-fenix-8",
  },
];

export function getTech(slug: string) {
  return techProducts.find((p) => p.slug === slug);
}
