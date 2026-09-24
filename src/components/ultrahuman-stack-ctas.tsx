import { ExternalCta } from "@/components/ui-bits";
import type { Locale } from "@/lib/i18n";
import {
  stackAffiliateUrl,
  ULTRAHUMAN_DISCOUNT,
  ULTRAHUMAN_PRODUCTS,
  type StackCampaign,
  type UltrahumanProduct,
} from "@/lib/stack";

function AffCta({
  campaign,
  locale,
  position,
  fullWidth = true,
  product,
}: {
  campaign: StackCampaign;
  locale: Locale;
  position: "detail-aside" | "detail-mid" | "detail-footer" | "detail-sticky";
  fullWidth?: boolean;
  product?: UltrahumanProduct;
}) {
  const href = stackAffiliateUrl(campaign, locale, position, product?.id);
  const label = product
    ? `${product.name[locale]} · ${product.priceLabel[locale]}`
    : position === "detail-sticky"
      ? campaign.shopCta[locale].replace(/\s*→\s*$/, "")
      : campaign.cta[locale];
  return (
    <ExternalCta
      href={href}
      locale={locale}
      fullWidth={fullWidth}
      showArrow={false}
      dataProduct={product ? product.trackSlug : campaign.slug}
      dataNetwork={
        campaign.network === "impact"
          ? "impact"
          : campaign.network === "tiddly"
            ? "tiddly"
            : "awin"
      }
      dataPosition={position}
      dataLocale={locale}
    >
      {label}
    </ExternalCta>
  );
}

export function UltrahumanDiscountBlock({ locale }: { locale: Locale }) {
  const d = ULTRAHUMAN_DISCOUNT;
  return (
    <div className="rounded-2xl border border-dashed border-foreground/20 bg-background/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {d.label[locale]}
      </p>
      <p className="mt-2 font-mono text-2xl font-bold tracking-wide">{d.code}</p>
      <p className="mt-3 text-sm leading-6">
        <strong>{d.strong[locale]}</strong> {d.rest[locale]}
      </p>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">{d.note[locale]}</p>
    </div>
  );
}

export function StackCampaignCtas({
  campaign,
  locale,
  position,
}: {
  campaign: StackCampaign;
  locale: Locale;
  position: "detail-aside" | "detail-mid" | "detail-footer" | "detail-sticky";
}) {
  if (campaign.slug === "ultrahuman") {
    return (
      <div className="grid gap-3">
        {ULTRAHUMAN_PRODUCTS.map((product) => (
          <div key={product.id} className="grid gap-1">
            <AffCta
              campaign={campaign}
              locale={locale}
              position={position}
              product={product}
            />
            <p className="text-xs text-muted-foreground">{product.priceNote[locale]}</p>
          </div>
        ))}
        {position !== "detail-sticky" ? (
          <UltrahumanDiscountBlock locale={locale} />
        ) : null}
      </div>
    );
  }
  return <AffCta campaign={campaign} locale={locale} position={position} />;
}
