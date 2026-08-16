import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 2000, suffix: "+", label: "Products in Store" },
  { target: 50, suffix: "+", label: "Top Brands" },
  { target: 8, suffix: "+", label: "Years in Business" },
  { target: 3500, suffix: "+", label: "Happy Customers" },
];

function useCountUp(target, inView, duration = 1600) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatValue({ stat, inView, className }) {
  const count = useCountUp(stat.target, inView);

  return (
    <span className={className || "stat-value"}>
      {stat.target >= 1000 ? count.toLocaleString() : count}
      {stat.suffix}
    </span>
  );
}

export default function StatsReel() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const [primary, ...supporting] = stats;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const composition = section.querySelector(".stats-composition");
    const ghost = section.querySelector(".stats-ghost");
    const light = section.querySelector(".stats-light");

    const ctx = gsap.context(() => {
      if (composition) {
        gsap.fromTo(
          composition,
          { yPercent: 0 },
          {
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }
      if (ghost) {
        gsap.fromTo(
          ghost,
          { yPercent: 0 },
          {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }
      if (light) {
        gsap.fromTo(
          light,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={inView ? "stats-section is-visible" : "stats-section"}
      ref={sectionRef}
      aria-label="Business statistics"
    >
      <div className="stats-ghost" aria-hidden="true">
        SCALE
      </div>
      <div className="stats-light" aria-hidden="true"></div>

      <div className="container">
        <div className="stats-composition">
          <div className="stat-primary">
            <StatValue stat={primary} inView={inView} className="stat-value stat-value-lg" />
            <span className="stat-label">{primary.label}</span>
          </div>

          <div className="stats-divider" aria-hidden="true"></div>

          <div className="stats-supporting">
            {supporting.map((s) => (
              <div className="stat-item" key={s.label}>
                <StatValue stat={s} inView={inView} />
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}