#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const root = path.join(__dirname, "..");
const b64 = fs.readFileSync(path.join(__dirname, "guides.ts.gz.b64"), "utf8").trim();
const out = path.join(root, "src/lib/guides.ts");
const source = zlib.gunzipSync(Buffer.from(b64, "base64")).toString("utf8");
fs.writeFileSync(out, source);
console.log("expanded src/lib/guides.ts", source.length, "bytes");
