import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type Guide = {
  slugIt: string;
  slugEn: string;
  tag: L<string>;
  title: L<string>;
  description: L<string>;
  lead: L<string>;
  kind: "article" | "compare";
  image: string;
  sections?: { title: L<string>; body: L<string>; list?: L<string[]> }[];
  table?: {
    headers: L<[string, string, string]>;
    rows: { label: L<string>; a: L<string>; b: L<string> }[];
  };
  verdict?: L<string>;
  cta: { hrefIt: string; hrefEn: string; label: L<string> };
  datePublished: string;
  dateModified: string;
};
