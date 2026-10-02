import type { CSSProperties, ReactNode } from "react";

type IconName = "play" | "pause" | "arrow" | "left" | "close" | "rotate" | "open" | "reset" | "expand" | "disc" | "grid";

export function Icon({ name, size = 16, style }: { name: IconName; size?: number; style?: CSSProperties }) {
  const paths: Record<IconName, ReactNode> = {
    play: <path d="m8 5 11 7-11 7Z" />,
    pause: <path d="M8 5v14M16 5v14" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    left: <path d="M20 12H4m6-6-6 6 6 6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    rotate: <><path d="M20 10a8 8 0 1 0 0 6M20 4v6h-6" /><path d="m10 8 5 4-5 4Z" /></>,
    open: <><path d="m3 3 9 3v15l-9-3Zm9 3 9-3v15l-9 3" /><path d="M7 8v6m10-6v6" /></>,
    reset: <path d="M4 10a8 8 0 1 1 0 6M4 4v6h6" />,
    expand: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />,
    disc: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="m5 5 4 4m6 6 4 4" /></>,
    grid: <path d="M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm11 0h7v7h-7Z" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style}>{paths[name]}</svg>;
}