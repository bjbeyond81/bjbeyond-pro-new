import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const scenes = {
  hero: ["/scenes/hero.jpg", "Cuffie, regalo, quaderno e bicchiere su fondo rosso", "Headphones, gift, notebook and glass on a red backdrop"],
  gifts: ["/scenes/gifts.jpg", "Pacchi bianchi con nastro rosso", "White gifts with red ribbon"],
  tech: ["/scenes/tech.jpg", "Cuffie, telefono e auricolari", "Headphones, phone and earbuds"],
  amazon: ["/scenes/amazon.jpg", "Lettura e servizi digitali", "Reading and digital services"],
  guides: ["/scenes/guides.jpg", "Libri e appunti", "Books and notes"],
  stack: ["/scenes/stack.jpg", "Oggetti dello Stack sul tavolo", "Stack objects on the table"],
  desk: ["/scenes/desk.jpg", "Ricarica magnetica ESR sulla scrivania", "ESR magnetic charging on a desk"],
  home: ["/scenes/imou.jpg", "Videocamera domestica IMOU", "IMOU home security camera"],
  move: ["/scenes/move.jpg", "Walking pad Toputure sotto la scrivania", "Toputure under-desk walking pad"],
  learn: ["/scenes/learn.jpg", "Lingzio — apprendimento delle lingue", "Lingzio — language learning"],
  water: ["/scenes/water.jpg", "Waterdrop G3P800 — sistema RO", "Waterdrop G3P800 — RO system"],
  ultrahuman: ["/editorial/ultrahuman.webp", "Ultrahuman Ring Pro, Bionic Gold", "Ultrahuman Ring Pro, Bionic Gold"],
} as const;

const productScenes = new Set(["ultrahuman", "desk", "home", "move", "water", "stack", "learn"]);

export function SceneVisual({
  scene,
  className,
  label,
  locale = "en",
  src,
  objectFit,
}: {
  scene: keyof typeof scenes;
  className?: string;
  label?: string;
  locale?: Locale;
  src?: string;
  objectFit?: "cover" | "contain";
}) {
  const item = scenes[scene];
  const imageSrc = src ?? item[0];
  const fit = objectFit ?? (productScenes.has(scene) && scene !== "learn" && scene !== "home" && scene !== "move" && scene !== "desk" ? "contain" : "cover");
  const contain = fit === "contain" || scene === "ultrahuman" || scene === "water";

  return (
    <div className={cn("relative isolate overflow-hidden bg-[#f4f1ea]", className)}>
      <Image
        src={imageSrc}
        alt={label ?? item[locale === "it" ? 1 : 2]}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1152px"
        priority={scene === "hero"}
        className={cn(
          "transition-transform duration-700 motion-reduce:transition-none",
          contain ? "object-contain p-5" : "object-cover hover:scale-[1.025]",
        )}
      />
    </div>
  );
}
