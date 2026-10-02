import { rentalItems } from "../src/data/content";
import { cp, mkdir } from "node:fs/promises";
import { resolve, join } from "node:path";
const folder = resolve(process.argv[2] ?? "C:/Users/Gordo/Downloads");
const covers = [
  ["closing-shift", "hf_20261002_062129_ba893387-1453-4173-9f58-491048504287.png"],
  ["rooftop-run", "hf_20261002_064500_5a2048c0-c9d2-4007-9feb-898f5338667b.png"],
  ["episode-1-alternate", "hf_20261002_063100_94d368a3-4fd7-4dd7-9a57-aa8a752cbb94.png"],
  ["midnight-run", "hf_20261002_061624_cbbf40ee-c59c-49ab-8aff-67a953ac0bf5.png"],
  ["blood-law", "hf_20261002_062343_09bc0410-0eee-49aa-9ee0-24f183dea793.png"],
  ["episode-1", "hf_20261002_062835_ea524a33-38bc-4667-908b-68cea35dc03d (1).png"],
  ["arrival", "hf_20261002_062303_f52fc889-587e-41aa-92cc-dc5879c1ccf8.png"],
] as const;
await mkdir("public/media/covers", { recursive: true });
for (const [id, filename] of covers) await cp(join(folder, filename), `public/media/covers/${id}.png`);
const closing = rentalItems.find(item => item.id === "closing-shift")!;
closing.title = "Closing Shift";
rentalItems.find(item => item.id === "rooftop-run")!.title = "Rooftop Run";
rentalItems.find(item => item.id === "blood-law")!.title = "Blood Law";
Object.assign(rentalItems.find(item => item.id === "episode-1")!, { title: "Blood Law · Episode 1", subtitle: "Episode 1 · not yet released", synopsis: "Episode 1 cover artwork. The episode is in production; this case has no released footage." });
if (!rentalItems.some(item => item.id === "midnight-run")) rentalItems.push({ id: "midnight-run", number: "0422", title: "Midnight Run", subtitle: "Cover concept · footage pending", kind: "teaser", released: false, cover: "", backArt: "/media/world/closed-store.png", synopsis: "Midnight Run cover concept. No footage is attached to this case yet.", runtime: "TBA", stickers: ["RESERVED"] });
if (!rentalItems.some(item => item.id === "episode-1-alternate")) rentalItems.push({ id: "episode-1-alternate", number: "0423", title: "Blood Law · Alternate cover", subtitle: "Episode 1 · alternate sleeve", kind: "episode", released: false, cover: "", backArt: "/media/world/video-haven.png", synopsis: "Alternate Episode 1 sleeve. The episode remains unreleased; no footage is attached.", runtime: "TBA", stickers: ["RESERVED"] });
for (const [id] of covers) rentalItems.find(item => item.id === id)!.cover = `/media/covers/${id}.png`;
let content = await Bun.file("src/data/content.ts").text();
const start = content.indexOf("export const rentalItems:");
const end = content.indexOf("export interface AuditionTape", start);
content = content.slice(0, start) + `export const rentalItems: RentalItem[] = ${JSON.stringify(rentalItems, null, 2)};\n\n` + content.slice(end);
await Bun.write("src/data/content.ts", content);
console.log("Imported all seven supplied covers at original resolution and connected the DVD shelf.");
