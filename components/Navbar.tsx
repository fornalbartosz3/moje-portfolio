"use client";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#o-mnie", label: "O mnie" },
  { href: "/#umiejetnosci", label: "Skills" },
  { href: "/#projekty", label: "Projekty" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f2ede8",
        borderBottom: "1px solid #d4c9b8",
        width: "100%",
      }}
    >
      <div
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
          >
            VOL. 01 — 2026
          </span>

          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
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
