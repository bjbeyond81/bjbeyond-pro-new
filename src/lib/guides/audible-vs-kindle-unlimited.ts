import type { Guide } from "./types";

export const guide: Guide = {
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
    image: "https://images.unsplash.com/photo-1565202430270-fa20ff21943a?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2026-09-21",
    dateModified: "2026-09-24",
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
  };
