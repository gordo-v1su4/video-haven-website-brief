import { useRef, useState, type KeyboardEvent } from "react";
import { SectionHead } from "./SectionHead";
import { Icon } from "./Icon";
import { locations } from "../data/content";
import { cn } from "../utils/cn";

export function Locations() {
  const [idx, setIdx] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const loc = locations[idx];

  const onKey = (e: KeyboardEvent) => {
    let next = idx;
    if (e.key === "ArrowRight") next = (idx + 1) % locations.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + locations.length) % locations.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = locations.length - 1;
    else return;
    e.preventDefault();
    setIdx(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="locations" className="section-block locations-section" aria-labelledby="locations-title">
      <div className="wrap">
        <SectionHead
          index="04"
          eyebrow="Locations"
          title={<span id="locations-title">The store, the hill, the roofs.</span>}
          lede="Five places, one nocturnal world. Explore the store and the streets the crew calls home."
        />

        <div className="location-gallery grid grid-cols-1 gap-6 lg:grid-cols-12" data-reveal>
          <figure id="location-panel" role="tabpanel" aria-labelledby={`location-tab-${idx}`} className="lg:col-span-8">
            <div className="relative overflow-hidden bg-zinc-900">
              <img
                key={loc.id}
                src={loc.src}
                alt={loc.name}
                className="location-image"
              />
            </div>
            <figcaption className="figure-caption">
              <span>
                {String(idx + 1).padStart(2, "0")} / {String(locations.length).padStart(2, "0")}
              </span>
              {loc.plate && <span>Development plate</span>}
            </figcaption>
          </figure>

          <div className="lg:col-span-4">
            <h3 className="font-display text-3xl text-zinc-50">{loc.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{loc.description}</p>

            <div
              role="tablist"
              aria-label="Locations"
              onKeyDown={onKey}
              className="mt-5 grid grid-cols-5 gap-2 lg:grid-cols-3"
            >
              {locations.map((l, i) => (
                <button
                  key={l.id}
                  ref={(el) => { tabs.current[i] = el; }}
                  id={`location-tab-${i}`}
                  role="tab"
                  aria-controls="location-panel"
                  aria-selected={i === idx}
                  aria-label={l.name}
                  tabIndex={i === idx ? 0 : -1}
                  onClick={() => setIdx(i)}
                  className={cn(
                    "overflow-hidden border transition-colors",
                    i === idx ? "border-blood-bright" : "border-zinc-800 hover:border-zinc-600",
                  )}
                >
                  <img
                    src={l.src}
                    alt=""
                    loading="lazy"
                    className={cn("aspect-[4/3] w-full object-cover", i !== idx && "opacity-60")}
                  />
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setIdx((i) => (i - 1 + locations.length) % locations.length)}
                  className="control control--icon"
                aria-label="Previous location"
              >
                <Icon name="left" />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % locations.length)}
                className="control control--icon"
                aria-label="Next location"
              >
                <Icon name="arrow" />
              </button>
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-400">Use arrow keys to browse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
