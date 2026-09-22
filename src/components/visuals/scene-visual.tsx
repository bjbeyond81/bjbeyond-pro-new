import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const scenes = {
  hero: ["hero", "Libri, regali e cuffie", "Books, gifts and headphones"],
  gifts: ["gifts", "Regalo e gioielli", "Gift box and jewelry"],
  tech: ["tech", "Telefono, orologio e auricolari", "Phone, watch and earbuds"],
  amazon: ["amazon", "Regali, lettura e audio", "Gifts, reading and audio"],
  guides: ["guides", "Libri e appunti", "Books and notes"],
  stack: ["stack", "Accessori per casa e scrivania", "Home and desk accessories"],
  desk: ["desk", "Telefono e ricarica wireless", "Phone and wireless charging"],
  home: ["imou", "Videocamera da interno", "Indoor security camera"],
  move: ["move", "Tapis roulant sotto la scrivania", "Under-desk treadmill"],
  learn: ["learn", "Schede per lo studio", "Study flashcards"],
  water: ["water", "Caraffa e bicchiere d'acqua", "Water carafe and glass"],
  ultrahuman: ["", "Ultrahuman Ring Pro, Bionic Gold", "Ultrahuman Ring Pro, Bionic Gold"],
} as const;

export function SceneVisual({ scene, className, label, locale = "en" }: {
  scene: keyof typeof scenes;
  className?: string;
  label?: string;
  locale?: Locale;
}) {
  const item = scenes[scene];
  const ring = scene === "ultrahuman";
  return (
    <div className={cn("relative isolate overflow-hidden bg-white", className)}>
      <Image
        src={ring ? "https://public-web-assets.uh-static.com/web_v2/ring-pro/buy-v2/carousel-v4/desktop/bionic-gold/6.png" : `/scenes/${item[0]}.jpg`}
        alt={label ?? item[locale === "it" ? 1 : 2]}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1152px"
        priority={scene === "hero" || ring}
        className={cn("transition-transform duration-700 motion-reduce:transition-none", ring ? "object-contain" : "object-cover hover:scale-[1.025]")}
      />
    </div>
  );
}
