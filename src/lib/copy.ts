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
  awinDisclosure: string;
  awinCommission: string;
  paidLink: string;
  priceDisclaimer: string;
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
    footerNote:
      "Pubblicità. I link Amazon sono link a pagamento del Programma Affiliazione. Le campagne Stack usano Awin (Impact per Ultrahuman) e sono pubblicità tracciata.",
    amazonTm:
      "Amazon e il logo Amazon sono marchi di Amazon.com, Inc. o delle sue affiliate.",
    noDirectSales:
      "Questo sito non vende direttamente prodotti e non gestisce pagamenti, spedizioni, rinnovi o cancellazioni.",
    disclosure:
      "In qualità di Affiliato Amazon io ricevo un guadagno dagli acquisti idonei.",
    awinDisclosure:
      "Le campagne Stack sono pubblicità. ESR, IMOU, Toputure, Lingzio e Waterdrop usano link Awin; Ultrahuman usa Impact. BJ Beyond può ricevere una commissione se acquisti tramite quei link, senza costi extra per te.",
    awinCommission:
      "Link di affiliazione Awin. Posso ricevere una commissione senza costi extra per te.",
    paidLink: "link a pagamento",
    priceDisclaimer:
      "Prezzo e disponibilità su Amazon.it; possono variare. Verifica sempre sulla scheda Amazon.",
    editorialNote:
      "Le guide restano editoriali: i link a prodotti o servizi Amazon sono comunque link a pagamento.",
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
    footerNote:
      "Advertising. Amazon links are paid Associates Program links. Stack campaigns use Awin (Impact for Ultrahuman) and are tracked advertising.",
    amazonTm:
      "Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.",
    noDirectSales:
      "This site does not sell products directly and does not handle payments, shipping, renewals or cancellations.",
    disclosure:
      "As an Amazon Associate I earn from qualifying purchases.",
    awinDisclosure:
      "Stack campaigns are advertising. ESR, IMOU, Toputure, Lingzio and Waterdrop use Awin links; Ultrahuman uses Impact. BJ Beyond may earn a commission if you buy through those links, at no extra cost to you.",
    awinCommission:
      "Awin affiliate links. I may earn a commission at no extra cost to you.",
    paidLink: "paid link",
    priceDisclaimer:
      "Price and availability are on Amazon.it and can change. Always check the Amazon listing.",
    editorialNote:
      "Guides stay editorial: Amazon product or service links are still paid links.",
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
