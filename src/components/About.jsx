"use client";

export default function About() {
  return (
    <section
      className="fade-up"
      style={{
        minHeight: "100vh",
        padding: "8rem 4rem 5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      {/* Left */}
      <div style={{ flex: 1 }}>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: "2.8rem",
          lineHeight: 1.2,
          marginBottom: "1.5rem",
        }}>
          A little<br />about myself.
        </h2>
        <p style={{
          color: "var(--warm-mid)",
          lineHeight: 1.8,
          fontSize: "1rem",
          marginBottom: "1rem",
          maxWidth: 460,
        }}>
          I&apos;m Varsha — a product and tech person based in Chennai, India. I love
          building things at the intersection of design, technology, and people.
        </p>
        <p style={{
          color: "var(--warm-mid)",
          lineHeight: 1.8,
          fontSize: "1rem",
          maxWidth: 460,
        }}>
          When I&apos;m not working, you&apos;ll find me making travel content on YouTube and 
          exploring new cities
        </p>
      </div>

      {/* Right - Photo */}
      <div style={{
        flex: "0 0 300px",
        height: 380,
        background: "var(--card-bg)",
        border: "1px solid var(--soft)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Replace with: <Image src="/your-photo-2.jpg" alt="Varsha" width={300} height={380} style={{objectFit:"cover"}} /> */}
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
