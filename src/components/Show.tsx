import { useState } from "react";
import { oneSheets } from "../data/content";
import { BloodRushLogo } from "./Logo";
import { Icon } from "./Icon";

export function Show() {
  const [index, setIndex] = useState(0);
  const sheet = oneSheets[index];
  return (
    <section id="show" className="section-block show-section" aria-labelledby="show-title">
      <div className="wrap show-layout">
        <div className="show-art">
          <figure>
            <div className={`show-image ${index ? "show-image--poster" : ""}`}>
              {index > 0 && <BloodRushLogo compact className="poster-logo" />}
              <img key={sheet.id} src={sheet.src} alt={sheet.title} loading="lazy" />
            </div>
            <figcaption className="figure-caption"><span>{sheet.tag} / {String(index + 1).padStart(2, "0")}</span><span>Development artwork</span></figcaption>
          </figure>
          <div className="poster-choices" role="group" aria-label="Browse the one-sheets">
            {oneSheets.map((poster, i) => <button key={poster.id} aria-pressed={i === index} onClick={() => setIndex(i)}><img src={poster.src} alt="" loading="lazy" /><span>{poster.title}</span></button>)}
          </div>
        </div>
        <div className="show-copy" data-reveal>
          <p className="eyebrow"><span className="red-text">02</span> / The world of Blood Rush</p>
          <h2 id="show-title">Some secrets live<br />on the night shift.</h2>
          <p>Fall 2001. At a private Catholic college on the California coast, a vampire crew passes as ordinary students. A blood law keeps their world intact. Then Mara Voss arrives, human, and everything starts to unravel.</p>
          <p>Down the hill, Video Haven is the Santana family's rental store. Kai works the closing shift. Between the aisles and the rooftops, the crew has something almost like a normal life.</p>
          <a className="text-action" href="#characters">Meet the people behind the secret <Icon name="arrow" /></a>
          <p className="show-footnote">COASTAL CALIFORNIA / FALL 2001 / PILOT IN DEVELOPMENT</p>
        </div>
      </div>
    </section>
  );
}