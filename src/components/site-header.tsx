"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { copy } from "@/lib/copy";
import { localizedPath, swapLocalePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
    <header className="sticky top-0 z-30 border-b border-foreground/8 bg-background/85 backdrop-blur-xl">
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={t.menu}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>BJ Beyond</SheetTitle>
                <p className="kicker mt-2">{t.tagline}</p>
              </SheetHeader>
              <nav className="flex flex-col gap-4 text-lg">
                <Link href={home}>{locale === "it" ? "Home" : "Home"}</Link>
                {NAV.map((key) => (
                  <Link key={key} href={localizedPath(locale, NAV_HREF[key])}>
                    {t.nav[key]}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
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
