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

const sceneCopy: Record<Scene, { label: string; mark: string; palette: string }> = {
  hero: { label: "curated portal", mark: "BJ", palette: "from-[#f8fff0] via-[#ecf2ff] to-[#fff6e8]" },
  gifts: { label: "gift finder", mark: "03", palette: "from-[#fff4f0] via-[#f7fff2] to-[#eef5ff]" },
  tech: { label: "signal tested", mark: "AI", palette: "from-[#eef5ff] via-[#f8fff0] to-[#f4f2ff]" },
  amazon: { label: "paid links", mark: "A", palette: "from-[#fff7e8] via-[#fff1f1] to-[#f5fff0]" },
  guides: { label: "buying notes", mark: "G", palette: "from-[#f4f2ff] via-[#eef8ff] to-[#fff8ea]" },
  stack: { label: "six campaigns", mark: "06", palette: "from-[#f8fff0] via-[#fff8ea] to-[#eef5ff]" },
  desk: { label: "desk system", mark: "ESR", palette: "from-[#eef5ff] via-[#f8fff0] to-[#ffffff]" },
  home: { label: "home watch", mark: "IM", palette: "from-[#fff8ea] via-[#eef8ff] to-[#ffffff]" },
  move: { label: "mobility", mark: "MV", palette: "from-[#f7fff2] via-[#ffffff] to-[#eef5ff]" },
  learn: { label: "language", mark: "LZ", palette: "from-[#f4f2ff] via-[#ffffff] to-[#fff8ea]" },
  water: { label: "water", mark: "H2", palette: "from-[#eef8ff] via-[#ffffff] to-[#f7fff2]" },
  ultrahuman: { label: "smart ring", mark: "UH", palette: "from-[#f8fff0] via-[#eaf1f4] to-[#ffffff]" },
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
  const item = sceneCopy[scene];
  const isRing = scene === "ultrahuman";

  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden bg-gradient-to-br",
        item.palette,
        className,
      )}
      aria-label={label ?? item.label}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,12,15,.07)_1px,transparent_1px),linear-gradient(0deg,rgba(11,12,15,.05)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#b7ff3c]/60 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#2458ff]/16 blur-3xl" />

      <div className="absolute top-6 left-6 rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-[11px] font-black tracking-[.18em] text-foreground/70 uppercase backdrop-blur">
        {item.label}
      </div>

      {isRing ? (
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-[250px] w-[190px] rotate-[18deg] rounded-[50%] border-[42px] border-[#202427] shadow-[inset_18px_0_30px_rgba(255,255,255,.22),inset_-22px_0_34px_rgba(0,0,0,.3),28px_28px_0_#b7ff3c,0_30px_70px_rgba(0,0,0,.2)] sm:h-[320px] sm:w-[240px] sm:border-[52px]">
            <span className="absolute right-[-2px] bottom-12 h-9 w-9 rounded-full bg-[radial-gradient(circle,#050505_0_32%,#687075_34%_50%,#030303_54%)] shadow-[0_0_0_6px_rgba(0,0,0,.12)]" />
            <span className="absolute top-5 left-[-16px] h-36 w-8 rounded-full bg-white/20 blur-[2px]" />
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative grid h-44 w-44 place-items-center rounded-[38px] border border-foreground/10 bg-white/68 shadow-[0_30px_80px_rgba(11,12,15,.14)] backdrop-blur sm:h-56 sm:w-56">
            <div className="absolute -inset-6 rounded-[52px] border border-foreground/10" />
            <div className="absolute h-24 w-24 rotate-12 rounded-full border-[18px] border-[#0b0c0f] opacity-90" />
            <span className="relative z-10 text-4xl font-black tracking-[-.06em] text-[#0b0c0f] sm:text-6xl">
              {item.mark}
            </span>
          </div>
        </div>
      )}

      <div className="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 rounded-2xl border border-foreground/10 bg-white/75 p-4 text-xs font-bold tracking-[.12em] text-foreground/70 uppercase backdrop-blur">
        <span>BJ Beyond</span>
        <span>curated</span>
      </div>
    </div>
  );
}
