// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "I dropped the production database, skipped the backup check, and deployed anyway — no hacker, no bug, just me: confident, fast, and completely wrong.";

// Write exactly the winning line, single-line, no trailing newline added
// beyond the text itself, so the gate sees 1–200 UTF-8 characters.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
