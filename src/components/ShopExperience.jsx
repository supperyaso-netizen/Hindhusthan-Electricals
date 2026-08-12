import Masonry from "./Masonry";
import SHOP_CONFIG from "../data/config";

const shopImages = [
  { id: "1", img: "/shop1.png", url: "#", height: 400 },
  { id: "2", img: "/shop2.png", url: "#", height: 300 },
  { id: "3", img: "/shop3.png", url: "#", height: 500 },
  { id: "4", img: "/shop1.png", url: "#", height: 350 },
  { id: "5", img: "/shop2.png", url: "#", height: 450 },
  { id: "6", img: "/shop3.png", url: "#", height: 280 },
];

export default function ShopExperience() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${SHOP_CONFIG.contact.mapsQuery}`;

  return (
    <section className="section section-alt showroom-section" id="gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Visit our showroom</p>
          <h2 className="reveal reveal-delay-1">
            A look inside our store.
          </h2>
          <p className="reveal reveal-delay-2">
            Experience the products. See the brands. Get expert guidance —
            walk in and take a look around.
          </p>
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

      <div className="container showroom-cta">
        <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noopener">
          Get Directions
          <span aria-hidden="true">→</span>
        </a>
        <p className="shop-caption">
          Take a quick look at the store before you visit.
        </p>
      </div>
    </section>
  );
}