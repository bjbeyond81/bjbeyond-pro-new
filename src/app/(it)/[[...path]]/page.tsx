import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmazonPage } from "@/components/pages/amazon-page";
import { BuyerGuideDetailPage } from "@/components/pages/buyer-guide-detail-page";
import { GiftFinderPage } from "@/components/pages/gift-finder-page";
import { GuideDetailPage } from "@/components/pages/guide-detail-page";
import { GuidesIndexPage } from "@/components/pages/guides-index-page";
import { HomePage } from "@/components/pages/home-page";
import { StackDetailPage } from "@/components/pages/stack-detail-page";
import { StackIndexPage } from "@/components/pages/stack-index-page";
import { TechDetailPage } from "@/components/pages/tech-detail-page";
import { TechIndexPage } from "@/components/pages/tech-index-page";
import gifts from "@/data/gifts.json";
import type { GiftProduct } from "@/lib/gifts";
import { allItStaticPaths, matchRoute } from "@/lib/routes";
import { metadataFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return allItStaticPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}): Promise<Metadata> {
  const { path } = await params;
  return metadataFor(matchRoute(path));
}

export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path } = await params;
  const match = matchRoute(path);
  const products = gifts as GiftProduct[];

  switch (match.kind) {
    case "home":
      return <HomePage locale={match.locale} />;
    case "gifts":
      return <GiftFinderPage locale={match.locale} products={products} />;
    case "tech":
      return <TechIndexPage locale={match.locale} />;
    case "tech-detail":
      return <TechDetailPage locale={match.locale} slug={match.slug} />;
    case "amazon":
      return <AmazonPage locale={match.locale} />;
    case "guides":
      return <GuidesIndexPage locale={match.locale} />;
    case "guide-detail":
      return <GuideDetailPage locale={match.locale} slug={match.slug} />;
    case "buyer-guide":
      return <BuyerGuideDetailPage locale={match.locale} slug={match.slug} />;
    case "stack":
      return <StackIndexPage locale={match.locale} />;
    case "stack-detail":
      return <StackDetailPage locale={match.locale} slug={match.slug} />;
    default:
      notFound();
  }
}
