import { buyerGuides } from "@/lib/buyer-guides";
import { guides } from "@/lib/guides";
import { stackCampaigns } from "@/lib/stack";
import { techProducts } from "@/lib/tech";

export type RouteMatch =
  | { kind: "home"; locale: "it" | "en" }
  | { kind: "gifts"; locale: "it" | "en" }
  | { kind: "tech"; locale: "it" | "en" }
  | { kind: "tech-detail"; locale: "it" | "en"; slug: string }
  | { kind: "amazon"; locale: "it" | "en" }
  | { kind: "guides"; locale: "it" | "en" }
  | { kind: "guide-detail"; locale: "it" | "en"; slug: string }
  | { kind: "buyer-guide"; locale: "it" | "en"; slug: string }
  | { kind: "stack"; locale: "it" | "en" }
  | { kind: "stack-detail"; locale: "it" | "en"; slug: string }
  | { kind: "not-found"; locale: "it" | "en" };

export function matchRoute(path: string[] = []): RouteMatch {
  const locale = path[0] === "en" ? "en" : "it";
  const rest = locale === "en" ? path.slice(1) : path;
  const [section, slug] = rest;

  if (!section) return { kind: "home", locale };
  if (section === "gift-finder" && !slug) return { kind: "gifts", locale };
  if (section === "tech" && !slug) return { kind: "tech", locale };
  if (section === "tech" && slug && techProducts.some((p) => p.slug === slug) && rest.length === 2) {
    return { kind: "tech-detail", locale, slug };
  }
  if (section === "amazon-offers" && !slug) return { kind: "amazon", locale };
  if (section === "guides" && !slug) return { kind: "guides", locale };
  if (section === "guides" && slug && rest.length === 2) {
    const exists = guides.some((g) => (locale === "en" ? g.slugEn : g.slugIt) === slug);
    if (exists) return { kind: "guide-detail", locale, slug };
  }
  if (section === "guide" && slug && rest.length === 2) {
    const exists = buyerGuides.some((g) => (locale === "en" ? g.slugEn : g.slugIt) === slug);
    if (exists) return { kind: "buyer-guide", locale, slug };
  }
  if (section === "stack" && !slug) return { kind: "stack", locale };
  if (section === "stack" && slug && stackCampaigns.some((c) => c.slug === slug) && rest.length === 2) {
    return { kind: "stack-detail", locale, slug };
  }
  return { kind: "not-found", locale };
}

function pathsForLocale(locale: "it" | "en") {
  const prefix = locale === "en" ? ["en"] : [];
  const paths: { path: string[] }[] = [{ path: [...prefix] }];
  const sections = ["gift-finder", "tech", "amazon-offers", "guides", "stack"];
  for (const section of sections) {
    paths.push({ path: [...prefix, section] });
  }
  for (const p of techProducts) {
    paths.push({ path: [...prefix, "tech", p.slug] });
  }
  for (const g of guides) {
    const slug = locale === "en" ? g.slugEn : g.slugIt;
    paths.push({ path: [...prefix, "guides", slug] });
  }
  for (const g of buyerGuides) {
    const slug = locale === "en" ? g.slugEn : g.slugIt;
    paths.push({ path: [...prefix, "guide", slug] });
  }
  for (const c of stackCampaigns) {
    paths.push({ path: [...prefix, "stack", c.slug] });
  }
  return paths;
}

/** Full site paths (with optional en prefix) — used by sitemap. */
export function allStaticPaths() {
  return [...pathsForLocale("it"), ...pathsForLocale("en")];
}

/** IT catch-all params (no en segment). */
export function allItStaticPaths() {
  return pathsForLocale("it").map(({ path }) => ({ path }));
}

/** EN catch-all params under /en/* (path without leading en). */
export function allEnStaticPaths() {
  return pathsForLocale("en").map(({ path }) => ({
    path: path.slice(1), // drop "en"
  }));
}

export function canonicalFor(match: RouteMatch) {
  const prefix = match.locale === "en" ? "https://bjbeyond.pro/en" : "https://bjbeyond.pro";
  switch (match.kind) {
    case "home":
      return match.locale === "en" ? "https://bjbeyond.pro/en/" : "https://bjbeyond.pro/";
    case "gifts":
      return `${prefix}/gift-finder/`;
    case "tech":
      return `${prefix}/tech/`;
    case "tech-detail":
      return `${prefix}/tech/${match.slug}/`;
    case "amazon":
      return `${prefix}/amazon-offers/`;
    case "guides":
      return `${prefix}/guides/`;
    case "guide-detail":
      return `${prefix}/guides/${match.slug}/`;
    case "buyer-guide":
      return `${prefix}/guide/${match.slug}/`;
    case "stack":
      return `${prefix}/stack/`;
    case "stack-detail":
      return `${prefix}/stack/${match.slug}/`;
    default:
      return "https://bjbeyond.pro/";
  }
}
