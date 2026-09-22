import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro } from "@/components/ui-bits";
import { Badge } from "@/components/ui/badge";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { amazonServices } from "@/lib/amazon";
import type { Locale } from "@/lib/i18n";

export function AmazonPage({ locale }: { locale: Locale }) {
  const core = amazonServices.filter((s) => s.group === "core");
  const channels = amazonServices.filter((s) => s.group === "channels");
  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SceneVisual
          scene="amazon"
          locale={locale}
          className="mb-10 aspect-[2/1] sm:aspect-[3/1]"
        />
        <PageIntro
          kicker={
            locale === "it"
              ? "Amazon · Servizi · Offerte"
              : "Amazon · Services · Offers"
          }
          title={
            locale === "it" ? "Più di semplici prodotti." : "More than products."
          }
          lead={
            locale === "it"
              ? "Una selezione di servizi e programmi Amazon che possono includere prove gratuite, abbonamenti e registri. Le condizioni e l'idoneità sono determinate da Amazon e possono cambiare."
              : "A selection of Amazon services and programmes that may include free trials, subscriptions and registries. Terms and eligibility are set by Amazon and can change."
          }
        />
        <AffiliateNote locale={locale} className="mt-8" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {core.map((s) => (
            <article
              key={s.id}
              className="flex min-h-[280px] flex-col overflow-hidden rounded-lg border border-foreground/8 bg-card"
            >
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="copper">{s.badge[locale]}</Badge>
                <h2 className="mt-4 text-3xl leading-[0.98]">{s.name[locale]}</h2>
                <p className="mt-3 flex-1 leading-6 text-muted-foreground">
                  {s.body[locale]}
                </p>
                <p className="mt-4 text-sm font-medium">{s.facts[locale]}</p>
                <div className="mt-5">
                  <ExternalCta href={s.href} locale={locale}>
                    {s.cta[locale]}
                  </ExternalCta>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <p className="kicker">Prime Video Channels</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">
            {locale === "it" ? "Scegli il tuo canale." : "Choose your channel."}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-7">
            {locale === "it"
              ? "Alcuni canali Prime Video possono prevedere una prova. Durata, prezzo e idoneità li decide Amazon e possono cambiare. Qui trovi destinazioni ufficiali con link a pagamento."
              : "Some Prime Video channels may include a trial. Length, price and eligibility are set by Amazon and can change. These are official destinations with paid links."}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {channels.map((s) => (
              <article
                key={s.id}
                className="flex flex-col overflow-hidden rounded-lg border border-foreground/8 bg-card"
              >
                <div className="flex flex-1 flex-col p-6">
                  <Badge variant="outline">{s.badge[locale]}</Badge>
                  <h3 className="mt-4 text-3xl">{s.name[locale]}</h3>
                  <p className="mt-3 flex-1 leading-6 text-muted-foreground">
                    {s.body[locale]}
                  </p>
                  <div className="mt-5">
                    <ExternalCta href={s.href} locale={locale}>
                      {s.cta[locale]}
                    </ExternalCta>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
