"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  if (!src || failedSrc === src) return <div role="img" aria-label={alt} className={cn("grid aspect-square w-full place-content-center gap-3 bg-secondary p-6 text-center text-muted-foreground", className)}><ImageOff className="mx-auto" aria-hidden="true" /><span className="text-sm">{alt}</span></div>;
  return (
    // Merchant images remain uncropped; a failed image never becomes another product.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailedSrc(src)} className={cn("aspect-square w-full bg-white object-contain p-6", className)} />
  );
}

export function CoverImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={cn("grid h-44 place-items-center bg-secondary px-6 text-sm", className)}>{alt}</div>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={cn("h-44 w-full object-cover", className)} />
  );
}
