"use client";

export default function Navbar({ activePage, setActivePage }) {
  const links = ["about", "tech", "product", "content", "contact"];

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

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
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
      </ul>
    </nav>
  );
}
