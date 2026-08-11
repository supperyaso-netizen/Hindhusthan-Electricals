export default function Hero() {
  return (
    <section className="hero">
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
      <div className="container hero-content">
        <p className="eyebrow hero-enter-up d1">ELECTRICAL · HARDWARE · TOTTANUTHU</p>
        <h1 className="hero-title hero-enter-up d2">
          Your one-stop <em>electrical</em> shop.
        </h1>
        <p className="hero-sub hero-enter-up d3">
          Quality electrical items and hardware supplies at the right price.
          Serving Dindigul since 2017.
        </p>
        <div className="hero-cta-row hero-enter-up d4">
          <a className="hero-cta hero-cta-primary" href="#visit">Visit Store</a>
          <a className="hero-cta hero-cta-secondary" href="#products">View Products</a>
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        SCROLL
      </div>
    </section>
  );
}
