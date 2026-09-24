import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { SceneVisual } from "@/components/visuals/scene-visual";
import { AffiliateNote } from "@/components/ui-bits";
import { localizedPath, type Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  const it = locale === "it";
  const path = (p: string) => localizedPath(locale, p);
  const categories = [
    { scene: "gifts" as const, href: "/gift-finder", title: "Gift Finder", text: it ? "Un regalo pensato davvero." : "A little more thoughtful.", number: "01" },
    { scene: "tech" as const, href: "/tech", title: "Tech", text: it ? "Design da usare ogni giorno." : "Design for your everyday.", number: "02" },
    { scene: "guides" as const, href: "/guides", title: it ? "Guide" : "Guides", text: it ? "Il punto di vista che mancava." : "A fresh perspective before you buy.", number: "03" },
  ];
  return (
    <SiteShell locale={locale}>
      <section className="editorial-hero">
        <SceneVisual scene="hero" locale={locale} className="hero-photo" />
        <div className="hero-content">
          <p className="eyebrow">{it ? "TECNOLOGIA. DESIGN. SCOPERTE." : "TECHNOLOGY. DESIGN. DISCOVERY."}</p>
          <h1>BJ Beyond<span>.</span></h1>
          <p className="hero-statement">{it ? <>Il piacere di<br />scegliere meglio.</> : <>Good things.<br />Better choices.</>}</p>
          <p className="hero-description">{it ? "Oggetti, idee e tecnologia che meritano la tua attenzione." : "Objects, ideas and technology worth your attention."}</p>
          <Link href={path("/tech")} className="editorial-button light">{it ? "Esplora la selezione" : "Explore the edit"}<ArrowUpRight size={18} /></Link>
        </div>
        <div className="hero-caption"><span>BJ BEYOND / {it ? "LA SELEZIONE" : "THE EDIT"}</span><span>01 — 05</span></div>
      </section>

      <nav className="section-nav" aria-label={it ? "Esplora le sezioni" : "Explore sections"}>
        {[["Gift Finder", "/gift-finder"], ["Tech", "/tech"], [it ? "Offerte Amazon" : "Amazon offers", "/amazon-offers"], [it ? "Guide" : "Guides", "/guides"], ["The Stack", "/stack"]].map(([title, href], i) => <Link key={href} href={path(href)}><span>0{i + 1}</span>{title}<ArrowUpRight size={16} /></Link>)}
      </nav>

      <section className="editorial-container editorial-section">
        <div className="section-heading"><div><p className="eyebrow">{it ? "IL TUO PROSSIMO PASSO" : "FIND YOUR NEXT"}</p><h2>{it ? "Segui la curiosità." : "Follow your curiosity."}</h2></div><p>{it ? "Tre modi per trovare qualcosa di speciale." : "Three ways to find something worth keeping."}</p></div>
        <div className="category-grid">{categories.map(c => <Link className="category-item" key={c.href} href={path(c.href)}><SceneVisual scene={c.scene} locale={locale} className="category-photo" /><div className="category-meta"><span>{c.number} / {c.title}</span><ArrowUpRight size={22} /></div><h3>{c.text}</h3></Link>)}</div>
      </section>

      <section className="spotlight-band">
        <div className="editorial-container spotlight-grid">
          <SceneVisual scene="ultrahuman" locale={locale} className="spotlight-photo" />
          <div className="spotlight-copy"><p className="eyebrow">{it ? "IN PRIMO PIANO / WEARABLE" : "IN FOCUS / WEARABLE"}</p><h2>Ultrahuman<br />Ring AIR<span>.</span></h2><p>{it ? "Sonno e recupero senza abbonamento dati obbligatorio. Scopri formato, funzionalità e cosa verificare prima di scegliere." : "Sleep and recovery without a mandatory data subscription. Explore the design, features and what to check before you choose."}</p><Link className="editorial-button" href={path("/stack/ultrahuman")}>{it ? "Scopri Ring AIR" : "Discover Ring AIR"}<ArrowUpRight size={18} /></Link><p className="micro-copy">{it ? "Link affiliati. Non è un dispositivo medico." : "Affiliate links. Not a medical device."}</p></div>
        </div>
      </section>

      <section className="editorial-container editorial-section stack-home">
        <div><p className="eyebrow">THE STACK / AWIN</p><h2>{it ? "Grandi idee. Un solo posto." : "Good finds. One destination."}</h2><p>{it ? "Esplora le campagne Stack: schede prodotto, FAQ e link affiliati tracciati." : "Explore the Stack campaigns — product guides, FAQs and tracked affiliate links."}</p></div>
        <div className="stack-home-links"><Link href={path("/stack")}>{it ? "Esplora lo Stack" : "Explore the Stack"}<ArrowRight size={20} /></Link><Link href={path("/amazon-offers")}>{it ? "Servizi e offerte Amazon" : "Amazon services & offers"}<ArrowRight size={20} /></Link></div>
        <AffiliateNote locale={locale} variant="all" className="col-span-full" />
      </section>
    </SiteShell>
  );
}
