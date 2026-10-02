import { characters, rentalItems, oneSheets } from "../src/data/content";

const paths: Record<string, string> = {
  "/img/keyart-ensemble.jpg": "/media/keyart/video-haven-ensemble.png",
  "/img/cover-pilot.jpg": "/media/keyart/freshman-year.png",
  "/img/cover-rooftop.jpg": "/media/keyart/freshman-hell.png",
  "/img/counter.jpg": "/media/world/video-haven.png",
  "/img/aisles.jpg": "/media/world/aisles.png",
  "/img/college.jpg": "/media/world/campus.png",
  "/img/rooftops.jpg": "/media/world/rooftop.png",
  "/img/storefront-closed.jpg": "/media/world/closed-store.png",
  "/img/storyboard.jpg": "/media/keyart/video-haven-storyboard.png",
  "/img/mara-sheet.jpg": "/media/keyart/mara-reference.png",
};
const cuts = [
  { stem: "first-look-30", title: "Blood Rush", subtitle: "The first look", runtime: "Preview · 0:30", synopsis: "The Blood Rush first look, imported from Video Haven. Working preview material.", cover: "/media/keyart/freshman-year.png" },
  { stem: "kai-arrival-temp", title: "Arrival", subtitle: "Kai's commute · temporary movement test", runtime: "Working test", synopsis: "Temporary arrival movement reference from Video Haven. A development test for Kai's commute.", cover: "/media/video-haven-arrival.jpg" },
  { stem: "rooftop-10", title: "The long way to work", subtitle: "Kai's rooftop test", runtime: "Test · 0:10", synopsis: "Kai's rooftop movement test, imported from Video Haven.", cover: "/media/rooftop-10.jpg" },
  { stem: "first-look-20", title: "Meet the crew", subtitle: "First look · alternate cut", runtime: "Preview · 0:20", synopsis: "The crew in an alternate Blood Rush first-look assembly from Video Haven.", cover: "/media/keyart/video-haven-ensemble.png" },
];
rentalItems.slice(0, 4).forEach((item, i) => {
  const cut = cuts[i];
  Object.assign(item, { title: cut.title, subtitle: cut.subtitle, runtime: cut.runtime, synopsis: cut.synopsis, cover: cut.cover,
    footage: { src: `/media/${cut.stem}.mp4`, poster: i === 1 ? cut.cover : `/media/${cut.stem}.jpg`, credit: "Video Haven · working production material" } });
});
const stems: Record<string, string> = { kai: "kai-santana", mara: "mara-voss", elias: "elias-mercer", rowan: "rowan-mercer", lucian: "lucian-blaise", malachi: "malachi-jackson", malik: "malik-vale" };
const scenes = ["Covering for a friend", "At the edge of transformation", "Losing authority", "Character audition", "An unwanted recognition", "The polite version", "Campus security"];
const roles = ["The reluctant leader", "The human outsider", "The older brother", "The younger brother", "The keeper of secrets", "The controlled threat", "The crew's wildcard"];
const bios = [
  "Nineteen. Former football star. Kai works the closing shift at his family's video store, using charm and street instinct to keep his crew together while keeping his own life private.",
  "Nineteen. Observant, guarded, and human when the story begins. An unauthorized turning pulls Mara into a world whose rules were never meant to protect her.",
  "Twenty. Newly turned and a year behind. Elias starts college alongside his younger brother, trying to turn shame and fear into control.",
  "Nineteen. Quiet, perceptive, and capable. Rowan's loyalty to his brother has limits, especially when protection begins to feel like possession.",
  "Nineteen. Newly changed and wary of intimacy. Lucian recognizes something in Mara's fear that makes keeping his distance harder.",
  "Twenty. A street enforcer whose composure does the talking. His threat lives in a measured voice and the calm certainty behind it.",
  "Twenty-one. The night runner: messages, suppressant, transport. Socially fearless, Malik keeps one eye on the conversation and the other on the exit.",
];
characters.forEach((character, i) => {
  const stem = stems[character.id];
  Object.assign(character, { portrait: `/media/auditions/${stem}.jpg`, portraitCredit: "Video Haven · audition still", role: roles[i], bio: bios[i], short: bios[i].split(". ").slice(0, 2).join(". ") });
  character.tapes = [{ id: `${character.id}-1`, label: "Audition 01", scene: scenes[i], src: `/media/auditions/${stem}.mp4`, poster: character.portrait, duration: "Working take" }];
  if (character.id === "kai") character.tapes.push({ id: "kai-2", label: "Audition 02", scene: "Crew authority", src: "/media/auditions/kai-santana-02.mp4", poster: "/media/auditions/kai-santana-02.jpg", duration: "Working take" });
});
Object.assign(oneSheets[1], { title: "Welcome to freshman year", tag: "Key art", note: "Original Video Haven development one-sheet." });
Object.assign(oneSheets[2], { title: "Freshman hell", tag: "Alternate key art", note: "Original Video Haven alternate one-sheet." });
const file = "src/data/content.ts";
let content = await Bun.file(file).text();
for (const [name, data, following] of [["rentalItems", rentalItems, "AuditionTape"], ["characters", characters, "OneSheet"], ["oneSheets", oneSheets, "Location"]] as const) {
  const start = content.indexOf(`export const ${name}:`);
  const end = content.indexOf(`export interface ${following}`, start);
  const type = { rentalItems: "RentalItem", characters: "Character", oneSheets: "OneSheet" }[name];
  content = content.slice(0, start) + `export const ${name}: ${type}[] = ${JSON.stringify(data, null, 2)};\n\n` + content.slice(end);
}
content = content.replace("All five development plates are placeholders for scouted builds.", "The five development plates are imported from Video Haven.").replace("Three tests shot so far: the commute, the rooftop crossing, the grille slide. All in the collection, all labelled as tests, none presented as episodes.", "The arrival and rooftop tests are available alongside first-look cuts. All remain working material.");
await Bun.write(file, content);
for (const entry of new Bun.Glob("src/**/*.{ts,tsx}").scanSync()) {
  let text = await Bun.file(entry).text();
  for (const [oldPath, newPath] of Object.entries(paths)) text = text.replaceAll(oldPath, newPath);
  await Bun.write(entry, text);
}
console.log("Connected original artwork, first looks, locations, and eight audition takes.");
