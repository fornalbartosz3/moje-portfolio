"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/#o-mnie", label: "O mnie" },
  { href: "/#umiejetnosci", label: "Skills" },
  { href: "/#projekty", label: "Projekty" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          backgroundColor: "#f2ede8",
          borderBottom: "1px solid #d4c9b8",
          width: "100%",
        }}
      >
        <div
          className="navbar-inner"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "57px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#1a1208",
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Bartek.
          </a>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b8a990",
              }}
              className="hidden sm:inline"
            >
              VOL. 01 — 2026
            </span>

            {/* Desktop nav links */}
            <div style={{ gap: "24px" }} className="hidden md:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <NavLink key={href} href={href}>
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={menuOpen}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
                minWidth: "44px",
                minHeight: "44px",
                alignItems: "center",
              }}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .navbar-inner { padding: 0 16px !important; }
        }
      `}</style>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "#f2ede8",
            paddingTop: "89px",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            aria-label="Nawigacja mobilna"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "40px 24px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "#1a1208",
                  textDecoration: "none",
                  padding: "16px 0",
                  borderBottom: "1px solid #d4c9b8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  lineHeight: 1,
                  animation: `fadeInUp 0.3s ease both`,
                  animationDelay: `${i * 0.06}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#d4a853";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#1a1208";
                }}
              >
                {label}
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#b8a990",
                    fontFamily: "inherit",
                    fontStyle: "normal",
                    fontWeight: "normal",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  const LINE = {
    display: "block",
    width: "22px",
    height: "1.5px",
    backgroundColor: "#1a1208",
    transition: "transform 0.25s ease, opacity 0.2s ease",
    transformOrigin: "center",
  } as React.CSSProperties;

  return (
    <span style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <span
        style={{
          ...LINE,
          transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
        }}
      />
      <span
        style={{
          ...LINE,
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "none",
        }}
      />
      <span
        style={{
          ...LINE,
          transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
        }}
      />
    </span>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#8a7a65",
        textDecoration: "none",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#1a1208";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "#8a7a65";
      }}
    >
      {children}
    </a>
  );
}
