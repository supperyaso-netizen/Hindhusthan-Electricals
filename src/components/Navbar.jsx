import { useState, useEffect } from "react";
import SHOP_CONFIG from "../data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const callUrl = `tel:${SHOP_CONFIG.contact.phone.replace(/\s+/g, "")}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo nav-enter">
            <img src="/logo.png" alt="Hindhusthan Electricals" className="logo-img" />
          </a>
          <nav className="nav-links nav-enter" aria-label="Primary">
            <a href="#top">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#brands">Brands</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Contact</a>
          </nav>
          <a className="nav-cta nav-enter" href={callUrl} aria-label="Call Us">
            <svg viewBox="0 0 24 24" fill="none" width="15" height="15" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Us
          </a>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" className={menuOpen ? "is-open" : ""}>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <a href="#top" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About Us</a>
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#brands" onClick={closeMenu}>Brands</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#visit" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href={callUrl} onClick={closeMenu}>
          Call Us
        </a>
      </div>
    </>
  );
}