"use client";
import { useState } from "react";
import { productProjects } from "@/data/content";

export default function Product() {
  const [view, setView] = useState("grid"); // "grid" or "detail"
  const [selected, setSelected] = useState(null);

  const handleCardClick = (project) => {
    setSelected(project);
    setView("detail");
  };

  // DETAIL VIEW (list on left, detail panel on right)
  if (view === "detail") {
    return (
      <section
        className="fade-up"
        style={{
          minHeight: "100vh",
          padding: "6rem 4rem 5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ paddingTop: "2rem", marginBottom: "2.5rem" }}>
          <button
            onClick={() => { setView("grid"); setSelected(null); }}
            style={{
              background: "none", border: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem", letterSpacing: "0.1em",
              textTransform: "uppercase", fontWeight: 600,
              color: "var(--warm-mid)", cursor: "pointer",
              padding: 0, marginBottom: "2rem",
            }}
          >
            ← All Projects
          </button>
        </div>

        <div style={{ display: "flex", gap: "2rem", width: "100%", alignItems: "flex-start" }}>
          {/* Left: project list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: "0 0 320px" }}>
            {productProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                style={{
                  background: selected?.id === project.id ? "var(--ink)" : "var(--card-bg)",
                  color: selected?.id === project.id ? "var(--cream)" : "var(--ink)",
                  border: "1px solid var(--soft)",
                  borderLeft: selected?.id === project.id ? "3px solid var(--accent)" : "3px solid transparent",
                  padding: "1.5rem 2rem",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
                onMouseOver={(e) => {
                  if (selected?.id !== project.id) e.currentTarget.style.background = "var(--soft)";
                }}
                onMouseOut={(e) => {
                  if (selected?.id !== project.id) e.currentTarget.style.background = "var(--card-bg)";
                }}
              >
                <div style={{
                  fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
                  color: selected?.id === project.id ? "var(--soft)" : "var(--warm-mid)",
                  fontWeight: 600, marginBottom: "0.4rem",
                }}>
                  {project.tag}
                </div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", marginBottom: "0.3rem" }}>
                  {project.title}
                </div>
                <div style={{
                  fontSize: "0.82rem", lineHeight: 1.5,
                  color: selected?.id === project.id ? "var(--soft)" : "var(--warm-mid)",
                }}>
                  {project.summary}
                </div>
              </div>
            ))}
          </div>

          {/* Right: detail panel */}
          {selected && (
            <div className="fade-up" style={{
              flex: 1, background: "var(--card-bg)",
              border: "1px solid var(--soft)", padding: "2.5rem",
            }}>
              <div style={{
                fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase",
                color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem",
              }}>
                {selected.tag}
              </div>
              <h3 style={{
                fontFamily: "'DM Serif Display', serif", fontSize: "2rem",
                marginBottom: "2rem", color: "var(--ink)",
              }}>
                {selected.title}
              </h3>

              {[
                { label: "Problem", value: selected.details.problem },
                { label: "Approach", value: selected.details.approach },
                { label: "Outcome", value: selected.details.outcome },
              ].map(({ label, value }) => (
                <div key={label} style={{ marginBottom: "1.5rem" }}>
                  <p style={{
                    fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
                    fontWeight: 600, color: "var(--warm-mid)", marginBottom: "0.4rem",
                  }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.7 }}>
                    {value}
                  </p>
                </div>
              ))}

              <div>
                <p style={{
                  fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  fontWeight: 600, color: "var(--warm-mid)", marginBottom: "0.6rem",
                }}>
                  Tools
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {selected.details.tools.map((tool) => (
                    <span key={tool} style={{
                      padding: "0.3rem 0.8rem", border: "1px solid var(--soft)",
                      fontSize: "0.8rem", color: "var(--ink)", background: "var(--cream)",
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // GRID VIEW (default)
  return (
    <section
      className="fade-up"
      style={{
        minHeight: "100vh",
        padding: "8rem 4rem 5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        width: "100%",
        maxWidth: 800,
      }}>
        {productProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project)}
            style={{
              background: "var(--card-bg)", border: "1px solid var(--soft)",
              padding: "2rem", cursor: "pointer",
              transition: "all 0.2s", display: "flex",
              flexDirection: "column", gap: "0.6rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "var(--soft)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "var(--soft)";
              e.currentTarget.style.background = "var(--card-bg)";
            }}
          >
            <div style={{
              fontSize: "0.7rem", letterSpacing: "0.1em",
              textTransform: "uppercase", color: "var(--accent)", fontWeight: 600,
            }}>
              {project.tag}
            </div>
            <h3 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.4rem", color: "var(--ink)",
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--warm-mid)", lineHeight: 1.6 }}>
              {project.summary}
            </p>
            <div style={{
              marginTop: "auto", paddingTop: "1rem",
              fontSize: "0.75rem", letterSpacing: "0.08em",
              textTransform: "uppercase", fontWeight: 600, color: "var(--accent)",
            }}>
              View case study →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}