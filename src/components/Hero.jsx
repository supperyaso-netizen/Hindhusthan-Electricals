export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/hero.png"
          alt="Hindhusthan Electricals storefront"
          className="hero-bg hero-enter-scale"
          loading="eager"
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
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="scroll-line"></div>
        SCROLL
      </div>
    </section>
  );
}
