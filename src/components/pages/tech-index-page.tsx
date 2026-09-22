import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro, PriceNote } from "@/components/ui-bits";
import { Badge } from "@/components/ui/badge";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { techCta, techHref, techNetwork, techProducts } from "@/lib/tech";
import { formatEuro } from "@/lib/utils";

export function TechIndexPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SceneVisual
          scene="tech"
          locale={locale}
          className="mb-10 aspect-[2/1] sm:aspect-[3/1]"
        />
        <PageIntro
          kicker="Smartphone · Wearable · Audio"
          title={
            locale === "it"
              ? "Tech. Da vicino."
              : "Tech. A closer look."
          }
          lead={
            locale === "it"
              ? "Una selezione di prodotti del catalogo Tech di BJ Beyond. I prezzi sono indicativi e possono cambiare su Amazon o sul sito ufficiale."
              : "A selection from the BJ Beyond Tech catalogue. Prices are indicative and can change on Amazon or the official site."
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techProducts.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-lg border border-foreground/8 bg-card"
            >
              <ProductImage src={p.image} alt={p.name[locale]} className="bg-[#fff]" />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <Badge variant="copper">{p.badge[locale]}</Badge>
                <h2 className="text-3xl leading-[0.98]">
                  <Link href={localizedPath(locale, `/tech/${p.slug}`)}>
                    {p.name[locale]}
                  </Link>
                </h2>
                <p className="text-muted-foreground leading-6">{p.short[locale]}</p>
                {p.price != null ? (
                  <div>
                    <p className="font-serif text-3xl">
                      {formatEuro(p.price, locale)}{" "}
                      <small className="align-middle font-sans text-xs text-muted-foreground">
                        {t.indicative}
                      </small>
                    </p>
                    {techNetwork(p) === "amazon" ? (
                      <PriceNote locale={locale} className="mt-1" />
                    ) : p.priceNote ? (
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {p.priceNote[locale]}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <ExternalCta href={techHref(p)} locale={locale}>
                    {techCta(p, locale)}
                  </ExternalCta>
                  <Link
                    href={localizedPath(locale, `/tech/${p.slug}`)}
                    className="inline-flex h-11 items-center px-3 text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    {locale === "it" ? "Scheda" : "Details"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <AffiliateNote locale={locale} variant="all" className="mt-12" />
      </div>
    </SiteShell>
  );
}
