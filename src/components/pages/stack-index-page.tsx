import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, PageIntro } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";
import { stackCampaigns } from "@/lib/stack";

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
              ? "Cinque campagne · da comprare, non da collezionare"
              : "Five campaigns · built to buy"
          }
          title={
            locale === "it"
              ? "Cinque problemi. Cinque oggetti."
              : "Five problems. Five objects."
          }
          lead={
            locale === "it"
              ? "Scrivania che balla. Casa senza occhio. Corpo fermo. Lingua che non parte. Acqua che non bevi. Qui sotto c’è la via breve."
              : "Desk that slides. Home with no eye. Body parked. Language that never starts. Water you don’t drink. Short path below."
          }
        />
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
