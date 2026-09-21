"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { copy } from "@/lib/copy";
import { GIFT_THEMES, themesOf, type GiftProduct } from "@/lib/gifts";
import type { Locale } from "@/lib/i18n";
import { formatEuro, cn } from "@/lib/utils";
import { ProductImage } from "@/components/product-image";
import { AffiliateNote } from "@/components/ui-bits";
import { Button } from "@/components/ui/button";

type ThemeId = (typeof GIFT_THEMES)[number]["id"];

type Who = "all" | "mamma" | "papà";
type Budget = "all" | "sotto_20" | "20_50" | "50_100" | "oltre_100";
type Sort = "featured" | "priceAsc" | "priceDesc";

function subscribeSearch(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getSearch() {
  return window.location.search;
}

function getServerSearch() {
  return "";
}

function parseSearch(search: string) {
  const q = new URLSearchParams(search);
  return {
    who: q.get("who") ?? undefined,
    budget: q.get("budget") ?? undefined,
    theme: q.get("theme") ?? undefined,
    go: q.get("go") === "1",
  };
}

export function GiftFinder({
  locale,
  products,
}: {
  locale: Locale;
  products: GiftProduct[];
}) {
  const t = copy[locale];
  const search = useSyncExternalStore(subscribeSearch, getSearch, getServerSearch);
  const query = parseSearch(search);
  const urlTheme = GIFT_THEMES.some((x) => x.id === query.theme)
    ? (query.theme as ThemeId)
    : "all";
  const urlStage: "quiz" | "results" =
    query.go || Boolean(query.theme) || Boolean(query.who && query.who !== "all")
      ? "results"
      : "quiz";

  const [who, setWho] = useState<Who | null>(null);
  const [budget, setBudget] = useState<Budget | null>(null);
  const [theme, setTheme] = useState<ThemeId | null>(null);
  const [stage, setStage] = useState<"quiz" | "results" | null>(null);
  const [sort, setSort] = useState<Sort>("featured");
  const [shown, setShown] = useState(24);

  const effectiveWho = who ?? normalizeWho(query.who);
  const effectiveBudget = budget ?? normalizeBudget(query.budget);
  const effectiveTheme = theme ?? urlTheme;
  const effectiveStage = stage ?? urlStage;

  const filtered = useMemo(() => {
    const list = products.filter((p) => {
      if (effectiveWho !== "all" && p.c !== effectiveWho && p.c !== "all") return false;
      if (effectiveBudget !== "all" && p.b !== effectiveBudget) return false;
      if (effectiveTheme !== "all" && !themesOf(p.t).includes(effectiveTheme)) return false;
      return true;
    });
    if (sort === "priceAsc") return [...list].sort((a, b) => a.p - b.p);
    if (sort === "priceDesc") return [...list].sort((a, b) => b.p - a.p);
    return list;
  }, [products, effectiveWho, effectiveBudget, effectiveTheme, sort]);

  const visible = filtered.slice(0, shown);

  if (effectiveStage === "quiz") {
    return (
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="kicker">{t.quizEyebrow}</p>
        <h1
          className="mt-3 text-4xl leading-[0.94] sm:text-6xl"
          dangerouslySetInnerHTML={{
            __html:
              locale === "it"
                ? "Tre domande.<br />Poi il regalo."
                : "Three questions.<br />Then the gift.",
          }}
        />
        <p className="mt-5 max-w-xl text-lg leading-7 text-muted-foreground">
          {locale === "it"
            ? "Niente lista infinita. Scegli per chi, il budget e la categoria. Ok, e vedi solo quello che ha senso."
            : "No endless list. Choose who, budget and category. Ok, and you only see what fits."}
        </p>

        <div className="mt-10 rounded-[28px] border border-foreground/8 bg-card p-5 shadow-[0_18px_50px_rgba(40,24,10,.08)] sm:p-8">
          <Question n="01" label={t.qWho}>
            <ChipRow>
              <Chip active={effectiveWho === "all"} onClick={() => setWho("all")}>{t.all}</Chip>
              <Chip active={effectiveWho === "mamma"} onClick={() => setWho("mamma")}>{t.forMum}</Chip>
              <Chip active={effectiveWho === "papà"} onClick={() => setWho("papà")}>{t.forDad}</Chip>
            </ChipRow>
          </Question>
          <Question n="02" label={t.qBudget}>
            <ChipRow>
              {(Object.keys(t.budgets) as Budget[]).map((id) => (
                <Chip key={id} active={effectiveBudget === id} onClick={() => setBudget(id)}>
                  {t.budgets[id]}
                </Chip>
              ))}
            </ChipRow>
          </Question>
          <Question n="03" label={t.qCat} last>
            <ChipRow>
              {GIFT_THEMES.map((th) => (
                <Chip key={th.id} active={effectiveTheme === th.id} onClick={() => setTheme(th.id)}>
                  {t.themes[th.id]}
                </Chip>
              ))}
            </ChipRow>
          </Question>
          <Button
            className="mt-4 h-12 w-full text-base"
            onClick={() => {
              setShown(24);
              setStage("results");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {t.quizOk}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        type="button"
        className="mb-6 text-sm text-muted-foreground hover:text-foreground"
        onClick={() => {
          setStage("quiz");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ← {t.changeAnswers}
      </button>
      <div className="border-y border-foreground/8 py-5">
        <p className="mb-3 text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
          {locale === "it" ? "Categorie" : "Categories"}
        </p>
        <ChipRow>
          {GIFT_THEMES.map((th) => (
            <Chip
              key={th.id}
              active={effectiveTheme === th.id}
              onClick={() => {
                setTheme(th.id);
                setShown(24);
              }}
            >
              {t.themes[th.id]}
            </Chip>
          ))}
        </ChipRow>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>{t.countGifts(filtered.length)}</p>
        <label className="flex items-center gap-2">
          <span className="sr-only">{locale === "it" ? "Ordina" : "Sort"}</span>
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as Sort);
              setShown(24);
            }}
            className="h-10 rounded-xl border border-foreground/12 bg-card px-3"
          >
            <option value="featured">{t.featured}</option>
            <option value="priceAsc">{t.priceAsc}</option>
            <option value="priceDesc">{t.priceDesc}</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-3xl">{t.emptyTitle}</h2>
          <p className="mt-2 text-muted-foreground">{t.emptyText}</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <article
              key={p.u}
              className="flex flex-col overflow-hidden rounded-[22px] border border-foreground/8 bg-card"
            >
              <ProductImage src={p.i} alt={p.t} />
              <div className="flex flex-1 flex-col gap-3 p-4">
                <p className="kicker">
                  {p.c === "mamma" ? t.forMum : p.c === "papà" ? t.forDad : t.nav.tech} · {t.budgets[p.b]}
                </p>
                <h2 className="line-clamp-3 font-sans text-[15px] font-bold tracking-tight">
                  {p.t}
                </h2>
                <p className="mt-auto font-serif text-2xl">
                  {formatEuro(p.p, locale)}{" "}
                  <small className="align-middle font-sans text-[11px] text-muted-foreground">
                    {t.indicative}
                  </small>
                </p>
                <a
                  href={p.u}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
                >
                  {t.seeAmazon}
                </a>
              </div>
            </article>
          ))}
        </div>
      )}

      {visible.length < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <Button variant="outline" onClick={() => setShown((n) => n + 24)}>
            {t.loadMore}
          </Button>
        </div>
      ) : null}

      <AffiliateNote locale={locale} className="mt-10" />
    </section>
  );
}

function Question({
  n,
  label,
  children,
  last,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={cn("py-5", !last && "border-b border-foreground/8")}>
      <span className="kicker">{n}</span>
      <p className="mt-1 mb-3 text-base font-semibold">{label}</p>
      {children}
    </div>
  );
}

function ChipRow({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-2 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-foreground/12 bg-card hover:bg-secondary",
      )}
    >
      {children}
    </button>
  );
}

function normalizeWho(value?: string): Who {
  if (value === "mamma" || value === "papà" || value === "all") return value;
  if (value === "papa") return "papà";
  return "all";
}

function normalizeBudget(value?: string): Budget {
  if (value === "sotto_20" || value === "20_50" || value === "50_100" || value === "oltre_100" || value === "all") {
    return value;
  }
  return "all";
}
