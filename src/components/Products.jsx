import SHOP_CONFIG from "../data/config";

const productImages = [
  "/gatelights.png",
  "/exhaustfans.png",
  "/nightlamps.png",
];

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Featured Products</p>
          <h2 className="reveal reveal-delay-1">
            What customers buy often.
          </h2>
        </div>
      </div>
      <div className="product-list">
        {SHOP_CONFIG.featuredProducts.map((p, i) => (
          <div key={i} className="product-row reveal">
            <div className="product-figure">
              <img
                src={productImages[i]}
                alt={p.name}
                loading="lazy"
                width="800"
                height="500"
              />
            </div>
            <div className="product-info">
              <span className="eyebrow">{p.category}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a className="product-link" href="#products">
                View Collection
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
