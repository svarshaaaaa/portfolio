"use client";

export default function Contact() {
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
      <div style={{ maxWidth: 500, marginBottom: "3rem" }}>
        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "1rem",
        }}>
          Contact
        </p>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2.8rem",
          marginBottom: "1rem",
        }}>
          Let&apos;s talk.
        </h2>
        <p style={{ color: "var(--warm-mid)", lineHeight: 1.7 }}>
          Open to product roles, collaborations, and interesting conversations.
          Reach out anytime.
        </p>
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            textDecoration: "none",
            color: "var(--ink)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          <div style={{
            width: 110, height: 110,
            borderRadius: "50%",
            border: "1.5px solid var(--soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            background: "var(--card-bg)",
            transition: "all 0.2s",
            fontWeight: 700,
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
          onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
          >
            in
          </div>
          <span style={{
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}>
            LinkedIn
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:your@email.com"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            textDecoration: "none",
            color: "var(--ink)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--ink)")}
        >
          <div style={{
            width: 110, height: 110,
            borderRadius: "50%",
            border: "1.5px solid var(--soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            background: "var(--card-bg)",
            transition: "all 0.2s",
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--cream)"; }}
          onMouseOut={(e) => { e.currentTarget.style.background = "var(--card-bg)"; e.currentTarget.style.color = "var(--ink)"; }}
          >
            ✉
          </div>
          <span style={{
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}>
            Email
          </span>
        </a>
      </div>
    </section>
  );
}
