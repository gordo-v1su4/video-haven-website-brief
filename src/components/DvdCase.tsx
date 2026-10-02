import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, type KeyboardEvent, type PointerEvent } from "react";
import { Spring, clamp } from "../lib/spring";
import type { RentalItem } from "../data/content";
import { BloodRushLogo } from "./Logo";
import { Hologram, defaultFinish, type HoloFinish } from "./Hologram";

export type CaseOrigin = Pick<DOMRect, "left" | "top" | "width" | "height">;
export interface DvdCaseHandle {
  rotateBy: (degrees: number, axis?: "x" | "y") => void;
  showFace: (face: "front" | "spine" | "back") => void;
  reset: () => void;
}
interface Props {
  item: RentalItem;
  finish?: HoloFinish;
  inspecting?: boolean;
  opened?: boolean;
  reduced: boolean;
  onActivate?: (origin: CaseOrigin) => void;
  onToggleOpen?: () => void;
  onWatch?: () => void;
}

export const DvdCase = forwardRef<DvdCaseHandle, Props>(function DvdCase({ item, finish = defaultFinish(item.id), inspecting = false, opened = false, reduced, onActivate, onToggleOpen, onWatch }, ref) {
  const root = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const drag = useRef<{ x: number; y: number; yaw: number; pitch: number } | null>(null);
  const springs = useMemo(() => ({
    yaw: new Spring(inspecting ? 0 : -9, .035, .36),
    pitch: new Spring(inspecting ? 0 : 3, .05, .32),
    tiltX: new Spring(0), tiltY: new Spring(0),
    lightX: new Spring(40), lightY: new Spring(35),
    glare: new Spring(.12), open: new Spring(0, .036, .36),
  }), [inspecting]);

  const write = useCallback(() => {
    const el = root.current;
    if (!el) return;
    const s = springs;
    const x = s.lightX.value;
    const y = s.lightY.value;
    const values: Record<string, string> = {
      "--rotate-x": `${s.pitch.value + s.tiltX.value}deg`,
      "--rotate-y": `${s.yaw.value + s.tiltY.value}deg`,
      "--pointer-x": `${x}%`, "--pointer-y": `${y}%`,
      "--background-x": `${20 + x * .6}%`, "--background-y": `${20 + y * .6}%`,
      "--foil-angle": `${45 + x * 1.6}deg`,
      "--pointer-from-center": `${Math.min(1, Math.hypot(x - 50, y - 50) / 50)}`,
      "--card-opacity": `${s.glare.value}`,
      "--hinge-angle": `${-170 * s.open.value}deg`,
      "--open-offset": `${-Math.min(0, Math.cos(170 * s.open.value * Math.PI / 180)) * 50}%`,
    };
    Object.entries(values).forEach(([key, value]) => el.style.setProperty(key, value));
  }, [springs]);

  const kick = useCallback(() => {
    if (frame.current !== null) return;
    let previous = 0;
    const tick = (time: number) => {
      // Normalize to 60 Hz, including high-refresh screens and background tabs.
      const dt = previous ? Math.min(1.5, (time - previous) / (1000 / 60)) : 1;
      previous = time;
      let moving = false;
      Object.values(springs).forEach((spring) => { moving = spring.step(dt) || moving; });
      write();
      frame.current = moving ? requestAnimationFrame(tick) : null;
    };
    frame.current = requestAnimationFrame(tick);
  }, [springs, write]);

  const rotateBy = useCallback((degrees: number, axis: "x" | "y" = "y") => {
    const spring = axis === "x" ? springs.pitch : springs.yaw;
    const target = axis === "x" ? clamp(spring.target + degrees, -80, 80) : spring.target + degrees;
    spring.set(target, { hard: reduced, stiffness: .06, damping: .36 });
    springs.lightX.set(50 + Math.sin(target * Math.PI / 180) * 38, { hard: reduced });
    springs.glare.set(.65, { hard: reduced });
    kick();
  }, [springs, reduced, kick]);

  const reset = useCallback(() => {
    const nearest = Math.round(springs.yaw.value / 360) * 360;
    springs.yaw.set(nearest, { hard: reduced });
    springs.pitch.set(0, { hard: reduced });
    springs.tiltX.set(0, { hard: reduced });
    springs.tiltY.set(0, { hard: reduced });
    springs.lightX.set(40, { hard: reduced });
    springs.lightY.set(35, { hard: reduced });
    kick();
  }, [springs, reduced, kick]);

  useImperativeHandle(ref, () => ({
    rotateBy, reset,
    showFace: (face) => {
      const offset = face === "front" ? 0 : face === "back" ? 180 : 90;
      const target = Math.round((springs.yaw.value - offset) / 360) * 360 + offset;
      springs.yaw.set(target, { hard: reduced });
      springs.pitch.set(0, { hard: reduced });
      springs.tiltX.set(0, { hard: reduced });
      springs.tiltY.set(0, { hard: reduced });
      kick();
    },
  }), [rotateBy, reset, springs, reduced, kick]);

  useEffect(() => {
    write();
    if (inspecting) {
      springs.yaw.set(reduced ? 0 : 360, { hard: reduced });
      springs.glare.set(.42, { hard: reduced });
      kick();
    }
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = null;
      drag.current = null;
    };
  }, [inspecting, reduced, springs, kick, write]);

  useEffect(() => {
    springs.open.set(opened ? 1 : 0, { hard: reduced });
    if (opened) {
      springs.yaw.set(Math.round(springs.yaw.value / 360) * 360 + 5, { hard: reduced });
      springs.pitch.set(-4, { hard: reduced });
      springs.tiltX.set(0, { hard: reduced });
      springs.tiltY.set(0, { hard: reduced });
    }
    kick();
  }, [opened, reduced, springs, kick]);

  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = root.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clamp((event.clientX - rect.left) / rect.width * 100);
    const y = clamp((event.clientY - rect.top) / rect.height * 100);
    if (drag.current) {
      const dx = event.clientX - drag.current.x;
      const dy = event.clientY - drag.current.y;
      springs.yaw.set(drag.current.yaw + dx * .65, { hard: true });
      springs.pitch.set(clamp(drag.current.pitch - dy * .4, -80, 80), { hard: true });
      springs.tiltX.set(0, { hard: true });
      springs.tiltY.set(0, { hard: true });
      springs.lightX.set(50 + Math.sin(springs.yaw.value * Math.PI / 180) * 45, { hard: reduced });
      springs.lightY.set(y, { hard: reduced });
    } else if (event.pointerType !== "touch") {
      springs.tiltX.set((50 - y) / (reduced || inspecting ? 8 : 4), { hard: reduced });
      springs.tiltY.set((x - 50) / (reduced || inspecting ? 8 : 4), { hard: reduced });
      springs.lightX.set(x, { hard: reduced });
      springs.lightY.set(y, { hard: reduced });
    }
    springs.glare.set(.9, { hard: reduced });
    kick();
  };

  const pointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!inspecting || event.button !== 0 || (event.target as HTMLElement).closest("[data-no-drag]")) return;
    event.preventDefault();
    root.current?.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { x: event.clientX, y: event.clientY, yaw: springs.yaw.value, pitch: springs.pitch.value };
    springs.yaw.set(springs.yaw.value, { hard: true });
    springs.pitch.set(springs.pitch.value, { hard: true });
    root.current?.classList.add("is-dragging");
  };
  const pointerUp = (event: PointerEvent<HTMLDivElement>) => {
    drag.current = null;
    root.current?.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const leave = () => {
    if (drag.current) return;
    springs.tiltX.set(0, { hard: reduced }); springs.tiltY.set(0, { hard: reduced }); springs.glare.set(inspecting ? .35 : .12, { hard: reduced });
    kick();
  };
  const activate = () => {
    if (!inspecting && root.current) {
      root.current.focus({ preventScroll: true });
      onActivate?.(root.current.getBoundingClientRect());
    }
  };
  const keyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (!inspecting && ["Enter", " "].includes(event.key)) { event.preventDefault(); activate(); return; }
    if (!inspecting) return;
    const key = event.key.toLowerCase();
    if (["arrowleft", "arrowright", "arrowup", "arrowdown", "o", "r", "w", "enter", " "].includes(key)) event.preventDefault();
    if (key === "arrowleft") rotateBy(-30);
    if (key === "arrowright") rotateBy(30);
    if (key === "arrowup") rotateBy(15, "x");
    if (key === "arrowdown") rotateBy(-15, "x");
    if (["o", "enter", " "].includes(key)) onToggleOpen?.();
    if (key === "r") reset();
    if (key === "w") onWatch?.();
  };

  return (
    <div ref={root} className={`dvd-object ${inspecting ? "dvd-object--inspecting" : ""} ${opened ? "is-open" : ""}`} role={inspecting ? "group" : "button"} tabIndex={0}
      aria-label={inspecting ? `${item.title}, 3D case. Drag or use arrow keys to rotate. O opens the cover. W plays footage.` : `Inspect ${item.title}, ${item.subtitle}`}
      aria-haspopup={inspecting ? undefined : "dialog"}
      onClick={activate} onKeyDown={keyDown} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp} onLostPointerCapture={() => { drag.current = null; root.current?.classList.remove("is-dragging"); }} onPointerLeave={leave}
    >
      <div className="dvd-rotator">
        <div className="dvd-model">
          <div className="dvd-face dvd-back"><BackInsert item={item} /><HoloLayers /></div>
          <div className="dvd-face dvd-spine"><span className="spine-brand">BLOOD RUSH</span><span className="spine-title">{item.title}</span><span className="spine-catalog">VH / {item.number}</span></div>
          <div className="dvd-face dvd-edge" /><div className="dvd-face dvd-top" /><div className="dvd-face dvd-bottom" />
          <div className="dvd-face dvd-tray" aria-hidden={!inspecting || !opened}>
            <span className="tray-imprint">VIDEO HAVEN / ARCHIVE</span>
            <div className="tray-well" />
            <div className="tray-hologram"><Hologram finish="sigil" /></div>
              <button className="dvd-disc" data-no-drag tabIndex={inspecting && opened && item.footage ? 0 : -1} disabled={!inspecting || !opened || !item.footage} onPointerDown={(event) => event.stopPropagation()} onClick={(event) => { event.stopPropagation(); if (item.footage) onWatch?.(); }} aria-label={item.footage ? `Play ${item.title} from the disc` : `${item.title} holographic disc, footage pending`}>
                <span className="disc-hologram"><Hologram finish="sigil" /></span>
                <span className="disc-lettering">BLOOD RUSH<small>{item.title}</small></span>
                <span className="disc-hole" /><span className="disc-bottom-text">{item.footage ? "WORKING MATERIAL" : "FOOTAGE PENDING"} / {item.number}</span>
              </button>
            <span className="tray-bottom">{item.footage ? "SELECT DISC TO PLAY" : "FOOTAGE NOT YET AVAILABLE"}</span>
          </div>
          <div className="dvd-lid">
            <div className="dvd-face dvd-front"><FrontInsert item={item} /><Hologram finish={finish} cover={item.cover} />{!item.cover.startsWith("/media/covers/") && <><span className="rental-label">VIDEO HAVEN<strong>{item.stickers[0] ?? "3 DAY"}</strong><small>#{item.number}</small></span><span className="foil-seal"><span>VH</span><small>AUTHENTIC</small></span></>}</div>
            <div className="dvd-face dvd-lid-inner" aria-hidden={!inspecting || !opened}>
              <div className="inner-booklet"><BloodRushLogo compact />{item.backArt && <img className={item.backArt.includes("storyboard") ? "dark-paper" : undefined} src={item.backArt} alt="" draggable={false} />}<strong>{item.title}</strong><p>{item.synopsis}</p><span>VIDEO HAVEN / DEVELOPMENT ARCHIVE</span></div>
              <span className="booklet-clip clip-top" /><span className="booklet-clip clip-bottom" />
            </div>
            <div className="lid-rim" />
            <div className="dvd-face lid-edge lid-edge--right" /><div className="dvd-face lid-edge lid-edge--top" /><div className="dvd-face lid-edge lid-edge--bottom" />
          </div>
          <div className="case-hinge" />
        </div>
      </div>
    </div>
  );
});

