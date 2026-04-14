"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "ERP", href: "#erp" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled || menuOpen ? "#fff" : "transparent",
      borderBottom: scrolled || menuOpen ? "1px solid rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.5px" }}>HTN</span>

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} style={{ fontSize: 13, fontWeight: 500, color: "#555" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#000")}
                onMouseLeave={e => (e.currentTarget.style.color = "#555")}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", fontSize: 22, lineHeight: 1,
          }}
          className="nav-hamburger"
          aria-label="Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #e5e5e5", padding: "16px 24px" }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ fontSize: 15, fontWeight: 600, color: "#000" }}
                >{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
