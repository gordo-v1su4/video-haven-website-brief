import { cp, mkdir, readdir, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
import { createHash } from "node:crypto";

// Copy only public production media; never source code, configuration, or secrets.
const source = resolve(process.argv[2] ?? "../behind-the-cut/web/static/media");
const destination = resolve("public/media");
const records: { file: string; bytes: number; sha256: string }[] = [];
async function copyDirectory(relative = "") {
  for (const entry of await readdir(join(source, relative), { withFileTypes: true })) {
    const file = join(relative, entry.name);
    if (entry.isDirectory()) { await copyDirectory(file); continue; }
    if (!/\.(png|jpg|jpeg|webp|mp4)$/i.test(entry.name)) continue;
    const target = join(destination, file);
    await mkdir(resolve(target, ".."), { recursive: true });
    await cp(join(source, file), target);
    const original = await Bun.file(join(source, file)).arrayBuffer();
    const copied = await Bun.file(target).arrayBuffer();
    const hash = (bytes: ArrayBuffer) => createHash("sha256").update(Buffer.from(bytes)).digest("hex");
    if (hash(original) !== hash(copied)) throw new Error(`Copy verification failed: ${file}`);
    records.push({ file: `/media/${file.replaceAll("\\", "/")}`, bytes: (await stat(target)).size, sha256: hash(copied) });
  }
}
await copyDirectory();
await mkdir("references", { recursive: true });
await Bun.write("references/video-haven-assets.json", JSON.stringify({ source: "behind-the-cut/web/static/media (Video Haven)", assets: records }, null, 2) + "\n");
console.log(`Imported and SHA-256 verified ${records.length} Video Haven assets.`);
