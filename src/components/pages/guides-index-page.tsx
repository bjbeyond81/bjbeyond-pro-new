import Link from "next/link";
import { CoverImage } from "@/components/product-image";
import { SiteShell } from "@/components/site-shell";
import { PageIntro } from "@/components/ui-bits";
import { Badge } from "@/components/ui/badge";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { guidePath, guides } from "@/lib/guides";
import type { Locale } from "@/lib/i18n";

export function GuidesIndexPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <SceneVisual
          scene="guides"
          className="mb-10 min-h-[200px] rounded-[28px] sm:min-h-[260px]"
          label={
            locale === "it"
              ? "Quaderni e occhiali da lettura sul tavolo"
              : "Notebooks and reading glasses on the table"
          }
        />
        <PageIntro
          kicker="Choose better"
          title={locale === "it" ? "Guide, not noise." : "Guides, not noise."}
          lead={
            locale === "it"
              ? "Guide brevi e pratiche per capire cosa conta davvero prima di acquistare tecnologia o scegliere un servizio digitale."
              : "Short practical guides focused on what matters before buying tech or choosing a digital service."
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <article
              key={g.slugIt}
              className="flex flex-col overflow-hidden rounded-[28px] border border-foreground/8 bg-card shadow-[0_18px_50px_rgba(19,19,19,.05)]"
            >
              <CoverImage src={g.image} alt={g.title[locale]} />
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="copper">{g.tag[locale]}</Badge>
                <h2 className="mt-4 text-3xl leading-[1.02]">{g.title[locale]}</h2>
                <p className="mt-3 flex-1 leading-6 text-muted-foreground">
                  {g.description[locale]}
                </p>
                <Link
                  href={guidePath(locale, g)}
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  {g.kind === "compare" ? t.readComparison : t.readGuide} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
