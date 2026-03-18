"use client";
import { useState } from "react";

export default function ProjectsCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const visible = projects.slice(index, index + 2);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", maxWidth: 700 }}>
      {/* Prev */}
      <button
        onClick={() => index > 0 && setIndex(index - 2)}
        style={{
          background: "none",
          border: "1px solid var(--soft)",
          width: 44, height: 44,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: index > 0 ? "pointer" : "not-allowed",
          fontSize: "1.2rem",
          opacity: index > 0 ? 1 : 0.3,
          flexShrink: 0,
          transition: "all 0.2s",
          fontFamily: "'DM Sans', sans-serif",
        }}
        onMouseOver={(e) => { if (index > 0) { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}}
        onMouseOut={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--ink)"; }}
      >
        ‹
      </button>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", flex: 1 }}>
        {visible.map((p, i) => (
          <div
            key={i}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--soft)",
              padding: "2rem",
              transition: "border-color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--soft)")}
          >
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.3rem",
              marginBottom: "0.5rem",
            }}>
              {p.title}
            </h3>
            <p style={{
              fontSize: "0.88rem",
              color: "var(--warm-mid)",
              lineHeight: 1.6,
              marginBottom: "1rem",
            }}>
              {p.desc}
            </p>
            <a
              href={p.link}
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View →
            </a>
          </div>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => index + 2 < projects.length && setIndex(index + 2)}
        style={{
          background: "none",
          border: "1px solid var(--soft)",
          width: 44, height: 44,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: index + 2 < projects.length ? "pointer" : "not-allowed",
          fontSize: "1.2rem",
          opacity: index + 2 < projects.length ? 1 : 0.3,
          flexShrink: 0,
          transition: "all 0.2s",
          fontFamily: "'DM Sans', sans-serif",
        }}
        onMouseOver={(e) => { if (index + 2 < projects.length) { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}}
        onMouseOut={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "var(--ink)"; }}
      >
        ›
      </button>
    </div>
  );
}
