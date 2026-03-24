#!/usr/bin/env node
/**
 * Fails if Git merge conflict markers appear in source files.
 * Catches unresolved merges before TypeScript (clearer error than "Merge conflict marker encountered").
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  "out",
  "build",
  ".git",
  "coverage",
  ".vercel",
]);

const EXT = new Set([
  ".ts",
  ".tsx",
  ".mts",
  ".cts",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".css",
  ".scss",
  ".json",
  ".mdx",
]);

const errors = [];

function isConflictLine(line) {
  const t = line.trim();
  if (t.startsWith("<<<<<<<")) return true;
  if (t.startsWith(">>>>>>>")) return true;
  if (t === "=======") return true;
  return false;
}

function scanFile(filePath) {
  let content;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch {
    return;
  }
  const lines = content.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (isConflictLine(line)) {
      const rel = path.relative(root, filePath).split(path.sep).join("/");
      errors.push(`${rel}:${i + 1}: merge conflict marker`);
    }
  });
}

function walk(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      walk(full);
    } else if (ent.isFile()) {
      const ext = path.extname(ent.name);
      if (EXT.has(ext)) scanFile(full);
    }
  }
}

walk(root);

if (errors.length) {
  console.error(
    "Merge conflict markers found in source files.\n" +
      "Remove <<<<<<<, =======, >>>>>>> and keep one version of the change, then save and commit.\n\n" +
      errors.join("\n"),
  );
  process.exit(1);
}
