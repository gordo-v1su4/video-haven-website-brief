import { useEffect, useState } from "react";
import { VideoHavenMark } from "./Logo";

const links = [
  { href: "#watch", label: "The collection" },
  { href: "#characters", label: "Characters" },
  { href: "#locations", label: "Locations" },
  { href: "#production", label: "Production" },
];

export function Nav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -55% 0px" });
    links.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <a href="#top" aria-label="Video Haven, back to top"><VideoHavenMark /></a>
        <div className="site-nav__links">
          {links.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? "location" : undefined}>{link.label}</a>)}
        </div>
        <a className="nav-return" href="#concept">Archive <span aria-hidden="true">&#8599;</span></a>
      </div>
    </nav>
  );
}