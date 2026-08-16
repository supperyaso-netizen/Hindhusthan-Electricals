import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Products in Store", value: "2000+" },
  { label: "Top Brands", value: "50+" },
  { label: "Years in Business", value: "8+" },
  { label: "Happy Customers", value: "3500+" },
];

const features = [
  {
    title: "Trusted Quality",
    desc: "Only genuine, brand-verified products.",
    icon: (
      <path d="M12 2l7 3v6c0 5-3.5 8.6-7 10-3.5-1.4-7-5-7-10V5l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    ),
  },
  {
    title: "Wide Range",
    desc: "2000+ products across every category.",
    icon: (
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    ),
  },
  {
    title: "Best Brands",
    desc: "Havells, Crompton, V-Guard & more.",
    icon: (
      <path d="M4 19h16M6 19V9m6 10V5m6 14v-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    ),
  },
  {
    title: "Expert Support",
    desc: "Friendly guidance on every purchase.",
    icon: (
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4m0 4h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    ),
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const scrimRef = useRef(null);

  useEffect(() => {
    const media = mediaRef.current;
    const content = contentRef.current;
    const features = featuresRef.current;
    const stats = statsRef.current;
    const scrim = scrimRef.current;
    const hero = heroRef.current;
    if (!media || !content || !features || !stats || !scrim || !hero) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(media, { scale: 1.06, yPercent: 4, duration: 1 }, 0)
        .to(scrim, { opacity: 0.55, duration: 1 }, 0)
        .to(content, { yPercent: -8, opacity: 0, duration: 1 }, 0)
        .to(features, { yPercent: -10, opacity: 0, duration: 1 }, 0)
        .to(stats, { yPercent: -14, opacity: 0, duration: 1 }, 0);
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-media" ref={mediaRef} aria-hidden="true">
        <img
          src="/hero.png"
          alt="Hindhusthan Electricals showroom"
          className="hero-bg"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
      </div>

      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-scrim" ref={scrimRef} aria-hidden="true"></div>

      <div className="hero-container">
        <div className="hero-content" ref={contentRef}>
          <span className="eyebrow hero-enter-up d1">Since 2017</span>
          <h1 className="hero-title hero-enter-up d2">
            Building better
            <br />
            <em>spaces</em> with
            <br />
            quality products
          </h1>
          <p className="hero-sub hero-enter-up d3">
            Your trusted destination for electricals, hardware and building
            supplies. Serving Dindigul with trusted brands and fair prices.
          </p>

          <div className="hero-features hero-enter-up d4" role="list" ref={featuresRef}>
            {features.map((f, i) => (
              <div className="hero-feature" role="listitem" key={i}>
                <span className="hero-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">{f.icon}</svg>
                </span>
                <span className="hero-feature-title">{f.title}</span>
                <span className="hero-feature-desc">{f.desc}</span>
              </div>
            ))}
          </div>

          <div className="hero-cta-row hero-enter-up d5">
            <a className="hero-cta hero-cta-primary" href="#products">
              Explore Products
              <span className="hero-cta-arrow" aria-hidden="true">→</span>
            </a>
            <a className="hero-cta hero-cta-secondary" href="#gallery">
              View Catalogue
              <span className="hero-cta-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-stats hero-enter-up d7" ref={statsRef}>
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll down to continue">
        <div className="scroll-pill" aria-hidden="true">
          <span className="scroll-dot"></span>
        </div>
        <span className="scroll-label">Scroll Down</span>
        <div className="scroll-line" aria-hidden="true"></div>
        <span className="scroll-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  );
}