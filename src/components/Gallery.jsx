import { useState } from "react";

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

export default function Gallery() {
  const [active, setActive] = useState("lighting");

  const filtered = products.filter((p) => p.category === active);

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

        <div className="products-grid">
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
