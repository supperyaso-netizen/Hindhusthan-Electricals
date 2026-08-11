import { useState, useEffect } from "react";
import SHOP_CONFIG from "../data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${SHOP_CONFIG.contact.mapsQuery}`;

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
          <a href="#top" className="nav-logo">
            <img src="/logo.png" alt="Hindhusthan Electricals" className="logo-img" />
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit Us</a>
          </nav>
          <a
            className="nav-cta"
            href={mapsUrl}
            target="_blank"
            rel="noopener"
          >
            Get Directions
          </a>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#top" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#products" onClick={closeMenu}>
          Products
        </a>
        <a href="#reviews" onClick={closeMenu}>
          Reviews
        </a>
        <a href="#visit" onClick={closeMenu}>
          Visit Us
        </a>
        <a
          className="nav-cta"
          href={mapsUrl}
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
        >
          Get Directions
        </a>
      </div>
    </>
  );
}
