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
  | "water"
  | "ultrahuman";

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
  ultrahuman: "",
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
  if (scene === "ultrahuman") {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-[radial-gradient(circle_at_65%_22%,rgba(198,255,82,.42),transparent_25%),linear-gradient(135deg,#f7f8f3,#dfe7eb)]",
          className,
        )}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(25,24,21,.06)_0_1px,transparent_1px_28px)]" />
        <div className="absolute top-8 left-8 rounded-full border border-foreground/12 bg-white/70 px-4 py-2 text-xs font-bold tracking-[.18em] text-foreground/70 uppercase">
          Ultrahuman
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-[250px] w-[190px] rotate-[18deg] rounded-[50%] border-[42px] border-[#202427] shadow-[inset_18px_0_30px_rgba(255,255,255,.22),inset_-22px_0_34px_rgba(0,0,0,.3),28px_28px_0_#c8ff4d,0_30px_70px_rgba(0,0,0,.2)] sm:h-[320px] sm:w-[240px] sm:border-[52px]">
            <span className="absolute right-[-2px] bottom-12 h-9 w-9 rounded-full bg-[radial-gradient(circle,#050505_0_32%,#687075_34%_50%,#030303_54%)] shadow-[0_0_0_6px_rgba(0,0,0,.12)]" />
            <span className="absolute top-5 left-[-16px] h-36 w-8 rounded-full bg-white/20 blur-[2px]" />
          </div>
        </div>
        <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-foreground/10 bg-white/75 p-4 text-sm leading-5 text-foreground/70 backdrop-blur">
          Editorial smart-ring visual. Verify official product images and specs on the merchant page.
        </div>
      </div>
    );
  }

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
