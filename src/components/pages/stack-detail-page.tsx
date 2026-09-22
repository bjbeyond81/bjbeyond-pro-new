import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { awinStoreUrl, getStack } from "@/lib/stack";

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

  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <Link
          href={localizedPath(locale, "/stack")}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← {t.nav.stack}
        </Link>
        <p className="kicker mt-8">
          {campaign.n} {campaign.kicker[locale]} · {t.advertising} {campaign.name}
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl leading-[0.94] sm:text-6xl">
          {campaign.title[locale]}
        </h1>
        <p className="mt-5 max-w-2xl text-xl leading-8 text-muted-foreground">
          {campaign.lead[locale]}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <SceneVisual
            scene={campaign.visual}
            className="min-h-[360px] rounded-[32px] shadow-[0_34px_90px_rgba(11,12,15,.14)]"
          />
          <div className="spectacular-card p-6 sm:p-8">
            <p className="text-lg leading-8 text-muted-foreground">
              {campaign.body[locale]}
            </p>
            <dl className="mt-8 grid gap-5">
              <Fact
                label={locale === "it" ? "Perché si compra" : "Why you buy it"}
                value={campaign.why[locale]}
              />
              <Fact
                label={locale === "it" ? "Cosa prende" : "What you get"}
                value={campaign.takes[locale]}
              />
              <Fact
                label={locale === "it" ? "Cosa non è" : "What it is not"}
                value={campaign.not[locale]}
              />
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              <ExternalCta href={campaign.href} locale={locale}>
                {campaign.cta[locale]}
              </ExternalCta>
              <ExternalCta href={awinStoreUrl} locale={locale} light>
                {locale === "it" ? "Storefront Awin" : "Awin Storefront"}
              </ExternalCta>
            </div>
            <AffiliateNote locale={locale} variant="awin" className="mt-6" />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-foreground/8 pt-4">
      <dt className="text-sm font-bold tracking-wide uppercase text-walnut">
        {label}
      </dt>
      <dd className="mt-1 text-lg leading-7">{value}</dd>
    </div>
  );
}
