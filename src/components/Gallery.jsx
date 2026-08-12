import Masonry from "./Masonry";

const shopImages = [
  { id: "1", img: "/shop1.png", url: "#", height: 400 },
  { id: "2", img: "/shop2.png", url: "#", height: 300 },
  { id: "3", img: "/shop3.png", url: "#", height: 500 },
  { id: "4", img: "/shop1.png", url: "#", height: 350 },
  { id: "5", img: "/shop2.png", url: "#", height: 450 },
  { id: "6", img: "/shop3.png", url: "#", height: 280 },
];

export default function Gallery() {
  return (
    <section className="section gallery-section section-alt" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">What We Stock</span>
          <h2 className="reveal reveal-delay-1">Our Shop</h2>
          <p className="reveal reveal-delay-2">From daily essentials to specialized items — see what's available in store.</p>
        </div>
      </div>
      <div className="masonry-wrapper reveal-section">
        <Masonry
          items={shopImages}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </section>
  );
}
