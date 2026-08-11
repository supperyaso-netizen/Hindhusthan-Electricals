import SHOP_CONFIG from "../data/config";

export default function Footer() {
  const { brand, contact, hours } = SHOP_CONFIG;
  const addr = contact.address;
  const fullAddress = `${addr.line1}, ${addr.line2}, ${addr.area}, ${addr.state} ${addr.pincode}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${contact.mapsQuery}`;
  const callUrl = `tel:${contact.phone.replace(/\s+/g, "")}`;
  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <img src="/logo.png" alt="Hindhusthan Electricals" className="footer-logo" />
          <p className="footer-brand">{brand.name}</p>
          <p>{fullAddress}</p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={callUrl}>
            Call: <span>{contact.phone}</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener">
            WhatsApp
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener">
            Facebook
          </a>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          {hours.map((h, i) => (
            <p key={i}>
              {h.day}: {h.time}
            </p>
          ))}
        </div>
        <div className="footer-col">
          <h4>Find Us</h4>
          <a href={mapsUrl} target="_blank" rel="noopener">
            Open in Google Maps →
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
