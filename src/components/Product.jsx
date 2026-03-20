"use client";
import { useState } from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import CoursesList from "./CoursesList";
import { productProjects, productCourses } from "@/data/content";
import Page from "./Page";

export default function Product() {
  const [sub, setSub] = useState(null);

  const handleClick = (label) => {
    setSub(prev => prev === label ? null : label);
  };

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
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.8rem" }}>Product</h2>
      </div>

      {/* Always visible cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: 700 }}>
        {["projects", "courses"].map((label) => (
          <div
            key={label}
            onClick={() => handleClick(label)}
            style={{
              background: sub === label ? "var(--ink)" : "var(--card-bg)",
              color: sub === label ? "var(--cream)" : "var(--ink)",
              border: "1px solid var(--soft)",
              padding: "3rem 2rem",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              transition: "all 0.25s",
            }}
            onMouseOver={(e) => {
              if (sub !== label) {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.color = "var(--cream)";
              }
            }}
            onMouseOut={(e) => {
              if (sub !== label) {
                e.currentTarget.style.background = "var(--card-bg)";
                e.currentTarget.style.color = "var(--ink)";
              }
            }}
          >
            <div style={{ fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--warm-mid)" }}>
              View all
            </div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", textTransform: "capitalize" }}>
              {label}
            </h3>
            <div style={{ marginTop: "auto", fontSize: "1.5rem" }}>→</div>
          </div>
        ))}
      </div>

      {/* Content appears below after clicking */}
      {sub && (
        <div style={{ marginTop: "3rem", maxWidth: 700 }} className="fade-up">
          {sub === "projects" && <ProjectsCarousel projects={productProjects} />}
          {sub === "courses" && <CoursesList courses={productCourses} />}
        </div>
      )}
    </section>
  );
}