import { useLayoutEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { BloodRushLogo } from "./Logo";
import { Icon } from "./Icon";
import { usePlayer } from "../context/PlayerContext";
import { rentalItems } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const player = usePlayer();
  const arrival = rentalItems.find((item) => item.id === "arrival")!;

  useLayoutEffect(() => {
    if (reduced) return;
    const context = gsap.context(() => {
      gsap.fromTo(".hero-identity > *", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .09, ease: "power2.out", clearProps: "transform,opacity" });
      // Keep the cinematic drift, without adding any pinned scroll space.
      gsap.fromTo(".hero-scene__image", { yPercent: -3, scale: 1.07 }, {
        yPercent: 5, scale: 1, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: .6 },
      });
    }, ref);
    return () => context.revert();
  }, [reduced]);

  const watchArrival = () => {
    if (!arrival.footage) return;
    player.open({ title: "The way to Video Haven", subtitle: "Kai's first-person commute / movement reference", kind: "test", src: arrival.footage.src, poster: arrival.footage.poster, note: "Video Haven temporary arrival test. Working material, not a released episode." });
  };

  return (
    <section id="top" ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-identity wrap">
        <div className="hero-wordmark">
          <p className="eyebrow">A Video Haven original <span>/</span> Series in development</p>
          <h1 id="hero-title"><BloodRushLogo /></h1>
        </div>
        <div className="hero-copy">
          <p className="hero-premise">California, 2001. A vampire crew. One blood law.<br className="hidden sm:block" /> A human arrival that changes everything.</p>
          <div className="hero-actions">
            <button className="control control--accent" onClick={watchArrival}><Icon name="play" /> Watch the arrival</button>
            <a href="#watch" className="text-action">Enter the collection <Icon name="arrow" /></a>
          </div>
        </div>
      </div>
      <figure className="hero-scene">
        <img className="hero-scene__image" src="/media/keyart/video-haven-ensemble.png" alt="The crew outside the warm-lit Video Haven rental store at night" fetchPriority="high" />
        <div className="hero-scene__shade" aria-hidden="true" />
      </figure>
      <div className="hero-caption wrap">
        <span><span className="live-dot" aria-hidden="true" /> Video Haven. After hours.</span>
        <span>Ensemble key art / development image</span>
      </div>
    </section>
  );
}
