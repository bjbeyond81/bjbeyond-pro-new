import type { Locale } from "@/lib/i18n";
import {
  ULTRAHUMAN_STACK_HREF,
  ULTRAHUMAN_TRACKING_CODE,
  ULTRAHUMAN_PRODUCTS,
  ULTRAHUMAN_DISCOUNT,
  ultrahumanAffiliateUrl,
  ultrahumanGuideAffiliateUrl,
} from "@/lib/ultrahuman-stack-href";
export {
  ULTRAHUMAN_STACK_HREF,
  ULTRAHUMAN_TRACKING_CODE,
  ULTRAHUMAN_PRODUCTS,
  ULTRAHUMAN_DISCOUNT,
  ultrahumanAffiliateUrl,
  ultrahumanGuideAffiliateUrl,
} from "@/lib/ultrahuman-stack-href";
export type { UltrahumanProduct, UltrahumanProductId } from "@/lib/ultrahuman-stack-href";
export type { StackAffPosition, StackCampaign } from "@/lib/stack-types";
export { stackCampaigns } from "@/lib/stack-campaigns";
import { stackCampaigns } from "@/lib/stack-campaigns";
import type { StackAffPosition, StackCampaign } from "@/lib/stack-types";
import { ULTRAHUMAN_PRODUCTS as UH_PRODUCTS, ultrahumanAffiliateUrl as uhAff } from "@/lib/ultrahuman-stack-href";

export function getStack(slug: string) {
  return stackCampaigns.find((c) => c.slug === slug);
}

export function stackImageUrl(campaign: StackCampaign) {
  if (campaign.image.startsWith("http")) return campaign.image;
  return `https://bjbeyond.pro${campaign.image}`;
}

function stackTrackPosition(position: StackAffPosition): string {
  switch (position) {
    case "index-card":
      return "hub";
    case "detail-aside":
      return "aside";
    case "detail-mid":
      return "mid";
    case "detail-footer":
      return "footer";
    case "detail-sticky":
      return "sticky";
    default:
      return position;
  }
}

export function stackAffiliateUrl(
  campaign: StackCampaign,
  locale: Locale,
  position: StackAffPosition,
  productId?: "ringair" | "ringpro",
): string {
  const pos = stackTrackPosition(position);
  if (campaign.slug === "ultrahuman" && campaign.network === "impact") {
    const product =
      UH_PRODUCTS.find((p) => p.id === (productId ?? "ringair")) ??
      UH_PRODUCTS[0];
    return uhAff(product, locale, pos);
  }
  const token = `stack_${locale}_${pos}_${campaign.slug}`;
  const url = new URL(campaign.hrefBase);
  if (campaign.network === "impact") {
    url.searchParams.set("subId1", token);
  } else {
    url.searchParams.set("clickref", token);
  }
  return url.toString();
}

export function stackAffAttrs(
  campaign: StackCampaign,
  locale: Locale,
  position: StackAffPosition,
) {
  return {
    className: "js-aff-cta",
    "data-product": campaign.slug,
    "data-network":
      campaign.network === "impact"
        ? "impact"
        : campaign.network === "tiddly"
          ? "tiddly"
          : "awin",
    "data-position": position,
    "data-locale": locale,
  } as const;
}
