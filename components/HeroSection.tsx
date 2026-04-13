"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";

export default function HeroSection() {
  return (
    <section
      aria-label="Sekcja główna"
      style={{
        minHeight: "calc(100dvh - 89px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 24px 48px",
      }}
    >
      {/* Issue label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "10px",
          letterSpacing: "0.36em",
          textTransform: "uppercase",
          color: "#d4a853",
          marginBottom: "48px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <span>Portfolio</span>
        <span style={{ display: "inline-block", width: "32px", height: "1px", backgroundColor: "#d4c9b8" }} />
        <span>Bartek · 2026</span>
      </motion.div>

      {/* Two-column layout */}
      <div
        className="hero-cols"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Role label */}
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#8a7a65",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#d4a853",
              }}
            />
            Frontend Developer
          </div>

          {/* Big name headline */}
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "clamp(4.5rem, 11vw, 10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#1a1208",
              marginBottom: "32px",
            }}
          >
            Bartek.
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#6a5a48",
              maxWidth: "44ch",
              marginBottom: "36px",
            }}
          >
            Buduję nowoczesne aplikacje webowe — od projektu do wdrożenia.
            Skupiam się na React, Next.js i czystym, dostępnym kodzie.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <motion.a
              href="#projekty"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
                backgroundColor: "#1a1208",
                color: "#f2ede8",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
                transition: "background-color 0.15s",
                minHeight: "44px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d4a853")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a1208")
              }
            >
              Zobacz projekty
              <span style={{ fontSize: "14px" }}>→</span>
            </motion.a>

            <a
              href="#kontakt"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 24px",
                border: "1px solid #d4c9b8",
                color: "#1a1208",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
                transition: "border-color 0.15s, color 0.15s",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#1a1208";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#d4c9b8";
              }}
            >
              Napisz do mnie
            </a>
          </div>
        </motion.div>

        {/* RIGHT — stats box */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div
            style={{
              backgroundColor: "#1a1208",
              padding: "48px",
              width: "100%",
              maxWidth: "320px",
            }}
          >
            {/* Big project number */}
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(4.5rem, 8vw, 7rem)",
                fontWeight: "bold",
                lineHeight: 1,
                color: "#d4a853",
                letterSpacing: "-0.02em",
              }}
            >
              {String(projects.length).padStart(2, "0")}
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#c8b99a",
                marginTop: "8px",
              }}
            >
              Projekty
            </div>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#2e2010",
                margin: "28px 0",
              }}
            />

            {/* Meta info */}
            {[
              { label: "Lokalizacja", value: "Bydgoszcz, PL" },
              { label: "Stack", value: "React · Next.js · TS" },
              { label: "Status", value: "✦ Dostępny" },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#4a3a28",
                    marginBottom: "2px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#c8b99a",
                    fontWeight: 500,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div style={{ borderTop: "1px solid #d4c9b8", marginTop: "64px" }} />

      <style>{`
        @media (max-width: 640px) {
          .hero-cols { grid-template-columns: 1fr !important; }
          .hero-cols > div:last-child { display: flex; justify-content: flex-start !important; }
          .hero-cols > div:last-child > div { max-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
