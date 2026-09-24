import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote, ExternalCta, PageIntro } from "@/components/ui-bits";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { localizedPath, type Locale } from "@/lib/i18n";
import { awinStoreUrl, stackCampaigns } from "@/lib/stack";

export function StackIndexPage({ locale }: { locale: Locale }) {
  const it = locale === "it";
  return (
    <SiteShell locale={locale}>
      <div className="editorial-container editorial-section">
        <PageIntro
          kicker={it ? "LA SELEZIONE / PARTNER" : "THE EDIT / PARTNERS"}
          title="The Stack."
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
    </SiteShell>
  );
}
