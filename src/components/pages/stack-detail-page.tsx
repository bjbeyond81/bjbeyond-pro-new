import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta } from "@/components/ui-bits";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { loadStackArticle, mdInline } from "@/lib/stack-article";
import {
  getStack,
  stackAffiliateUrl,
  stackImageUrl,
  type StackCampaign,
} from "@/lib/stack";

function AffCta({
  campaign,
  locale,
  position,
  fullWidth = true,
}: {
  campaign: StackCampaign;
  locale: Locale;
  position: "detail-aside" | "detail-mid" | "detail-footer" | "detail-sticky";
  fullWidth?: boolean;
}) {
  const href = stackAffiliateUrl(campaign, locale, position);
  const label =
    position === "detail-sticky"
      ? campaign.shopCta[locale].replace(/\s*→\s*$/, "")
      : campaign.cta[locale];
  return (
    <ExternalCta
      href={href}
      locale={locale}
      fullWidth={fullWidth}
      showArrow={false}
      dataProduct={campaign.slug}
      dataNetwork={campaign.network === "tiddly" ? "tiddly" : "awin"}
      dataPosition={position}
      dataLocale={locale}
    >
      {label}
    </ExternalCta>
  );
}

export function StackDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const campaign = getStack(slug);
  if (!campaign) notFound();
  const article = loadStackArticle(slug, locale);
  const t = copy[locale];
  const it = locale === "it";
  const disclosureNote = it
    ? "Link affiliato Awin (rel=sponsored nofollow). BJ Beyond può ricevere una commissione se acquisti tramite questo link, senza costi extra per te."
    : "Awin affiliate link (rel=sponsored nofollow). BJ Beyond may earn a commission if you buy through this link, at no extra cost to you.";

  const rawPath = localizedPath(locale, `/stack/${slug}`);
  const pageUrl = `https://bjbeyond.pro${rawPath.endsWith("/") ? rawPath : `${rawPath}/`}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: campaign.lead[locale],
    image: [stackImageUrl(campaign)],
    datePublished: campaign.published,
    dateModified: campaign.modified,
    author: { "@type": "Person", name: "Bj" },
    publisher: {
      "@type": "Organization",
      name: "BJ Beyond",
      url: "https://bjbeyond.pro/",
    },
    mainEntityOfPage: pageUrl,
    inLanguage: locale === "it" ? "it-IT" : "en-GB",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BJ Beyond",
        item: locale === "en" ? "https://bjbeyond.pro/en/" : "https://bjbeyond.pro/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: it ? "Lo Stack" : "The Stack",
        item:
          locale === "en"
            ? "https://bjbeyond.pro/en/stack/"
            : "https://bjbeyond.pro/stack/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: campaign.name,
        item: pageUrl,
      },
    ],
  };

  const midIndex = Math.max(1, Math.floor(article.sections.length / 2));

  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-5xl px-4 py-10 pb-28 sm:px-6 sm:py-16 sm:pb-16">
        <Link
          href={localizedPath(locale, "/stack")}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← {t.nav.stack}
        </Link>

        <div
          className="mt-8 h-1.5 w-16 rounded-full"
          style={{ background: campaign.accent }}
          aria-hidden
        />

        <p className="kicker mt-6">
          {campaign.n} {campaign.kicker[locale]} · {t.advertising} {campaign.name}
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {article.updatedLabel}
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {article.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
          {article.disclosure}
        </p>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-foreground/8 bg-[#f4f1ea]">
          <div className="relative aspect-[16/10] min-h-[220px] sm:min-h-[300px]">
            <Image
              src={campaign.image}
              alt={article.h1}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 960px"
              className={
                campaign.objectFit === "contain"
                  ? "object-contain p-6"
                  : "object-cover"
              }
            />
          </div>
        </div>

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
                {i === midIndex - 1 ? (
                  <div className="my-8 rounded-2xl border border-foreground/10 bg-card/70 p-5">
                    <AffCta campaign={campaign} locale={locale} position="detail-mid" />
                    <p className="mt-3 text-xs leading-5 text-muted-foreground">
                      {disclosureNote}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}

            {campaign.gallery.length > 1 ? (
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {campaign.gallery.slice(1, 4).map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-foreground/8 bg-[#f4f1ea]"
                  >
                    <Image
                      src={src}
                      alt={`${campaign.name} ${i + 2}`}
                      fill
                      sizes="200px"
                      className="object-contain p-3"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {article.faqs.length > 0 ? (
              <section className="mt-12">
                <h2 className="text-2xl sm:text-3xl">FAQ</h2>
                <dl className="mt-6 grid gap-5">
                  {article.faqs.map((f) => (
                    <div
                      key={f.q}
                      className="rounded-2xl border border-foreground/8 bg-card/50 px-4 py-4"
                    >
                      <dt className="font-semibold leading-7">{f.q}</dt>
                      <dd
                        className="mt-2 text-base leading-7 text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: mdInline(f.a) }}
                      />
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <div className="mt-12 rounded-[28px] border border-foreground/10 bg-card p-6 sm:p-8">
              <p className="text-xl font-semibold">{campaign.benefit[locale]}</p>
              <div className="mt-5">
                <AffCta campaign={campaign} locale={locale} position="detail-footer" />
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                {disclosureNote}
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
              <AffCta campaign={campaign} locale={locale} position="detail-aside" />
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              {disclosureNote}
            </p>
            <AffiliateNote locale={locale} variant="awin" className="mt-6" />
          </aside>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-foreground/10 bg-background/95 p-3 backdrop-blur lg:hidden">
        <AffCta campaign={campaign} locale={locale} position="detail-sticky" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
      />
    </SiteShell>
  );
}
