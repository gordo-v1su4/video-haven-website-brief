import { useCallback, useState } from "react";
import { DvdCase, type CaseOrigin } from "./DvdCase";
import { CaseInspector } from "./CaseInspector";
import { Icon } from "./Icon";
import { rentalItems, type RentalItem } from "../data/content";
import { usePlayer } from "../context/PlayerContext";
import { useReducedMotion } from "../hooks/useReducedMotion";

const filters = [{ id: "all", label: "All material" }, { id: "preview", label: "Previews" }, { id: "test", label: "Movement tests" }, { id: "teaser", label: "Teasers" }];

export function Collection() {
  const reduced = useReducedMotion();
  const player = usePlayer();
  const [filter, setFilter] = useState("all");
  const [selection, setSelection] = useState<{ item: RentalItem; origin: CaseOrigin } | null>(null);
  const items = rentalItems.filter((item) => filter === "all" || item.kind === filter);
  const close = useCallback(() => setSelection(null), []);
  const watch = useCallback((item: RentalItem) => {
    if (!item.footage) return;
    player.open({ title: item.title, subtitle: item.subtitle, kind: item.kind, src: item.footage.src, poster: item.footage.poster, note: `${item.footage.credit ?? "Placeholder footage"}. Not a released episode.` });
  }, [player]);

  return (
    <section id="watch" className="collection-section section-block" aria-labelledby="watch-title">
      <div className="wrap">
        <header className="collection-heading">
          <div><p className="eyebrow"><span className="red-text">01</span> / The rental collection</p><h2 id="watch-title">Stay a little after closing.</h2></div>
          <p className="collection-instruction"><Icon name="rotate" size={20} /><span>Hover to tilt. Click to explore.<br /><small>Open the case for a closer look.</small></span></p>
        </header>
        <div className="collection-filter">
          <div className="text-tabs" role="group" aria-label="Filter collection">{filters.map((item) => <button key={item.id} onClick={() => setFilter(item.id)} aria-pressed={filter === item.id}>{item.label}</button>)}</div>
          <span className="eyebrow">{String(items.length).padStart(2, "0")} objects on the shelf</span>
        </div>
        <div className="rental-grid shelf-scroll">
          {items.map((item, index) => (
            <article className="rental-entry" key={item.id} style={{ animationDelay: `${index * 55}ms` }}>
              <div className="rental-object"><DvdCase item={item} reduced={reduced} onActivate={(origin) => setSelection({ item, origin: { left: origin.left, top: origin.top, width: origin.width, height: origin.height } })} /></div>
              <div className="rental-caption"><span className="rental-type">{item.kind === "episode" ? "COMING SOON" : item.kind === "test" ? "MOVEMENT TEST" : item.kind === "preview" ? "PREVIEW CUT" : "TEASER ASSEMBLY"}</span><h3>{item.title}</h3><span className="rental-code">VH-{item.number}<span>{item.footage ? item.footage.duration ?? item.runtime : "UNRELEASED"}</span></span></div>
            </article>
          ))}
        </div>
        <div className="collection-bottom"><p><span className="live-dot" aria-hidden="true" />Working cuts only. No episodes released.</p><a href="https://codepen.io/simeydotme/pen/abYWJdX" target="_blank" rel="noreferrer" className="quiet-link">Holo interaction inspired by Simey <span aria-hidden="true">&#8599;</span></a></div>
      </div>
      {selection && <CaseInspector key={selection.item.id} item={selection.item} origin={selection.origin} onClose={close} onWatch={() => watch(selection.item)} />}
    </section>
  );
}
