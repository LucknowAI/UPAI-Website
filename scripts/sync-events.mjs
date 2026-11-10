// Copies the shared events list from the Lucknow AI Labs website into
// content/events.json, so both sites show the same events.
//
//   npm run sync:events                      # from GitHub (main branch)
//   node scripts/sync-events.mjs <file.yml>  # from a local copy
import { readFile, writeFile } from "node:fs/promises";
import yaml from "js-yaml";

const SOURCE =
  "https://raw.githubusercontent.com/LucknowAI/lucknowai.github.io/main/_data/events.yml";

const file = process.argv[2];
let text;
if (file) {
  text = await readFile(file, "utf8");
} else {
  const res = await fetch(SOURCE);
  if (!res.ok) throw new Error(`Could not download ${SOURCE}: ${res.status}`);
  text = await res.text();
}

const events = yaml.load(text);
const valid =
  Array.isArray(events) &&
  events.every((e) => typeof e.date === "string" && e.title && e.organisers);
if (!valid) {
  throw new Error("events.yml is not in the expected format (date as a quoted string, title, organisers).");
}

await writeFile(
  new URL("../content/events.json", import.meta.url),
  JSON.stringify(events, null, 2) + "\n"
);
console.log(`Wrote ${events.length} events to content/events.json`);
