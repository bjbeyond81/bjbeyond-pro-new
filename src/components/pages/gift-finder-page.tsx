import { GiftFinder } from "@/components/gift-finder";
import { SiteShell } from "@/components/site-shell";
import { parseGiftQuery, type GiftQuery } from "@/lib/gift-query";
import type { GiftProduct } from "@/lib/gifts";
import type { Locale } from "@/lib/i18n";

export function GiftFinderPage({
  locale,
  products,
  query,
}: {
  locale: Locale;
  products: GiftProduct[];
  query?: GiftQuery;
}) {
  return (
    <SiteShell locale={locale}>
      <GiftJsonLd />
      <GiftFinder
        locale={locale}
        products={products}
        query={query ?? parseGiftQuery({})}
      />
    </SiteShell>
  );
}

function GiftJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bjbeyond.pro/gift-finder/#website",
        url: "https://bjbeyond.pro/gift-finder/",
        name: "BJ Beyond Gift Finder",
        inLanguage: ["it", "en"],
        description:
          "Gift finder con idee regalo e prodotti Tech selezionati su Amazon.it.",
      },
      {
        "@type": "WebApplication",
        "@id": "https://bjbeyond.pro/gift-finder/#app",
        name: "BJ Beyond Gift Finder",
        url: "https://bjbeyond.pro/gift-finder/",
        applicationCategory: "ShoppingApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        description:
          "Applicazione web per filtrare idee regalo e prodotti Tech per destinatario, budget e categoria.",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
