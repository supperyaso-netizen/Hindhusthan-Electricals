import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const BRAND = "HINDHUSTHAN";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const markRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hide = () => setHidden(true);

    const preload = new Image();
    preload.src = "/hero.png";
    preload.onload = reduced ? hide : undefined;
    preload.onerror = hide;

    if (!reduced) {
      const timer = setTimeout(hide, 1000);
      return () => clearTimeout(timer);
    }

    return () => {};
  }, []);

  useEffect(() => {
    if (hidden) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const letters = markRef.current?.querySelectorAll(".loader-letter");
    if (!letters?.length) return;

    gsap.fromTo(
      letters,
      { opacity: 0, yPercent: 60, rotateX: -40 },
      {
        opacity: 1,
        yPercent: 0,
        rotateX: 0,
        duration: 0.35,
        ease: "power3.out",
        stagger: 0.03,
      }
    );

    if (barRef.current) {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power2.inOut" }
      );
    }
  }, [hidden]);

  useEffect(() => {
    if (!hidden) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.body.classList.add("page-loaded");
    }
  }, [hidden]);

  return (
    <div id="loader" className={hidden ? "hidden" : ""} aria-hidden="true">
      <div className="loader-mark" ref={markRef}>
        <span className="loader-letters">
          {BRAND.split("").map((letter, i) => (
            <span className="loader-letter" key={i}>{letter}</span>
          ))}
        </span>
        <small>Electricals &amp; Hardwares</small>
        <div className="loader-bar" ref={barRef}></div>
      </div>
    </div>
  );
}
