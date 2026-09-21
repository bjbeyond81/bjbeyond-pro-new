import type { Locale } from "@/lib/i18n";

type L<T> = Record<Locale, T>;

export type AmazonService = {
  id: string;
  badge: L<string>;
  name: L<string>;
  body: L<string>;
  facts: L<string>;
  cta: L<string>;
  href: string;
  image: string;
  group: "core" | "channels";
};

export const amazonServices: AmazonService[] = [
  {
    id: "prime",
    badge: { it: "Prime", en: "Prime" },
    name: { it: "Amazon Prime", en: "Amazon Prime" },
    body: {
      it: "Consegne rapide, Prime Video e altri vantaggi Prime. Disponibile una prova gratuita per i clienti idonei.",
      en: "Fast delivery, Prime Video and other Prime benefits. A free trial is available for eligible customers.",
    },
    facts: {
      it: "30 giorni gratuiti per clienti idonei.",
      en: "30 days free for eligible customers.",
    },
    cta: { it: "Scopri Prime", en: "Explore Prime" },
    href: "https://www.amazon.it/provaprime?tag=357921-21",
    image: "/amazon/prime.jpg",
    group: "core",
  },
  {
    id: "prime-video",
    badge: { it: "Streaming", en: "Streaming" },
    name: { it: "Prime Video", en: "Prime Video" },
    body: {
      it: "Film, serie e contenuti inclusi nell'ecosistema Prime Video. L'idoneità alla prova è stabilita da Amazon.",
      en: "Films, series and titles inside the Prime Video ecosystem. Trial eligibility is set by Amazon.",
    },
    facts: {
      it: "Prova gratuita prevista per clienti idonei.",
      en: "A free trial is available for eligible customers.",
    },
    cta: { it: "Apri Prime Video", en: "Open Prime Video" },
    href: "https://www.primevideo.com/?tag=357921-21",
    image: "/amazon/video.jpg",
    group: "core",
  },
  {
    id: "audible",
    badge: { it: "Audio", en: "Audio" },
    name: { it: "Audible", en: "Audible" },
    body: {
      it: "Audiolibri, podcast e produzioni originali. Ascolto su mobile, web e dispositivi compatibili.",
      en: "Audiobooks, podcasts and originals. Listen on mobile, web and compatible devices.",
    },
    facts: {
      it: "30 giorni gratuiti per clienti idonei.",
      en: "30 days free for eligible customers.",
    },
    cta: { it: "Prova Audible", en: "Try Audible" },
    href: "https://www.amazon.it/b?node=17941650031&actionCode=AZIOther35606092201BR&tag=357921-21",
    image: "/amazon/audible.jpg",
    group: "core",
  },
  {
    id: "music",
    badge: { it: "Music", en: "Music" },
    name: { it: "Amazon Music Unlimited", en: "Amazon Music Unlimited" },
    body: {
      it: "Catalogo musicale on demand, ascolto senza pubblicità e modalità offline sui dispositivi compatibili.",
      en: "On-demand catalogue, ad-free listening and offline mode on compatible devices.",
    },
    facts: {
      it: "30 giorni gratuiti per clienti idonei.",
      en: "30 days free for eligible customers.",
    },
    cta: { it: "Scopri Music Unlimited", en: "Explore Music Unlimited" },
    href: "https://www.amazon.it/gp/dmusic/promotions/AmazonMusicUnlimited?tag=357921-21",
    image: "/amazon/music.jpg",
    group: "core",
  },
  {
    id: "kindle",
    badge: { it: "Lettura", en: "Reading" },
    name: { it: "Kindle Unlimited", en: "Kindle Unlimited" },
    body: {
      it: "Accesso a un ampio catalogo di eBook leggibili su Kindle e tramite app Kindle.",
      en: "A large eBook catalogue, readable on Kindle devices and in the Kindle app.",
    },
    facts: {
      it: "Prova gratuita secondo i requisiti Amazon.",
      en: "Free trial according to Amazon's terms.",
    },
    cta: { it: "Prova Kindle Unlimited", en: "Try Kindle Unlimited" },
    href: "https://www.amazon.it/kindle-dbs/hz/signup?tag=357921-21",
    image: "/amazon/kindle.jpg",
    group: "core",
  },
  {
    id: "student",
    badge: { it: "Studenti", en: "Students" },
    name: { it: "Prime Student", en: "Prime Student" },
    body: {
      it: "Vantaggi Prime dedicati agli studenti universitari idonei, con periodo iniziale senza costi aggiuntivi.",
      en: "Prime benefits for eligible university students, with an introductory period at no extra cost.",
    },
    facts: {
      it: "90 giorni senza costi aggiuntivi per clienti idonei.",
      en: "90 days at no extra cost for eligible customers.",
    },
    cta: { it: "Scopri Prime Student", en: "Explore Prime Student" },
    href: "https://www.amazon.it/joinstudent?tag=357921-21",
    image: "/amazon/student.jpg",
    group: "core",
  },
  {
    id: "wedding",
    badge: { it: "Coppie", en: "Couples" },
    name: { it: "Lista Nozze", en: "Wedding Registry" },
    body: {
      it: "Crea e condividi una lista nozze Amazon, aggiungendo i prodotti desiderati in un unico spazio.",
      en: "Create and share an Amazon wedding registry, with every wanted item in one place.",
    },
    facts: {
      it: "Servizio dedicato alla creazione di una Lista Nozze.",
      en: "A dedicated service for building a wedding list.",
    },
    cta: { it: "Crea una Lista Nozze", en: "Create a wedding list" },
    href: "https://www.amazon.it/wedding?tag=357921-21",
    image: "/amazon/wedding.jpg",
    group: "core",
  },
  {
    id: "baby",
    badge: { it: "Famiglia", en: "Family" },
    name: { it: "Lista Nascita", en: "Baby Registry" },
    body: {
      it: "Organizza in un unico elenco i prodotti utili per l'arrivo di un bambino e condividi la lista con chi vuoi.",
      en: "Gather what you need for a new baby in one list, then share it.",
    },
    facts: {
      it: "Registrazione disponibile per clienti idonei.",
      en: "Registration available for eligible customers.",
    },
    cta: { it: "Crea una Lista Nascita", en: "Create a baby list" },
    href: "https://www.amazon.it/baby-reg/homepage?tag=357921-21",
    image: "/amazon/baby.jpg",
    group: "core",
  },
  {
    id: "try-before",
    badge: { it: "Moda", en: "Fashion" },
    name: {
      it: "Prime: prova prima, paga poi",
      en: "Prime Try Before You Buy",
    },
    body: {
      it: "Su articoli idonei puoi provare prima alcuni prodotti e completare il pagamento secondo le condizioni Amazon.",
      en: "On eligible items you can try first, then complete payment under Amazon's terms.",
    },
    facts: {
      it: "Solo articoli e clienti idonei.",
      en: "Eligible items and customers only.",
    },
    cta: { it: "Vedi gli articoli idonei", en: "See eligible items" },
    href: "https://www.amazon.it/primetrybeforeyoubuy?tag=357921-21",
    image: "/amazon/fashion.jpg",
    group: "core",
  },
  {
    id: "mubi",
    badge: { it: "Cinema", en: "Cinema" },
    name: { it: "MUBI", en: "MUBI" },
    body: {
      it: "Cinema d'autore e selezioni curate disponibili come Prime Video Channel.",
      en: "Arthouse cinema and curated selections as a Prime Video Channel.",
    },
    facts: {
      it: "Canale Prime Video. Condizioni e prova su Amazon.",
      en: "Prime Video Channel. Terms and trial on Amazon.",
    },
    cta: { it: "Scopri MUBI", en: "Explore MUBI" },
    href: "https://www.primevideo.com/offers/?benefitId=mubiit&tag=357921-21",
    image: "/amazon/mubi.jpg",
    group: "channels",
  },
  {
    id: "raro",
    badge: { it: "Film", en: "Movies" },
    name: { it: "Raro Video", en: "Raro Video" },
    body: {
      it: "Film e cinema selezionato all'interno dei Prime Video Channels.",
      en: "Selected films and cinema inside Prime Video Channels.",
    },
    facts: {
      it: "Canale Prime Video. Condizioni e prova su Amazon.",
      en: "Prime Video Channel. Terms and trial on Amazon.",
    },
    cta: { it: "Scopri Raro Video", en: "Explore Raro Video" },
    href: "https://www.primevideo.com/offers/?benefitId=rarovideoit&tag=357921-21",
    image: "/amazon/raro.jpg",
    group: "channels",
  },
  {
    id: "fullmoon",
    badge: { it: "Suspense", en: "Suspense" },
    name: { it: "Full Moon TV", en: "Full Moon TV" },
    body: {
      it: "Contenuti dedicati a suspense, horror e cinema di genere.",
      en: "Suspense, horror and genre cinema.",
    },
    facts: {
      it: "Canale Prime Video. Condizioni e prova su Amazon.",
      en: "Prime Video Channel. Terms and trial on Amazon.",
    },
    cta: { it: "Scopri Full Moon TV", en: "Explore Full Moon TV" },
    href: "https://www.primevideo.com/offers/?benefitId=duelit&tag=357921-21",
    image: "/amazon/fullmoon.jpg",
    group: "channels",
  },
];
