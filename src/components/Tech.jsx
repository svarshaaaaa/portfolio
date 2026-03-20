"use client";
import { useState } from "react";
import CoursesList from "./CoursesList";
import { techProjects, techCourses } from "@/data/content";

export default function Tech() {
  const [view, setView] = useState("main"); // "main" | "projects-grid" | "projects-detail" | "courses"
  const [selected, setSelected] = useState(null);

  const handleProjectClick = (project) => {
    setSelected(project);
    setView("projects-detail");
  };

  // Shared header
  const Header = ({ backLabel, backView }) => (
    <div style={{ paddingTop: "2rem", marginBottom: "2.5rem" }}>
      {backLabel && (
        <button
          onClick={() => { setView(backView); setSelected(null); }}
          style={{
            background: "none", border: "none",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem", letterSpacing: "0.1em",
            textTransform: "uppercase", fontWeight: 600,
            color: "var(--warm-mid)", cursor: "pointer",
            padding: 0, marginBottom: "2rem", display: "block",
          }}
        >
          ← {backLabel}
        </button>
      )}
    </div>
  );

  // MAIN VIEW — 2 big cards
  if (view === "main") {
    return (
      <section className="fade-up" style={{ minHeight: "100vh", padding: "6rem 4rem 5rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Header />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: 700 }}>
          {[
            { label: "Projects", target: "projects-grid" },
            { label: "Courses", target: "courses" },
          ].map(({ label, target }) => (
            <div
              key={label}
              onClick={() => setView(target)}
              style={{
                background: "var(--card-bg)", border: "1px solid var(--soft)",
                padding: "3rem 2rem", cursor: "pointer",
                display: "flex", flexDirection: "column", gap: "0.8rem",
                transition: "all 0.25s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
            >
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--warm-mid)" }}>View all</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem" }}>{label}</h3>
              <div style={{ marginTop: "auto", fontSize: "1.5rem" }}>→</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // PROJECTS GRID VIEW
  if (view === "projects-grid") {
    return (
      <section className="fade-up" style={{ minHeight: "100vh", padding: "6rem 4rem 5rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Header backLabel="Tech" backView="main" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", width: "100%", maxWidth: 800 }}>
          {techProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
              style={{
                background: "var(--card-bg)", border: "1px solid var(--soft)",
                padding: "2rem", cursor: "pointer", transition: "all 0.2s",
                display: "flex", flexDirection: "column", gap: "0.6rem",
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--soft)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--soft)"; e.currentTarget.style.background = "var(--card-bg)"; }}
            >
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>{project.tag}</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", color: "var(--ink)" }}>{project.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--warm-mid)", lineHeight: 1.6 }}>{project.desc}</p>
              <div style={{ marginTop: "auto", paddingTop: "1rem", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "var(--accent)" }}>
                View project →
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // PROJECTS DETAIL VIEW
  if (view === "projects-detail") {
    return (
      <section className="fade-up" style={{ minHeight: "100vh", padding: "6rem 4rem 5rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Header backLabel="Projects" backView="projects-grid" />
        <div style={{ display: "flex", gap: "2rem", width: "100%", alignItems: "flex-start" }}>
          {/* Left: list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: "0 0 320px" }}>
            {techProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                style={{
                  background: selected?.id === project.id ? "var(--ink)" : "var(--card-bg)",
                  color: selected?.id === project.id ? "var(--cream)" : "var(--ink)",
                  border: "1px solid var(--soft)",
                  borderLeft: selected?.id === project.id ? "3px solid var(--accent)" : "3px solid transparent",
                  padding: "1.5rem 2rem", cursor: "pointer", transition: "all 0.25s",
                }}
                onMouseOver={(e) => { if (selected?.id !== project.id) e.currentTarget.style.background = "var(--soft)"; }}
                onMouseOut={(e) => { if (selected?.id !== project.id) e.currentTarget.style.background = "var(--card-bg)"; }}
              >
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: selected?.id === project.id ? "var(--soft)" : "var(--warm-mid)", fontWeight: 600, marginBottom: "0.4rem" }}>{project.tag}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", marginBottom: "0.3rem" }}>{project.title}</div>
                <div style={{ fontSize: "0.82rem", lineHeight: 1.5, color: selected?.id === project.id ? "var(--soft)" : "var(--warm-mid)" }}>{project.desc}</div>
              </div>
            ))}
          </div>

          {/* Right: detail panel */}
          {selected && (
            <div className="fade-up" style={{ flex: 1, background: "var(--card-bg)", border: "1px solid var(--soft)", padding: "2.5rem" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>{selected.tag}</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", marginBottom: "1.5rem", color: "var(--ink)" }}>{selected.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.7, marginBottom: "2rem" }}>{selected.desc}</p>
              {selected.link && (
                <a href={selected.link} style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
                  View project →
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }

  // COURSES VIEW
  if (view === "courses") {
    return (
      <section className="fade-up" style={{ minHeight: "100vh", padding: "6rem 4rem 5rem", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Header backLabel="Tech" backView="main" />
        <CoursesList courses={techCourses} />
      </section>
    );
  }
}