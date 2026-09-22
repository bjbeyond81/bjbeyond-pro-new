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
          className="mb-10 min-h-[180px] rounded-[28px] sm:min-h-[240px]"
          label={
            locale === "it"
              ? "Oggetti dello Stack sul tavolo di noce"
              : "Stack objects on a walnut table"
          }
        />
        <PageIntro
          kicker={
            locale === "it"
              ? "Sei campagne · da comprare, non da collezionare"
              : "Six campaigns · built to buy"
          }
          title={
            locale === "it"
              ? "Sei problemi. Sei oggetti."
              : "Six problems. Six objects."
          }
          lead={
            locale === "it"
              ? "Scrivania che balla. Casa senza occhio. Corpo fermo. Lingua che non parte. Acqua che non bevi. Salute da orologio. Qui sotto c’è la via breve."
              : "Desk that slides. Home with no eye. Body parked. Language that never starts. Water you don’t drink. Health on a watch. Short path below."
          }
        />
        <div className="mt-8 rounded-[28px] border border-foreground/8 bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="kicker">Awin · {t.advertising}</p>
            <h2 className="mt-2 text-3xl">
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
              className="overflow-hidden rounded-[28px] border border-foreground/8 bg-card no-underline transition-transform hover:-translate-y-0.5"
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
