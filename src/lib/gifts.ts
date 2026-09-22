export const GIFT_THEMES = [
  { id: "all", keys: [] as string[] },
  { id: "gioielli", keys: ["collana", "bracciale", "anello", "orecchini", "argento", "gioiell"] },
  { id: "fiori", keys: ["rosa", "fiore", "girasole", "uncinetto", "eterna"] },
  { id: "luce", keys: ["lampada", "luce", "notturna"] },
  { id: "foto", keys: ["personalizzat", "foto", "inciso", "incisa", "iniziale", "dedica"] },
  { id: "tavola", keys: ["tazza", "mug", "vino", "calice", "birra", "tagliere", "caff"] },
  { id: "ricordi", keys: ["libro", "domande", "ricordi", "coperta", "cuscino", "targa"] },
  { id: "accessori", keys: ["portachiavi", "borsa", "tote", "sciarpa", "orologio", "portafoglio", "t-shirt", "maglia"] },
  {
    id: "tech",
    keys: [
      "powerbank",
      "usb",
      "iphone",
      "samsung",
      "bluetooth",
      "speaker",
      "cuffie",
      "auricolari",
      "earpod",
      "airpod",
      "smartwatch",
      "caricabatter",
      "caricatore",
      "tech",
      "tecnolog",
    ],
  },
] as const;

export type GiftProduct = {
  c: "all" | "mamma" | "papà";
  b: "sotto_20" | "20_50" | "50_100" | "oltre_100";
  t: string;
  p: number;
  u: string;
  i: string;
};

export function themesOf(title: string) {
  const t = title.toLowerCase();
  return GIFT_THEMES.filter(
    (th) => th.id !== "all" && th.keys.some((k) => t.includes(k)),
  ).map((th) => th.id);
}
