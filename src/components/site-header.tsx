"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy } from "@/lib/copy";
import { localizedPath, swapLocalePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV = ["gifts", "tech", "amazon", "guides", "stack"] as const;

const NAV_HREF: Record<(typeof NAV)[number], string> = {
  gifts: "/gift-finder",
  tech: "/tech",
  amazon: "/amazon-offers",
  guides: "/guides",
  stack: "/stack",
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const pathname = usePathname() || "/";
  const home = localizedPath(locale, "/");

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/8 bg-white/95 backdrop-blur-lg">
      <div className="editorial-container">
        <div className="flex items-center justify-between gap-4 py-5">
          <Link href={home} className="flex items-center gap-3 no-underline">
            <span className="brand-wordmark">bj beyond<span>.</span></span>
          </Link>

          <div className="flex items-center gap-6">
            <nav aria-label={locale === "it" ? "Navigazione principale" : "Main navigation"} className="hidden items-center gap-6 text-[12px] font-medium md:flex">
              {NAV.map((key) => (
                <NavLink
                  key={key}
                  href={localizedPath(locale, NAV_HREF[key])}
                  pathname={pathname}
                >
                  {t.nav[key]}
                </NavLink>
              ))}
            </nav>
            <LangSwitch locale={locale} pathname={pathname} />
          </div>
        </div>

        <nav
          id="site-mobile-nav"
          className="flex flex-wrap gap-x-1 gap-y-1 border-t border-foreground/8 py-2 text-[12px] font-bold tracking-wide md:hidden"
        >
          <Link href={home} className="rounded-full px-2.5 py-2 hover:bg-secondary">
            Home
          </Link>
          {NAV.map((key) => (
            <Link
              key={key}
              href={localizedPath(locale, NAV_HREF[key])}
              className={cn(
                "rounded-full px-2.5 py-2 hover:bg-secondary",
                isActive(pathname, localizedPath(locale, NAV_HREF[key])) &&
                  "bg-primary text-primary-foreground",
              )}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const active = isActive(pathname, href);
  return (
    <Link
      href={href}
      className={cn(
        "opacity-55 transition-opacity hover:opacity-100",
        active && "opacity-100 underline decoration-2 underline-offset-8",
      )}
    >
      {children}
    </Link>
  );
}

function LangSwitch({ locale, pathname }: { locale: Locale; pathname: string }) {
  const it = swapLocalePath(pathname, "it");
  const en = swapLocalePath(pathname, "en");
  return (
    <div
      className="inline-flex rounded-full border border-foreground/12 bg-card p-0.5 text-[11px] font-bold tracking-[0.12em]"
      aria-label={locale === "it" ? "Lingua" : "Language"}
    >
      <Link
        href={it}
        hrefLang="it"
        lang="it"
        className={cn(
          "rounded-full px-2.5 py-1.5",
          locale === "it" && "bg-primary text-primary-foreground",
        )}
        aria-current={locale === "it" ? "page" : undefined}
      >
        IT
      </Link>
      <Link
        href={en}
        hrefLang="en"
        lang="en"
        className={cn(
          "rounded-full px-2.5 py-1.5",
          locale === "en" && "bg-primary text-primary-foreground",
        )}
        aria-current={locale === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}

function isActive(pathname: string, href: string) {
  const a = normalize(pathname);
  const b = normalize(href);
  if (b === "/" || b === "/en") return a === b;
  return a === b || a.startsWith(`${b}/`);
}

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}
