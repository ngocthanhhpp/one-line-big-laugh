// One Line, Big Laugh: writes the entry's single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The palm reader took one look, refunded me, and hugged me for a really long time.";

// The gate takes UTF-8 text of 1 to 200 characters that is not only white space.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim() === "") {
  throw new Error(`entry must be 1-200 non-blank characters, got ${chars}`);
}

const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
