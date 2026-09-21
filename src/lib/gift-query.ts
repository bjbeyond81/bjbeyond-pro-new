import type { GiftFinderInitial } from "@/components/gift-finder";

function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export function giftInitialFromQuery(
  query: Record<string, string | string[] | undefined>,
): GiftFinderInitial {
  const who = first(query.who);
  const budget = first(query.budget);
  const theme = first(query.theme);
  const go = first(query.go);
  return {
    who,
    budget,
    theme,
    go: go === "1" || Boolean(theme) || Boolean(who && who !== "all"),
  };
}
