import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const scenes = {
  hero: ["hero", "Cuffie, regalo, quaderno e bicchiere su fondo rosso", "Headphones, gift, notebook and glass on a red backdrop"],
  gifts: ["gifts", "Pacchi bianchi con nastro rosso", "White gifts with red ribbon"],
  tech: ["tech", "Cuffie, telefono e auricolari", "Headphones, phone and earbuds"],
  amazon: ["guides", "Lettura e servizi digitali", "Reading and digital services"],
  guides: ["guides", "Libri e appunti", "Books and notes"],
  stack: ["esr", "ESR CryoBoost 3-in-1", "ESR CryoBoost 3-in-1"],
  desk: ["esr", "ESR CryoBoost 3-in-1", "ESR CryoBoost 3-in-1"],
  home: ["imou", "IMOU Ranger 2C Pro", "IMOU Ranger 2C Pro"],
  move: ["toputure", "Toputure TP8 Walking Pad", "Toputure TP8 Walking Pad"],
  learn: ["guides", "Lingzio", "Lingzio"],
  water: ["waterdrop", "Waterdrop G3P800", "Waterdrop G3P800"],
  ultrahuman: ["ultrahuman", "Ultrahuman Ring Pro, Bionic Gold", "Ultrahuman Ring Pro, Bionic Gold"],
} as const;

export function SceneVisual({ scene, className, label, locale = "en" }: {
  scene: keyof typeof scenes;
  className?: string;
  label?: string;
  locale?: Locale;
}) {
  const item = scenes[scene];
  const product = ["ultrahuman", "desk", "home", "move", "water", "stack"].includes(scene);
  if (scene === "learn") return <div className={cn("grid place-content-center bg-[#eef0f4] p-8 text-center", className)}><span className="text-4xl font-semibold">Lingzio<span className="text-primary">.</span></span><span className="mt-4 text-sm text-muted-foreground">{locale === "it" ? "Apprendimento delle lingue" : "Language learning"}</span></div>;
  return (
    <div className={cn("relative isolate overflow-hidden bg-white", className)}>
      <Image
        src={`/editorial/${item[0]}.webp`}
        alt={label ?? item[locale === "it" ? 1 : 2]}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1152px"
        priority={scene === "hero"}
        className={cn("transition-transform duration-700 motion-reduce:transition-none", product ? "object-contain p-5" : "object-cover hover:scale-[1.025]")}
      />
    </div>
  );
}