function HoloLayers() {
  return <><div className="sleeve-foil" aria-hidden="true" /><div className="sleeve-etch" aria-hidden="true" /><div className="sleeve-glare" aria-hidden="true" /><div className="sleeve-plastic" aria-hidden="true" /></>;
}

function FrontInsert({ item }: { item: RentalItem }) {
  if (item.cover.startsWith("/media/covers/")) return <div className="front-insert front-insert--artwork"><img src={item.cover} alt={`${item.title} DVD cover`} draggable={false} loading="lazy" /></div>;
  return <div className="dvd-print">
    <div className="sleeve-header"><span>VIDEO HAVEN PRESENTS</span><BloodRushLogo compact /></div>
    {item.cover ? <img className="sleeve-art" src={item.cover} alt="" draggable={false} loading="lazy" /> : <div className="reserved-art"><span>01</span><small>COMING TO THIS SHELF</small></div>}
    <div className="sleeve-vignette" />
    <div className="sleeve-footer"><span className="sleeve-name">{item.title}</span><span className="sleeve-kind">{item.subtitle}</span><span className="sleeve-edition">{item.released ? "ORIGINAL SERIES" : "DEVELOPMENT ARCHIVE / NOT AN EPISODE"}</span></div>
  </div>;
}

function BackInsert({ item }: { item: RentalItem }) {
  return <div className="back-insert">
    <BloodRushLogo compact />
    {item.backArt && <img className={`back-still ${item.backArt.includes("storyboard") ? "dark-paper" : ""}`} src={item.backArt} alt="" draggable={false} loading="lazy" />}
    <strong>{item.title}</strong>
    <p>{item.synopsis}</p>
    <div className="back-details"><span>{item.runtime}</span><span>16:9 / STEREO</span></div>
    <span className="back-warning">{item.released ? "ORIGINAL SERIES" : "WORKING MATERIAL. NOT A RELEASED EPISODE."}</span>
    <div className="back-catalog"><div className="barcode" /><span>VH-{item.number}<br />VIDEO HAVEN</span></div>
  </div>;
}

