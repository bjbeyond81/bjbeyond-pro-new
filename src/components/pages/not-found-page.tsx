import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <SiteShell locale={locale}>
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <p className="kicker">404</p>
        <h1 className="mt-3 text-5xl leading-[0.92] sm:text-7xl">
          {t.notFoundTitle}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          {t.notFoundLead}
        </p>
        <Link
          href={localizedPath(locale, "/")}
          className="mt-8 inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
        >
          {t.goHome}
        </Link>
      </div>
    </SiteShell>
  );
}
