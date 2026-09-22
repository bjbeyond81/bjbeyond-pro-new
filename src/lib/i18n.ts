export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];

export function isLocale(value: string): value is Locale {
  return value === "it" || value === "en";
}

const guideSlugMap: Record<string, string> = {
  "come-scegliere-smartwatch": "how-to-choose-smartwatch",
  "regali-tech-sotto-50": "tech-gifts-under-50",
  "come-scegliere-abbonamento-digitale": "how-to-choose-digital-subscription",
};

const guideSlugMapReverse = Object.fromEntries(
  Object.entries(guideSlugMap).map(([it, en]) => [en, it]),
);

export type NavKey = "home" | "gifts" | "tech" | "amazon" | "guides" | "stack";

export function localizedPath(locale: Locale, path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "it") return clean === "/en" ? "/" : clean;
  if (clean === "/") return "/en";
  return `/en${clean}`;
}

export function swapLocalePath(pathname: string, target: Locale) {
  const raw = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const parts = raw.split("/").filter(Boolean);
  const current: Locale = parts[0] === "en" ? "en" : "it";
  const rest = current === "en" ? parts.slice(1) : parts;

  if (rest[0] === "guides" && rest[1]) {
    if (target === "en") {
      const enSlug = guideSlugMap[rest[1]] ?? rest[1];
      return `/en/guides/${enSlug}`;
    }
    const itSlug = guideSlugMapReverse[rest[1]] ?? rest[1];
    return `/guides/${itSlug}`;
  }

  const joined = rest.length ? `/${rest.join("/")}` : "/";
  return localizedPath(target, joined);
}

export function parseRoute(path: string[] = []) {
  const locale: Locale = path[0] === "en" ? "en" : "it";
  const rest = locale === "en" ? path.slice(1) : path;
  const section = rest[0] ?? "home";
  const slug = rest[1];
  return { locale, section, slug, rest };
}
