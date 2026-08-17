import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        media,
        { yPercent: -8, scale: 1 },
        {
          yPercent: 8,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section story-section" id="about" ref={sectionRef}>
      <div className="story-media" ref={mediaRef} aria-hidden="true">
        <img src="/shop2.png" alt="" loading="lazy" decoding="async" />
        <div className="story-media-overlay" aria-hidden="true"></div>
      </div>

      <div className="container story-container">
        <div className="story-inner">
          <div className="story-eyebrow">
            <span className="eyebrow reveal-section">Since 2017</span>
          </div>
          <h2 className="story-headline reveal-section">
            Building better <br />
            spaces with <em>quality products.</em>
          </h2>
          <div className="story-body reveal-section reveal-delay-1">
            <p>
              Your trusted destination for electricals, hardware and building
              supplies. Serving Dindigul with trusted brands and fair prices.
            </p>
            <a className="intro-link reveal-section reveal-delay-2" href="#visit">
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}