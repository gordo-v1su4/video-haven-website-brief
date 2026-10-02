import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { MediaPlayer } from "../components/MediaPlayer";
import { Modal } from "../components/Modal";
import { Icon } from "../components/Icon";
import { pauseAllAudible } from "../lib/audio";
import type { FootageKind } from "../data/content";

export interface PlayerRequest {
  title: string;
  subtitle?: string;
  kind: FootageKind | "audition" | "footage";
  src: string;
  poster?: string;
  note?: string;
}

interface PlayerApi { open: (request: PlayerRequest) => void; close: () => void; }
const Context = createContext<PlayerApi | null>(null);

export function usePlayer() {
  const api = useContext(Context);
  if (!api) throw new Error("usePlayer requires PlayerProvider");
  return api;
}

const labels = { preview: "Preview cut", test: "Movement test", teaser: "Teaser assembly", episode: "Episode", audition: "Audition tape", footage: "Footage" };

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<PlayerRequest | null>(null);
  const open = useCallback((next: PlayerRequest) => { pauseAllAudible(); setRequest(next); }, []);
  const close = useCallback(() => setRequest(null), []);
  const api = useMemo(() => ({ open, close }), [open, close]);

  return (
    <Context.Provider value={api}>
      {children}
      {request && (
        <Modal className="player-dialog" labelledBy="player-title" onClose={close}>
          <div className="player-window">
            <header className="player-heading">
              <div><p className="eyebrow">Video Haven / {labels[request.kind]}</p><h2 id="player-title">{request.title}</h2>{request.subtitle && <p className="player-subtitle">{request.subtitle}</p>}</div>
              <button className="control control--icon" onClick={close} aria-label="Close player" autoFocus><Icon name="close" size={20} /></button>
            </header>
            <MediaPlayer key={request.src} src={request.src} poster={request.poster} title={request.title} autoPlay preload="auto" className="player-video" />
            <p className="media-note">{request.note ?? "Low-resolution placeholder footage. Not a released episode."}</p>
          </div>
        </Modal>
      )}
    </Context.Provider>
  );
}