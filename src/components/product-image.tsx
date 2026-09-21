"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={cn(
          "flex aspect-square items-center justify-center bg-gradient-to-br from-[#efe4d4] to-[#d7c4a8] text-walnut",
          className,
        )}
        aria-hidden
      >
        <span className="font-serif text-4xl tracking-tight">BJ</span>
      </div>
    );
  }

  return (
    // Amazon product art is more reliable as a plain img with no referrer.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={cn("aspect-square w-full object-contain bg-white p-6", className)}
    />
  );
}
