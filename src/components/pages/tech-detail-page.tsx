import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/product-image";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PriceNote } from "@/components/ui-bits";
import { Badge } from "@/components/ui/badge";
import { copy } from "@/lib/copy";
import { getGuide, guidePath } from "@/lib/guides";
import { localizedPath, type Locale } from "@/lib/i18n";
import { getTech, techCta, techHref, techNetwork, techProducts } from "@/lib/tech";
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
  const href = techHref(product);
  const network = techNetwork(product);
  const related = [
    ...techProducts.filter((p) => p.slug !== slug && p.category === product.category),
    ...techProducts.filter((p) => p.slug !== slug && p.category !== product.category),
  ].slice(0, 3);
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
              {(product.headline ?? product.name)[locale]}
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
                {network === "amazon" ? (
                  <PriceNote locale={locale} className="mt-2" />
                ) : product.priceNote ? (
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {product.priceNote[locale]}
                  </p>
                ) : null}
              </div>
            ) : null}
            <div className="mt-6">
              <ExternalCta href={href} locale={locale}>
                {techCta(product, locale)}
              </ExternalCta>
            </div>
            {product.discountCode ? (
              <div className="mt-5 rounded-2xl border border-copper/30 bg-secondary/50 px-4 py-3">
                <p className="text-sm font-bold tracking-wide uppercase text-walnut">
                  {locale === "it" ? "Codice sconto 10%" : "10% discount code"}
                </p>
                <p className="mt-1 font-serif text-2xl tracking-[0.08em]">
                  {product.discountCode}
                </p>
                {product.discountNote ? (
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {product.discountNote[locale]}
                  </p>
                ) : null}
              </div>
            ) : null}
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

        {product.sections?.length ? (
          <article className="mt-12 border-t border-foreground/8 pt-10">
            {product.sections.map((section) => (
              <section key={section.title[locale]} className="mt-10 first:mt-0">
                <h2 className="text-3xl">{section.title[locale]}</h2>
                <p className="mt-3 text-lg leading-8 text-muted-foreground">
                  {section.body[locale]}
                </p>
              </section>
            ))}
            <div className="mt-10">
              <ExternalCta href={href} locale={locale}>
                {techCta(product, locale)}
              </ExternalCta>
            </div>
          </article>
        ) : null}

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
        <AffiliateNote
          locale={locale}
          variant={network === "awin" ? "awin" : "amazon"}
          className="mt-12"
        />
      </div>
      <TechProductJsonLd locale={locale} slug={slug} />
    </SiteShell>
  );
}

function absoluteAssetUrl(src: string) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `https://bjbeyond.pro${src}`;
}

function TechProductJsonLd({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const product = getTech(slug);
  if (!product) return null;
  const href = techHref(product);
  const url =
    locale === "en"
      ? `https://bjbeyond.pro/en/tech/${product.slug}/`
      : `https://bjbeyond.pro/tech/${product.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: (product.headline ?? product.name)[locale],
    url,
    inLanguage: locale === "it" ? "it-IT" : "en-GB",
    reviewBody: product.lead[locale],
    author: {
      "@type": "Organization",
      name: "BJ Beyond",
      url: "https://bjbeyond.pro/",
    },
    itemReviewed: {
      "@type": "Product",
      name: product.name[locale],
      image: absoluteAssetUrl(product.image),
      brand: { "@type": "Brand", name: product.name.it.split(" ")[0] },
      description: product.short[locale],
      ...(product.price != null
        ? {
            offers: {
              "@type": "Offer",
              url: href,
              price: product.price,
              priceCurrency: "EUR",
              availability:
                product.slug === "ultrahuman-ring-pro"
                  ? "https://schema.org/PreOrder"
                  : "https://schema.org/InStock",
            },
          }
        : {}),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
