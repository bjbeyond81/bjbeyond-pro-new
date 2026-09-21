import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Scene =
  | "hero"
  | "gifts"
  | "tech"
  | "amazon"
  | "guides"
  | "stack"
  | "desk"
  | "home"
  | "move"
  | "learn"
  | "water";

const SRC: Record<Scene, string> = {
  hero: "/scenes/hero.jpg",
  gifts: "/scenes/gifts.jpg",
  tech: "/scenes/tech.jpg",
  amazon: "/scenes/amazon.jpg",
  guides: "/scenes/guides.jpg",
  stack: "/scenes/stack.jpg",
  desk: "/scenes/desk.jpg",
  home: "/scenes/imou.jpg",
  move: "/scenes/move.jpg",
  learn: "/scenes/learn.jpg",
  water: "/scenes/water.jpg",
};

export function SceneVisual({
  scene,
  className = "",
  label,
}: {
  scene: Scene;
  className?: string;
  label?: string;
  locale?: Locale;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-[#e7dccb]", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SRC[scene]}
        alt={label ?? ""}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(22,18,14,.04),transparent_40%,rgba(22,18,14,.12))]" />
    </div>
  );
}
