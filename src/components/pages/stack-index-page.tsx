import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { localizedPath, type Locale } from "@/lib/i18n";
import { JsonLd } from "@/components/json-ld";
import { awinStoreUrl, stackCampaigns, stackImageUrl } from "@/lib/stack";

export function StackIndexPage({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return (
    <SiteShell locale={locale}>
      <div className="editorial-container editorial-section">
        <PageIntro
          kicker={it ? "LA SELEZIONE / PARTNER" : "THE EDIT / PARTNERS"}
          title={it ? "Lo Stack: gli strumenti che consigliamo." : "The Stack."}
          lead={
            it
              ? "Tecnologia, casa e nuove abitudini. Sei campagne da esplorare, ciascuna con visual e tracking propri."
              : "Technology, home and everyday habits. Six campaigns to explore — each with its own visual and tracking."
          }
        />
        <div className="storefront-band">
          <div>
            <h2>Awin Storefront</h2>
            <p>
              {it
                ? "La vetrina Awin di BJ Beyond, in un solo link."
                : "The BJ Beyond Awin storefront, one link away."}
            </p>
          </div>
          <ExternalCta href={awinStoreUrl} locale={locale}>
            {it ? "Visita lo Storefront" : "Visit the Storefront"}
          </ExternalCta>
        </div>
        <div className="campaign-grid">
          {stackCampaigns.map((c) => (
            <Link
              href={localizedPath(locale, `/stack/${c.slug}`)}
              key={c.slug}
              className="campaign-item"
              style={{ ["--stack-accent" as string]: c.accent }}
            >
              <div
                className="campaign-accent"
                aria-hidden
                style={{ background: c.accent }}
              />
              <SceneVisual
                scene={c.visual}
                src={c.image}
                locale={locale}
                className="campaign-image"
                label={c.benefit[locale]}
                objectFit={c.slug === "waterdrop" || c.slug === "ultrahuman" ? "contain" : "cover"}
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
          ))}
        </div>
        <AffiliateNote locale={locale} variant="awin" className="mt-12" />
      </div>

      <StackHubJsonLd locale={locale} />
    </SiteShell>
  );
}

function StackHubJsonLd({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const hubUrl = it ? "https://bjbeyond.pro/stack/" : "https://bjbeyond.pro/en/stack/";
  const homeUrl = it ? "https://bjbeyond.pro/" : "https://bjbeyond.pro/en/";
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "BJ Beyond", item: homeUrl },
          { "@type": "ListItem", position: 2, name: it ? "Lo Stack" : "The Stack", item: hubUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: it ? "Lo Stack: gli strumenti che consigliamo" : "The Stack",
        url: hubUrl,
        numberOfItems: stackCampaigns.length,
        itemListElement: stackCampaigns.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          url: `${hubUrl}${c.slug}/`,
          image: stackImageUrl(c),
        })),
      },
    ],
  };
  return <JsonLd data={data} />;
}

