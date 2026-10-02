import { BloodRushLogo, VideoHavenMark } from "./Logo";
import { Icon } from "./Icon";

export function Closing() {
  return (
    <footer className="site-footer">
      <div className="wrap closing-layout">
        <div><p className="eyebrow">A note from the counter</p><h2>Be kind. Come back after dark.</h2><p>No finished episodes have been released. The shelf holds working previews and tests, with a case reserved for the pilot. Explore original Video Haven artwork, supplied DVD covers, and production footage.</p><a className="text-action" href="#watch"><Icon name="left" /> Back to the collection</a></div>
        <div id="concept" className="concept-archive"><details><summary>Earlier concept / comparison <span aria-hidden="true">+</span></summary><div className="concept-body"><p>The earlier direction used flat thumbnails, inline players, a long pinned arrival, and rounded controls.</p><p>This iteration keeps the storefront and section order, with tighter spacing, dark surfaces, and hinged holographic DVD cases.</p><a className="quiet-link" href="https://codepen.io/simeydotme/pen/abYWJdX" target="_blank" rel="noreferrer">View the interaction reference &#8599;</a></div></details><BloodRushLogo compact className="footer-logo" /></div>
      </div>
      <div className="wrap footer-bottom"><a href="#top" aria-label="Video Haven, back to top"><VideoHavenMark /></a><span>THE SANTANA FAMILY RENTAL STORE</span><a className="quiet-link" href="#top">Back to top &#8593;</a></div>
    </footer>
  );
}
