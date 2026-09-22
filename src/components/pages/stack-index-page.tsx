import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { awinStoreUrl, stackCampaigns } from "@/lib/stack";

export function StackIndexPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SceneVisual
          scene="stack"
          className="mb-10 min-h-[260px] rounded-[32px] shadow-[0_34px_90px_rgba(11,12,15,.14)] sm:min-h-[340px]"
          label={
            locale === "it"
              ? "Oggetti dello Stack sul tavolo di noce"
              : "Stack objects on a walnut table"
          }
        />
        <PageIntro
          kicker={
            locale === "it"
              ? "Stack ufficiale · Storefront Awin"
              : "Official Stack · Awin Storefront"
          }
          title={
            locale === "it"
              ? "Sei campagne. Una vetrina."
              : "Six campaigns. One storefront."
          }
          lead={
            locale === "it"
              ? "ESR, IMOU, Toputure, Lingzio, Waterdrop e Ultrahuman con link chiari, disclosure e accesso diretto allo Storefront Awin BJ Beyond."
              : "ESR, IMOU, Toputure, Lingzio, Waterdrop and Ultrahuman with clear links, disclosure and direct access to the BJ Beyond Awin Storefront."
          }
        />
        <div className="spectacular-card mt-8 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="kicker">Awin · {t.advertising}</p>
            <h2 className="mt-2 text-4xl">
              {locale === "it" ? "Tutte le offerte Awin" : "All Awin offers"}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              {locale === "it"
                ? "La vetrina ufficiale Awin di BJ Beyond. Campagne attive in un solo posto."
                : "BJ Beyond’s official Awin storefront. Active campaigns in one place."}
            </p>
          </div>
          <div className="mt-5 sm:mt-0">
            <ExternalCta href={awinStoreUrl} locale={locale}>
              {locale === "it" ? "Apri lo store Awin" : "Open the Awin store"}
            </ExternalCta>
          </div>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {stackCampaigns.map((c) => (
            <Link
              key={c.slug}
              href={localizedPath(locale, `/stack/${c.slug}`)}
              className="spectacular-card no-underline transition-transform hover:-translate-y-1"
            >
              <SceneVisual scene={c.visual} className="min-h-[160px]" />
              <div className="p-6">
                <p className="kicker">
                  {c.n} {c.kicker[locale]} · {t.advertising}
                  {c.network === "awin" ? " · Awin" : ""}
                </p>
                <h2 className="mt-2 text-4xl">{c.name}</h2>
                <p className="mt-2 text-muted-foreground">{c.short[locale]}</p>
                <p className="mt-4 text-sm font-semibold">
                  {t.openCampaign} →
                </p>
              </div>
            </Link>
          ))}
        </div>
        <AffiliateNote locale={locale} variant="awin" className="mt-12" />
      </div>
    </SiteShell>
  );
}
