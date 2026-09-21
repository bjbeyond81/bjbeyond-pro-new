import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro } from "@/components/ui-bits";
import { Badge } from "@/components/ui/badge";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { techProducts } from "@/lib/tech";
import { formatEuro } from "@/lib/utils";

export function TechIndexPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SceneVisual
          scene="tech"
          className="mb-10 min-h-[200px] rounded-[28px] sm:min-h-[260px]"
          label={
            locale === "it"
              ? "Telefono, orologio e auricolari sul tavolo"
              : "Phone, watch and earbuds on the table"
          }
        />
        <PageIntro
          kicker="Smartphone · Wearable · Audio"
          title={
            locale === "it"
              ? "Tecnologia da guardare da vicino."
              : "Technology worth looking at closely."
          }
          lead={
            locale === "it"
              ? "Una selezione di prodotti del catalogo Tech di BJ Beyond. I prezzi sono indicativi e possono cambiare su Amazon."
              : "A selection from the BJ Beyond Tech catalogue. Prices are indicative and can change on Amazon."
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techProducts.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-[28px] border border-foreground/8 bg-card shadow-[0_18px_50px_rgba(19,19,19,.06)]"
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
                  <p className="font-serif text-3xl">
                    {formatEuro(p.price, locale)}{" "}
                    <small className="align-middle font-sans text-xs text-muted-foreground">
                      {t.indicative}
                    </small>
                  </p>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <ExternalCta href={p.amazonUrl}>{t.seeAmazon}</ExternalCta>
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
        <AffiliateNote locale={locale} className="mt-12" />
      </div>
    </SiteShell>
  );
}
