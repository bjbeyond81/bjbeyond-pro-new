import Link from "next/link";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function AffiliateNote({
  locale,
  className,
  editorial = false,
}: {
  locale: Locale;
  className?: string;
  editorial?: boolean;
}) {
  const t = copy[locale];
  return (
    <p
      className={cn(
        "rounded-2xl border border-foreground/8 bg-card/70 px-4 py-3 text-sm leading-6 text-muted-foreground",
        className,
      )}
    >
      <strong className="font-semibold text-foreground">
        {locale === "it" ? "Trasparenza:" : "Disclosure:"}
      </strong>{" "}
      {t.disclosure} {editorial ? t.editorialNote : null}
    </p>
  );
}

export function ExternalCta({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
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
