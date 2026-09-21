"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-foreground/8 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link href={home} className="flex items-center gap-3 no-underline">
          <span className="grid size-9 place-items-center rounded-full bg-primary font-sans text-[10px] font-extrabold tracking-[0.14em] text-primary-foreground">
            BJ
          </span>
          <span className="text-[11px] font-extrabold tracking-[0.22em] leading-tight">
            BJ
            <br />
            BEYOND
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[12px] font-bold tracking-wide md:flex">
          {NAV.map((key) => {
            const href = localizedPath(locale, NAV_HREF[key]);
            const active = isActive(pathname, href);
            return (
              <Link
                key={key}
                href={href}
                className={cn(
                  "opacity-55 transition-opacity hover:opacity-100",
                  active && "opacity-100 underline decoration-2 underline-offset-8",
                )}
              >
                {t.nav[key]}
              </Link>
            );
          })}
          <LangSwitch locale={locale} pathname={pathname} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch locale={locale} pathname={pathname} />
          <details className="relative">
            <summary
              className="grid size-10 list-none place-items-center rounded-full border border-foreground/15 [&::-webkit-details-marker]:hidden"
              aria-label={t.menu}
            >
              <Menu className="size-4" />
            </summary>
            <nav className="absolute top-[calc(100%+10px)] right-0 z-50 w-[min(calc(100vw-2rem),18rem)] rounded-3xl border border-foreground/10 bg-card p-3 shadow-[0_18px_50px_rgba(19,19,19,.16)]">
              <Link href={home} className="block rounded-2xl px-3 py-3 text-base hover:bg-secondary">
                Home
              </Link>
              {NAV.map((key) => (
                <Link
                  key={key}
                  href={localizedPath(locale, NAV_HREF[key])}
                  className="block rounded-2xl px-3 py-3 text-base hover:bg-secondary"
                >
                  {t.nav[key]}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({ locale, pathname }: { locale: Locale; pathname: string }) {
  const it = swapLocalePath(pathname, "it");
  const en = swapLocalePath(pathname, "en");
  return (
    <div
      className="inline-flex rounded-full border border-foreground/12 bg-card p-0.5 text-[11px] font-bold tracking-[0.12em]"
      aria-label="Language"
    >
      <Link
        href={it}
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
