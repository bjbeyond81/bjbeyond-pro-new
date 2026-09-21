import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type TechProduct = {
  slug: string;
  category: "casa" | "wearable" | "audio" | "phone";
  badge: L<string>;
  name: L<string>;
  headline?: L<string>;
  short: L<string>;
  lead: L<string>;
  price?: number;
  amazonUrl?: string;
  href?: string;
  network?: "amazon" | "awin";
  cta?: L<string>;
  image: string;
  highlights: L<string[]>;
  forWhom: L<string>;
  relatedGuide?: string;
  sections?: { title: L<string>; body: L<string> }[];
  discountCode?: string;
  discountNote?: L<string>;
  priceNote?: L<string>;
  seoTitle?: L<string>;
  seoDescription?: L<string>;
};

export function techHref(product: TechProduct) {
  return product.href ?? product.amazonUrl ?? "";
}

export function techNetwork(product: TechProduct): "amazon" | "awin" {
  return product.network ?? "amazon";
}

export function techCta(product: TechProduct, locale: Locale) {
  if (product.cta) return product.cta[locale];
  return locale === "it" ? "Vedi su Amazon" : "View on Amazon";
}

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
      it: "Titanio e ceramica, GPS e ECG dichiarati dal produttore, autonomia dichiarata fino a 21 giorni.",
      en: "Titanium and ceramic, manufacturer-declared GPS and ECG, claimed battery up to 21 days.",
    },
    lead: {
      it: "Un orologio da portare settimane, non da ricaricare ogni sera. Materiali da fascia alta, GPS e ECG dichiarati dal produttore: la scheda tecnica serve, il teatro no. Non è un dispositivo medico.",
      en: "A watch to wear for weeks, not to charge every night. Premium materials, manufacturer-declared GPS and ECG: the spec sheet matters, the theatre does not. It is not a medical device.",
    },
    amazonUrl: "https://amzn.to/3T8Kfvn",
    image: "/products/huawei-watch-gt7-pro.jpg",
    highlights: {
      it: [
        "Cassa in titanio, lunetta in ceramica",
        "GPS e ECG dichiarati dal produttore (non è un dispositivo medico)",
        "Autonomia dichiarata dal produttore fino a 21 giorni",
      ],
      en: [
        "Titanium case, ceramic bezel",
        "Manufacturer-declared GPS and ECG (not a medical device)",
        "Claimed battery life up to 21 days",
      ],
    },
    forWhom: {
      it: "Per chi vuole GPS e monitoraggio wellness dichiarato dal produttore, senza vivere attaccato al cavo.",
      en: "For GPS and manufacturer-declared wellness tracking without living next to a charger.",
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
      it: "GPS e monitoraggio wellness Garmin, autonomia dichiarata fino a 12 giorni.",
      en: "Garmin GPS and wellness tracking, claimed battery up to 12 days.",
    },
    lead: {
      it: "Garmin da polso urbano: GPS, monitoraggio wellness dichiarato dal produttore, autonomia dichiarata fino a 12 giorni. Meno app, più allenamento. Android e iPhone restano entrambi in gioco. Non è un dispositivo medico.",
      en: "Urban Garmin: GPS, manufacturer-declared wellness tracking, claimed battery up to 12 days. Fewer apps, more training. Android and iPhone both stay in play. It is not a medical device.",
    },
    amazonUrl: "https://amzn.to/3TE2AAA",
    image: "/products/garmin-venu-4.png",
    highlights: {
      it: [
        "GPS e monitoraggio wellness Garmin (non è un dispositivo medico)",
        "Autonomia dichiarata dal produttore fino a 12 giorni",
        "Compatibile iOS e Android",
      ],
      en: [
        "Garmin GPS and wellness tracking (not a medical device)",
        "Manufacturer-claimed battery life up to 12 days",
        "Works with iOS and Android",
      ],
    },
    forWhom: {
      it: "Per chi vuole sport e monitoraggio wellness senza chiudersi in un solo telefono.",
      en: "For sport and wellness tracking without locking into one phone.",
    },
    relatedGuide: "come-scegliere-smartwatch",
  },
  {
    slug: "ultrahuman-ring-pro",
    category: "wearable",
    badge: { it: "Wearable", en: "Wearable" },
    name: { it: "Ultrahuman Ring Pro", en: "Ultrahuman Ring Pro" },
    headline: {
      it: "Ultrahuman Ring Pro — recensione completa 2026",
      en: "Ultrahuman Ring Pro — full review 2026",
    },
    short: {
      it: "Smart ring in titanio: batteria 15 giorni, nessun abbonamento obbligatorio, codice sconto 10%.",
      en: "Titanium smart ring: 15-day battery, no mandatory subscription, 10% discount code.",
    },
    lead: {
      it: "L'Ultrahuman Ring Pro è uno smart ring pensato per chi vuole tracciare salute e sonno senza indossare un orologio. Si indossa al dito, pesa pochissimo, e dura fino a quindici giorni con una singola carica. Niente abbonamento obbligatorio, niente schermo, niente notifiche che ti distraggono. Non è un dispositivo medico.",
      en: "The Ultrahuman Ring Pro is a smart ring for anyone who wants health and sleep tracking without wearing a watch. It sits on the finger, weighs very little, and lasts up to fifteen days on one charge. No mandatory subscription, no screen, no notifications pulling you away. It is not a medical device.",
    },
    price: 499,
    href: "https://tidd.ly/3UT6vdj",
    network: "awin",
    cta: {
      it: "Acquista Ultrahuman Ring Pro",
      en: "Buy Ultrahuman Ring Pro",
    },
    image: "/products/ultrahuman-ring-pro.jpg",
    highlights: {
      it: [
        "Batteria dichiarata fino a 15 giorni; fino a 45 con la custodia PRO inclusa",
        "Metriche core senza abbonamento obbligatorio",
        "Titanio unibody, circa 3,3–4,8 g, taglie 5–14",
        "Codice sconto 10% BJBEYOND10 (da verificare al checkout)",
      ],
      en: [
        "Claimed battery up to 15 days; up to 45 with the included PRO case",
        "Core metrics with no mandatory subscription",
        "Unibody titanium, about 3.3–4.8 g, sizes 5–14",
        "10% discount code BJBEYOND10 (confirm at checkout)",
      ],
    },
    forWhom: {
      it: "La scelta più pulita per chi vuole tracciare salute e sonno senza vincoli di abbonamento. Se cerchi solo il top della precisione sul sonno e non ti dispiace pagare ogni mese, guarda Oura.",
      en: "The cleaner choice if you want health and sleep tracking without a subscription lock-in. If you only want the top of sleep precision and do not mind paying every month, look at Oura.",
    },
    sections: [
      {
        title: { it: "Design e materiali", en: "Design and materials" },
        body: {
          it: "Il corpo è in titanio unibody, quindi leggero e resistente. Pesa circa 3,3–4,8 grammi a seconda della taglia. I colori disponibili sono Bionic Gold, Space Silver, Aster Black e Raw Titanium. Le taglie vanno da 5 a 14. La custodia di ricarica PRO è inclusa e porta l'autonomia combinata fino a 45 giorni.",
          en: "The body is unibody titanium: light and tough. It weighs about 3.3–4.8 grams depending on size. Colours: Bionic Gold, Space Silver, Aster Black and Raw Titanium. Sizes run from 5 to 14. The PRO charging case is included and takes combined battery life up to 45 days.",
        },
      },
      {
        title: { it: "Batteria e memoria", en: "Battery and memory" },
        body: {
          it: "15 giorni sul ring, fino a 45 giorni con la custodia. Fino a 250 giorni di memoria locale sul ring: i dati restano sul dispositivo anche senza connessione e si sincronizzano quando torni online.",
          en: "15 days on the ring, up to 45 days with the case. Up to 250 days of local memory on the ring: data stays on the device offline and syncs when you come back.",
        },
      },
      {
        title: { it: "Sensori e metriche", en: "Sensors and metrics" },
        body: {
          it: "Sensori per frequenza cardiaca, HRV, temperatura cutanea, sonno, movimento e recupero. L'app mostra i dati in modo pulito, con trend e insight. Le metriche core non richiedono abbonamento obbligatorio. Alcuni PowerPlug avanzati sono opzionali a pagamento. Non è un dispositivo medico.",
          en: "Sensors for heart rate, HRV, skin temperature, sleep, movement and recovery. The app shows the data cleanly, with trends and insight. Core metrics do not need a mandatory subscription. Some advanced PowerPlugs are optional and paid. It is not a medical device.",
        },
      },
      {
        title: { it: "Confronto con Oura Ring", en: "Compared with Oura Ring" },
        body: {
          it: "Oura Ring 4 è ancora un riferimento per il sonno, ma ha un abbonamento per sbloccare le insight complete. Ultrahuman Ring Pro costa 499 euro in Europa, include la custodia, e offre le metriche principali senza fee mensile. Se vuoi il massimo della precisione sul sonno e accetti l'abbonamento, Oura resta competitivo. Se vuoi valore, autonomia e semplicità, Ultrahuman è la scelta più pulita.",
          en: "Oura Ring 4 is still a sleep reference, but it uses a subscription to unlock the full insight. Ultrahuman Ring Pro costs €499 in Europe, includes the case, and offers the main metrics with no monthly fee. If you want the most sleep precision and accept the subscription, Oura stays competitive. If you want value, battery life and simplicity, Ultrahuman is the cleaner choice.",
        },
      },
      {
        title: { it: "Prezzo e offerta", en: "Price and offer" },
        body: {
          it: "499 euro in Europa, custodia inclusa. Spedizioni indicate dal 10 ottobre in poi sulla pagina ufficiale. Codice sconto esclusivo per i lettori di BJ Beyond: BJBEYOND10 (verifica al checkout se il codice è attivo sul programma).",
          en: "€499 in Europe, case included. Shipping listed from 10 October onwards on the official page. Exclusive BJ Beyond reader code: BJBEYOND10 (check at checkout whether the code is active on the programme).",
        },
      },
      {
        title: { it: "Verdetto", en: "Verdict" },
        body: {
          it: "L'Ultrahuman Ring Pro è la scelta migliore per chi vuole tracciare salute e sonno senza vincoli di abbonamento. Batteria lunga, design discreto, dati sul dito e non sul polso. Se cerchi solo il top della precisione sul sonno e non ti dispiace pagare ogni mese, guarda Oura. Per tutti gli altri, questo è il ring da considerare.",
          en: "The Ultrahuman Ring Pro is the best choice if you want health and sleep tracking without a subscription lock-in. Long battery, discreet design, data on the finger not the wrist. If you only want the top of sleep precision and do not mind paying every month, look at Oura. For everyone else, this is the ring to consider.",
        },
      },
    ],
    discountCode: "BJBEYOND10",
    discountNote: {
      it: "Codice sconto 10% per i lettori di BJ Beyond. Verifica al checkout se il codice è attivo sul programma.",
      en: "10% discount code for BJ Beyond readers. Check at checkout whether the code is active on the programme.",
    },
    priceNote: {
      it: "Prezzo sul sito ufficiale; può variare. Spedizioni indicate dal 10 ottobre in poi. Verifica sempre in scheda.",
      en: "Price is on the official site and can change. Shipping listed from 10 October onwards. Always check the listing.",
    },
    seoTitle: {
      it: "Ultrahuman Ring Pro recensione 2026 – BJ Beyond",
      en: "Ultrahuman Ring Pro review 2026 – BJ Beyond",
    },
    seoDescription: {
      it: "Recensione Ultrahuman Ring Pro 2026: batteria 15 giorni, nessun abbonamento obbligatorio, titanio unibody e codice sconto 10% BJBEYOND10.",
      en: "Ultrahuman Ring Pro review 2026: 15-day battery, no mandatory subscription, unibody titanium and 10% discount code BJBEYOND10.",
    },
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
    badge: { it: "Audio", en: "Audio" },
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
      it: "Ultra 4 punta su sensori wellness dichiarati da Apple, autonomia dichiarata maggiore e funzioni sportive più profonde, restando fortemente legato all'ecosistema iPhone. Non è un dispositivo medico.",
      en: "Ultra 4 leans on Apple-declared wellness sensors, claimed battery and stronger sport tools — still tightly bound to iPhone. It is not a medical device.",
    },
    price: 909,
    amazonUrl: "https://www.amazon.it/dp/B0HJB281DM?tag=357921-21",
    image: "/products/apple-watch-ultra-4.jpg",
    highlights: {
      it: [
        "Cassa da 49 mm in titanio e chip S11",
        "Autonomia dichiarata: fino a 50 ore; 84 ore in Low Power Mode",
        "GPS avanzato, Readiness score e SOS satellitare dichiarati da Apple",
      ],
      en: [
        "49 mm titanium case and S11 chip",
        "Claimed battery: up to 50 hours; 84 hours in Low Power Mode",
        "Advanced GPS, Readiness score and satellite SOS as declared by Apple",
      ],
    },
    forWhom: {
      it: "Ha più senso per chi usa iPhone e cerca un orologio premium per sport, monitoraggio wellness e uso quotidiano. Per autonomia estrema, confrontalo con Garmin.",
      en: "It makes most sense if you use iPhone and want a premium watch for sport, wellness tracking and daily use. For extreme battery life, compare it with Garmin.",
    },
    relatedGuide: "apple-watch-ultra-4-vs-garmin-fenix-8",
  },
];

export function getTech(slug: string) {
  return techProducts.find((p) => p.slug === slug);
}
