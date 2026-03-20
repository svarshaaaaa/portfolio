"use client";

export default function Home({ setActivePage }) {
  return (
    <section
      className="fade-up"
      style={{
        minHeight: "100vh",
        padding: "8rem 4rem 5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "4rem",
      }}
    >
      {/* Text */}
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
          lineHeight: 1.15,
          marginBottom: "1.2rem",
        }}>
          Hi, I&apos;m{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Varsha,</em>
          <br />welcome to
          <br />my abode.
        </h1>
        <p style={{
          fontSize: "1.05rem",
          color: "var(--warm-mid)",
          lineHeight: 1.7,
          maxWidth: 420,
          marginBottom: "2rem",
        }}>
          Product thinker. Tech builder. Content creator.
          <br />I make things and tell stories about them.
        </p>
        <button
          onClick={() => setActivePage("about")}
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

      {/* Photo */}
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
        {/* Replace with: <Image src="/your-photo.jpg" alt="Varsha" width={340} height={420} style={{objectFit:"cover"}} /> */}
        <span style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "1rem",
          color: "var(--warm-mid)",
          fontStyle: "italic",
        }}>
          your photo here
        </span>
      </div>
    </section>
  );
}
