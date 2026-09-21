import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type Guide = {
  slugIt: string;
  slugEn: string;
  tag: L<string>;
  title: L<string>;
  description: L<string>;
  lead: L<string>;
  kind: "article" | "compare";
  image: string;
  sections?: { title: L<string>; body: L<string>; list?: L<string[]> }[];
  table?: {
    headers: L<[string, string, string]>;
    rows: { label: L<string>; a: L<string>; b: L<string> }[];
  };
  verdict?: L<string>;
  cta: { hrefIt: string; hrefEn: string; label: L<string> };
};

export const guides: Guide[] = [
  {
    slugIt: "come-scegliere-smartwatch",
    slugEn: "how-to-choose-smartwatch",
    tag: { it: "Wearable", en: "Wearable" },
    title: {
      it: "Come scegliere uno smartwatch senza perdersi nelle specifiche.",
      en: "How to choose a smartwatch without drowning in the spec sheet.",
    },
    description: {
      it: "Guida pratica: autonomia, GPS, sensori, compatibilità, comfort e uso reale.",
      en: "A practical guide: battery, GPS, sensors, compatibility, comfort and real use.",
    },
    lead: {
      it: "Uno smartwatch va scelto in base a ciò che farai ogni giorno. Autonomia, GPS, compatibilità e comfort contano spesso più del numero totale di funzioni.",
      en: "Pick a watch from what you will do every day. Battery, GPS, compatibility and comfort usually beat the feature count.",
    },
    kind: "article",
    image: "/guides/watch.jpg",
    sections: [
      {
        title: { it: "Autonomia", en: "Battery life" },
        body: {
          it: "Se vuoi monitoraggio continuo, sport o viaggi, una maggiore autonomia riduce ricariche e interruzioni. Per uso urbano quotidiano può bastare anche un ciclo più breve.",
          en: "If you want continuous tracking, sport or travel, more battery means fewer interruptions. For daily city use, a shorter cycle can be enough.",
        },
      },
      {
        title: { it: "GPS e sport", en: "GPS and sport" },
        body: {
          it: "Chi corre, pedala o fa trekking dovrebbe guardare qualità del GPS, stabilità della frequenza cardiaca, mappe e supporto agli allenamenti.",
          en: "If you run, ride or hike, look at GPS quality, heart-rate stability, maps and training support.",
        },
      },
      {
        title: { it: "Compatibilità", en: "Compatibility" },
        body: {
          it: "Controlla sempre smartphone, ecosistema, app e funzioni che potrebbero essere limitate fuori dal sistema operativo principale.",
          en: "Always check the phone, the ecosystem, the apps, and which features shrink outside the main operating system.",
        },
      },
      {
        title: { it: "Comfort e dimensioni", en: "Comfort and size" },
        body: {
          it: "Un orologio tecnicamente perfetto ma scomodo viene usato meno. Peso, diametro, cinturino e spessore sono parte della decisione.",
          en: "A technically perfect watch that is uncomfortable gets worn less. Weight, diameter, strap and thickness are part of the decision.",
        },
      },
    ],
    cta: {
      hrefIt: "/tech",
      hrefEn: "/en/tech",
      label: { it: "Vedi la sezione Tech", en: "See the Tech section" },
    },
  },
  {
    slugIt: "regali-tech-sotto-50",
    slugEn: "tech-gifts-under-50",
    tag: { it: "Regali", en: "Gifts" },
    title: {
      it: "Regali tech sotto 50 €: cosa vale davvero.",
      en: "Tech gifts under €50: what is actually worth giving.",
    },
    description: {
      it: "Audio, accessori, ricarica, utilità reale e criteri per evitare acquisti inutili.",
      en: "Audio, accessories, charging, real utility — and how to skip the useless gadget.",
    },
    lead: {
      it: "Sotto i 50 euro si trova molta tecnologia, ma anche molto rumore. La regola migliore è scegliere prodotti con un uso chiaro, compatibilità semplice e valore quotidiano.",
      en: "Under €50 you will find plenty of technology, and plenty of noise. Pick a clear use, simple compatibility, daily value.",
    },
    kind: "article",
    image: "/guides/tech-gifts.jpg",
    sections: [
      {
        title: {
          it: "1. Parti dall'uso, non dal gadget",
          en: "1. Start from use, not from the gadget",
        },
        body: {
          it: "Chiediti cosa farà davvero la persona con quel prodotto. Audio, ricarica, accessori smartphone e piccoli dispositivi utili tendono a funzionare meglio dei gadget senza uno scopo preciso.",
          en: "Ask what the person will actually do with it. Audio, charging, phone accessories and small useful devices beat gadgets with no job.",
        },
      },
      {
        title: {
          it: "2. Controlla la compatibilità",
          en: "2. Check compatibility",
        },
        body: {
          it: "USB-C, Lightning, Android, iPhone, Bluetooth e standard di ricarica possono fare la differenza tra un regalo utile e uno inutilizzabile.",
          en: "USB-C, Lightning, Android, iPhone, Bluetooth and charging standards decide whether the gift works or sits in a drawer.",
        },
      },
      {
        title: {
          it: "3. Evita le specifiche senza contesto",
          en: "3. Skip specs without context",
        },
        body: {
          it: "Più watt, più funzioni o più modalità non significano automaticamente un prodotto migliore. Preferisci semplicità, affidabilità e recensioni coerenti.",
          en: "More watts, more modes, more features do not automatically mean better. Prefer simplicity, reliability and consistent reviews.",
        },
      },
      {
        title: {
          it: "4. Idee che spesso funzionano",
          en: "4. Ideas that usually work",
        },
        body: {
          it: "Non una lista infinita: quattro famiglie con uso reale.",
          en: "Not an endless list: four families with actual use.",
        },
        list: {
          it: [
            "Auricolari cablati o Bluetooth",
            "Caricatori e accessori USB-C",
            "Supporti e accessori per smartphone",
            "Piccoli speaker o accessori da scrivania",
          ],
          en: [
            "Wired or Bluetooth earbuds",
            "USB-C chargers and accessories",
            "Phone stands and accessories",
            "Small speakers or desk accessories",
          ],
        },
      },
    ],
    cta: {
      hrefIt: "/gift-finder?theme=tech&budget=20_50&go=1",
      hrefEn: "/en/gift-finder?theme=tech&budget=20_50&go=1",
      label: { it: "Esplora idee Tech", en: "Explore Tech ideas" },
    },
  },
  {
    slugIt: "come-scegliere-abbonamento-digitale",
    slugEn: "how-to-choose-digital-subscription",
    tag: { it: "Servizi digitali", en: "Digital services" },
    title: {
      it: "Come scegliere un abbonamento digitale.",
      en: "How to choose a digital subscription.",
    },
    description: {
      it: "Prova gratuita, rinnovo, catalogo, compatibilità e cancellazione.",
      en: "Free trial, renewal, catalogue, compatibility and cancellation.",
    },
    lead: {
      it: "La prova gratuita non è il criterio principale. Prima di attivare un servizio, guarda rinnovo, catalogo, dispositivi supportati e facilità di cancellazione.",
      en: "The free trial is not the main criterion. Before you start, look at renewal, catalogue, supported devices and how hard it is to cancel.",
    },
    kind: "article",
    image: "/amazon/kindle.jpg",
    sections: [
      {
        title: { it: "Prova gratuita e rinnovo", en: "Trial and renewal" },
        body: {
          it: "Segna quando termina il periodo promozionale e quale sarà il prezzo successivo. Le condizioni possono cambiare nel tempo.",
          en: "Note when the promo ends and what the next price will be. Terms can change.",
        },
      },
      {
        title: {
          it: "Catalogo e utilizzo reale",
          en: "Catalogue and actual use",
        },
        body: {
          it: "Un catalogo enorme serve poco se non contiene ciò che userai davvero. Valuta film, musica, audiolibri o eBook che ti interessano davvero.",
          en: "A huge catalogue is useless if it does not hold what you will actually use. Check the films, music, audiobooks or eBooks you care about.",
        },
      },
      {
        title: { it: "Dispositivi e famiglia", en: "Devices and family" },
        body: {
          it: "Controlla quanti dispositivi sono supportati, se esiste uso offline e se il servizio è adatto alla condivisione familiare.",
          en: "Check how many devices are supported, whether offline exists, and whether family sharing is real.",
        },
      },
      {
        title: { it: "Cancellazione", en: "Cancellation" },
        body: {
          it: "Prima dell'attivazione verifica dove e come si annulla il rinnovo. È una delle informazioni più importanti in qualsiasi abbonamento.",
          en: "Before you start, check where and how you cancel. It is one of the most important facts in any subscription.",
        },
      },
    ],
    cta: {
      hrefIt: "/amazon-offers",
      hrefEn: "/en/amazon-offers",
      label: { it: "Esplora i servizi Amazon", en: "Explore Amazon services" },
    },
  },
  {
    slugIt: "apple-watch-ultra-4-vs-garmin-fenix-8",
    slugEn: "apple-watch-ultra-4-vs-garmin-fenix-8",
    tag: { it: "Confronto", en: "Comparison" },
    title: {
      it: "Apple Watch Ultra 4 vs Garmin fēnix 8.",
      en: "Apple Watch Ultra 4 vs Garmin fēnix 8.",
    },
    description: {
      it: "Autonomia, GPS, mappe, sport, ecosistema e uso quotidiano.",
      en: "Battery, GPS, maps, sport, ecosystem and daily use.",
    },
    lead: {
      it: "Due approcci premium molto diversi: Apple punta su integrazione smart e monitoraggio wellness; Garmin su autonomia, mappe e profondità multisport. Nessuno dei due è un dispositivo medico.",
      en: "Two premium approaches: Apple leans on smart integration and wellness tracking; Garmin on battery, maps and multisport depth. Neither is a medical device.",
    },
    kind: "compare",
    image: "/guides/compare-watches.jpg",
    table: {
      headers: {
        it: ["Criterio", "Apple Watch Ultra 4", "Garmin fēnix 8"],
        en: ["Criterion", "Apple Watch Ultra 4", "Garmin fēnix 8"],
      },
      rows: [
        {
          label: { it: "Autonomia", en: "Battery" },
          a: {
            it: "Autonomia dichiarata da Apple: fino a 50 ore uso quotidiano; 84 ore in Low Power Mode.",
            en: "Apple-claimed battery: up to 50 hours daily; 84 hours in Low Power Mode.",
          },
          b: {
            it: "Autonomia dichiarata da Garmin: da giorni a settimane; il 47 mm AMOLED fino a 16 giorni in modalità smartwatch.",
            en: "Garmin-claimed battery: days to weeks; the 47 mm AMOLED up to 16 days in smartwatch mode.",
          },
        },
        {
          label: { it: "Sport e GPS", en: "Sport and GPS" },
          a: {
            it: "GPS avanzato, nuovi sensori e Readiness score.",
            en: "Advanced GPS, newer sensors and a Readiness score.",
          },
          b: {
            it: "GPS multibanda, mappe precaricate, Training Readiness e profilo multisport esteso.",
            en: "Multiband GPS, preloaded maps, Training Readiness and a deep multisport profile.",
          },
        },
        {
          label: { it: "Ecosistema", en: "Ecosystem" },
          a: {
            it: "Integrazione stretta con iPhone, Apple Health e servizi Apple.",
            en: "Tight integration with iPhone, Apple Health and Apple services.",
          },
          b: {
            it: "Garmin Connect, compatibilità ampia con iOS e Android.",
            en: "Garmin Connect, broad compatibility with iOS and Android.",
          },
        },
        {
          label: { it: "Uso quotidiano", en: "Daily use" },
          a: {
            it: "Più orientato a smartwatch completo, app e integrazione Apple.",
            en: "More of a full smartwatch, with apps and Apple integration.",
          },
          b: {
            it: "Più orientato a outdoor, endurance, navigazione e lunga autonomia.",
            en: "More outdoor, endurance, navigation and long battery.",
          },
        },
      ],
    },
    verdict: {
      it: "Se vuoi uno smartwatch completo dentro l'ecosistema Apple, Ultra 4 è più naturale. Se vuoi autonomia nettamente superiore, mappe e strumenti endurance profondi, fēnix 8 resta una scelta molto forte.",
      en: "If you want a full smartwatch inside Apple, Ultra 4 is the natural pick. If you want clearly longer battery, maps and deep endurance tools, fēnix 8 stays very strong.",
    },
    cta: {
      hrefIt: "/tech/apple-watch-ultra-4",
      hrefEn: "/en/tech/apple-watch-ultra-4",
      label: { it: "Vedi Apple Watch Ultra 4", en: "See Apple Watch Ultra 4" },
    },
  },
  {
    slugIt: "audible-vs-kindle-unlimited",
    slugEn: "audible-vs-kindle-unlimited",
    tag: { it: "Confronto", en: "Comparison" },
    title: {
      it: "Audible vs Kindle Unlimited.",
      en: "Audible vs Kindle Unlimited.",
    },
    description: {
      it: "Ascolto o lettura: due servizi diversi per abitudini diverse.",
      en: "Listening or reading: two different services for different habits.",
    },
    lead: {
      it: "Non sono veri concorrenti diretti: uno è costruito intorno all'ascolto, l'altro alla lettura digitale.",
      en: "They are not direct rivals: one is built around listening, the other around digital reading.",
    },
    kind: "compare",
    image: "/amazon/audible.jpg",
    table: {
      headers: {
        it: ["Criterio", "Audible", "Kindle Unlimited"],
        en: ["Criterion", "Audible", "Kindle Unlimited"],
      },
      rows: [
        {
          label: { it: "Formato", en: "Format" },
          a: {
            it: "Audiolibri, podcast e contenuti audio.",
            en: "Audiobooks, podcasts and audio titles.",
          },
          b: {
            it: "eBook e selezioni di lettura digitale.",
            en: "eBooks and digital reading selections.",
          },
        },
        {
          label: { it: "Uso ideale", en: "Best for" },
          a: {
            it: "Viaggi, camminate, auto, momenti senza schermo.",
            en: "Travel, walking, driving, time without a screen.",
          },
          b: {
            it: "Lettura su Kindle, smartphone, tablet o app Kindle.",
            en: "Reading on Kindle, phone, tablet or the Kindle app.",
          },
        },
        {
          label: { it: "Prova gratuita", en: "Free trial" },
          a: {
            it: "Prova eventuale per clienti idonei; durata, prezzo successivo e rinnovo automatico sulla pagina Amazon/Audible.",
            en: "A trial may be available for eligible customers; length, next price and auto-renewal are on the Amazon/Audible page.",
          },
          b: {
            it: "Prova eventuale per clienti idonei; durata e rinnovo secondo le condizioni Amazon in vigore.",
            en: "A trial may be available for eligible customers; length and renewal follow Amazon's current terms.",
          },
        },
        {
          label: { it: "Per chi", en: "Who it is for" },
          a: {
            it: "Chi ascolta più di quanto legge.",
            en: "Anyone who listens more than they read.",
          },
          b: {
            it: "Chi legge spesso e vuole esplorare molti titoli.",
            en: "Anyone who reads often and wants to explore many titles.",
          },
        },
      ],
    },
    verdict: {
      it: "Scegli Audible se vuoi consumare storie mentre fai altro. Scegli Kindle Unlimited se preferisci leggere e vuoi un catalogo ampio su più dispositivi.",
      en: "Choose Audible if you want stories while doing something else. Choose Kindle Unlimited if you prefer to read and want a wide catalogue on more devices.",
    },
    cta: {
      hrefIt: "/amazon-offers",
      hrefEn: "/en/amazon-offers",
      label: { it: "Esplora i servizi Amazon", en: "Explore Amazon services" },
    },
  },
  {
    slugIt: "prime-vs-prime-student",
    slugEn: "prime-vs-prime-student",
    tag: { it: "Confronto", en: "Comparison" },
    title: {
      it: "Prime vs Prime Student.",
      en: "Prime vs Prime Student.",
    },
    description: {
      it: "Per chi sono pensati e cosa controllare prima di attivarli.",
      en: "Who they are for, and what to check before you sign up.",
    },
    lead: {
      it: "Prime Student è una versione dedicata agli studenti idonei; il punto decisivo non è il nome del piano, ma se rientri nei requisiti e quali condizioni sono attive al momento.",
      en: "Prime Student is for eligible students. The deciding point is not the plan name — it is whether you qualify, and which terms are live right now.",
    },
    kind: "compare",
    image: "/amazon/student.jpg",
    table: {
      headers: {
        it: ["Criterio", "Amazon Prime", "Prime Student"],
        en: ["Criterion", "Amazon Prime", "Prime Student"],
      },
      rows: [
        {
          label: { it: "Destinatari", en: "Audience" },
          a: {
            it: "Clienti Amazon in generale.",
            en: "Amazon customers in general.",
          },
          b: {
            it: "Studenti idonei secondo i requisiti Amazon.",
            en: "Students who meet Amazon's requirements.",
          },
        },
        {
          label: { it: "Vantaggi", en: "Benefits" },
          a: {
            it: "Include i vantaggi Prime previsti dal piano.",
            en: "Includes the Prime benefits of the plan.",
          },
          b: {
            it: "Include vantaggi Prime con condizioni dedicate agli studenti.",
            en: "Includes Prime benefits with student-specific terms.",
          },
        },
        {
          label: { it: "Promozioni", en: "Promotions" },
          a: {
            it: "Possono esserci prove gratuite per clienti idonei.",
            en: "Free trials may exist for eligible customers.",
          },
          b: {
            it: "Possono esserci periodi promozionali dedicati più estesi, soggetti ai requisiti Amazon.",
            en: "Longer dedicated promo periods may exist, subject to Amazon's rules.",
          },
        },
        {
          label: { it: "Scelta pratica", en: "Practical choice" },
          a: {
            it: "Se non sei studente o non sei idoneo.",
            en: "If you are not a student, or you do not qualify.",
          },
          b: {
            it: "Se sei studente idoneo e vuoi sfruttare condizioni dedicate.",
            en: "If you are an eligible student and want the dedicated terms.",
          },
        },
      ],
    },
    verdict: {
      it: "Controlla sempre la pagina Amazon prima dell'iscrizione: durata della prova, prezzo successivo e requisiti possono cambiare. Prime Student ha senso solo se soddisfi davvero i criteri di idoneità.",
      en: "Always check Amazon before signing up: trial length, next price and requirements can change. Prime Student only makes sense if you actually qualify.",
    },
    cta: {
      hrefIt: "/amazon-offers",
      hrefEn: "/en/amazon-offers",
      label: { it: "Vedi Prime e Prime Student", en: "See Prime and Prime Student" },
    },
  },
];

export function getGuide(locale: Locale, slug: string) {
  return guides.find((g) =>
    locale === "en" ? g.slugEn === slug : g.slugIt === slug,
  );
}

export function guidePath(locale: Locale, guide: Guide) {
  return locale === "en"
    ? `/en/guides/${guide.slugEn}`
    : `/guides/${guide.slugIt}`;
}
