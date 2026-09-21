import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/product-image";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PriceNote } from "@/components/ui-bits";
import { Badge } from "@/components/ui/badge";
import { copy } from "@/lib/copy";
import { getGuide, guidePath } from "@/lib/guides";
import { localizedPath, type Locale } from "@/lib/i18n";
import { getTech, techProducts } from "@/lib/tech";
import { formatEuro } from "@/lib/utils";

export function TechDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const product = getTech(slug);
  if (!product) notFound();
  const t = copy[locale];
  const related = techProducts.filter((p) => p.slug !== slug).slice(0, 3);
  const guide = product.relatedGuide
    ? getGuide("it", product.relatedGuide) ??
      getGuide("en", product.relatedGuide)
    : undefined;

  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <Link
          href={localizedPath(locale, "/tech")}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← {t.nav.tech}
        </Link>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="overflow-hidden rounded-[28px] border border-foreground/8 bg-card">
            <ProductImage src={product.image} alt={product.name[locale]} />
          </div>
          <div>
            <Badge variant="copper">{product.badge[locale]}</Badge>
            <h1 className="mt-4 text-4xl leading-[0.94] sm:text-6xl">
              {product.name[locale]}
            </h1>
            <p className="mt-5 text-lg leading-7 text-muted-foreground">
              {product.lead[locale]}
            </p>
            {product.price != null ? (
              <div className="mt-6">
                <p className="font-serif text-4xl">
                  {formatEuro(product.price, locale)}{" "}
                  <small className="align-middle font-sans text-sm text-muted-foreground">
                    {t.indicative}
                  </small>
                </p>
                <PriceNote locale={locale} className="mt-2" />
              </div>
            ) : null}
            <div className="mt-6">
              <ExternalCta href={product.amazonUrl} locale={locale}>
                {t.seeAmazon}
              </ExternalCta>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-8 border-t border-foreground/8 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">
              {locale === "it" ? "Cosa conta davvero" : "What actually counts"}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-7 text-muted-foreground">
              {product.highlights[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">
              {locale === "it" ? "Per chi ha senso" : "Who it is for"}
            </h2>
            <p className="mt-4 text-lg leading-7 text-muted-foreground">
              {product.forWhom[locale]}
            </p>
            {guide ? (
              <p className="mt-6">
                <Link
                  href={guidePath(locale, guide)}
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {guide.title[locale]} →
                </Link>
              </p>
            ) : null}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl">{t.related}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={localizedPath(locale, `/tech/${p.slug}`)}
                className="overflow-hidden rounded-3xl border border-foreground/8 bg-card no-underline"
              >
                <ProductImage src={p.image} alt={p.name[locale]} className="p-4" />
                <div className="p-4">
                  <h3 className="font-serif text-xl leading-tight">{p.name[locale]}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <AffiliateNote locale={locale} className="mt-12" />
      </div>
    </SiteShell>
  );
}
