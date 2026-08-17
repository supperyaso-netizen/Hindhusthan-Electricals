import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  { id: 1, name: "Havells", image: "/havellslogo.png" },
  { id: 2, name: "Crompton", image: "/cromptonlogo.png" },
  { id: 3, name: "V-Guard", image: "/vguardlogo.png" },
  { id: 4, name: "Greatwhite", image: "/greatwhitelogo.png" },
];

function MarqueeSet() {
  return (
    <>
      {brands.map((brand) => (
        <div className="brand-card" key={brand.id} aria-hidden="false">
          <img src={brand.image} alt={brand.name} className="brand-logo" loading="lazy" />
        </div>
      ))}
    </>
  );
}

export default function Brands() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.fromTo(
          section.querySelector(".section-head"),
          { autoAlpha: 0, yPercent: 12 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 80%" },
          }
        );
        return;
      }

      const cards = track.querySelectorAll(".brand-card");
      const count = brands.length;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const singleW = cards[0].offsetWidth * count + gap * (count - 1);

      const tl = gsap.timeline({ repeat: -1, paused: false });
      tl.to(track, { x: -singleW, duration: Math.max(singleW / 40, 18), ease: "none" });
      tl.set(track, { x: 0 });

      const onEnter = () => tl.pause();
      const onLeave = () => tl.resume();
      track.addEventListener("mouseenter", onEnter);
      track.addEventListener("mouseleave", onLeave);

      gsap.fromTo(
        section.querySelector(".section-head"),
        { autoAlpha: 0, yPercent: 12 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
        }
      );

      return () => {
        track.removeEventListener("mouseenter", onEnter);
        track.removeEventListener("mouseleave", onLeave);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="brands-section" id="brands" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Authorized Dealer</span>
          <h2>Brands we stock</h2>
          <p>Only genuine products from trusted manufacturers.</p>
        </div>
      </div>

      <div className="brands-marquee" aria-label="Brand logos">
        <div className="brands-track" ref={trackRef}>
          <MarqueeSet />
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </section>
  );
}
