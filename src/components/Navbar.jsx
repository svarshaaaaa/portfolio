"use client";
import { useState, useEffect } from "react";

export default function Navbar({ activePage, scrollToSection }) {
  const [dark, setDark] = useState(true);
  const links = ["about", "tech", "product", "content", "contact"];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "3.5rem",
        display: "flex",
        alignItems: "stretch",
        background: "var(--cream)",
        borderBottom: "1px solid var(--soft)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        flexShrink: 0,
        borderRight: "1px solid var(--soft)",
      }}>
        <button
          onClick={() => scrollToSection("home")}
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1.4rem",
            color: "var(--ink)",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          V.
        </button>
      </div>

      {/* Nav links — each takes equal width, highlight fills full block */}
      <ul style={{
        flex: 1,
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        alignItems: "stretch",
      }}>
        {links.map((link) => (
          <li key={link} style={{ flex: 1, display: "flex" }}>
            <button
              onClick={() => scrollToSection(link)}
              style={{
                flex: 1,
                background: activePage === link ? "var(--accent)" : "transparent",
                border: "none",
                borderRight: "1px solid var(--soft)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: activePage === link ? "var(--cream)" : "var(--warm-mid)",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "color 0.2s, background 0.2s",
              }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>

      {/* Dark mode toggle */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        flexShrink: 0,
      }}>
        <button
          onClick={() => setDark(!dark)}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--soft)",
            borderRadius: "999px",
            width: 44,
            height: 24,
            cursor: "pointer",
            position: "relative",
            transition: "background 0.3s",
            flexShrink: 0,
          }}
        >
          <span style={{
            position: "absolute",
            top: 3,
            left: dark ? 22 : 3,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "var(--accent)",
            transition: "left 0.3s",
            display: "block",
          }} />
        </button>
      </div>
    </nav>
  );
}
