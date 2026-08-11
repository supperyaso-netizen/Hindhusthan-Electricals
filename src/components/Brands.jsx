const brands = [
  { id: 1, name: "Havells", image: "/havellslogo.png" },
  { id: 2, name: "Crompton", image: "/cromptonlogo.png" },
  { id: 3, name: "V-Guard", image: "/vguardlogo.png" },
  { id: 4, name: "Greatwhite", image: "/greatwhitelogo.png" },
];

export default function Brands() {
  return (
    <section className="section brands-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Authorized Dealer</span>
          <h2 className="reveal reveal-delay-1">Brands we stock</h2>
          <p className="reveal reveal-delay-2">Only genuine products from trusted manufacturers.</p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, i) => (
            <div key={brand.id} className={`brand-card reveal reveal-delay-${i + 1}`}>
              <img src={brand.image} alt={brand.name} className="brand-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
