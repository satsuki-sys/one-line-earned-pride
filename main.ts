// One Line of Earned Pride — make.fun entry
// Writes a single quiet, earned moment of pride to /output/entry.txt.
// Gate: UTF-8 text, 1-240 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "After six months of evenings at the kitchen table, Mara read aloud the letter she had written to her mother, and her voice didn't shake once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
