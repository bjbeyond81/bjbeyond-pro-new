import Link from "next/link";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function AffiliateNote({
  locale,
  className,
  variant = "amazon",
  editorial = false,
}: {
  locale: Locale;
  className?: string;
  variant?: "amazon" | "awin" | "all";
  editorial?: boolean;
}) {
  const t = copy[locale];
  const amazon = variant === "amazon" || variant === "all";
  const awin = variant === "awin" || variant === "all";
  return (
    <div
      className={cn(
        "rounded-2xl border border-foreground/8 bg-card/70 px-4 py-3 text-sm leading-6 text-muted-foreground",
        className,
      )}
    >
      {amazon ? (
        <p>
          <strong className="font-semibold text-foreground">
            {locale === "it" ? "Trasparenza Amazon:" : "Amazon disclosure:"}
          </strong>{" "}
          {t.disclosure}
          {editorial ? ` ${t.editorialNote}` : null}
        </p>
      ) : null}
      {awin ? (
        <p className={amazon ? "mt-2" : undefined}>
          <strong className="font-semibold text-foreground">
            {locale === "it" ? "Trasparenza Awin:" : "Awin disclosure:"}
          </strong>{" "}
          {t.awinDisclosure}
        </p>
      ) : null}
    </div>
  );
}

export function PriceNote({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <p className={cn("text-xs leading-5 text-muted-foreground", className)}>
      {copy[locale].priceDisclaimer}
    </p>
  );
}

function networkOf(href: string): "amazon" | "awin" | "ad" {
  if (/amazon\.|amzn\.to|primevideo\.com/i.test(href)) return "amazon";
  if (/awin1\.com/i.test(href)) return "awin";
  return "ad";
}

export function ExternalCta({
  href,
  children,
  light = false,
  locale = "it",
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  locale?: Locale;
}) {
  const t = copy[locale];
  const network = networkOf(href);
  const note =
    network === "amazon"
      ? t.paidLink
      : network === "awin"
        ? locale === "it"
          ? "pubblicità · Awin"
          : "advertising · Awin"
        : t.advertising;
  return (
    <span className="inline-flex flex-col items-start gap-1">
      <a
        href={href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className={cn(
          "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold",
          light
            ? "bg-card text-foreground hover:bg-card/90"
            : "bg-primary text-primary-foreground hover:bg-primary/90",
        )}
      >
        {children} →
      </a>
      <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
        {note}
      </span>
    </span>
  );
}

export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-3 text-4xl leading-[0.94] sm:text-6xl lg:text-7xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-7 text-muted-foreground sm:text-xl">
        {lead}
      </p>
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold underline-offset-4 hover:underline">
      {children}
    </Link>
  );
}
