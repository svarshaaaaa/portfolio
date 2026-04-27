"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

function ProfileRow({ name, handle, url, label }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "0.85rem",
      paddingTop: "1rem", borderTop: "1px solid var(--soft)",
      flexShrink: 0,
    }}>
      <div style={{
        width: 38, height: 38, borderRadius: "50%",
        background: "var(--soft)", border: "1px solid var(--soft)",
        flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <span style={{ fontSize: "0.6rem", color: "var(--warm-mid)", fontStyle: "italic" }}>photo</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "0.95rem", color: "var(--ink)" }}>{name}</div>
        <div style={{ fontSize: "0.72rem", color: "var(--warm-mid)" }}>{handle}</div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "0.4rem 0.9rem",
          background: "var(--accent)", color: "white",
          textDecoration: "none", fontSize: "0.68rem",
          fontWeight: 600, letterSpacing: "0.06em",
          textTransform: "uppercase", flexShrink: 0,
          transition: "opacity 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {label}
      </a>
    </div>
  );
}

export default function Content() {
  const isMobile = useIsMobile();

  return (
    <section
      className="fade-up"
      style={{
        height: "100%",
        padding: isMobile ? "3.5rem 1.5rem 3.5rem" : "3.5rem 4rem 3.5rem",
        overflowY: isMobile ? "auto" : "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: isMobile ? "2rem" : "2.8rem",
        marginBottom: "1.5rem",
        flexShrink: 0,
      }}>
        What I make.
      </h2>

      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "1.5rem",
        flex: 1,
        minHeight: 0,
      }}>

        {/* ── YouTube Card ── */}
        <div style={{
          flex: 1,
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          minHeight: isMobile ? 300 : 0,
        }}>
          <div style={{
            fontSize: "0.68rem", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "var(--warm-mid)",
            fontWeight: 600, marginBottom: "0.85rem", flexShrink: 0,
          }}>
            YouTube
          </div>

          {/* Video — fills remaining card height */}
          <div style={{ flex: 1, minHeight: 0, overflow: "hidden", marginBottom: "1rem" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3mgkK0E1uy4"
              allowFullScreen
              style={{ border: "none", display: "block" }}
            />
          </div>

          <ProfileRow
            name="Varsha"
            handle="@svarshaaa"
            url="https://www.youtube.com/@svarshaaa"
            label="Visit Channel"
          />
        </div>

        {/* ── Instagram Card ── */}
        <div style={{
          flex: 1,
          background: "var(--card-bg)",
          border: "1px solid var(--soft)",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          minHeight: isMobile ? 300 : 0,
        }}>
          <div style={{
            fontSize: "0.68rem", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "var(--warm-mid)",
            fontWeight: 600, marginBottom: "0.85rem", flexShrink: 0,
          }}>
            Instagram
          </div>

          {/* IG preview — gradient placeholder, whole area is clickable */}
          <a
            href="https://www.instagram.com/varsh.yaps"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1, minHeight: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "0.6rem",
              background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              textDecoration: "none",
              marginBottom: "1rem",
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {/* Instagram camera icon — SVG so no emoji rendering issues */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
            </svg>
            <span style={{
              fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "white", opacity: 0.9,
            }}>
              View profile ↗
            </span>
          </a>

          <ProfileRow
            name="Varsha"
            handle="@varsh.yaps"
            url="https://www.instagram.com/varsh.yaps"
            label="Visit Profile"
          />
        </div>

      </div>
    </section>
  );
}
