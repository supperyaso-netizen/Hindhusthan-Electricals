import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionTones = [
  { id: "top", bg: "#0A0C0E", tone: "dark" },
  { id: "about", bg: "#0E1216", tone: "dark" },
  { id: "products", bg: "#111519", tone: "dark" },
  { id: "gallery", bg: "#0D1014", tone: "dark" },
  { id: "brands", bg: "#0F1317", tone: "dark" },
  { id: "reviews", bg: "#12161B", tone: "dark" },
  { id: "why-us", bg: "#0B0E11", tone: "dark" },
  { id: "visit", bg: "#0A0C0E", tone: "dark" },
];

export default function useSectionTransitions() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const triggers = sectionTones.map((section, i) => {
      const el = document.getElementById(section.id);
      if (!el) return null;

      return ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(document.documentElement, {
            "--bg-tone": section.bg,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(document.documentElement, {
            "--bg-tone": sectionTones[i - 1]?.bg || section.bg,
            duration: 0.8,
            ease: "power2.inOut",
          });
        },
      });
    });

    return () => triggers.forEach((t) => t?.kill());
  }, []);
}
