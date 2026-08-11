export default function ShopExperience() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">The shop</p>
          <h2 className="reveal reveal-delay-1">
            A look inside our store.
          </h2>
        </div>
        <div className="shop-grid">
          <div className="shop-main reveal-section">
            <img
              src="/shop1.png"
              alt="Hindhusthan Electricals storefront"
              loading="lazy"
              decoding="async"
              width="900"
              height="650"
            />
          </div>
          <div className="shop-sub-row">
            <div className="reveal-image reveal-delay-1">
              <img
                src="/shop2.png"
                alt="Store interior with shelves"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              />
            </div>
            <div className="reveal-image reveal-delay-2">
              <img
                src="/shop3.png"
                alt="Counter and signage"
                loading="lazy"
                decoding="async"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
        <p className="shop-caption reveal reveal-delay-3">
          Take a quick look at the store before you visit.
        </p>
      </div>
    </section>
  );
}
