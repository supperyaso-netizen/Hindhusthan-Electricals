const categories = ["all", "lighting", "fans", "switches", "wiring", "hardware"];

export default function Gallery() {
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
            <button key={cat} className="gallery-filter">
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-empty-space" aria-hidden="true"></div>
      </div>
    </section>
  );
}
