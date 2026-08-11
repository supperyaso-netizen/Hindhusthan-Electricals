import SHOP_CONFIG from "../data/config";

export default function FinalCTA() {
  const { contact } = SHOP_CONFIG;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.mapsQuery}`;
  const callUrl = `tel:${contact.phone.replace(/\s+/g, "")}`;

  return (
    <section className="final-cta">
      <div className="container">
        <p
          className="eyebrow reveal-section"
          style={{ justifyContent: "center", marginBottom: "20px" }}
        >
          Visit us today
        </p>
        <h2 className="reveal-section reveal-delay-1">
          Come see us at
          <br />
          Tottanuthu.
        </h2>
        <div className="btn-row reveal-section reveal-delay-2">
          <a
            className="btn btn-primary"
            href={mapsUrl}
            target="_blank"
            rel="noopener"
          >
            Get Directions
          </a>
          <a className="btn btn-outline" href={callUrl}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
