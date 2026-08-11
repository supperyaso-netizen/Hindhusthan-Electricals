import SHOP_CONFIG from "../data/config";

const valueIcons = [
  // Since 2017 - Calendar
  <svg key="0" className="value-icon" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
  // Wide Range - Grid
  <svg key="1" className="value-icon" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.4"/>
  </svg>,
  // Fair Prices - Scale
  <svg key="2" className="value-icon" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v18M5 7l7-4 7 4M3 7h18M7 7l1.5 10h7L17 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Easy to Find - Location
  <svg key="3" className="value-icon" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.4"/>
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
  </svg>,
];

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
              {valueIcons[i]}
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
