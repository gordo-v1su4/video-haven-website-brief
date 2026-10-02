import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const DiscScene = lazy(() => import("./DiscScene"));

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    const context = c.getContext("webgl2");
    if (!context) return false;
    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads Three.js only when the disc scrolls into view; falls back to a CSS
 * disc when WebGL is unavailable.
 */
export function Disc() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const unavailable = useCallback(() => setWebgl(false), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          setWebgl(hasWebGL());
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fallback = (
    <div className="grid h-full w-full place-items-center">
      <div className="css-disc h-[70%] w-auto aspect-square" />
    </div>
  );

  return (
    <div ref={ref} className="relative aspect-square w-full overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#27272a,#09090b_70%)]" role="img" aria-label="Iridescent DVD material study">
      {inView && webgl ? (
        <Suspense fallback={fallback}>
          <DiscScene reduced={reduced} onUnavailable={unavailable} />
        </Suspense>
      ) : (
        fallback
      )}
      <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.1em] text-zinc-400">
        {webgl === false ? "WebGL unavailable · CSS fallback" : "Disc proof · WebGL on demand"}
      </span>
    </div>
  );
}
