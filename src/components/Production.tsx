import { useRef, useState, type KeyboardEvent } from "react";
import { SectionHead } from "./SectionHead";
import { Disc } from "./Disc";
import { actionBoard, arrivalBeats, palette, productionNotes } from "../data/content";
import { productionArtwork } from "../data/artwork";

const tabs = ["Arrival storyboards", "Action board", "Palette & development"];

export function Production() {
  const [tab, setTab] = useState(0);
  const [boardMode, setBoardMode] = useState<"action" | "timed">("action");
  const referenceBoard = boardMode === "action" ? productionArtwork.actionBoard : productionArtwork.timedSequence;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const changeTab = (event: KeyboardEvent, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault(); setTab(next); refs.current[next]?.focus();
  };
  return (
    <section id="production" className="section-block" aria-labelledby="production-title">
      <div className="wrap">
        <SectionHead index="05" eyebrow="Behind the counter" title={<span id="production-title">Inside the production.</span>} lede="From the first rooftop ledge to the last fluorescent light. The boards, the timing, the details." />
        <div className="text-tabs production-tabs" role="tablist" aria-label="Production material">
          {tabs.map((label, i) => <button key={label} ref={(el) => { refs.current[i] = el; }} id={`production-tab-${i}`} role="tab" aria-selected={tab === i} aria-controls="production-panel" tabIndex={tab === i ? 0 : -1} onClick={() => setTab(i)} onKeyDown={(event) => changeTab(event, i)}>{label}</button>)}
        </div>
        <div id="production-panel" role="tabpanel" aria-labelledby={`production-tab-${tab}`} className="production-panel" tabIndex={0}>
          {tab === 0 && <div className="production-layout">
            <figure><img className="storyboard-image dark-paper" src="/media/keyart/video-haven-storyboard.png" alt="Six arrival storyboard frames: ledge, gap, drop, street, grille, counter" loading="lazy" /><figcaption className="figure-caption"><span>Arrival / 6 frames / 1:04 target</span><span>Development storyboard</span></figcaption></figure>
            <div><h3 className="subheading">The arrival, beat by beat.</h3><ol className="beat-list">{arrivalBeats.map((beat) => <li key={beat.time}><span>{beat.time}</span><div><strong>{beat.label}</strong><p>{beat.detail}</p></div></li>)}</ol></div>
          </div>}
          {tab === 1 && <div className="action-layout"><div><p className="eyebrow">Sequence direction</p><h3 className="subheading">Movement is transport.<br />Not performance.</h3>
            {(productionArtwork.actionBoard || productionArtwork.timedSequence) && <div className="text-tabs" role="group" aria-label="Action reference boards"><button aria-pressed={boardMode === "action"} onClick={() => setBoardMode("action")}>Action board</button><button aria-pressed={boardMode === "timed"} onClick={() => setBoardMode("timed")}>Timed sequence</button></div>}
            <img src={referenceBoard ?? "/media/world/rooftop.png"} alt={referenceBoard ? `Blood Rush ${boardMode === "timed" ? "timed action sequence" : "action board"}` : "Development reference for the rooftop crossing"} loading="lazy" /></div><ol className="action-list">{actionBoard.map((note, i) => <li key={note.head}><span className="eyebrow">0{i + 1}</span><div><h4>{note.head}</h4><p>{note.body}</p></div></li>)}</ol></div>}
          {tab === 2 && <div className="development-layout"><div><h3 className="subheading">Night, texture, a trace of red.</h3><div className="palette-strip">{palette.map((color) => <div key={color.name}><span style={{ background: color.hex }} /><strong>{color.name}</strong><small>{color.hex}</small></div>)}</div><div className="production-notes">{productionNotes.map((note) => <div key={note.head}><h4>{note.head}</h4><p>{note.body}</p></div>)}</div></div><figure className="production-disc"><Disc /><figcaption className="figure-caption">Disc material study / WebGL with a flat fallback</figcaption></figure></div>}
        </div>
      </div>
    </section>
  );
}