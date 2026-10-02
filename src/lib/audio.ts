/**
 * One audible source at a time.
 * Every <video>/<audio> that can produce sound registers here; when one starts
 * playing, every other unmuted element is paused.
 */
const registry = new Set<HTMLMediaElement>();

export function registerMedia(el: HTMLMediaElement): () => void {
  registry.add(el);
  const onPlay = () => {
    if (el.muted) return;
    registry.forEach((other) => {
      if (other !== el && !other.paused && !other.muted) other.pause();
    });
  };
  const onVolume = () => {
    if (!el.muted && !el.paused) onPlay();
  };
  el.addEventListener("play", onPlay);
  el.addEventListener("volumechange", onVolume);
  return () => {
    el.removeEventListener("play", onPlay);
    el.removeEventListener("volumechange", onVolume);
    registry.delete(el);
  };
}

export function pauseAllAudible() {
  registry.forEach((el) => {
    if (!el.paused && !el.muted) el.pause();
  });
}
