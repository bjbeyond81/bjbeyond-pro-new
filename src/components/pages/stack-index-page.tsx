import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { localizedPath, type Locale } from "@/lib/i18n";
import {
  stackAffiliateUrl,
  stackCampaigns,
} from "@/lib/stack";

export function StackIndexPage({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return (
    <SiteShell locale={locale}>
      <div className="editorial-container editorial-section">
        <PageIntro
          kicker={it ? "LA SELEZIONE / PARTNER" : "THE EDIT / PARTNERS"}
          title={it ? "Lo Stack." : "The Stack."}
          lead={
            it
              ? "Tecnologia, casa e nuove abitudini. Sei campagne da esplorare, ciascuna con scheda prodotto, FAQ e link affiliato tracciato."
              : "Technology, home and everyday habits. Six campaigns to explore — each with a product guide, FAQ and tracked affiliate link."
          }
        />
        <div className="campaign-grid">
          {stackCampaigns.map((c, idx) => {
            const aff = stackAffiliateUrl(c, locale, "index-card");
            return (
              <article
                key={c.slug}
                className="campaign-item"
                style={{ ["--stack-accent" as string]: c.accent }}
              >
                <div
                  className="campaign-accent"
                  aria-hidden
                  style={{ background: c.accent }}
                />
                <Link
                  href={localizedPath(locale, `/stack/${c.slug}`)}
                  className="block"
                >
                  <SceneVisual
                    scene={c.visual}
                    src={c.image}
                    locale={locale}
                    className="campaign-image"
                    label={c.benefit[locale]}
                    objectFit={c.objectFit}
                    priority={idx < 2}
                  />
                  <div className="category-meta">
                    <span>
                      {c.n} / {c.kicker[locale]}
                    </span>
                    <ArrowUpRight size={20} />
                  </div>
                  <h2>{c.name}</h2>
                  <p className="campaign-benefit">{c.benefit[locale]}</p>
                </Link>
                <div className="mt-4">
                  <ExternalCta
                    href={aff}
                    locale={locale}
                    fullWidth
                    showArrow={false}
                    dataProduct={c.slug}
                    dataNetwork={c.network === "tiddly" ? "tiddly" : "awin"}
                    dataPosition="index-card"
                    dataLocale={locale}
                  >
                    {c.shopCta[locale].replace(/\s*→\s*$/, "")}
                  </ExternalCta>
                </div>
              </article>
            );
          })}
        </div>
        <AffiliateNote locale={locale} variant="awin" className="mt-12" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: it ? "Lo Stack — BJ Beyond" : "The Stack — BJ Beyond",
              itemListElement: stackCampaigns.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.name,
                url: (() => { const p = localizedPath(locale, `/stack/${c.slug}`); return `https://bjbeyond.pro${p.endsWith('/') ? p : p + '/'}`; })(),
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              ],
            }),
          }}
        />
      </div>
    </SiteShell>
  );
}
