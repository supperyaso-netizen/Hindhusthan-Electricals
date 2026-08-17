import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 769 || "ontouchstart" in window;
    if (reduced || isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    const moveDot = (e) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
    };

    const scaleUp = () => {
      gsap.to(dot, { scale: 2.5, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { scale: 1.6, opacity: 0.5, duration: 0.3, ease: "power2.out" });
    };

    const scaleDown = () => {
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveDot);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, .hero-cta, .brand-card, .product-card, .gallery-filter, .nav-toggle").forEach((el) => {
        el.addEventListener("mouseenter", scaleUp);
        el.addEventListener("mouseleave", scaleDown);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveDot);
      observer.disconnect();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
    </>
  );
}
