import { GiftFinder } from "@/components/gift-finder";
import { SiteShell } from "@/components/site-shell";
import type { GiftProduct } from "@/lib/gifts";
import type { Locale } from "@/lib/i18n";

export function GiftFinderPage({
  locale,
  products,
}: {
  locale: Locale;
  products: GiftProduct[];
}) {
  return (
    <SiteShell locale={locale}>
      <GiftFinder locale={locale} products={products} />
    </SiteShell>
  );
}
