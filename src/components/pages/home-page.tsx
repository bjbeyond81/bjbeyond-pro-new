import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";

const tiles = [
  {
    n: "01",
    key: "gifts" as const,
    href: "/gift-finder",
    scene: "gifts" as const,
    title: { it: "Gift Finder", en: "Gift Finder" },
    lead: {
      it: "Tre domande. Poi solo ciò che sta.",
      en: "Three questions. Then only what belongs.",
    },
  },
  {
    n: "02",
    key: "tech" as const,
    href: "/tech",
    scene: "tech" as const,
    title: { it: "Tech", en: "Tech" },
    lead: {
      it: "Device selezionati, luce bassa.",
      en: "Selected devices, low light.",
    },
  },
  {
    n: "03",
    key: "amazon" as const,
    href: "/amazon-offers",
    scene: "amazon" as const,
    title: { it: "Offerte", en: "Offers" },
    lead: { it: "Prime, Audible, Kindle.", en: "Prime, Audible, Kindle." },
  },
  {
    n: "04",
    key: "guides" as const,
    href: "/guides",
    scene: "guides" as const,
    title: { it: "Guide", en: "Guides" },
    lead: {
      it: "Confronti corti prima di comprare.",
      en: "Short comparisons before you buy.",
    },
  },
];

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-6 sm:px-6 lg:grid-cols-2 lg:min-h-[72vh] lg:gap-14 lg:pt-16">
        <div>
          <p className="kicker">{t.tagline}</p>
          <h1 className="mt-3 max-w-[12ch] text-5xl leading-[0.88] sm:text-7xl lg:text-[5.6rem]">
            {locale === "it" ? (
              <>
                Scelte poche.
                <br />
                Poi il tavolo.
              </>
            ) : (
              <>
                Discover better
                <br />
                choices.
              </>
            )}
          </h1>
          <p className="mt-6 max-w-[28ch] text-lg leading-7 text-muted-foreground sm:text-xl">
            {locale === "it"
              ? "Il tavolo, fermo. Le scelte, poche."
              : "The table stays still. The choices stay few."}
          </p>
        </div>
        <SceneVisual
          scene="hero"
          className="min-h-[240px] rounded-[28px] shadow-[0_18px_50px_rgba(40,24,10,.12)] lg:min-h-[520px]"
          label={
            locale === "it"
              ? "Tavolo in noce con libro, pacco di lino, bicchiere e cuffie"
              : "Walnut desk with book, linen gift, glass and headphones"
          }
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          {tiles.slice(0, 2).map((tile) => (
            <HomeTile key={tile.n} locale={locale} tile={tile} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {tiles.slice(2).map((tile) => (
            <HomeTile key={tile.n} locale={locale} tile={tile} />
          ))}
        </div>
        <Link
          href={localizedPath(locale, "/stack")}
          className="mt-4 flex flex-col overflow-hidden rounded-[28px] border border-foreground/8 bg-card no-underline transition-transform hover:-translate-y-0.5"
        >
          <SceneVisual scene="stack" className="min-h-[200px] sm:min-h-[240px]" />
          <div className="p-6">
            <p className="kicker">
              05 {t.nav.stack} · {t.advertising}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              {locale === "it" ? "Cinque campagne." : "Five campaigns."}
            </h2>
            <p className="mt-2 text-muted-foreground">
              ESR · IMOU · Toputure · Lingzio · Waterdrop
            </p>
          </div>
        </Link>
      </section>
    </SiteShell>
  );
}

function HomeTile({
  locale,
  tile,
}: {
  locale: Locale;
  tile: (typeof tiles)[number];
}) {
  return (
    <Link
      href={localizedPath(locale, tile.href)}
      className="flex flex-col overflow-hidden rounded-[28px] border border-foreground/8 bg-card no-underline transition-transform hover:-translate-y-0.5"
    >
      <SceneVisual scene={tile.scene} className="min-h-[168px] sm:min-h-[210px]" />
      <div className="p-6">
        <p className="kicker">
          {tile.n} {copy[locale].nav[tile.key]}
        </p>
        <h2 className="mt-1 text-3xl sm:text-4xl">{tile.title[locale]}</h2>
        <p className="mt-2 text-muted-foreground">{tile.lead[locale]}</p>
      </div>
    </Link>
  );
}
