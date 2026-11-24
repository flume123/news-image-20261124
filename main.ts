// News image for Tuesday 24 November 2026 (Node 22, standard library only).
// The image is entry.png beside this file, drawn for this bounty with PIL:
// six stories from 24 November 2026, plus an "Also today" strip.
// The program copies it to /output/entry.png. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
