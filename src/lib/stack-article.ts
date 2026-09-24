import { readFileSync } from "fs";
import { join } from "path";
import type { Locale } from "@/lib/i18n";

export type StackFaq = { q: string; a: string };
export type StackArticle = {
  disclosure: string;
  h1: string;
  intro: string[];
  /** Raw markdown body sections after H1 (excluding FAQ / CTA placeholder) for render */
  sections: { heading?: string; html: string }[];
  faqs: StackFaq[];
  ctaLabel: string;
  updatedLabel: string;
};

const CONTENT_DIR = join(process.cwd(), "src/content/stack");

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Minimal markdown → HTML for our stack articles (tables, lists, bold, links, paragraphs). */
export function mdInline(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" rel="noopener noreferrer" target="_blank" class="underline underline-offset-2 hover:text-foreground">$1</a>');
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  return out;
}

function tableToHtml(rows: string[]): string {
  if (rows.length < 2) return rows.map((r) => `<p>${mdInline(r)}</p>`).join("\n");
  const parseRow = (r: string) =>
    r
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
  const head = parseRow(rows[0]);
  const bodyRows = rows.slice(2).filter((r) => r.includes("|"));
  const th = head.map((c) => `<th class="px-3 py-2 text-left font-semibold border-b border-foreground/15">${mdInline(c)}</th>`).join("");
  const trs = bodyRows
    .map((r) => {
      const cells = parseRow(r);
      return `<tr>${cells.map((c) => `<td class="px-3 py-2 align-top border-b border-foreground/8">${mdInline(c)}</td>`).join("")}</tr>`;
    })
    .join("\n");
  return `<div class="overflow-x-auto rounded-2xl border border-foreground/10 my-6"><table class="w-full text-sm sm:text-base"><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function blocksToHtml(blocks: string[]): string {
  const html: string[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i].trim();
    if (!b) {
      i++;
      continue;
    }
    if (b.startsWith("|")) {
      const rows: string[] = [];
      while (i < blocks.length && blocks[i].trim().startsWith("|")) {
        rows.push(...blocks[i].trim().split("\n").filter((l) => l.trim().startsWith("|")));
        i++;
      }
      html.push(tableToHtml(rows));
      continue;
    }
    if (/^(\d+\.\s|-\s|\*\s)/.test(b)) {
      const lines = b.split("\n").filter(Boolean);
      const ordered = /^\d+\./.test(lines[0]);
      const tag = ordered ? "ol" : "ul";
      const items = lines
        .map((l) => l.replace(/^(\d+\.\s+|-\s+|\*\s+)/, ""))
        .map((l) => `<li class="leading-7">${mdInline(l)}</li>`)
        .join("");
      html.push(`<${tag} class="my-4 ml-5 grid gap-2 list-decimal">${items}</${tag}>`);
      i++;
      continue;
    }
    html.push(`<p class="my-4 text-lg leading-8 text-muted-foreground">${mdInline(b)}</p>`);
    i++;
  }
  return html.join("\n");
}

export function parseStackMarkdown(raw: string, locale: Locale): StackArticle {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let disclosure = "";
  let h1 = "";
  const bodyLines: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!disclosure && /^\*\*Affiliate disclosure:\*\*/i.test(line) || /^\*\*Disclosure affiliat/i.test(line)) {
      disclosure = line.replace(/^\*\*[^*]+\*\*\s*/, "").trim();
      i++;
      continue;
    }
    if (!h1 && line.startsWith("# ")) {
      h1 = line.slice(2).trim();
      i++;
      continue;
    }
    if (/^\[\s*AFFILIATE_LINK\s*\]/.test(line.trim()) || /^\[\*\*AFFILIATE_LINK\*\*\]/.test(line.trim()) || line.includes("[AFFILIATE_LINK]")) {
      i++;
      continue;
    }
    bodyLines.push(line);
    i++;
  }

  // Split FAQ
  const full = bodyLines.join("\n");
  const faqSplit = full.split(/^## FAQ\s*$/m);
  const main = faqSplit[0] ?? full;
  const faqRaw = faqSplit[1] ?? "";

  const faqs: StackFaq[] = [];
  const faqParts = faqRaw.split(/\n(?=\*\*[^*\n]+\*\*\s*$)/m);
  for (const part of faqParts) {
    const m = part.match(/^\*\*([^*]+)\*\*\s*\n([\s\S]*)$/);
    if (!m) continue;
    const q = m[1].trim();
    const a = m[2].replace(/\[AFFILIATE_LINK\][^\n]*/g, "").trim();
    if (q && a) faqs.push({ q, a: a.replace(/\n+/g, " ").trim() });
  }

  // Sections by ##
  const sections: { heading?: string; html: string }[] = [];
  const secParts = main.split(/\n(?=## )/g);
  for (const part of secParts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("## ")) {
      const nl = trimmed.indexOf("\n");
      const heading = (nl === -1 ? trimmed.slice(3) : trimmed.slice(3, nl)).trim();
      const rest = nl === -1 ? "" : trimmed.slice(nl + 1);
      const blocks = rest.split(/\n\n+/);
      sections.push({ heading, html: blocksToHtml(blocks) });
    } else {
      const blocks = trimmed.split(/\n\n+/);
      sections.push({ html: blocksToHtml(blocks) });
    }
  }

  const ctaLabel =
    locale === "it"
      ? "Vedi il prezzo attuale sul sito ufficiale"
      : "See current price on the official site";

  const updatedLabel =
    locale === "it" ? "Aggiornato il 24 set 2026" : "Updated 24 Sep 2026";

  return {
    disclosure:
      disclosure ||
      (locale === "it"
        ? "Possiamo ricevere una commissione se acquisti tramite i link di questa pagina, senza costi extra per te."
        : "We may earn a commission if you buy through links on this page, at no extra cost to you."),
    h1,
    intro: [],
    sections,
    faqs,
    ctaLabel,
    updatedLabel,
  };
}

export function loadStackArticle(slug: string, locale: Locale): StackArticle {
  const file = join(CONTENT_DIR, `${slug}.${locale}.md`);
  const raw = readFileSync(file, "utf8");
  return parseStackMarkdown(raw, locale);
}
