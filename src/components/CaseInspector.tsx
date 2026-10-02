import { useEffect, useRef, useState, type CSSProperties } from "react";
import { gsap } from "../lib/gsap";
import { DvdCase, type CaseOrigin, type DvdCaseHandle } from "./DvdCase";
import { Modal } from "./Modal";
import { Icon } from "./Icon";
import type { RentalItem } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function CaseInspector({ item, origin, onClose, onWatch }: { item: RentalItem; origin: CaseOrigin; onClose: () => void; onWatch: () => void }) {
  const [opened, setOpened] = useState(false);
  const [zoom, setZoom] = useState(1);
  const reduced = useReducedMotion();
  const handle = useRef<DvdCaseHandle>(null);
  const stage = useRef<HTMLDivElement>(null);
  const scale = useRef<HTMLDivElement>(null);
  const arrival = useRef<HTMLDivElement>(null);
  const fitted = useRef(false);

  useEffect(() => {
    const host = stage.current;
    const object = scale.current;
    if (!host || !object) return;
    const fit = () => {
      const bounds = host.getBoundingClientRect();
      const zoom = Math.max(.3, Math.min(1.5, (bounds.width - 52) / (opened ? 515 : 290), (bounds.height - 66) / 343));
      gsap.to(object, { scale: zoom * magnification, duration: reduced || !fitted.current ? 0 : .25, overwrite: true, ease: "power3.out" });
      fitted.current = true;
    };
    const magnification = zoom;
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(host);
    return () => { observer.disconnect(); gsap.killTweensOf(object); };
  }, [opened, reduced, zoom]);

  useEffect(() => {
    const host = stage.current;
    if (!host) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      setZoom(value => Math.max(.65, Math.min(2.5, value * Math.exp(-event.deltaY * .0015))));
    };
    host.addEventListener("wheel", onWheel, { passive: false });
    return () => host.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    if (reduced || !stage.current || !arrival.current) return;
    const bounds = stage.current.getBoundingClientRect();
    const zoom = Math.max(.3, Math.min(1.5, (bounds.width - 52) / 290, (bounds.height - 66) / 343));
    // Keep entrance separate from fitting, so opening or resizing never replays it.
    // Reverting the context also makes the effect safe in React Strict Mode.
    const context = gsap.context(() => {
      gsap.fromTo(arrival.current, {
        x: origin.left + origin.width / 2 - (bounds.left + bounds.width / 2),
        y: origin.top + origin.height / 2 - (bounds.top + bounds.height / 2),
        scale: origin.width / (240 * zoom),
      }, { x: 0, y: 0, scale: 1, duration: .72, ease: "power3.out", clearProps: "transform" });
    });
    return () => context.revert();
  }, [origin, reduced]);

  return (
    <Modal labelledBy="case-title" describedBy="case-help" className="case-dialog" onClose={onClose}>
      <div className="inspector" onKeyDown={(event) => {
        if ((event.target as HTMLElement).closest(".dvd-object")) return;
        const key = event.key.toLowerCase();
        if (["arrowleft", "arrowright", "arrowup", "arrowdown", "o", "r", "w"].includes(key)) event.preventDefault();
        if (key === "arrowleft") handle.current?.rotateBy(-30);
        if (key === "arrowright") handle.current?.rotateBy(30);
        if (key === "arrowup") handle.current?.rotateBy(15, "x");
        if (key === "arrowdown") handle.current?.rotateBy(-15, "x");
        if (key === "o") setOpened((value) => !value);
        if (key === "r") { setOpened(false); handle.current?.reset(); }
        if (key === "w" && item.footage) onWatch();
      }}>
        <header className="inspector-header">
          <div><p className="eyebrow">Video Haven / Object {item.number}</p><h2 id="case-title">{item.title}</h2><p className="inspector-subtitle">{item.subtitle}</p></div>
          <button className="control" onClick={onClose} autoFocus><Icon name="close" /> Return to shelf <kbd>Esc</kbd></button>
        </header>
        <div className="inspector-stage" ref={stage} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
          <span className="inspector-coordinate coordinate-left" aria-hidden="true">VH / {item.number}</span>
          <div className="case-arrival" ref={arrival}><div className="inspector-scale" ref={scale}>
            <DvdCase ref={handle} item={item} inspecting opened={opened} reduced={reduced} onToggleOpen={() => setOpened((value) => !value)} onWatch={onWatch} />
          </div></div>
          <span className="inspector-coordinate coordinate-right" aria-hidden="true">HOLOGRAPHIC SLEEVE / 3D</span>
          <p id="case-help" className="inspector-help">Drag to rotate freely <span>/</span> Arrow keys to turn <span>/</span> <kbd>O</kbd> to open <span>/</span> <kbd>R</kbd> to reset</p>
        </div>
        <footer className="inspector-footer">
          <div className="zoom-controls" role="group" aria-label="Case zoom"><button className="control" aria-label="Zoom out" disabled={zoom <= .65} onClick={() => setZoom(value => Math.max(.65, value - .2))}>−</button><label htmlFor="case-zoom">Zoom</label><input id="case-zoom" type="range" min=".65" max="2.5" step=".05" value={zoom} style={{ "--range-fill": `${(zoom - .65) / 1.85 * 100}%` } as CSSProperties} onChange={event => setZoom(Number(event.target.value))} /><output htmlFor="case-zoom">{Math.round(zoom * 100)}%</output><button className="control" aria-label="Zoom in" disabled={zoom >= 2.5} onClick={() => setZoom(value => Math.min(2.5, value + .2))}>+</button><button className="control" onClick={() => setZoom(1)}>Fit case</button></div>
          <div className="inspector-tools" aria-label="Case controls">
            <div className="control-group"><button className="control control--icon" aria-label="Rotate left" onClick={() => handle.current?.rotateBy(-45)}><Icon name="left" /></button><button className="control" onClick={() => handle.current?.showFace("front")}>Front</button><button className="control" onClick={() => handle.current?.showFace("back")}>Back</button><button className="control control--icon" aria-label="Rotate right" onClick={() => handle.current?.rotateBy(45)}><Icon name="arrow" /></button></div>
            <button className={`control ${opened ? "is-selected" : ""}`} aria-pressed={opened} onClick={() => setOpened((value) => !value)}><Icon name="open" />{opened ? "Close case" : "Open case"}</button>
            <button className="control control--icon" aria-label="Reset orientation and close case" onClick={() => { setOpened(false); handle.current?.reset(); }}><Icon name="reset" /></button>
            <button className="control control--accent" disabled={!item.footage} onClick={onWatch}><Icon name="play" />{item.footage ? "Watch preview" : "Not yet released"}</button>
          </div>
          <p className="media-note" aria-live="polite">{opened ? (item.footage ? "Case open. Select the holographic disc to play the working footage." : "Holographic presentation disc. Footage is not yet available.") : "Stamped symbol foil. Drag to turn the case; scroll to zoom."}</p>
        </footer>
      </div>
    </Modal>
  );
}

