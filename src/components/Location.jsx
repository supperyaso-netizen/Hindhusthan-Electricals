import SHOP_CONFIG from "../data/config";

export default function Location() {
  const { brand, contact, hours } = SHOP_CONFIG;
  const addr = contact.address;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.mapsQuery}`;
  const callUrl = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="section section-alt" id="visit">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow reveal">Visit us</p>
          <h2 className="reveal reveal-delay-1">
            Find us on Natham Road.
          </h2>
        </div>
        <div className="location-wrap">
          <div className="location-details reveal">
            <p className="location-address">
              {brand.name}
              <small>
                {addr.line1} · {addr.line2}
                <br />
                {addr.area}, {addr.state} {addr.pincode}
              </small>
            </p>
            <ul className="hours-list" aria-label="Opening hours">
              {hours.map((h, i) => (
                <li key={i} className="hours-row">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <a
                className="btn btn-primary"
                href={mapsUrl}
                target="_blank"
                rel="noopener"
              >
                Get Directions
              </a>
              <a className="btn btn-outline" href={callUrl}>
                Call Shop
              </a>
              <a
                className="btn btn-outline"
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="location-map reveal reveal-delay-2">
            <iframe
              src={`https://www.google.com/maps?q=${contact.mapsQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hindhusthan Electricals location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
