"use client";
import { useState, useEffect } from "react";

export default function Navbar({ activePage, setActivePage }) {
  const [dark, setDark] = useState(false);
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 4rem",
        background: "var(--cream)",
        borderBottom: "1px solid var(--soft)",
        transition: "background 0.3s",
      }}
    >
      <button
        onClick={() => setActivePage("home")}
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1.4rem",
          color: "var(--ink)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        V.
      </button>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }}>
        {links.map((link) => (
          <li key={link}>
            <button
              onClick={() => setActivePage(link)}
              style={{
                background: "none",
                border: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: activePage === link ? "var(--accent)" : "var(--warm-mid)",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "color 0.2s",
              }}
            >
              {link}
            </button>
          </li>
        ))}

        {/* Dark mode toggle */}
        <li>
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
        </li>
      </ul>
    </nav>
  );
}