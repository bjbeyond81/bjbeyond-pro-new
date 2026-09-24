import type { Metadata } from "next";
import { GiftFinderPage } from "@/components/pages/gift-finder-page";
import gifts from "@/data/gifts.json";
import { parseGiftQuery } from "@/lib/gift-query";
import type { GiftProduct } from "@/lib/gifts";
import { metadataFor } from "@/lib/seo";

export const metadata: Metadata = metadataFor({ kind: "gifts", locale: "en" });

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  return (
    <GiftFinderPage
      locale="en"
      products={gifts as GiftProduct[]}
      query={parseGiftQuery(query)}
    />
  );
}
