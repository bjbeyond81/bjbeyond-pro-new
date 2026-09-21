import Link from "next/link";
import { copy } from "@/lib/copy";
import { localizedPath, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="border-t border-foreground/8">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.22em]">BJ BEYOND</p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-foreground">
            <Link href={localizedPath(locale, "/gift-finder")}>{t.nav.gifts}</Link>
            <Link href={localizedPath(locale, "/tech")}>{t.nav.tech}</Link>
            <Link href={localizedPath(locale, "/amazon-offers")}>{t.nav.amazon}</Link>
            <Link href={localizedPath(locale, "/guides")}>{t.nav.guides}</Link>
            <Link href={localizedPath(locale, "/stack")}>{t.nav.stack}</Link>
          </nav>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            {t.footerNote}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {t.disclosure}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {t.awinDisclosure}
          </p>
        </div>
        <div className="text-sm leading-6 text-muted-foreground sm:text-right">
          <p>{t.amazonTm}</p>
          <p className="mt-3">{t.noDirectSales}</p>
          <p className="mt-3">
            <Link href={localizedPath(locale, "/")} className="underline underline-offset-4">
              {t.goHome}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
