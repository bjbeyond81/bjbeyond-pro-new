# Guides source payload

`guides.ts.gz.b64` is a gzip+base64 of `src/lib/guides.ts` (unique card images + Article dates).

`expand-guides.cjs` writes `src/lib/guides.ts` and runs as `prebuild` / `predev`.
