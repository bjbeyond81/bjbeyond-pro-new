import type { Locale } from "@/lib/i18n";

type Scene = "hero" | "gifts" | "tech" | "amazon" | "guides" | "stack" | "desk" | "home" | "move" | "learn" | "water";

const palettes: Record<Scene, [string, string, string]> = {
  hero: ["#c4b29a", "#8a6a48", "#3d2a1c"],
  gifts: ["#d9b48a", "#b57a45", "#5c3a22"],
  tech: ["#b7c0c8", "#6e7c8a", "#24303a"],
  amazon: ["#2a241c", "#c4894a", "#f3ece2"],
  guides: ["#eadcc8", "#8b6b45", "#2c241c"],
  stack: ["#3a2c22", "#c4894a", "#efe4d4"],
  desk: ["#d7c4a8", "#8d6238", "#2b1d14"],
  home: ["#c9d2c4", "#5d7358", "#1c2418"],
  move: ["#d8cfc4", "#6d6258", "#221c18"],
  learn: ["#1a2218", "#6f8b5a", "#f7f3ea"],
  water: ["#c9d8de", "#4d7382", "#16303a"],
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
  const [a, b, c] = palettes[scene];
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(145deg, ${a} 0%, ${b} 52%, ${c} 100%)`,
      }}
    >
      <svg
        viewBox="0 0 640 420"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {scene === "hero" && <HeroMarks />}
        {scene === "gifts" && <GiftMarks />}
        {scene === "tech" && <TechMarks />}
        {scene === "amazon" && <AmazonMarks />}
        {scene === "guides" && <GuideMarks />}
        {scene === "stack" && <StackMarks />}
        {scene === "desk" && <DeskMarks />}
        {scene === "home" && <HomeMarks />}
        {scene === "move" && <MoveMarks />}
        {scene === "learn" && <LearnMarks />}
        {scene === "water" && <WaterMarks />}
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,248,236,.28),transparent_42%)]" />
    </div>
  );
}

function HeroMarks() {
  return (
    <g fill="none" stroke="rgba(255,248,236,.42)" strokeWidth="1.4">
      <rect x="70" y="250" width="500" height="18" rx="4" fill="rgba(42,28,16,.35)" stroke="none" />
      <rect x="110" y="168" width="92" height="82" rx="6" fill="rgba(90,48,24,.55)" stroke="none" />
      <rect x="122" y="156" width="68" height="14" rx="3" fill="rgba(230,214,190,.7)" stroke="none" />
      <rect x="240" y="190" width="78" height="60" rx="8" fill="rgba(196,137,74,.85)" stroke="none" />
      <path d="M248 190h62v10H248z" fill="rgba(90,48,24,.45)" />
      <ellipse cx="390" cy="228" rx="22" ry="28" fill="rgba(255,248,236,.18)" />
      <path d="M390 200v56" />
      <path d="M470 210c28 0 48 18 48 40s-20 32-48 32c-10 0-18-2-24-6" strokeWidth="3" />
      <circle cx="446" cy="250" r="16" />
      <circle cx="542" cy="250" r="16" />
      <circle cx="160" cy="90" r="44" fill="rgba(255,214,150,.16)" stroke="none" />
    </g>
  );
}

function GiftMarks() {
  return (
    <g>
      <rect x="210" y="120" width="220" height="180" rx="16" fill="rgba(255,248,236,.2)" />
      <rect x="210" y="196" width="220" height="28" fill="rgba(90,48,24,.35)" />
      <rect x="306" y="120" width="28" height="180" fill="rgba(90,48,24,.35)" />
      <path d="M318 120c0-28 34-44 52-18" fill="none" stroke="rgba(255,248,236,.55)" strokeWidth="4" />
    </g>
  );
}

function TechMarks() {
  return (
    <g fill="rgba(255,248,236,.14)" stroke="rgba(255,248,236,.4)" strokeWidth="1.6">
      <rect x="150" y="90" width="150" height="250" rx="28" />
      <circle cx="225" cy="300" r="10" />
      <rect x="360" y="150" width="160" height="160" rx="36" />
      <circle cx="440" cy="230" r="48" />
    </g>
  );
}

function AmazonMarks() {
  return (
    <g fill="none" stroke="rgba(243,236,226,.45)" strokeWidth="2">
      <path d="M150 250c80 70 250 70 340 0" />
      <polygon points="470,250 500,238 492,268" fill="rgba(196,137,74,.9)" stroke="none" />
      <rect x="200" y="110" width="240" height="90" rx="12" fill="rgba(243,236,226,.08)" />
    </g>
  );
}

function GuideMarks() {
  return (
    <g fill="rgba(255,248,236,.78)">
      <rect x="170" y="80" width="180" height="240" rx="4" transform="rotate(-8 260 200)" />
      <rect x="250" y="90" width="180" height="240" rx="4" fill="rgba(247,241,232,.95)" />
      <rect x="274" y="130" width="132" height="8" rx="4" fill="#8b6b45" />
      <rect x="274" y="154" width="110" height="6" rx="3" fill="#c9b79a" />
      <rect x="274" y="174" width="118" height="6" rx="3" fill="#c9b79a" />
    </g>
  );
}

function StackMarks() {
  return (
    <g fill="rgba(243,236,226,.16)">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={80 + i * 96}
          y={140 + (i % 2) * 16}
          width="78"
          height="120"
          rx="14"
        />
      ))}
    </g>
  );
}

function DeskMarks() {
  return (
    <g>
      <rect x="180" y="170" width="280" height="18" rx="4" fill="rgba(42,24,14,.45)" />
      <circle cx="320" cy="150" r="54" fill="rgba(196,137,74,.75)" />
      <rect x="300" y="148" width="40" height="70" rx="6" fill="rgba(42,24,14,.55)" />
    </g>
  );
}

function HomeMarks() {
  return (
    <g fill="none" stroke="rgba(247,243,234,.5)" strokeWidth="2">
      <circle cx="320" cy="200" r="70" />
      <circle cx="320" cy="200" r="18" fill="rgba(247,243,234,.25)" />
      <path d="M320 130v-24M320 294v24M250 200h-24M414 200h24" />
    </g>
  );
}

function MoveMarks() {
  return (
    <g fill="none" stroke="rgba(247,243,234,.5)" strokeWidth="3">
      <rect x="160" y="200" width="320" height="36" rx="18" />
      <circle cx="210" cy="270" r="22" />
      <circle cx="430" cy="270" r="22" />
    </g>
  );
}

function LearnMarks() {
  return (
    <g fill="#f7f3ea" fontFamily="Georgia, serif" fontSize="42" textAnchor="middle">
      <text x="200" y="180">EN</text>
      <text x="320" y="230">IT</text>
      <text x="440" y="180">JP</text>
      <text x="260" y="300">ES</text>
      <text x="400" y="300">DE</text>
    </g>
  );
}

function WaterMarks() {
  return (
    <g fill="none" stroke="rgba(247,243,234,.55)" strokeWidth="2.4">
      <path d="M320 90c40 70 70 110 70 150a70 70 0 1 1-140 0c0-40 30-80 70-150z" fill="rgba(247,243,234,.12)" />
    </g>
  );
}
