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

export default function Brands() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".brand-card");

      gsap.fromTo(
        cards,
        { autoAlpha: 0, yPercent: 12 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".brands-grid",
            start: "top 80%",
          },
        }
      );
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

        <div className="brands-grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand.id}>
              <img
                src={brand.image}
                alt={brand.name}
                className="brand-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
