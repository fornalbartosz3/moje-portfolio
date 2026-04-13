"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: "fixed",
        top: "-100px",
        left: "24px",
        padding: "8px 16px",
        backgroundColor: "#1a1208",
        color: "#f2ede8",
        fontSize: "12px",
        zIndex: 999,
        textDecoration: "none",
        transition: "top 0.15s",
      }}
      onFocus={(e) => ((e.currentTarget as HTMLAnchorElement).style.top = "96px")}
      onBlur={(e) => ((e.currentTarget as HTMLAnchorElement).style.top = "-100px")}
    >
      Przejdź do treści
    </a>
  );
}
