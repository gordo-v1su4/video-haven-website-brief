import type { CSSProperties } from "react";

export type HoloFinish = "sigil";
export function defaultFinish(_id: string): HoloFinish { return "sigil"; }

export function Hologram({ cover }: { finish?: HoloFinish; cover?: string }) {
  const name = cover?.startsWith("/media/covers/") ? cover.split("/").pop()?.replace(".png", "") : undefined;
  const suppliedMatte = name === "arrival" || name === "closing-shift";
  const mask = name ? `/img/foil-masks/${name}${suppliedMatte ? "-user-matte.png" : ".svg"}` : undefined;
  const style = mask ? { maskImage: `url("${mask}")`, WebkitMaskImage: `url("${mask}")`, ...(suppliedMatte ? { maskMode: "luminance" } : {}) } as CSSProperties : undefined;
  return <>
    <div className={`holo-region${name ? " holo-region--artwork" : ""}`} style={style} aria-hidden="true">
      <div className="holo-reflection" />
      <div className="holo-print holo-print--sigil" />
      <div className="holo-texture" />
    </div>
    <div className="sleeve-plastic" aria-hidden="true" />
  </>;
}
