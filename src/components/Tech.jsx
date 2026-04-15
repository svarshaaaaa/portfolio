"use client";
import { useState, useRef } from "react";
import CoursesList from "./CoursesList";
import { techProjects, techCourses } from "@/data/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Tech() {
  const [view, setView] = useState("main");
  const [selected, setSelected] = useState(null);
  const trackRef = useRef(null);
  const isMobile = useIsMobile();

  const pad = isMobile ? "5rem 1.5rem 3rem" : "5rem 4rem 3rem";

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
            { label: "Courses", target: "courses" },
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
    const scroll = (dir) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.firstElementChild;
      const cardWidth = card ? card.offsetWidth + 24 : 360;
      track.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
    };

    // 1 card on mobile, 3 on desktop
    const cardFlex = isMobile ? "0 0 100%" : "0 0 calc((100% - 3rem) / 3)";

    return (
      <section className="fade-up" style={{ height: "100%", padding: pad, display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <Header backLabel="Tech" backView="main" />
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%" }}>
          <button
            onClick={() => scroll(-1)}
            style={{
              flexShrink: 0, width: 36, height: 36,
              background: "var(--card-bg)", border: "1px solid var(--soft)",
              cursor: "pointer", fontSize: "1rem", color: "var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
          >←</button>

          <div ref={trackRef} className="h-scroll" style={{
            flex: 1, display: "flex", gap: "1.5rem",
            overflowX: "auto", scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}>
            {techProjects.map((project) => (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project)}
                style={{
                  flex: cardFlex,
                  background: "var(--card-bg)", border: "1px solid var(--soft)",
                  padding: "2rem 1.5rem", cursor: "pointer", transition: "all 0.2s",
                  display: "flex", flexDirection: "column", gap: "0.6rem",
                  scrollSnapAlign: "start", minHeight: 200,
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--soft)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--soft)"; e.currentTarget.style.background = "var(--card-bg)"; }}
              >
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>{project.tag}</div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.3rem", color: "var(--ink)" }}>{project.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--warm-mid)", lineHeight: 1.6 }}>{project.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: "0.75rem", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "var(--accent)" }}>
                  View project →
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            style={{
              flexShrink: 0, width: 36, height: 36,
              background: "var(--card-bg)", border: "1px solid var(--soft)",
              cursor: "pointer", fontSize: "1rem", color: "var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
          >→</button>
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
          alignItems: isMobile ? "stretch" : "flex-start",
          overflowY: isMobile ? "auto" : "hidden",
        }}>
          {/* Sidebar */}
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
                key={project.title}
                onClick={() => setSelected(project)}
                style={{
                  background: selected?.title === project.title ? "var(--ink)" : "var(--card-bg)",
                  color: selected?.title === project.title ? "var(--cream)" : "var(--ink)",
                  border: "1px solid var(--soft)",
                  borderLeft: !isMobile && selected?.title === project.title ? "3px solid var(--accent)" : "3px solid transparent",
                  padding: "1rem 1.25rem", cursor: "pointer", transition: "all 0.25s",
                  flexShrink: isMobile ? 0 : undefined,
                  minWidth: isMobile ? 180 : undefined,
                }}
                onMouseOver={(e) => { if (selected?.title !== project.title) e.currentTarget.style.background = "var(--soft)"; }}
                onMouseOut={(e) => { if (selected?.title !== project.title) e.currentTarget.style.background = "var(--card-bg)"; }}
              >
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem" }}>{project.title}</div>
              </div>
            ))}
          </div>

          {selected && (
            <div className="fade-up" style={{ flex: 1, background: "var(--card-bg)", border: "1px solid var(--soft)", padding: "2rem", overflowY: "auto" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: "0.5rem" }}>{selected.tag}</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", marginBottom: "1.25rem", color: "var(--ink)" }}>{selected.title}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{selected.desc}</p>
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
      <section className="fade-up h-scroll" style={{ height: "100%", padding: pad, display: "flex", flexDirection: "column", alignItems: "flex-start", overflowY: "auto" }}>
        <Header backLabel="Tech" backView="main" />
        <CoursesList courses={techCourses} />
      </section>
    );
  }
}
