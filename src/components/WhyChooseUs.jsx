import SHOP_CONFIG from "../data/config";

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Why choose us</p>
          <h2 className="reveal reveal-delay-1">What makes us different.</h2>
        </div>
      </div>
      <div className="values-grid">
        {SHOP_CONFIG.values.map((v, i) => {
          const delay = (i % 4) + 1;
          return (
            <div
              key={i}
              className={`value-card reveal reveal-delay-${delay}`}
            >
              <svg className="value-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
