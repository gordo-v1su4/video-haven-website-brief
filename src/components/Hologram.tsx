import type { CSSProperties } from "react";

export type HoloFinish = "sigil";
export function defaultFinish(_id: string): HoloFinish { return "sigil"; }

export function Hologram({ cover }: { finish?: HoloFinish; cover?: string }) {
  const name = cover?.startsWith("/media/covers/") ? cover.split("/").pop()?.replace(".png", "") : undefined;
  const style = name ? { maskImage: `url("/img/foil-masks/${name}.svg")`, WebkitMaskImage: `url("/img/foil-masks/${name}.svg")` } as CSSProperties : undefined;
  return <>
    <div className={`holo-region${name ? " holo-region--artwork" : ""}`} style={style} aria-hidden="true">
      <div className="holo-reflection" />
      <div className="holo-print holo-print--sigil" />
      <div className="holo-texture" />
    </div>
    <div className="sleeve-plastic" aria-hidden="true" />
  </>;
}
