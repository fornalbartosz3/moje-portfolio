"use client";

const LINKS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #d4c9b8",
        padding: "28px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#b8a990",
        }}
      >
        © 2026 Bartek. — Bydgoszcz, PL
      </span>

      <div style={{ display: "flex", gap: "20px" }}>
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b8a990",
              textDecoration: "none",
              cursor: "pointer",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#1a1208")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#b8a990")
            }
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
