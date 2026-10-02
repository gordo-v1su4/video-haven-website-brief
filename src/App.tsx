import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "./lib/gsap";
import { PlayerProvider } from "./context/PlayerContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Collection } from "./components/Collection";
import { Show } from "./components/Show";
import { Characters } from "./components/Characters";
import { Locations } from "./components/Locations";
import { Production } from "./components/Production";
import { Closing } from "./components/Closing";

function useSectionReveals() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const tweens = els.map((el) =>
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        ),
      );
      return () => tweens.forEach((t) => t.kill());
    });
    // Images load late and shift layout; keep triggers accurate.
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    let frame: number | null = null;
    let previousHeight = 0;
    const observer = new ResizeObserver(([entry]) => {
      if (Math.abs(entry.contentRect.height - previousHeight) < 1) return;
      previousHeight = entry.contentRect.height;
      if (frame !== null) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(onLoad);
    });
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    return () => {
      window.removeEventListener("load", onLoad);
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
      mm.revert();
    };
  }, []);
}

export default function App() {
  useSectionReveals();
  return (
    <PlayerProvider>
      <a
        href="#watch"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-zinc-900 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-zinc-100"
      >
        Skip to the collection
      </a>
      <Nav />
      <main>
        <Hero />
        <Collection />
        <Show />
        <Characters />
        <Locations />
        <Production />
      </main>
      <Closing />
    </PlayerProvider>
  );
}
