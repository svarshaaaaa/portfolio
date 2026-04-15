"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Content() {
  const isMobile = useIsMobile();

  return (
    <section
      className="fade-up h-scroll"
      style={{
        height: "100%",
        padding: isMobile ? "5rem 1.5rem 3rem" : "5rem 4rem 3rem",
        overflowY: isMobile ? "auto" : "hidden",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        gap: isMobile ? "2rem" : "4rem",
      }}
    >
      {/* Video side */}
      <div style={{ flex: 1, width: "100%" }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: isMobile ? "2rem" : "2.8rem",
          marginBottom: "1.5rem",
        }}>
          What I make.
        </h2>

        <div style={{
          width: isMobile ? "100%" : "65%",
          aspectRatio: "16/9",
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}>
          <iframe
            width="100%" height="100%"
            src="https://www.youtube.com/embed/3mgkK0E1uy4"
            allowFullScreen
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* YouTube profile side */}
      <div style={{
        flex: isMobile ? "none" : "0 0 200px",
        width: isMobile ? "100%" : "auto",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        gap: "1rem",
        paddingTop: isMobile ? 0 : "2rem",
      }}>
        {/* Avatar */}
        <div style={{
          width: isMobile ? 70 : 120,
          height: isMobile ? 70 : 120,
          borderRadius: "50%",
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          overflow: "hidden",
          flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: "0.75rem", color: "var(--warm-mid)", fontStyle: "italic" }}>photo</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", alignItems: isMobile ? "flex-start" : "center" }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem" }}>Varsha</div>
          <div style={{ fontSize: "0.8rem", color: "var(--warm-mid)" }}>@svarshaaa</div>
          <a
            href="https://www.youtube.com/@svarshaaa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.5rem 1.2rem",
              background: "var(--accent)",
              color: "white",
              textDecoration: "none",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
              marginTop: "0.25rem",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Visit Channel
          </a>
        </div>
      </div>
    </section>
  );
}
