import type { Locale } from "@/lib/i18n";

export type Copy = {
  siteName: string;
  tagline: string;
  nav: Record<"gifts" | "tech" | "amazon" | "guides" | "stack", string>;
  menu: string;
  close: string;
  langLabel: string;
  footerNote: string;
  amazonTm: string;
  noDirectSales: string;
  disclosure: string;
  editorialNote: string;
  seeAmazon: string;
  indicative: string;
  readGuide: string;
  readComparison: string;
  openCampaign: string;
  advertising: string;
  curated: string;
  back: string;
  related: string;
  notFoundTitle: string;
  notFoundLead: string;
  goHome: string;
  loadMore: string;
  featured: string;
  priceAsc: string;
  priceDesc: string;
  emptyTitle: string;
  emptyText: string;
  countGifts: (n: number) => string;
  changeAnswers: string;
  quizOk: string;
  quizEyebrow: string;
  qWho: string;
  qBudget: string;
  qCat: string;
  all: string;
  forMum: string;
  forDad: string;
  themes: Record<string, string>;
  budgets: Record<string, string>;
};

export const copy: Record<Locale, Copy> = {
  it: {
    siteName: "BJ Beyond",
    tagline: "Portale di scelta",
    nav: {
      gifts: "Regali",
      tech: "Tech",
      amazon: "Amazon",
      guides: "Guide",
      stack: "Stack",
    },
    menu: "Menu",
    close: "Chiudi",
    langLabel: "Lingua",
    footerNote: "Pubblicità · link affiliati dove indicato.",
    amazonTm:
      "Amazon e il logo Amazon sono marchi di Amazon.com, Inc. o delle sue affiliate.",
    noDirectSales:
      "Questo sito non vende direttamente prodotti e non gestisce pagamenti, spedizioni, rinnovi o cancellazioni.",
    disclosure:
      "In qualità di Affiliato Amazon, BJ Beyond riceve un guadagno dagli acquisti idonei. Per te il prezzo non cambia.",
    editorialNote:
      "Le guide editoriali restano indipendenti dal fatto che un link sia affiliato.",
    seeAmazon: "Vedi su Amazon",
    indicative: "indicativo",
    readGuide: "Leggi la guida",
    readComparison: "Leggi il confronto",
    openCampaign: "Apri la campagna",
    advertising: "Pubblicità",
    curated: "Curato da BJ Beyond.",
    back: "Indietro",
    related: "Vicino a questa scelta",
    notFoundTitle: "Questa pagina non sta.",
    notFoundLead: "Il percorso non esiste, o è stato spostato. Torna al tavolo.",
    goHome: "Torna al portale",
    loadMore: "Mostra altri",
    featured: "In evidenza",
    priceAsc: "Prezzo crescente",
    priceDesc: "Prezzo decrescente",
    emptyTitle: "Nessun risultato",
    emptyText: "Pochi pezzi in questa categoria. Cambia filtro o torna al quiz.",
    countGifts: (n) => `${n} idee regalo`,
    changeAnswers: "Cambia risposte",
    quizOk: "Ok, mostra le scelte",
    quizEyebrow: "Gift quiz",
    qWho: "Per chi stai cercando?",
    qBudget: "Quale budget?",
    qCat: "Che tipo di regalo?",
    all: "Tutti",
    forMum: "Per Mamma",
    forDad: "Per Papà",
    themes: {
      all: "Tutte",
      gioielli: "Gioielli",
      fiori: "Fiori",
      luce: "Casa e luce",
      foto: "Personalizzati",
      tavola: "Tavola",
      ricordi: "Ricordi",
      accessori: "Accessori",
      tech: "Tecnologia",
    },
    budgets: {
      all: "Tutti",
      sotto_20: "Sotto €20",
      "20_50": "€20–50",
      "50_100": "€50–100",
      oltre_100: "€100+",
    },
  },
  en: {
    siteName: "BJ Beyond",
    tagline: "Discovery portal",
    nav: {
      gifts: "Gifts",
      tech: "Tech",
      amazon: "Amazon",
      guides: "Guides",
      stack: "Stack",
    },
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
    footerNote: "Advertising · affiliate links where marked.",
    amazonTm:
      "Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.",
    noDirectSales:
      "This site does not sell products directly and does not handle payments, shipping, renewals or cancellations.",
    disclosure:
      "As an Amazon Associate, BJ Beyond earns from qualifying purchases. The price does not change for you.",
    editorialNote:
      "Editorial guidance is independent of whether a link is affiliated.",
    seeAmazon: "View on Amazon",
    indicative: "indicative",
    readGuide: "Read the guide",
    readComparison: "Read the comparison",
    openCampaign: "Open campaign",
    advertising: "Advertising",
    curated: "Curated by BJ Beyond.",
    back: "Back",
    related: "Next to this choice",
    notFoundTitle: "This page does not belong.",
    notFoundLead: "The path is missing, or it moved. Go back to the table.",
    goHome: "Back to the portal",
    loadMore: "Load more",
    featured: "Featured",
    priceAsc: "Price: low to high",
    priceDesc: "Price: high to low",
    emptyTitle: "No results",
    emptyText: "Few items in this category. Change the filter or return to the quiz.",
    countGifts: (n) => `${n} gift ideas`,
    changeAnswers: "Change answers",
    quizOk: "Ok, show the choices",
    quizEyebrow: "Gift quiz",
    qWho: "Who is it for?",
    qBudget: "What budget?",
    qCat: "What kind of gift?",
    all: "All",
    forMum: "For Mum",
    forDad: "For Dad",
    themes: {
      all: "All",
      gioielli: "Jewellery",
      fiori: "Flowers",
      luce: "Home & light",
      foto: "Personalised",
      tavola: "Table",
      ricordi: "Memories",
      accessori: "Accessories",
      tech: "Tech",
    },
    budgets: {
      all: "All",
      sotto_20: "Under €20",
      "20_50": "€20–50",
      "50_100": "€50–100",
      oltre_100: "€100+",
    },
  },
};
