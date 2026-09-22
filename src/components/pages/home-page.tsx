import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote } from "@/components/ui-bits";
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
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-10 pb-8 sm:px-6 lg:grid-cols-2 lg:min-h-[78vh] lg:gap-14 lg:pt-16">
        <div>
          <p className="kicker">{t.tagline}</p>
          <h1 className="mt-4 max-w-[10ch] text-6xl leading-[0.82] sm:text-8xl lg:text-[6.4rem]">
            {locale === "it" ? (
              <>
                Scelte più
                <br />
                intelligenti.
              </>
            ) : (
              <>
                Buy smarter.
                <br />
                Look sharper.
              </>
            )}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-2xl">
            {locale === "it"
              ? "Un portale bilingue per tech, regali, guide e campagne affiliate: meno rumore, più decisione."
              : "A bilingual editorial portal for tech, gifts, guides and affiliate campaigns: less noise, sharper decisions."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "/stack")}
              className="rounded-full bg-primary px-5 py-3 text-sm font-black text-primary-foreground shadow-[8px_8px_0_#b7ff3c]"
            >
              {locale === "it" ? "Apri lo Stack" : "Open the Stack"}
            </Link>
            <Link
              href={localizedPath(locale, "/tech/ultrahuman-ring-pro")}
              className="rounded-full border border-foreground/12 bg-card px-5 py-3 text-sm font-black"
            >
              Ultrahuman Ring Pro
            </Link>
          </div>
        </div>
        <SceneVisual
          scene="hero"
          className="min-h-[320px] rounded-[32px] shadow-[0_34px_90px_rgba(11,12,15,.16)] lg:min-h-[560px]"
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
            className="spectacular-card mt-4 flex flex-col no-underline transition-transform hover:-translate-y-1"
        >
          <SceneVisual scene="stack" className="min-h-[200px] sm:min-h-[240px]" />
          <div className="p-6">
            <p className="kicker">
              05 {t.nav.stack} · {t.advertising}
            </p>
            <h2 className="mt-2 text-4xl sm:text-5xl">
              {locale === "it" ? "Stack ufficiale Awin." : "Official Awin Stack."}
            </h2>
            <p className="mt-2 text-muted-foreground">
              ESR · IMOU · Toputure · Lingzio · Waterdrop · Ultrahuman · Storefront
            </p>
          </div>
        </Link>
        <AffiliateNote locale={locale} variant="all" className="mt-8" />
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
      className="spectacular-card flex flex-col no-underline transition-transform hover:-translate-y-1"
    >
      <SceneVisual scene={tile.scene} className="min-h-[168px] sm:min-h-[210px]" />
      <div className="p-6">
        <p className="kicker">
          {tile.n} {copy[locale].nav[tile.key]}
        </p>
        <h2 className="mt-1 text-4xl sm:text-5xl">{tile.title[locale]}</h2>
        <p className="mt-2 text-muted-foreground">{tile.lead[locale]}</p>
      </div>
    </Link>
  );
}
