const galleryData = [
  { id: 1, category: "lighting", image: "/shop1.png", title: "Gate Lights" },
  { id: 2, category: "lighting", image: "/shop2.png", title: "Night Lamps" },
  { id: 3, category: "lighting", image: "/shop3.png", title: "LED Bulbs" },
  { id: 4, category: "fans", image: "/shop1.png", title: "Exhaust Fans" },
  { id: 5, category: "fans", image: "/shop2.png", title: "Ceiling Fans" },
  { id: 6, category: "switches", image: "/shop3.png", title: "Modular Switches" },
  { id: 7, category: "switches", image: "/shop1.png", title: "Sockets & Plugs" },
  { id: 8, category: "wiring", image: "/shop2.png", title: "Electrical Wires" },
  { id: 9, category: "wiring", image: "/shop3.png", title: "Extension Cords" },
  { id: 10, category: "hardware", image: "/shop1.png", title: "Power Tools" },
  { id: 11, category: "hardware", image: "/shop2.png", title: "Hand Tools" },
  { id: 12, category: "hardware", image: "/shop3.png", title: "Building Materials" },
];

const categories = ["all", "lighting", "fans", "switches", "wiring", "hardware"];

export default function Gallery() {
  return (
    <section className="section gallery-section section-alt" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">What We Stock</span>
          <h2 className="reveal reveal-delay-1">Our Products</h2>
          <p className="reveal reveal-delay-2">From daily essentials to specialized items — see what's available in store.</p>
        </div>

        <div className="gallery-filters reveal reveal-delay-3">
          {categories.map((cat) => (
            <button key={cat} className="gallery-filter">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/*
          Product images area — currently empty, ready for future images.
          When images are provided, uncomment the grid below and update image paths.
        */}
        {/*
        <div className="gallery-grid">
          {galleryData.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.image} alt={img.title} loading="lazy" />
            </div>
          ))}
        </div>
        */}
        <div className="gallery-empty-space" aria-hidden="true"></div>
      </div>
    </section>
  );
}
