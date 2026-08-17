import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SHOP_CONFIG from "../data/config";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const ctaRef = useRef(null);
  const brandRef = useRef(null);

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

  useEffect(() => {
    if (!menuOpen) return;
    const items = itemsRef.current.filter(Boolean);
    const cta = ctaRef.current;
    const brand = brandRef.current;

    gsap.set(items, { opacity: 0, y: 14 });
    if (cta) gsap.set(cta, { opacity: 0, y: 14 });
    if (brand) gsap.set(brand, { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.1 });
    tl.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.05,
    });
    if (cta) {
      tl.to(cta, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "-=0.15");
    }
    if (brand) {
      tl.to(brand, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.2");
    }

    return () => tl.kill();
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo nav-enter" aria-label="Hindhusthan Electricals - Home">
            <img src="/logo.png" alt="Hindhusthan Electricals" className="logo-img" />
          </a>
          <nav className="nav-links nav-enter" aria-label="Primary">
            <a href="#top">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#why-us">Why Us</a>
            <a href="#visit">Contact</a>
          </nav>
          <a className="nav-cta nav-enter" href={callUrl} aria-label="Call Us">
            <svg viewBox="0 0 24 24" fill="none" width="15" height="15" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Us
          </a>
          <button
            className={`nav-toggle${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="hamburger-line top"></span>
            <span className="hamburger-line mid"></span>
            <span className="hamburger-line bot"></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
        ref={menuRef}
      >
        <div className="mobile-menu-bg" aria-hidden="true"></div>
        <div className="mobile-menu-glow" aria-hidden="true"></div>

        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={closeMenu}
              ref={(el) => { itemsRef.current[i] = el; }}
            >
              <span className="mobile-menu-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="mobile-menu-label">{item.label}</span>
              <span className="mobile-menu-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </nav>

        <a
          className="mobile-menu-cta"
          href={callUrl}
          onClick={closeMenu}
          ref={ctaRef}
        >
          <svg viewBox="0 0 24 24" fill="none" width="18" height="18" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="mobile-menu-cta-text">Call Us</span>
          <span className="mobile-menu-cta-sub">Speak with our team</span>
        </a>

        <div className="mobile-menu-brand" ref={brandRef}>
          <span>HINDUSTHAN ELECTRICALS & HARDWARE</span>
          <span>DINDIGUL • SINCE 2017</span>
        </div>
      </div>
    </>
  );
}
