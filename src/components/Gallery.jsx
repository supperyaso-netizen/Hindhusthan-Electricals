import { useState } from "react";

const galleryData = [
  { id: 1, category: "lighting", image: "/gatelights.png", title: "Gate Lights" },
  { id: 2, category: "lighting", image: "/nightlamps.png", title: "Night Lamps" },
  { id: 3, category: "lighting", image: "/ledbulbs.png", title: "LED Bulbs" },
  { id: 4, category: "fans", image: "/exhaustfans.png", title: "Exhaust Fans" },
  { id: 5, category: "fans", image: "/ceilingfans.png", title: "Ceiling Fans" },
  { id: 6, category: "switches", image: "/modularswitches.png", title: "Modular Switches" },
  { id: 7, category: "switches", image: "/sockets.png", title: "Sockets & Plugs" },
  { id: 8, category: "wiring", image: "/wires.png", title: "Electrical Wires" },
  { id: 9, category: "wiring", image: "/extensioncords.png", title: "Extension Cords" },
  { id: 10, category: "hardware", image: "/powertools.png", title: "Power Tools" },
  { id: 11, category: "hardware", image: "/handtools.png", title: "Hand Tools" },
  { id: 12, category: "hardware", image: "/buildingmaterials.png", title: "Building Materials" },
];

const categories = ["all", "lighting", "fans", "switches", "wiring", "hardware"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  return (
    <section className="section gallery-section section-alt" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Stock</span>
          <h2>Our Products</h2>
          <p>From daily essentials to specialized items — see what's available in store.</p>
        </div>

        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-item reveal reveal-delay-${(i % 4) + 1}`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.image}
                alt={img.title}
                loading="lazy"
                data-title={img.title}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add("gallery-placeholder");
                  e.target.parentElement.setAttribute("data-title", img.title);
                }}
              />
              <div className="gallery-overlay">
                <span className="gallery-title">{img.title}</span>
                <span className="gallery-category">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="gallery-modal-info">
              <h3>{selectedImage.title}</h3>
              <span className="eyebrow">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
