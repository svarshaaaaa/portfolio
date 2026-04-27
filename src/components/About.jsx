"use client";
import { timeline } from "@/data/content";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section
      className="fade-up h-scroll"
      style={{
        height: "100%",
        padding: isMobile ? "3.5rem 1.5rem 3.5rem" : "3.5rem 4rem 3.5rem",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <p style={{
        fontSize: "0.72rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--warm-mid)",
        fontWeight: 600,
        marginBottom: "1.5rem",
        textAlign: "center",
      }}>
        A little about myself
      </p>

      <div style={{
        position: "relative",
        width: "100%",
      }}>

        {isMobile ? (
          /* Mobile: single-column, spine on the left */
          <>
            <div style={{
              position: "absolute",
              left: "6px", top: 0, bottom: 0,
              width: "1px",
              background: "var(--soft)",
            }} />
            {timeline.map((item, i) => (
              <div key={i} style={{
                position: "relative",
                paddingLeft: "2rem",
                marginBottom: i === timeline.length - 1 ? "2rem" : "3rem",
              }}>
                {/* Dot */}
                <div style={{
                  position: "absolute",
                  left: 0, top: "3rem",
                  width: 13, height: 13,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  border: "3px solid var(--cream)",
                  zIndex: 1,
                }} />
                {/* Year */}
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "var(--soft)",
                  marginBottom: "-0.8rem",
                  userSelect: "none",
                }}>{item.year}</div>
                {/* Title */}
                <div style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.1rem",
                  color: "var(--ink)",
                  marginBottom: "0.4rem",
                  position: "relative", zIndex: 1,
                }}>{item.title}</div>
                {/* Accent bar */}
                <div style={{ width: "1.5rem", height: "2px", background: "var(--accent)", marginBottom: "0.5rem" }} />
                {/* Description */}
                <p style={{ fontSize: "0.85rem", color: "var(--warm-mid)", lineHeight: 1.7, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </>
        ) : (
          /* Desktop: alternating left/right */
          <>
            <div style={{
              position: "absolute",
              left: "50%", top: 0, bottom: 0,
              width: "1px",
              background: "var(--soft)",
              transform: "translateX(-50%)",
            }} />
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  position: "relative",
                  marginBottom: i === timeline.length - 1 ? "1.5rem" : "2rem",
                }}>
                  <div style={{
                    width: "46%",
                    textAlign: isLeft ? "right" : "left",
                    paddingRight: isLeft ? "2.5rem" : "1rem",
                    paddingLeft: isLeft ? "1rem" : "2.5rem",
                    boxSizing: "border-box",
                  }}>
                    <div style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "2.2rem", lineHeight: 1,
                      color: "var(--warm-mid)",
                      marginBottom: "-0.5rem",
                      userSelect: "none",
                    }}>{item.year}</div>
                    <div style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "1.4rem", color: "var(--ink)",
                      marginBottom: "0.5rem",
                      position: "relative", zIndex: 1,
                    }}>{item.title}</div>
                    <div style={{
                      width: "2rem", height: "2px",
                      background: "var(--accent)",
                      marginLeft: isLeft ? "auto" : 0,
                      marginBottom: "0.65rem",
                    }} />
                    <p style={{ fontSize: "1rem", color: "var(--warm-mid)", lineHeight: 1.75, margin: 0 }}>
                      {item.description}
                    </p>
                  </div>
                  <div style={{
                    position: "absolute",
                    left: "calc(50% - 7px)", top: "2rem",
                    width: 14, height: 14,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    border: "3px solid var(--cream)",
                    zIndex: 1,
                  }} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
