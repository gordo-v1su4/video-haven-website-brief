import { useEffect, useRef, useState } from "react";
import { registerMedia } from "../lib/audio";
import { cn } from "../utils/cn";

interface Props {
  src: string;
  poster?: string;
  title: string;
  autoPlay?: boolean;
  className?: string;
  preload?: "none" | "metadata" | "auto";
}

/** Ordinary native playback, registered so only one audible source plays at a time. */
export function MediaPlayer({ src, poster, title, autoPlay = false, className, preload = "metadata" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const unregister = registerMedia(el);
    return () => {
      el.pause();
      unregister();
    };
  }, [src]);

  useEffect(() => setFailed(false), [src]);

  return (
    <div className={cn("relative overflow-hidden bg-black", className)}>
      <video
        ref={ref}
        key={src}
        src={src}
        poster={poster}
        controls
        playsInline
        preload={preload}
        autoPlay={autoPlay}
        onError={() => setFailed(true)}
        aria-label={title}
        className="block h-full w-full object-contain"
      />
      {failed && <div className="media-error" role="status"><p>This clip could not be loaded.<br />Retry playback to load the media again.</p><button className="control" onClick={() => { setFailed(false); ref.current?.load(); }}>Retry playback</button></div>}
    </div>
  );
}
