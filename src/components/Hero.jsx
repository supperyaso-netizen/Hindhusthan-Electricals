const stats = [
  { label: "Years in Business", value: "8+" },
  { label: "Products in Store", value: "2000+" },
  { label: "Happy Customers", value: "3500+" },
  { label: "Brands Available", value: "50+" },
];

const features = [
  {
    title: "Trusted Quality",
    desc: "Only genuine, brand-verified products.",
    icon: (
      <path d="M12 2l7 3v6c0 5-3.5 8.6-7 10-3.5-1.4-7-5-7-10V5l7-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    ),
  },
  {
    title: "Wide Range",
    desc: "2000+ products across every category.",
    icon: (
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    ),
  },
  {
    title: "Best Brands",
    desc: "Havells, Crompton, V-Guard & more.",
    icon: (
      <path d="M4 19h16M6 19V9m6 10V5m6 14v-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    ),
  },
  {
    title: "Expert Support",
    desc: "Friendly guidance on every purchase.",
    icon: (
      <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 8v4m0 4h.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/hero.png"
          alt="Hindhusthan Electricals showroom"
          className="hero-bg"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
      </div>

      <div className="container hero-content">
        <span className="eyebrow hero-enter-up d1">Since 2017 · Electricals · Hardware</span>
        <h1 className="hero-title hero-enter-up d2">
          Building better <em>spaces</em> with quality products
        </h1>
        <p className="hero-sub hero-enter-up d3">
          Your one-stop destination for electricals, hardware and building
          supplies. Serving Dindigul with trusted brands and fair prices.
        </p>
        <div className="hero-cta-row hero-enter-up d4">
          <a className="hero-cta hero-cta-primary" href="#products">
            Explore Products
            <span className="hero-cta-arrow" aria-hidden="true">→</span>
          </a>
          <a className="hero-cta hero-cta-secondary" href="#gallery">
            View Catalogue
          </a>
        </div>
      </div>

      <div className="container hero-features hero-enter-up d3" role="list">
        {features.map((f, i) => (
          <div className="hero-feature" role="listitem" key={i}>
            <span className="hero-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22">{f.icon}</svg>
            </span>
            <div>
              <span className="hero-feature-title">{f.title}</span>
              <span className="hero-feature-desc">{f.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="container hero-stats-bar">
        {stats.map((s, i) => (
          <div key={s.label} className={`hero-stat hero-enter-up d${i + 1}`}>
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