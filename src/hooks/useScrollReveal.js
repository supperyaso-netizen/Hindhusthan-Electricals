import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const els = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && !reduceMotion) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    } else {
      els.forEach((el) => el.classList.add("is-visible"));
    }
  });
}
