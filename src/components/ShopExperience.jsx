import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "./Masonry";
import SHOP_CONFIG from "../data/config";

gsap.registerPlugin(ScrollTrigger);

const shopImages = [
  { id: "1", img: "/shop1.png", url: "#", height: 400 },
  { id: "2", img: "/shop2.png", url: "#", height: 300 },
  { id: "3", img: "/shop3.png", url: "#", height: 500 },
  { id: "4", img: "/shop1.png", url: "#", height: 350 },
  { id: "5", img: "/shop2.png", url: "#", height: 450 },
  { id: "6", img: "/shop3.png", url: "#", height: 280 },
];

export default function ShopExperience() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${SHOP_CONFIG.contact.mapsQuery}`;

  useEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;
    if (!section || !scene) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        scene,
        { clipPath: "inset(100% 0% 0% 0%)", yPercent: 6 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          yPercent: 0,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        ".scene-copy .reveal-scene",
        { autoAlpha: 0, yPercent: 18 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".showroom-scene",
            start: "top 45%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section showroom-section" id="gallery" ref={sectionRef}>
      <div className="showroom-scene" ref={sceneRef}>
        <img
          src="/shop1.png"
          alt="Inside the Hindhusthan Electricals showroom"
          className="scene-bg"
          loading="lazy"
          decoding="async"
        />
        <div className="scene-overlay" aria-hidden="true"></div>
        <div className="scene-copy">
          <span className="eyebrow reveal-scene">The Hindhusthan Experience</span>
          <h2 className="scene-title reveal-scene">
            More than a store.
            <br />
            <em>A complete building solution.</em>
          </h2>
          <p className="scene-sub reveal-scene">
            Experience the products. See the brands. Get expert guidance —
            walk in and take a look around.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Inside the showroom</p>
          <h2 className="reveal reveal-delay-1">A look around our store.</h2>
          <p className="reveal reveal-delay-2">
            Take a quick look at the store before you visit.
          </p>
        </div>
      </div>

      <div className="masonry-wrapper reveal-section">
        <Masonry
          items={shopImages}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>

      <div className="container showroom-cta">
        <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noopener">
          Get Directions
          <span aria-hidden="true">→</span>
        </a>
        <p className="shop-caption">
          Valakkai Patti Pirivu, Natham Road, Tottanuthu — right on the highway.
        </p>
      </div>
    </section>
  );
}