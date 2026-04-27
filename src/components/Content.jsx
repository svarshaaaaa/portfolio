"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Content() {
  const isMobile = useIsMobile();

  return (
    <section
      className="fade-up h-scroll"
      style={{
        height: "100%",
        padding: isMobile ? "3.5rem 1.5rem 3.5rem" : "3.5rem 4rem 3.5rem",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: isMobile ? "2rem" : "2.8rem",
        marginBottom: "1.25rem",
        flexShrink: 0,
      }}>
        What I make.
      </h2>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "1.25rem",
        flex: 1,
        minHeight: 0,
      }}>

        {/* YouTube */}
        <div style={{
          flex: 1, minWidth: 0,
          display: "flex", flexDirection: "column",
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          overflow: "hidden",
        }}>
          <div style={{
            padding: "0.85rem 1rem",
            fontSize: "0.65rem", letterSpacing: "0.15em",
            textTransform: "uppercase", fontWeight: 700,
            color: "var(--warm-mid)", flexShrink: 0,
          }}>
            YouTube
          </div>
          <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
            <iframe
              width="100%" height="100%"
              src="https://www.youtube.com/embed/3mgkK0E1uy4"
              allowFullScreen
              style={{ border: "none", display: "block" }}
            />
          </div>
        </div>

        {/* Instagram */}
        <div style={{
          flex: 1, minWidth: 0,
          display: "flex", flexDirection: "column",
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          overflow: "hidden",
        }}>
          <div style={{
            padding: "0.85rem 1rem",
            fontSize: "0.65rem", letterSpacing: "0.15em",
            textTransform: "uppercase", fontWeight: 700,
            color: "var(--warm-mid)", flexShrink: 0,
          }}>
            Instagram
          </div>
          <div style={{ flex: 1, minHeight: 0, overflow: "hidden", position: "relative" }}>
            <iframe
              src="https://www.instagram.com/reel/DXW2Lf-CKXk/embed/"
              width="100%"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allowFullScreen
              style={{
                border: "none",
                display: "block",
                height: "calc(100% + 166px)",
                marginTop: "-56px",
              }}
            />
            {/* Transparent overlay — sends clicks to Instagram profile */}
            <a
              href="https://www.instagram.com/varsh.yaps"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
