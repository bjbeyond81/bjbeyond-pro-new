import type { Guide } from "./types";

export const guide: Guide = {
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
    datePublished: "2026-09-21",
    dateModified: "2026-09-24",
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
  };
