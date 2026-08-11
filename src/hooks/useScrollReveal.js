import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const selectors = ".reveal, .reveal-section, .reveal-image";

    if (reduceMotion) {
      document.querySelectorAll(selectors).forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(selectors).forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
