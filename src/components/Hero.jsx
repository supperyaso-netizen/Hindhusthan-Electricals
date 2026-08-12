const stats = [
  { label: "Years in Business", value: "8+", delay: 1 },
  { label: "Products in Store", value: "2000+", delay: 2 },
  { label: "Happy Customers", value: "3500+", delay: 3 },
  { label: "Brands Available", value: "50+", delay: 4 },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-content">
          <span className="eyebrow hero-enter-up d1">Since 2017</span>
          <h1 className="hero-title hero-enter-up d2">
            Building better <em>spaces</em> with quality products
          </h1>
          <p className="hero-sub hero-enter-up d3">
            Your one-stop destination for electricals, hardware &amp; building
            supplies. Serving Dindigul with trusted brands and fair prices.
          </p>
          <div className="hero-cta-row hero-enter-up d4">
            <a className="hero-cta hero-cta-primary" href="#products">
              Explore Products
            </a>
            <a className="hero-cta hero-cta-secondary" href="#shop">
              View Catalogue
            </a>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.png"
            alt="Hindhusthan Electricals storefront"
            className="hero-bg"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            width="1920"
            height="1080"
          />
        </div>
      </div>
      <div className="hero-stats-bar container">
        {stats.map((s) => (
          <div key={s.label} className={`hero-stat hero-enter-up d${s.delay}`}>
            <span className="hero-stat-value">{s.value}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        SCROLL
      </div>
    </section>
  );
}
