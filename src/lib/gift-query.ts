import { GIFT_THEMES, themesOf, type GiftProduct } from "@/lib/gifts";
import type { Locale } from "@/lib/i18n";

export type GiftWho = "all" | "mamma" | "papà";
export type GiftBudget = "all" | "sotto_20" | "20_50" | "50_100" | "oltre_100";
export type GiftTheme = (typeof GIFT_THEMES)[number]["id"];
export type GiftSort = "featured" | "priceAsc" | "priceDesc";

export type GiftQuery = {
  who: GiftWho;
  budget: GiftBudget;
  theme: GiftTheme;
  sort: GiftSort;
  shown: number;
  go: boolean;
};

function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

function asWho(value?: string): GiftWho {
  if (value === "mamma" || value === "papà" || value === "all") return value;
  if (value === "papa") return "papà";
  return "all";
}

function asBudget(value?: string): GiftBudget {
  if (
    value === "sotto_20" ||
    value === "20_50" ||
    value === "50_100" ||
    value === "oltre_100" ||
    value === "all"
  ) {
    return value;
  }
  return "all";
}

function asTheme(value?: string): GiftTheme {
  return GIFT_THEMES.some((item) => item.id === value) ? (value as GiftTheme) : "all";
}

function asSort(value?: string): GiftSort {
  if (value === "priceAsc" || value === "priceDesc" || value === "featured") return value;
  return "featured";
}

export function parseGiftQuery(
  query: Record<string, string | string[] | undefined>,
): GiftQuery {
  const who = asWho(first(query.who));
  const budget = asBudget(first(query.budget));
  const theme = asTheme(first(query.theme));
  const goParam = first(query.go);
  const shownRaw = Number(first(query.shown) ?? "24");
  return {
    who,
    budget,
    theme,
    sort: asSort(first(query.sort)),
    shown: Number.isFinite(shownRaw) && shownRaw > 0 ? shownRaw : 24,
    go: goParam === "1" || Boolean(theme !== "all") || Boolean(who !== "all" && first(query.who)),
  };
}

export function giftFinderPath(locale: Locale) {
  return locale === "en" ? "/en/gift-finder/" : "/gift-finder/";
}

export function giftHref(locale: Locale, query: Partial<GiftQuery> & { go?: boolean }) {
  const params = new URLSearchParams();
  if (query.who && query.who !== "all") params.set("who", query.who);
  if (query.budget && query.budget !== "all") params.set("budget", query.budget);
  if (query.theme && query.theme !== "all") params.set("theme", query.theme);
  if (query.sort && query.sort !== "featured") params.set("sort", query.sort);
  if (query.shown && query.shown !== 24) params.set("shown", String(query.shown));
  if (query.go) params.set("go", "1");
  const qs = params.toString();
  return qs ? `${giftFinderPath(locale)}?${qs}` : giftFinderPath(locale);
}

export function filterGifts(products: GiftProduct[], query: GiftQuery) {
  const list = products.filter((product) => {
    if (query.who !== "all" && product.c !== query.who && product.c !== "all") return false;
    if (query.budget !== "all" && product.b !== query.budget) return false;
    if (query.theme !== "all" && !themesOf(product.t).includes(query.theme)) return false;
    return true;
  });
  if (query.sort === "priceAsc") return [...list].sort((a, b) => a.p - b.p);
  if (query.sort === "priceDesc") return [...list].sort((a, b) => b.p - a.p);
  return list;
}
