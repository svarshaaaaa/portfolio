"use client";

export default function Content() {
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
      {/* Video side */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}>
          Content
        </p>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2.8rem",
          marginBottom: "1.5rem",
        }}>
          What I make.
        </h2>

        {/* Video embed box */}
        <div style={{
          width: "100%",
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
        flex: "0 0 220px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        paddingTop: "8rem",
      }}>
        {/* Avatar */}
        <div style={{
          width: 120, height: 120,
          borderRadius: "50%",
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Replace with: <Image src="/your-yt-photo.jpg" alt="Varsha" width={120} height={120} style={{objectFit:"cover", borderRadius:"50%"}} /> */}
          <span style={{ fontSize: "0.75rem", color: "var(--warm-mid)", fontStyle: "italic" }}>photo</span>
        </div>

        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem", textAlign: "center" }}>
          Varsha
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--warm-mid)" }}>@yourchannel</div>

        <a
          href="https://youtube.com/@yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.6rem 1.5rem",
            background: "var(--accent)",
            color: "white",
            textDecoration: "none",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition: "opacity 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Visit Channel
        </a>
      </div>
    </section>
  );
}
