#!/usr/bin/env python3
"""Download verified official stack images and write HQ webps under public/stack/."""
from __future__ import annotations

import subprocess
import sys
import tempfile
import urllib.request
from pathlib import Path

from PIL import Image

IMAGES: dict[str, list[tuple[str, str]]] = {
    "esr": [
        (
            "https://cdn.shopify.com/s/files/1/0744/9054/4377/files/CryoBoost-3-in-1-Magnetic-Charging-Station-_25W_-Qi2.2_-EU-Plug_Black-ESR-233430422.jpg?v=1770052438&width=1600",
            "01.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0744/9054/4377/files/CryoBoost-3-in-1-Magnetic-Charging-Station-_25W_-Qi2.2_-US-Plug_Black-ESR-227612950.jpg?v=1770052438&width=1600",
            "02.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0744/9054/4377/files/CryoBoost-3-in-1-Magnetic-Charging-Station-_25W_-Qi2.2_-US-Plug_Black-ESR-227613227.jpg?v=1770052438&width=1600",
            "03.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0744/9054/4377/files/CryoBoost-3-in-1-Magnetic-Charging-Station-_25W_-Qi2.2_-EU-Plug_Black-ESR-233430549.jpg?v=1770052439&width=1600",
            "04.webp",
        ),
    ],
    "imou": [
        (
            "https://cdn.shopify.com/s/files/1/0727/5711/7240/files/ranger-2c-pro-3k-5mp-24ghz-5ghz-dual-band-4965305.jpg?v=1755242509",
            "01.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0727/5711/7240/files/ranger-2c-pro-3k-5mp-24ghz-5ghz-dual-band-7038093.png?v=1755242509",
            "02.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0727/5711/7240/products/ranger-2c-3mp4mp5mp-569199.jpg?v=1755162258",
            "03.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0727/5711/7240/products/cruiser-se-5mp3mp-164451.jpg?v=1750840828",
            "04.webp",
        ),
    ],
    "toputure": [
        (
            "https://cdn.shopify.com/s/files/1/0926/6806/8124/files/Toputure_TP8_treadmill_0_-5_-10_manual_incline.jpg?v=1783908983",
            "01.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0926/6806/8124/files/Toputure_TP8_smart_fitness_app_with_personalized_workouts.jpg?v=1783909037",
            "02.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0926/6806/8124/files/Toputure_TP8_treadmill_anti-slip_shock-absorbing_running_belt.jpg?v=1783909092",
            "03.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0926/6806/8124/files/Toputure_TP8_treadmill_compact_design_space-saving_with_17_footprint.jpg?v=1783909189",
            "04.webp",
        ),
    ],
    "lingzio": [
        (
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/lovp_05a7qpkmj58d9bthd2w7mht08e/d68f0950d4678a5c4e0abb9f318b2758_1790040668113.png",
            "01.webp",
        ),
        (
            "https://lingzio.com/assets/pronunciation-D7oW4W_A.jpg",
            "02.webp",
        ),
        (
            "https://lingzio.com/assets/hero-DzZdp_88.png",
            "03.webp",
        ),
        (
            "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/lovp_05a7qpkmj58d9bthd2w7mht08e/d68f0950d4678a5c4e0abb9f318b2758_1790040668113.png",
            "04.webp",
        ),
    ],
    "waterdrop": [
        (
            "https://cdn.shopify.com/s/files/1/0556/7623/9952/files/US-WD-G3P800-W_ERS-1001D___20250523_2-min.jpg?v=1766981420",
            "01.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0556/7623/9952/files/US-WD-G3P800-W_ERS-1001D___20250523_9_-min.jpg?v=1766981420",
            "02.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0556/7623/9952/files/US-WD-G3P800-W_ERS-1001D___20250523_4-min.jpg?v=1766981420",
            "03.webp",
        ),
        (
            "https://cdn.shopify.com/s/files/1/0556/7623/9952/files/US-WD-G3P800-W_ERS-1001D___20250523_3-min.jpg?v=1766981420",
            "04.webp",
        ),
    ],
    "ultrahuman": [
        (
            "https://public-web-assets.uh-static.com/web_v2/ring-buy/carousel-assets-new/full/bionic-gold/1.png",
            "01.webp",
        ),
        (
            "https://public-web-assets.uh-static.com/web_v2/illustrations/content-ring-air.png",
            "02.webp",
        ),
        (
            "https://public-web-assets.uh-static.com/web_v2/ring-buy/carousel-assets-new/full/bionic-gold/4.png",
            "03.webp",
        ),
        (
            "https://public-web-assets.uh-static.com/web_v2/meta-assets/ring-air-og-lg-1.png",
            "04.webp",
        ),
    ],
}

UA = {"User-Agent": "BJBeyondStackImageSync/1.0"}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


def to_webp(src: Path, dest: Path, quality: int = 80) -> None:
    im = Image.open(src)
    if im.mode == "P":
        im = im.convert("RGBA")
    if "A" in im.getbands():
        bg = Image.new("RGB", im.size, (12, 12, 14))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    w, h = im.size
    long = max(w, h)
    if long > 1600:
        s = 1600 / long
        im = im.resize((max(1, int(w * s)), max(1, int(h * s))), Image.Resampling.LANCZOS)
    elif long < 1200:
        s = 1200 / long
        im = im.resize((max(1, int(w * s)), max(1, int(h * s))), Image.Resampling.LANCZOS)
    png = dest.with_suffix(".tmp.png")
    im.save(png, "PNG")
    subprocess.check_call(
        ["cwebp", "-q", str(quality), "-m", "6", str(png), "-o", str(dest)],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    png.unlink(missing_ok=True)


def main() -> int:
    root = Path.cwd()
    for brand, items in IMAGES.items():
        out_dir = root / "public" / "stack" / brand
        out_dir.mkdir(parents=True, exist_ok=True)
        for url, name in items:
            dest = out_dir / name
            with tempfile.TemporaryDirectory() as td:
                raw = Path(td) / "src.bin"
                raw.write_bytes(fetch(url))
                if brand == "lingzio" and name == "04.webp":
                    im = Image.open(raw)
                    if im.mode != "RGB":
                        im = im.convert("RGB")
                    w, h = im.size
                    side = min(w, h)
                    left = (w - side) // 2
                    top = (h - side) // 2
                    im = im.crop((left, top, left + side, top + side))
                    cropped = Path(td) / "crop.png"
                    im.save(cropped)
                    to_webp(cropped, dest)
                else:
                    to_webp(raw, dest)
            out = Image.open(dest)
            print(f"{brand}/{name}: {out.size[0]}x{out.size[1]} {dest.stat().st_size}b")
            if max(out.size) < 1200:
                print(f"WARN: {brand}/{name} long side < 1200", file=sys.stderr)
            if dest.stat().st_size < 20_000:
                print(f"WARN: {brand}/{name} smaller than 20KB", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
