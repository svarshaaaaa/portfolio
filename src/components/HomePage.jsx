"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";

export default function Home({ scrollToSection }) {
  const isMobile = useIsMobile();

  return (
    <section
  className="fade-up"
  style={{
    minHeight: "80vh", // Gives the section enough breathing room vertically
    padding: isMobile ? "5rem 1.5rem 3rem" : "5rem 4rem 3rem",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center", // 👈 CHANGED: Vertically centers text and photo together
    justifyContent: isMobile ? "center" : "space-between", // 👈 CHANGED: Pushes photo cleanly to the right, balancing the gap
    gap: isMobile ? "2rem" : "4rem",
    maxWidth: "1200px", // 👈 ADDED: Keeps it from stretching too wide on massive monitors
    margin: "0 auto", // 👈 ADDED: Centers the entire layout on the screen
    width: "100%",
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
      {/* {!isMobile && (
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
            <Image 
      src="/docs/home_pic.png" // Path to your image
      alt="Varsha's profile photo"
      width={440}  // 👈 Explicit width in pixels
      height={520}
      style={{ objectFit: "cover", height: "100%", width: "100%" }} // 👈 Ensures the image covers the container
      priority // Loads the image faster since it's above the fold
    />
          </span>
        </div>
      )} */}

    {!isMobile && (
        <div style={{
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
            <Image 
      src="/docs/home_pic.png" // Path to your image
      alt="Varsha's profile photo"
      width={440}  // 👈 Explicit width in pixels
      height={520}
      style={{ objectFit: "cover", height: "100%", width: "100%" }} // 👈 Ensures the image covers the container
      priority // Loads the image faster since it's above the fold
    />
          </span>
        </div>
      )}

    </section>
  );
}
