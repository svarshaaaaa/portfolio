"use client";
import { useState } from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import CoursesList from "./CoursesList";
import { productProjects, productCourses } from "@/data/content";

const subPages = ["overview", "projects", "courses"];

export default function Product() {
  const [sub, setSub] = useState("overview");

  return (
    <section
      className="fade-up"
      style={{
        minHeight: "100vh",
        padding: "8rem 4rem 5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}>
          Product work
        </p>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.8rem" }}>Product</h2>
      </div>

      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem" }}>
        {subPages.map((s) => (
          <button
            key={s}
            onClick={() => setSub(s)}
            style={{
              background: "none",
              border: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: sub === s ? "var(--ink)" : "var(--warm-mid)",
              cursor: "pointer",
              paddingBottom: "0.4rem",
              borderBottom: sub === s ? "2px solid var(--accent)" : "2px solid transparent",
              transition: "all 0.2s",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {sub === "overview" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: 700 }}>
          {["Projects", "Courses"].map((label) => (
            <div
              key={label}
              onClick={() => setSub(label.toLowerCase())}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--soft)",
                padding: "3rem 2rem",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                transition: "all 0.25s",
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
              <div style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--warm-mid)" }}>View all</div>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem" }}>{label}</h3>
              <div style={{ marginTop: "auto", fontSize: "1.5rem" }}>→</div>
            </div>
          ))}
        </div>
      )}

      {sub === "projects" && <ProjectsCarousel projects={productProjects} />}
      {sub === "courses" && <CoursesList courses={productCourses} />}
    </section>
  );
}
