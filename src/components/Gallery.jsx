import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, category: "lighting", name: "LED Panel Light 18W", price: "₹320" },
  { id: 2, category: "lighting", name: "Decorative Ceiling Light", price: "₹1,450" },
  { id: 3, category: "lighting", name: "Tube Light 4ft", price: "₹180" },
  { id: 4, category: "fans", name: "Ceiling Fan 1200mm", price: "₹1,850" },
  { id: 5, category: "fans", name: "Exhaust Fan 150mm", price: "₹920" },
  { id: 6, category: "fans", name: "Table Fan 400mm", price: "₹1,350" },
  { id: 7, category: "switches", name: "Modular Switch 8M", price: "₹85" },
  { id: 8, category: "switches", name: "Socket 6A 3Pin", price: "₹65" },
  { id: 9, category: "switches", name: "MCB 32A Single Pole", price: "₹210" },
  { id: 10, category: "wiring", name: "FR Cable 1.5 sqmm 90m", price: "₹2,400" },
  { id: 11, category: "wiring", name: "Flexible Wire 2.5 sqmm", price: "₹175/m" },
  { id: 12, category: "wiring", name: "Extension Board 4 Socket", price: "₹380" },
  { id: 13, category: "hardware", name: "Drill Machine 650W", price: "₹1,650" },
  { id: 14, category: "hardware", name: "Screw Driver Set 12pc", price: "₹290" },
  { id: 15, category: "hardware", name: "Pipe Wrench 12inch", price: "₹420" },
];

const categories = ["lighting", "fans", "switches", "wiring", "hardware"];

const showCategories = [
  { id: "electrical", name: "Electrical", desc: "Everyday electrical essentials for home and workspace." },
  { id: "lighting", name: "Lighting", desc: "Gate lights, night lamps and fittings for every room." },
  { id: "wiring", name: "Wiring & Cables", desc: "Reliable cabling for safe, lasting installations." },
  { id: "hardware", name: "Hardware", desc: "Fasteners, fittings and tools built for daily work." },
];

export default function Gallery() {
  const [active, setActive] = useState("lighting");
  const sectionRef = useRef(null);
  const filtersRef = useRef(null);

  const filtered = products.filter((p) => p.category === active);

  useEffect(() => {
    const filters = filtersRef.current;
    if (!filters) return;
    const activeBtn = filters.querySelector(".gallery-filter.active");
    const indicator = filters.querySelector(".filter-indicator");
    if (!activeBtn || !indicator) return;

    const rect = activeBtn.getBoundingClientRect();
    const containerRect = filters.getBoundingClientRect();
    gsap.to(indicator, {
      x: rect.left - containerRect.left,
      width: rect.width,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [active]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".showcase-row");

      gsap.fromTo(
        rows,
        { autoAlpha: 0, yPercent: 12 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: ".products-showcase",
            start: "top 72%",
          },
        }
      );

      const medias = gsap.utils.toArray(".showcase-media img");
      medias.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1 },
          {
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || window.innerWidth < 769) return;

    const cards = section.querySelectorAll(".product-card");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06,
          overwrite: "auto",
        }
      );
    }, section);

    return () => ctx.revert();
  }, [active]);

  return (
    <section className="section gallery-section" id="products" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Our Collection</span>
          <h2 className="reveal reveal-delay-1">
            Products for <em className="accent-word">every space</em>
          </h2>
          <p className="reveal reveal-delay-2">
            From daily essentials to specialized items — explore what's
            available on our shelves.
          </p>
        </div>

        <div className="products-showcase">
          {showCategories.map((cat, i) => (
            <article className="showcase-row" key={cat.id}>
              <div className="showcase-media">
                <img
                  src={i % 2 === 0 ? "/shop1.png" : "/shop3.png"}
                  alt={cat.name}
                  loading="lazy"
                  decoding="async"
                />
                <div className="showcase-media-overlay" />
                <span className="showcase-index">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="showcase-body">
                <span className="eyebrow">Category</span>
                <h3>{cat.name}</h3>
                <p>{cat.desc}</p>
                <a className="category-feature-link" href="#visit">
                  Explore in store
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="category-feature reveal-section">
          <div className="category-feature-media">
            <img
              src="/shop1.png"
              alt="Hindhusthan Electricals product range"
              loading="lazy"
              decoding="async"
            />
            <div className="category-feature-overlay" />
            <span className="category-feature-badge">Electrical · Hardware · Plumbing</span>
          </div>
          <div className="category-feature-body">
            <span className="eyebrow">Category Spotlight</span>
            <h3>Every product a reliable build needs.</h3>
            <p>
              From modular switches and wiring to fans, lighting and power
              tools — we stock the essentials contractors and homeowners
              reach for again and again.
            </p>
            <a className="category-feature-link" href="#visit">
              Explore in store
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="gallery-filters reveal reveal-delay-3" ref={filtersRef}>
          <div className="filter-indicator" aria-hidden="true"></div>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product) => (
            <article key={product.id} className="product-card">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}