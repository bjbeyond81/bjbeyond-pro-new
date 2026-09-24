import type { Guide } from "./types";

export const guide: Guide = {
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
    image: "https://images.unsplash.com/photo-1630448927918-1dbcd8ba439b?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2026-09-21",
    dateModified: "2026-09-24",
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
  };
