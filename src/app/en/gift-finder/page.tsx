import type { Metadata } from "next";
import { GiftFinderPage } from "@/components/pages/gift-finder-page";
import { HtmlLang } from "@/components/html-lang";
import gifts from "@/data/gifts.json";
import { giftInitialFromQuery } from "@/lib/gift-query";
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
    <>
      <HtmlLang locale="en" />
      <GiftFinderPage
        locale="en"
        products={gifts as GiftProduct[]}
        initial={giftInitialFromQuery(query)}
      />
    </>
  );
}
