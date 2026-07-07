"use client";
import { useState } from "react";
import CoursesList from "./CoursesList";
import { techProjects, techCourses } from "@/data/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Tech() {
  const [view, setView] = useState("main");
  const [selected, setSelected] = useState(null);
  const isMobile = useIsMobile();

  const pad = isMobile ? "3.5rem 1.5rem 3.5rem" : "3.5rem 4rem 3.5rem";

  const handleProjectClick = (project) => {
    setSelected(project);
    setView("projects-detail");
  };

  const Header = ({ backLabel, backView }) => (
    <div style={{ paddingTop: "1rem", marginBottom: "2rem" }}>
      {backLabel && (
        <button
          onClick={() => { setView(backView); setSelected(null); }}
          style={{
            background: "none", border: "none",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem", letterSpacing: "0.1em",
            textTransform: "uppercase", fontWeight: 600,
            color: "var(--warm-mid)", cursor: "pointer",
            padding: 0, display: "block",
          }}
        >← {backLabel}</button>
      )}
    </div>
  );

  // MAIN VIEW
  if (view === "main") {
    return (
      <section className="fade-up" style={{
        height: "100%", padding: pad,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1.5rem", width: "100%", maxWidth: 900,
        }}>
          {[
            { label: "Projects", target: "projects-grid" },
          //  { label: "Courses", target: "courses" },
          ].map(({ label, target }) => (
            <div
              key={label}
              onClick={() => setView(target)}
              style={{
                background: "var(--card-bg)", border: "1px solid var(--soft)",
                padding: isMobile ? "3rem 2rem" : "5rem 3rem",
                cursor: "pointer",
                display: "flex", flexDirection: "column", gap: "0.8rem",
                transition: "all 0.25s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
            >
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--warm-mid)" }}>View all</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: isMobile ? "1.8rem" : "2.2rem" }}>{label}</h3>
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
      <section
        className="fade-up"
        style={{
          height: "100%",
          padding: pad,
          overflowY: isMobile ? "auto" : "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "center",
        }}
      >
        <div style={{ alignSelf: "flex-start", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
          <Header backLabel="Tech" backView="main" />
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "1.5rem",
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {techProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project)}
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
      <section className="fade-up" style={{ height: "100%", padding: pad, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Header backLabel="Projects" backView="projects-grid" />
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "1.5rem", width: "100%",
          flex: 1, minHeight: 0,
          alignItems: "stretch",
          overflowY: isMobile ? "auto" : "hidden",
        }}>
          {/* Left: project list */}
          <div style={{
            display: "flex", flexDirection: isMobile ? "row" : "column",
            gap: "0.75rem",
            flex: isMobile ? "none" : "0 0 260px",
            overflowX: isMobile ? "auto" : "visible",
            overflowY: isMobile ? "hidden" : "auto",
            flexShrink: 0,
          }}
            className={isMobile ? "h-scroll" : ""}
          >
            {techProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project)}
                style={{
                  background: selected?.id === project.id ? "var(--ink)" : "var(--card-bg)",
                  color: selected?.id === project.id ? "var(--cream)" : "var(--ink)",
                  border: "1px solid var(--soft)",
                  borderLeft: selected?.id === project.id ? "3px solid var(--accent)" : "3px solid transparent",
                  padding: isMobile ? "1rem 1.25rem" : "1.5rem 2rem",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  flexShrink: isMobile ? 0 : undefined,
                  minWidth: isMobile ? 160 : undefined,
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
              overflowY: "auto",
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

              {/* Document Links */}
              {(selected.details.pdfUrl || selected.details.pdfUrl2) && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{
                    fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
                    fontWeight: 600, color: "var(--warm-mid)", marginBottom: "0.75rem",
                  }}>
                    Documents
                  </p>
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    {selected.details.pdfUrl && (
                      <a
                        href={selected.details.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "0.55rem 1.2rem",
                          border: "1px solid var(--soft)",
                          color: "var(--ink)", fontSize: "0.78rem",
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
                        }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = "var(--soft)"}
                      >
                        Round 1 Submission ↗
                      </a>
                    )}
                    {selected.details.pdfUrl2 && (
                      <a
                        href={selected.details.pdfUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "0.55rem 1.2rem",
                          border: "1px solid var(--soft)",
                          color: "var(--ink)", fontSize: "0.78rem",
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
                        }}
                        onMouseOver={(e) => e.currentTarget.style.borderColor = "var(--accent)"}
                        onMouseOut={(e) => e.currentTarget.style.borderColor = "var(--soft)"}
                      >
                        Round 2 Submission ↗
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Outcome */}
              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{
                  fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  fontWeight: 600, color: "var(--warm-mid)", marginBottom: "0.4rem",
                }}>
                  Outcome
                </p>
                <p style={{ fontSize: "0.95rem", color: "var(--ink)", lineHeight: 1.7 }}>
                  {selected.details.outcome}
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.85rem" }}>
                  {selected.details.siteUrl && (
                    <a
                      href={selected.details.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.55rem 1.2rem",
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        fontSize: "0.78rem", letterSpacing: "0.1em",
                        textTransform: "uppercase", fontWeight: 600,
                        textDecoration: "none", transition: "all 0.2s",
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--cream)"; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
                    >
                      View site ↗
                    </a>
                  )}
                  {selected.details.videoUrl && (
                    <a
                      href={selected.details.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.55rem 1.2rem",
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        fontSize: "0.78rem", letterSpacing: "0.1em",
                        textTransform: "uppercase", fontWeight: 600,
                        textDecoration: "none", transition: "all 0.2s",
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--cream)"; }}
                      onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}
                    >
                      Watch demo ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Tools */}
              <div style={{ marginBottom: "2.5rem" }}>
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

  // COURSES VIEW
  if (view === "courses") {
    return (
      <section className="fade-up h-scroll" style={{ height: "100%", padding: pad, display: "flex", flexDirection: "column", alignItems: "flex-start", overflowY: "auto" }}>
        <Header backLabel="Tech" backView="main" />
        <CoursesList courses={techCourses} />
      </section>
    );
  }
}