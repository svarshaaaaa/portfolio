"use client";

export default function CoursesList({ courses }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 600 }}>
      {courses.map((c, i) => (
        <a
          key={i}
          href={c.link}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.2rem 1.5rem",
            background: "var(--card-bg)",
            border: "1px solid var(--soft)",
            textDecoration: "none",
            color: "var(--ink)",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "var(--ink)";
            e.currentTarget.style.color = "var(--cream)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "var(--card-bg)";
            e.currentTarget.style.color = "var(--ink)";
          }}
        >
          <div>
            <div style={{ fontSize: "0.95rem", fontWeight: 500 }}>{c.name}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--warm-mid)", marginTop: 2 }}>{c.meta}</div>
          </div>
          <span style={{ fontSize: "1.1rem" }}>→</span>
        </a>
      ))}
    </div>
  );
}
