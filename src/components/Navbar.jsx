"use client";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Navbar({ activePage, scrollToSection }) {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const links = ["about", "tech", "product", "content", "contact"];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Close menu when navigating
  const handleNav = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const DarkToggle = () => (
    <button
      onClick={() => setDark(!dark)}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--soft)",
        borderRadius: "999px",
        width: 44, height: 24,
        cursor: "pointer",
        position: "relative",
        transition: "background 0.3s",
        flexShrink: 0,
      }}
    >
      <span style={{
        position: "absolute", top: 3,
        left: dark ? 22 : 3,
        width: 16, height: 16,
        borderRadius: "50%",
        background: "var(--accent)",
        transition: "left 0.3s",
        display: "block",
      }} />
    </button>
  );

  if (isMobile) {
    return (
      <>
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 100, height: "3.5rem",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          background: "var(--cream)",
          borderBottom: "1px solid var(--soft)",
          transition: "background 0.3s",
        }}>
          <button
            onClick={() => handleNav("home")}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.4rem", color: "var(--ink)",
              background: "none", border: "none", cursor: "pointer", padding: 0,
            }}
          >V.</button>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <DarkToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--ink)", fontSize: "1.3rem", padding: "0.2rem",
                lineHeight: 1,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Dropdown menu */}
        {menuOpen && (
          <div style={{
            position: "fixed", top: "3.5rem", left: 0, right: 0,
            zIndex: 99,
            background: "var(--cream)",
            borderBottom: "1px solid var(--soft)",
          }}>
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                style={{
                  display: "block", width: "100%",
                  padding: "1rem 1.5rem",
                  background: activePage === link ? "var(--accent)" : "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--soft)",
                  textAlign: "left",
                  fontSize: "0.85rem", fontWeight: 500,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: activePage === link ? "var(--cream)" : "var(--warm-mid)",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {link}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", width: "100%",
                padding: "1rem 1.5rem",
                background: "transparent",
                borderBottom: "1px solid var(--soft)",
                textAlign: "left",
                fontSize: "0.85rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                boxSizing: "border-box",
              }}
            >
              Resume ↗
            </a>
          </div>
        )}
      </>
    );
  }

  // Desktop navbar
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0,
      zIndex: 100, height: "3.5rem",
      display: "flex", alignItems: "stretch",
      background: "var(--cream)",
      borderBottom: "1px solid var(--soft)",
      transition: "background 0.3s",
    }}>
      <div style={{
        display: "flex", alignItems: "center",
        padding: "0 2rem", flexShrink: 0,
        borderRight: "1px solid var(--soft)",
      }}>
        <button
          onClick={() => scrollToSection("home")}
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.4rem", color: "var(--ink)",
            background: "none", border: "none", cursor: "pointer", padding: 0,
          }}
        >V.</button>
      </div>

      <ul style={{
        flex: 1, display: "flex", listStyle: "none",
        margin: 0, padding: 0, alignItems: "stretch",
      }}>
        {links.map((link) => (
          <li key={link} style={{ flex: 1, display: "flex" }}>
            <button
              onClick={() => scrollToSection(link)}
              style={{
                flex: 1,
                background: activePage === link ? "var(--accent)" : "transparent",
                border: "none", borderRight: "1px solid var(--soft)",
                fontSize: "0.8rem", fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: activePage === link ? "var(--cream)" : "var(--warm-mid)",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "color 0.2s, background 0.2s",
              }}
            >{link}</button>
          </li>
        ))}
      </ul>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex", alignItems: "center",
          padding: "0 1.5rem",
          flexShrink: 0,
          borderLeft: "1px solid var(--soft)",
          borderRight: "1px solid var(--soft)",
          fontSize: "0.8rem", fontWeight: 600,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--accent)",
          textDecoration: "none",
          transition: "background 0.2s, color 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--cream)"; }}
        onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
      >
        Resume ↗
      </a>

      <div style={{ display: "flex", alignItems: "center", padding: "0 1.5rem", flexShrink: 0 }}>
        <DarkToggle />
      </div>
    </nav>
  );
}
