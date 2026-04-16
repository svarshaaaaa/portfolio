"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Contact() {
  const isMobile = useIsMobile();

  return (
    <section
      className="fade-up"
      style={{
        height: "100%",
        padding: isMobile ? "3.5rem 1.5rem 3.5rem" : "3.5rem 4rem 3.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 500, marginBottom: "2.5rem" }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: isMobile ? "2.2rem" : "2.8rem",
          marginBottom: "1rem",
        }}>
          Let&apos;s talk.
        </h2>
        <p style={{ color: "var(--warm-mid)", lineHeight: 1.7, fontSize: isMobile ? "0.9rem" : "1rem" }}>
          Open to product roles, collaborations, and interesting conversations.
          Reach out anytime.
        </p>
      </div>

      <div style={{ display: "flex", gap: isMobile ? "1.5rem" : "2rem" }}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/varshasivaramakrishnan/"
          target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "var(--ink)" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          <div style={{
            width: isMobile ? 80 : 110, height: isMobile ? 80 : 110,
            borderRadius: "50%", border: "1.5px solid var(--soft)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            background: "var(--card-bg)", transition: "all 0.2s",
            fontWeight: 700, fontFamily: "'DM Sans', sans-serif",
          }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
          >in</div>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>LinkedIn</span>
        </a>

        {/* Email */}
        <a
          href="mailto:svarshakrishnan@gmail.com"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "var(--ink)" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          <div style={{
            width: isMobile ? 80 : 110, height: isMobile ? 80 : 110,
            borderRadius: "50%", border: "1.5px solid var(--soft)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            background: "var(--card-bg)", transition: "all 0.2s",
          }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
          >✉</div>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Email</span>
        </a>
      </div>
    </section>
  );
}
