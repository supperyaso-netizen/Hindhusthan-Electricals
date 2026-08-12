import { useState } from "react";
import Masonry from "./Masonry";

const galleryData = [
  { id: "1", category: "lighting", img: "/shop1.png", url: "#", height: 400, title: "Gate Lights" },
  { id: "2", category: "lighting", img: "/shop2.png", url: "#", height: 300, title: "Night Lamps" },
  { id: "3", category: "lighting", img: "/shop3.png", url: "#", height: 500, title: "LED Bulbs" },
  { id: "4", category: "fans", img: "/shop1.png", url: "#", height: 350, title: "Exhaust Fans" },
  { id: "5", category: "fans", img: "/shop2.png", url: "#", height: 450, title: "Ceiling Fans" },
  { id: "6", category: "switches", img: "/shop3.png", url: "#", height: 280, title: "Modular Switches" },
  { id: "7", category: "switches", img: "/shop1.png", url: "#", height: 380, title: "Sockets & Plugs" },
  { id: "8", category: "wiring", img: "/shop2.png", url: "#", height: 320, title: "Electrical Wires" },
  { id: "9", category: "wiring", img: "/shop3.png", url: "#", height: 420, title: "Extension Cords" },
  { id: "10", category: "hardware", img: "/shop1.png", url: "#", height: 360, title: "Power Tools" },
  { id: "11", category: "hardware", img: "/shop2.png", url: "#", height: 300, title: "Hand Tools" },
  { id: "12", category: "hardware", img: "/shop3.png", url: "#", height: 440, title: "Building Materials" },
];

const categories = ["all", "lighting", "fans", "switches", "wiring", "hardware"];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? galleryData
    : galleryData.filter((item) => item.category === active);

  return (
    <section className="section gallery-section" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">What We Stock</span>
          <h2 className="reveal reveal-delay-1">Our Shop</h2>
          <p className="reveal reveal-delay-2">From daily essentials to specialized items — see what's available in store.</p>
        </div>

        <div className="gallery-filters reveal reveal-delay-3">
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
      </div>
      <div className="masonry-wrapper reveal-section">
        <Masonry
          key={active}
          items={filtered}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
