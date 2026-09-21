import Link from "next/link";
import { AffiliateNote, PriceNote } from "@/components/ui-bits";
import { ProductImage } from "@/components/product-image";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import {
  filterGifts,
  giftFinderPath,
  giftHref,
  type GiftBudget,
  type GiftQuery,
  type GiftTheme,
  type GiftWho,
} from "@/lib/gift-query";
import { GIFT_THEMES, type GiftProduct } from "@/lib/gifts";
import type { Locale } from "@/lib/i18n";
import { formatEuro, cn } from "@/lib/utils";

export function GiftFinder({
  locale,
  products,
  query,
}: {
  locale: Locale;
  products: GiftProduct[];
  query: GiftQuery;
}) {
  const t = copy[locale];
  if (!query.go) {
    return <GiftQuiz locale={locale} query={query} />;
  }

  const filtered = filterGifts(products, query);
  const visible = filtered.slice(0, query.shown);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href={giftFinderPath(locale)}
        className="mb-6 inline-flex h-11 items-center rounded-full border border-foreground/15 bg-card px-4 text-sm font-semibold hover:bg-secondary"
      >
        ← {t.changeAnswers}
      </Link>
      <div className="border-y border-foreground/8 py-5">
        <p className="mb-3 text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
          {locale === "it" ? "Categorie" : "Categories"}
        </p>
        <div className="flex flex-wrap gap-2">
          {GIFT_THEMES.map((theme) => (
            <Link
              key={theme.id}
              href={giftHref(locale, { ...query, theme: theme.id as GiftTheme, go: true, shown: 24 })}
              className={cn(
                "rounded-full border px-3.5 py-2 text-sm",
                query.theme === theme.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-foreground/12 bg-card hover:bg-secondary",
              )}
            >
              {t.themes[theme.id]}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>{t.countGifts(filtered.length)}</p>
        <form method="get" action={giftFinderPath(locale)} className="flex items-center gap-2">
          <input type="hidden" name="go" value="1" />
          {query.who !== "all" ? <input type="hidden" name="who" value={query.who} /> : null}
          {query.budget !== "all" ? (
            <input type="hidden" name="budget" value={query.budget} />
          ) : null}
          {query.theme !== "all" ? <input type="hidden" name="theme" value={query.theme} /> : null}
          <label className="flex items-center gap-2">
            <span className="sr-only">{locale === "it" ? "Ordina" : "Sort"}</span>
            <select
              name="sort"
              defaultValue={query.sort}
              className="h-10 rounded-xl border border-foreground/12 bg-card px-3"
            >
              <option value="featured">{t.featured}</option>
              <option value="priceAsc">{t.priceAsc}</option>
              <option value="priceDesc">{t.priceDesc}</option>
            </select>
          </label>
          <button
            type="submit"
            className="h-10 rounded-full border border-foreground/12 px-3 text-xs font-semibold"
          >
            {locale === "it" ? "Ordina" : "Sort"}
          </button>
        </form>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <h2 className="text-3xl">{t.emptyTitle}</h2>
          <p className="mt-2 text-muted-foreground">{t.emptyText}</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product) => (
            <article
              key={product.u}
              className="flex flex-col overflow-hidden rounded-[22px] border border-foreground/8 bg-card"
            >
              <ProductImage src={product.i} alt={product.t} />
              <div className="flex flex-1 flex-col gap-3 p-4">
                <p className="kicker">
                  {product.c === "mamma"
                    ? t.forMum
                    : product.c === "papà"
                      ? t.forDad
                      : t.nav.tech}{" "}
                  · {t.budgets[product.b]}
                </p>
                <h2 className="line-clamp-3 font-sans text-[15px] font-bold tracking-tight">
                  {product.t}
                </h2>
                <p className="mt-auto font-serif text-2xl">
                  {formatEuro(product.p, locale)}{" "}
                  <small className="align-middle font-sans text-[11px] text-muted-foreground">
                    {t.indicative}
                  </small>
                </p>
                <PriceNote locale={locale} />
                <a
                  href={product.u}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
                >
                  {t.seeAmazon}
                </a>
                <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                  {t.paidLink}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      {visible.length < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <Link
            href={giftHref(locale, { ...query, go: true, shown: query.shown + 24 })}
            className="inline-flex h-11 items-center rounded-full border border-foreground/15 px-5 text-sm font-semibold"
          >
            {t.loadMore}
          </Link>
        </div>
      ) : null}

      <AffiliateNote locale={locale} className="mt-10" />
    </section>
  );
}

function GiftQuiz({ locale, query }: { locale: Locale; query: GiftQuery }) {
  const t = copy[locale];
  const action = giftFinderPath(locale);
  const whoOptions: { id: GiftWho; label: string }[] = [
    { id: "all", label: t.all },
    { id: "mamma", label: t.forMum },
    { id: "papà", label: t.forDad },
  ];
  const budgetOptions = Object.keys(t.budgets) as GiftBudget[];

  return (
    <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-20">
      <SceneVisual
        scene="gifts"
        className="mb-8 min-h-[180px] rounded-[28px] sm:min-h-[220px]"
        label={
          locale === "it"
            ? "Pacco di lino, rosa e collana sul tavolo"
            : "Linen gift, rose and necklace on the table"
        }
      />
      <p className="kicker">{t.quizEyebrow}</p>
      <h1 className="mt-3 text-4xl leading-[0.94] sm:text-6xl">
        {locale === "it" ? (
          <>
            Tre domande.
            <br />
            Poi il regalo.
          </>
        ) : (
          <>
            Three questions.
            <br />
            Then the gift.
          </>
        )}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-7 text-muted-foreground">
        {locale === "it"
          ? "Niente lista infinita. Scegli per chi, il budget e la categoria. Ok, e vedi solo quello che ha senso."
          : "No endless list. Choose who, budget and category. Ok, and you only see what fits."}
      </p>

      <form
        method="get"
        action={action}
        className="mt-10 rounded-[28px] border border-foreground/8 bg-card p-5 shadow-[0_18px_50px_rgba(40,24,10,.08)] sm:p-8"
      >
        <input type="hidden" name="go" value="1" />
        <fieldset className="border-b border-foreground/8 py-5">
          <legend className="kicker">01</legend>
          <p className="mt-1 mb-3 text-base font-semibold">{t.qWho}</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {whoOptions.map((option) => (
              <RadioChip
                key={option.id}
                name="who"
                value={option.id}
                defaultChecked={query.who === option.id}
                label={option.label}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className="border-b border-foreground/8 py-5">
          <legend className="kicker">02</legend>
          <p className="mt-1 mb-3 text-base font-semibold">{t.qBudget}</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {budgetOptions.map((id) => (
              <RadioChip
                key={id}
                name="budget"
                value={id}
                defaultChecked={query.budget === id}
                label={t.budgets[id]}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className="py-5">
          <legend className="kicker">03</legend>
          <p className="mt-1 mb-3 text-base font-semibold">{t.qCat}</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {GIFT_THEMES.map((theme) => (
              <RadioChip
                key={theme.id}
                name="theme"
                value={theme.id}
                defaultChecked={query.theme === theme.id}
                label={t.themes[theme.id]}
              />
            ))}
          </div>
        </fieldset>
        <button
          id="gift-quiz-submit"
          type="submit"
          className="mt-4 inline-flex h-14 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(22,18,14,.18)]"
        >
          {t.quizOk}
        </button>
        <p className="mt-4 text-center text-sm">
          <Link
            href={giftHref(locale, { go: true, shown: 24 })}
            className="font-semibold underline-offset-4 hover:underline"
          >
            {locale === "it" ? "Vedi tutte le idee" : "See all ideas"}
          </Link>
        </p>
      </form>
      <AffiliateNote locale={locale} className="mt-8" />
    </section>
  );
}

function RadioChip({
  name,
  value,
  defaultChecked,
  label,
}: {
  name: string;
  value: string;
  defaultChecked: boolean;
  label: string;
}) {
  return (
    <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-foreground/12 bg-[#fffdf8] px-3.5 py-3 text-sm font-medium has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="size-4 shrink-0 accent-current"
      />
      <span>{label}</span>
    </label>
  );
}
