"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function fallbackFor(title?: string) {
  const t = (title ?? "").toLowerCase();
  if (/(collana|bracciale|anello|orecchini|argento|gioiell)/.test(t)) {
    return "/fallbacks/jewelry.jpg";
  }
  if (/(rosa|fiore|girasole|eterna)/.test(t)) return "/fallbacks/flowers.jpg";
  if (
    /(powerbank|usb|iphone|samsung|bluetooth|speaker|cuffie|auricolari|watch|ring|anello|caricab)/.test(
      t,
    )
  ) {
    return "/fallbacks/tech.jpg";
  }
  return "/fallbacks/gift.jpg";
}

export function ProductImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const fallback = fallbackFor(alt);
  const [current, setCurrent] = useState(src || fallback);
  const [usedFallback, setUsedFallback] = useState(!src);

  return (
    // Amazon and local product art: plain img avoids optimizer referrer issues.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (!usedFallback) {
          setUsedFallback(true);
          setCurrent(fallback);
        }
      }}
      className={cn(
        "aspect-square w-full object-contain bg-white p-6",
        usedFallback && current.startsWith("/fallbacks/") && "object-cover p-0",
        className,
      )}
    />
  );
}

export function CoverImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      className={cn("h-44 w-full object-cover", className)}
    />
  );
}
