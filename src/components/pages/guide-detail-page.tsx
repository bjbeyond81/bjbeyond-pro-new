import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { AffiliateNote } from "@/components/ui-bits";
import { copy } from "@/lib/copy";
import { getGuide } from "@/lib/guides";
import { localizedPath, type Locale } from "@/lib/i18n";

export function GuideDetailPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  const t = copy[locale];

  return (
    <SiteShell locale={locale}>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href={localizedPath(locale, "/guides")}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← {t.nav.guides}
        </Link>
        <p className="kicker mt-8">{guide.tag[locale]}</p>
        <h1 className="mt-3 text-4xl leading-[0.94] sm:text-6xl">
          {guide.title[locale]}
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground">
          {guide.lead[locale]}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={guide.image}
          alt=""
          className="mt-10 aspect-[16/9] w-full rounded-lg border border-foreground/8 bg-white object-cover"
        />

        {guide.kind === "article" && guide.sections
          ? guide.sections.map((section) => (
              <section
                key={section.title[locale]}
                className="mt-10 border-t border-foreground/8 pt-8"
              >
                <h2 className="text-3xl">{section.title[locale]}</h2>
                <p className="mt-3 text-lg leading-8 text-muted-foreground">
                  {section.body[locale]}
                </p>
                {section.list ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-8 text-muted-foreground">
                    {section.list[locale].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))
          : null}

        {guide.kind === "compare" && guide.table ? (
          <div className="mt-10 overflow-hidden rounded-lg border border-foreground/10 bg-card">
            <div className="hidden grid-cols-3 bg-secondary/70 text-sm font-bold md:grid">
              {guide.table.headers[locale].map((h) => (
                <div key={h} className="px-4 py-3">
                  {h}
                </div>
              ))}
            </div>
            {guide.table.rows.map((row) => (
              <div
                key={row.label[locale]}
                className="grid gap-2 border-t border-foreground/8 px-4 py-4 md:grid-cols-3 md:gap-0"
              >
                <div className="font-semibold">{row.label[locale]}</div>
                <div className="text-muted-foreground">
                  <span className="mr-2 font-semibold text-foreground md:hidden">
                    {guide.table!.headers[locale][1]}:
                  </span>
                  {row.a[locale]}
                </div>
                <div className="text-muted-foreground">
                  <span className="mr-2 font-semibold text-foreground md:hidden">
                    {guide.table!.headers[locale][2]}:
                  </span>
                  {row.b[locale]}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {guide.verdict ? (
          <section className="mt-10 border-t border-foreground/8 pt-8">
            <h2 className="text-3xl">
              {locale === "it" ? "Come scegliere" : "How to choose"}
            </h2>
            <p className="mt-3 text-lg leading-8 text-muted-foreground">
              {guide.verdict[locale]}
            </p>
          </section>
        ) : null}

        <div className="mt-10 rounded-lg bg-primary p-6 text-primary-foreground">
          <p className="font-semibold">{guide.cta.label[locale]}</p>
          <Link
            href={guide.cta.hrefIt.startsWith("/en") || locale === "en" ? guide.cta.hrefEn : guide.cta.hrefIt}
            className="mt-4 inline-flex h-11 items-center rounded-sm bg-card px-5 text-sm font-semibold text-foreground"
          >
            {guide.cta.label[locale]} →
          </Link>
        </div>
        <AffiliateNote locale={locale} editorial className="mt-8" />
      </article>
    </SiteShell>
  );
}
