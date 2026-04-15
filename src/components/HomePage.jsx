"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home({ scrollToSection }) {
  const isMobile = useIsMobile();

  return (
    <section
      className="fade-up"
      style={{
        height: "100%",
        padding: isMobile ? "5rem 1.5rem 3rem" : "5rem 4rem 3rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "flex-start",
        justifyContent: isMobile ? "center" : "flex-start",
        gap: isMobile ? "2rem" : "4rem",
      }}
    >
      {/* Text */}
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: isMobile ? "clamp(2.2rem, 8vw, 3.5rem)" : "clamp(2.8rem, 5vw, 4.5rem)",
          lineHeight: 1.15,
          marginBottom: "1.2rem",
        }}>
          Hi, I&apos;m{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Varsha,</em>
          <br />welcome to
          <br />my abode!
        </h1>
        <p style={{
          fontSize: "1.05rem",
          color: "var(--warm-mid)",
          lineHeight: 1.7,
          maxWidth: 420,
          marginBottom: "2rem",
        }}>
          I love to create, build and tell stories.
          <br />Come see what I'm building and learning!
        </p>
        <button
          onClick={() => scrollToSection("about")}
          style={{
            padding: "0.75rem 2rem",
            background: "var(--ink)",
            color: "var(--cream)",
            border: "none",
            fontSize: "0.85rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "background 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.background = "var(--accent)")}
          onMouseOut={(e) => (e.target.style.background = "var(--ink)")}
        >
          Learn more →
        </button>
      </div>

      {/* Photo — hidden on mobile */}
      {!isMobile && (
        <div style={{
          flex: "0 0 340px",
          height: 420,
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
          <span style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "1rem",
            color: "var(--warm-mid)",
            fontStyle: "italic",
          }}>
            your photo here
          </span>
        </div>
      )}
    </section>
  );
}
