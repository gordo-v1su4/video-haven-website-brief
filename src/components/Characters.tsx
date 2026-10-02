import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { SectionHead } from "./SectionHead";
import { MediaPlayer } from "./MediaPlayer";
import { characters, type AuditionTape } from "../data/content";
import { cn } from "../utils/cn";

const STATUS_LABEL = { human: "Human", vampire: "Crew", unknown: "Unknown" } as const;

export function Characters() {
  const [selectedId, setSelectedId] = useState(characters[0].id);
  const [tape, setTape] = useState<AuditionTape | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const selected = characters.find((c) => c.id === selectedId)!;
  const totalTapes = characters.reduce((n, c) => n + c.tapes.length, 0);

  // reset active tape when changing character
  useEffect(() => setTape(null), [selectedId]);

  const onTabKey = (e: KeyboardEvent, idx: number) => {
    const n = characters.length;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (idx + 1) % n;
    if (e.key === "ArrowLeft") next = (idx - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      const id = characters[next].id;
      setSelectedId(id);
      tabRefs.current[id]?.focus();
      tabRefs.current[id]?.scrollIntoView({ block: "nearest", inline: "center" });
    }
  };

  return (
    <section id="characters" className="section-block characters-section" aria-labelledby="characters-title">
      <div className="wrap">
        <SectionHead
          index="03"
          eyebrow="Characters & audition tapes"
          title={<span id="characters-title">Everybody has a secret.</span>}
          lede={
            <>
              Seven principals. {totalTapes} audition slots. Pick a face to explore the character and their working tapes.
            </>
          }
        />

        {/* Character shelf */}
        <div
          role="tablist"
          aria-label="Characters"
          className="character-shelf shelf-scroll"
          data-reveal
        >
          {characters.map((c, i) => {
            const isSel = c.id === selectedId;
            return (
              <button
                key={c.id}
                ref={(el) => {
                  tabRefs.current[c.id] = el;
                }}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={isSel}
                aria-controls="character-panel"
                tabIndex={isSel ? 0 : -1}
                onClick={() => setSelectedId(c.id)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={cn(
                  "character-tab group relative shrink-0 snap-start overflow-hidden border text-left transition-colors",
                  isSel
                    ? "border-blood-bright"
                    : "border-zinc-800 opacity-80 hover:opacity-100 hover:border-zinc-600",
                )}
              >
                <img
                  src={c.portrait}
                  alt=""
                  loading="lazy"
                  className={cn(
                    "aspect-[4/3] w-full object-cover object-[center_28%] transition-[filter] duration-300",
                    !isSel && "grayscale group-hover:grayscale-0",
                  )}
                />
                <div className="bg-zinc-900 px-2.5 py-1">
                  <p className="truncate text-sm text-zinc-50">{c.name}</p>
                  <p className="truncate font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                    {STATUS_LABEL[c.status]} · {c.tapes.length} tape{c.tapes.length === 1 ? "" : "s"}
                  </p>
                </div>
                {/* tape label strip */}
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-2 border border-zinc-700 bg-zinc-950/90 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest text-zinc-300"
                >
                  Audition
                </span>
              </button>
            );
          })}
        </div>

        {/* Profile */}
        <div
          id="character-panel"
          role="tabpanel"
          aria-labelledby={`tab-${selected.id}`}
          className="character-profile"
        >
          {/* Reference art */}
          <figure className="character-reference">
            <div className="overflow-hidden bg-zinc-900">
              <img
                key={selected.portrait}
                src={selected.portrait}
                alt={`${selected.name} — reference art`}
                className="character-portrait"
              />
            </div>
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              {selected.portraitCredit}
            </figcaption>
          </figure>

          {/* Bio + tapes */}
          <div className="character-story">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              {selected.role} ·{" "}
              <span className={selected.status === "human" ? "text-sodium" : "text-blood-bright"}>
                {STATUS_LABEL[selected.status]}
              </span>
            </p>
            <h3 className="mt-2 font-display text-3xl text-zinc-50 sm:text-4xl">{selected.name}</h3>
            <p className="mt-2 text-zinc-400">{selected.short}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{selected.bio}</p>

            {selected.sheet && (
              <figure className="mt-5 overflow-hidden border border-zinc-800 bg-zinc-950">
                <img src={selected.sheet.src} alt={selected.sheet.caption} className="dark-paper max-h-[300px] w-full object-contain" />
                <figcaption className="border-t border-zinc-800 bg-zinc-950 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                  {selected.sheet.caption} · Begins the pilot human.
                </figcaption>
              </figure>
            )}

            {/* Audition tapes */}
            <div className="mt-5 border-t border-zinc-800 pt-4">
              <div className="flex items-baseline justify-between">
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-400">Audition tapes</h4>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  {selected.tapes.length ? `${selected.tapes.length} takes / production auditions` : "Pending"}
                </span>
              </div>

              {selected.tapes.length === 0 ? (
                <p className="mt-4 rounded-md border border-dashed border-zinc-800 p-4 text-sm text-zinc-500">
                  No tape yet for {selected.name.split(" ")[0]}. This slot fills when footage becomes available.
                </p>
              ) : (
                <>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selected.tapes.map((t) => {
                      const on = tape?.id === t.id;
                      return (
                        <li key={t.id}>
                          <button
                            onClick={() => setTape(on ? null : t)}
                            aria-pressed={on}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-md border px-2 py-1 text-left transition-colors",
                              on ? "border-zinc-300 bg-zinc-900" : "border-zinc-800 hover:border-zinc-600",
                            )}
                          >
                            <span className="relative block h-14 w-24 shrink-0 overflow-hidden rounded-sm bg-black">
                              <img src={t.poster} alt="" loading="lazy" className="h-full w-full object-cover" />
                              <span className="absolute inset-0 grid place-items-center text-zinc-50">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                            </span>
                            <span className="min-w-0">
                              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                                {t.label} · {t.duration}
                              </span>
                              <span className="block truncate text-sm text-zinc-100">{t.scene}</span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  {tape && (
                    <div className="mt-4">
                      <MediaPlayer
                        key={tape.id}
                        src={tape.src}
                        poster={tape.poster}
                        title={`${selected.name} — ${tape.label}: ${tape.scene}`}
                        autoPlay
                        className="aspect-video w-full max-w-2xl border border-zinc-800"
                      />
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                        {selected.name} · {tape.label} · {tape.scene} · Video Haven audition
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

