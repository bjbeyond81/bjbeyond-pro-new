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
      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-black text-white sm:min-h-[680px]">
        <SceneVisual scene="hero" locale={locale} className="absolute inset-0 -z-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase text-[#b7ff3c]">{t.tagline}</p>
          <h1 className="mt-5 max-w-[9ch] text-6xl leading-[1] sm:text-8xl">BJ Beyond</h1>
          <p className="mt-6 max-w-[32ch] text-xl leading-8 text-white/90 sm:text-2xl">
            {locale === "it"
              ? "Tecnologia, regali e idee da vivere. Scopri cosa merita il tuo prossimo acquisto."
              : "Technology, gifts and ideas for everyday living. Discover what's worth your next purchase."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedPath(locale, "/stack")}
              className="rounded-lg bg-[#b7ff3c] px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-white"
            >
              {locale === "it" ? "Apri lo Stack" : "Open the Stack"}
            </Link>
            <Link
              href={localizedPath(locale, "/tech/ultrahuman-ring-pro")}
              className="rounded-lg border border-white/50 bg-black/40 px-5 py-3 text-sm font-bold text-white hover:bg-black/70"
            >
              Ultrahuman Ring Pro
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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
          <SceneVisual scene="stack" locale={locale} className="aspect-[16/7]" />
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
      <SceneVisual scene={tile.scene} locale={locale} className="aspect-[16/10]" />
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
