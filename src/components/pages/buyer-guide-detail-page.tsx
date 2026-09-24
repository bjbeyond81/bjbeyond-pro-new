import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta } from "@/components/ui-bits";
import { JsonLd } from "@/components/json-ld";
import { getBuyerGuide } from "@/lib/buyer-guides";
import {
  guideAffiliateUrl,
  loadBuyerGuideArticle,
  loadBuyerGuideJsonLd,
} from "@/lib/buyer-guide-article";
import { localizedPath, type Locale } from "@/lib/i18n";
import {
  getStack,
  ULTRAHUMAN_DISCOUNT,
  ULTRAHUMAN_PRODUCTS,
  ultrahumanGuideAffiliateUrl,
} from "@/lib/stack";

function GuideCtas({
  locale,
  position,
  campaignSlug,
  hrefBase,
  clickrefShort,
  ctaLabel,
}: {
  locale: Locale;
  position: string;
  campaignSlug: string;
  hrefBase: string;
  clickrefShort: string;
  ctaLabel: string;
}) {
  if (campaignSlug === "ultrahuman") {
    const d = ULTRAHUMAN_DISCOUNT;
    return (
      <div className="grid gap-3">
        {ULTRAHUMAN_PRODUCTS.map((product) => (
          <div key={product.id} className="grid gap-1">
            <ExternalCta
              href={ultrahumanGuideAffiliateUrl(product, locale, clickrefShort)}
              locale={locale}
              fullWidth
              showArrow={false}
              dataProduct={product.trackSlug}
              dataNetwork="impact"
              dataPosition={position}
              dataLocale={locale}
            >
              {product.name[locale]} · {product.priceLabel[locale]}
            </ExternalCta>
            <p className="text-xs text-muted-foreground">
              {product.priceNote[locale]}
            </p>
          </div>
        ))}
        {position !== "guide-sticky" ? (
          <div className="rounded-2xl border border-dashed border-foreground/20 bg-background/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {d.label[locale]}
            </p>
            <p className="mt-2 font-mono text-2xl font-bold tracking-wide">
              {d.code}
            </p>
            <p className="mt-3 text-sm leading-6">
              <strong>{d.strong[locale]}</strong> {d.rest[locale]}
            </p>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              {d.note[locale]}
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  const affHref = guideAffiliateUrl(
    hrefBase,
    locale,
    clickrefShort,
    campaignSlug,
  );
  return (
    <ExternalCta
      href={affHref}
      locale={locale}
      fullWidth
      showArrow={false}
      dataProduct={campaignSlug}
      dataNetwork="awin"
      dataPosition={position}
      dataLocale={locale}
    >
      {ctaLabel}
    </ExternalCta>
  );
}

export function BuyerGuideDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const meta = getBuyerGuide(locale, slug);
  if (!meta) notFound();
  const campaign = getStack(meta.stackSlug);
  if (!campaign) notFound();
  const article = loadBuyerGuideArticle(meta, locale);
  const jsonLd = loadBuyerGuideJsonLd(meta, locale);
  const it = locale === "it";
  const stackPath = localizedPath(locale, `/stack/${campaign.slug}`);
  const hubPath = localizedPath(locale, "/guides");
  const ctaLabel = it
    ? `Vai su ${campaign.name}`
    : `Go to ${campaign.name}`;
  const relatedLabel = it
    ? `Scheda Stack · ${campaign.name}`
    : `Stack page · ${campaign.name}`;

  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-5xl px-4 py-10 pb-28 sm:px-6 sm:py-16 sm:pb-16">
        <Link
          href={hubPath}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← {it ? "Guide" : "Guides"}
        </Link>

        <p className="kicker mt-8">{meta.tag[locale]}</p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {it ? "Aggiornato il 24 set 2026" : "Updated 24 Sep 2026"}
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {article.h1}
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <article className="stack-article min-w-0">
            {article.sections.map((sec, i) => (
              <div key={i}>
                {sec.heading ? (
                  <h2 className="mt-10 text-2xl sm:text-3xl">{sec.heading}</h2>
                ) : null}
                <div
                  className="stack-article-body"
                  dangerouslySetInnerHTML={{ __html: sec.html }}
                />
              </div>
            ))}

            <div className="mt-12 rounded-[28px] border border-foreground/10 bg-card p-6 sm:p-8">
              <p className="text-xl font-semibold">{campaign.benefit[locale]}</p>
              <div className="mt-5">
                <GuideCtas
                  locale={locale}
                  position="guide-footer"
                  campaignSlug={campaign.slug}
                  hrefBase={campaign.hrefBase}
                  clickrefShort={meta.clickrefShort}
                  ctaLabel={ctaLabel}
                />
              </div>
              <p className="mt-4 text-sm leading-6">
                <Link
                  href={stackPath}
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  {relatedLabel} →
                </Link>
              </p>
            </div>
          </article>

          <aside className="h-fit rounded-[28px] border border-foreground/8 bg-card p-6 sm:p-8 lg:sticky lg:top-24">
            <p className="kicker">{campaign.name}</p>
            <p className="mt-2 text-2xl font-semibold leading-tight">
              {campaign.benefit[locale]}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {campaign.lead[locale]}
            </p>
            <div className="mt-6">
              <GuideCtas
                locale={locale}
                position="guide-aside"
                campaignSlug={campaign.slug}
                hrefBase={campaign.hrefBase}
                clickrefShort={meta.clickrefShort}
                ctaLabel={ctaLabel}
              />
            </div>
            <p className="mt-4 text-sm">
              <Link
                href={stackPath}
                className="underline underline-offset-2 hover:text-foreground"
              >
                {relatedLabel}
              </Link>
            </p>
            <AffiliateNote locale={locale} variant="awin" className="mt-6" />
          </aside>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-foreground/10 bg-background/95 p-3 backdrop-blur lg:hidden">
        <GuideCtas
          locale={locale}
          position="guide-sticky"
          campaignSlug={campaign.slug}
          hrefBase={campaign.hrefBase}
          clickrefShort={meta.clickrefShort}
          ctaLabel={ctaLabel}
        />
      </div>

      <JsonLd data={jsonLd as Record<string, unknown>} />
    </SiteShell>
  );
}
