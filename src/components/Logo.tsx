import { useId, useState, type PointerEvent } from "react";
import { cn } from "../utils/cn";
import { productionArtwork } from "../data/artwork";

/** Layered metal, etching, and blood detail, with a pointer-driven foil pass. */
export function BloodRushLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  const id = useId().replace(/:/g, "");
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const url = (name: string) => `url(#${id}-${name})`;
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (compact || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };
  if (productionArtwork.logo && productionArtwork.logo !== failedSource) {
    const source = productionArtwork.logo;
    return <div className={cn("blood-logo blood-logo--image", compact && "blood-logo--compact", className)} onPointerMove={move}>
      <img src={source} alt="Blood Rush" draggable={false} onError={() => setFailedSource(source)} />
      <span className="asset-logo-foil logo-spectrum" aria-hidden="true" style={{ maskImage: `url("${source}")`, WebkitMaskImage: `url("${source}")` }} />
    </div>;
  }
  return (
    <div className={cn("blood-logo", compact && "blood-logo--compact", className)} onPointerMove={move}>
      <svg viewBox="0 0 960 238" role="img" aria-label="Blood Rush" className="blood-logo__svg">
        <defs>
          <linearGradient id={`${id}-metal`} x1="0" y1="0" x2=".2" y2="1">
            <stop offset="0" stopColor="#f7f5ee" /><stop offset=".2" stopColor="#a9a9ab" />
            <stop offset=".39" stopColor="#eeefeb" /><stop offset=".45" stopColor="#45464a" />
            <stop offset=".66" stopColor="#b5b6b8" /><stop offset=".85" stopColor="#636166" />
            <stop offset="1" stopColor="#310a0c" />
          </linearGradient>
          <linearGradient id={`${id}-blood`} x1="0" y1="0" x2=".55" y2="1">
            <stop stopColor="#330306" /><stop offset=".35" stopColor="#ac1018" />
            <stop offset=".6" stopColor="#e8383e" /><stop offset=".7" stopColor="#79060a" />
            <stop offset="1" stopColor="#280205" />
          </linearGradient>
          <filter id={`${id}-patina`} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency=".65 .32" numOctaves="3" seed="12" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" />
            <feComposite operator="in" in2="SourceGraphic" />
            <feBlend mode="soft-light" in2="SourceGraphic" />
          </filter>
          <g id={`${id}-type`}>
            <text x="29" y="163" textLength="900" lengthAdjust="spacingAndGlyphs" fontFamily="Cinzel, Georgia, serif" fontSize="154" fontWeight="600">BloodRusH</text>
            <path d="M27 47 6 17 47 41M32 160 8 187 73 169M907 44l39-30-22 43m-12 104 36 28-19-38M550 151q85 89 198 24-47 51-113 23-35-13-85-47" />
          </g>
          <clipPath id={`${id}-clip`}><use href={`#${id}-type`} /></clipPath>
        </defs>
        <use href={`#${id}-type`} fill="#25080c" stroke="#350e13" strokeWidth="3" transform="translate(2 5)" />
        <use href={`#${id}-type`} fill={url("metal")} stroke="#c6c5c4" strokeWidth=".55" filter={url("patina")} />
        <g clipPath={url("clip")} fill="none" stroke="#fff" strokeWidth=".7" opacity=".3">
          <path d="m48 32 30 51m-10-4 15 22m79-39 40 20m19-54-8 128m35-51 26 34m68-121 34 99m51-71-10 16m67-62-5 108m29-46 48 42m15-112 9 51m30-28-7 18m75-10 8 75m28-109 33 92m50-63-19 59m42-38 49 63" />
        </g>
        <foreignObject x="0" y="0" width="960" height="238" clipPath={url("clip")} className="blood-logo__foil">
          <div className="logo-spectrum" />
        </foreignObject>
        <g fill={url("blood")}>
          <path d="M246 155q20 15 35 0-13 12-12 35l2 19q0 11-5 11t-4-11l2-21q1-23-18-33Z" />
          <path d="M350 156q12 8 28 0-14 10-13 23l2 19q0 8-4 8t-3-8l1-19q0-14-11-23Z" />
          <path d="M547 51q-8-15-15-13t-6-5q0-4 4-2l15 8q8 1 4-9l-8-17q-1-7 4-4t3 9l10 17q8 8 14 2l9-10q4-3 5 2t-6 7l-12 13q-3 13 1 34l-4 32q-1 11-5 12t-4-10l1-38q4-21-10-28Z" />
          <path d="M692 185q15 10 30-1l-12 18-2 25q-1 10-5 8t-2-10l1-22Z" />
          <path d="M757 156q10 7 17-1-10 11-9 31l1 17q-2 6-5 1l1-24q2-15-5-24Z" />
          <ellipse cx="520" cy="28" rx="2" ry="4" transform="rotate(-35 520 28)" />
          <ellipse cx="588" cy="22" rx="3" ry="1.5" /><ellipse cx="494" cy="13" rx="1.5" ry="2" />
          <circle cx="602" cy="38" r="1.8" /><circle cx="556" cy="6" r="1.5" />
        </g>
        <g stroke="#ef8a87" strokeWidth=".8" fill="none" opacity=".7">
          <path d="m547 17 4 12 9 15-1 28M268 194l-1 14m97-20v10m341 17-1 13" />
        </g>
      </svg>
    </div>
  );
}

export function VideoHavenMark({ className }: { className?: string }) {
  return (
    <span className={cn("store-mark", className)}>
      <svg width="30" height="24" viewBox="0 0 30 24" aria-hidden="true" fill="none">
        <path d="M2 3h26v18H2Z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 3v18M24 3v18M2 7h4M2 12h4M2 17h4m18-10h4m-4 5h4m-4 5h4" stroke="currentColor" />
        <path d="m12 8 7 4-7 4Z" fill="currentColor" />
      </svg>
      <span>VIDEO HAVEN<small>GOOD FILMS. LATE NIGHTS.</small></span>
    </span>
  );
}