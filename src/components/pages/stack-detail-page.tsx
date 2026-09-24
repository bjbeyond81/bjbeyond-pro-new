import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { getStack, stackImageUrl } from "@/lib/stack";

export function StackDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const campaign = getStack(slug);
  if (!campaign) notFound();
  const t = copy[locale];
  const it = locale === "it";

  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
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
        <h1 className="mt-3 max-w-4xl text-4xl leading-[0.94] sm:text-6xl">
          {campaign.benefit[locale]}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
          {campaign.lead[locale]}
        </p>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-foreground/8">
          <SceneVisual
            scene={campaign.visual}
            src={campaign.image}
            locale={locale}
            className="min-h-[240px] aspect-[16/10] sm:min-h-[320px]"
            label={campaign.benefit[locale]}
            objectFit={
              campaign.slug === "waterdrop" || campaign.slug === "ultrahuman"
                ? "contain"
                : "cover"
            }
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              {campaign.body[locale]}
            </p>

            <h2 className="mt-10 text-2xl">
              {it ? "Tre motivi per comprarlo" : "Three reasons to buy"}
            </h2>
            <ol className="mt-5 grid gap-4">
              {campaign.reasons[locale].map((reason, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-2xl border border-foreground/8 bg-card/60 px-4 py-4"
                >
                  <span
                    className="grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold text-primary-foreground"
                    style={{ background: campaign.accent }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-lg leading-7">{reason}</span>
                </li>
              ))}
            </ol>

            <h2 className="mt-10 text-2xl">{it ? "Per chi è" : "Who it's for"}</h2>
            <p className="mt-3 text-lg leading-8 text-muted-foreground">
              {campaign.audience[locale]}
            </p>
          </div>

          <aside className="h-fit rounded-[28px] border border-foreground/8 bg-card p-6 sm:p-8 lg:sticky lg:top-24">
            <p className="kicker">{campaign.name}</p>
            <p className="mt-2 text-2xl font-semibold leading-tight">
              {campaign.benefit[locale]}
            </p>
            <div className="mt-6">
              <ExternalCta href={campaign.href} locale={locale}>
                {campaign.cta[locale]}
              </ExternalCta>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              {it
                ? "Link affiliato Awin (rel=sponsored nofollow). BJ Beyond può ricevere una commissione se acquisti tramite questo link, senza costi extra per te."
                : "Awin affiliate link (rel=sponsored nofollow). BJ Beyond may earn a commission if you buy through this link, at no extra cost to you."}
            </p>
            <AffiliateNote locale={locale} variant="awin" className="mt-6" />
          </aside>
        </div>
      </div>
      <StackDetailJsonLd locale={locale} slug={slug} />
    </SiteShell>
  );
}

function StackDetailJsonLd({ locale, slug }: { locale: Locale; slug: string }) {
  const campaign = getStack(slug);
  if (!campaign) return null;
  const it = locale === "it";
  const homeUrl = it ? "https://bjbeyond.pro/" : "https://bjbeyond.pro/en/";
  const hubUrl = it ? "https://bjbeyond.pro/stack/" : "https://bjbeyond.pro/en/stack/";
  const pageUrl = `${hubUrl}${campaign.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BJ Beyond", item: homeUrl },
      { "@type": "ListItem", position: 2, name: it ? "Lo Stack" : "The Stack", item: hubUrl },
      { "@type": "ListItem", position: 3, name: campaign.name, item: pageUrl },
    ],
  };
  return <JsonLd data={data} />;
}

