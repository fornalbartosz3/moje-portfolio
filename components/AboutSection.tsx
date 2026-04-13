"use client";

import { motion } from "framer-motion";

const FACTS = [
  { label: "Lokalizacja", value: "Bydgoszcz, Polska" },
  { label: "Specjalizacja", value: "Frontend Dev" },
  { label: "Doświadczenie", value: "Junior · rozwijam się" },
  { label: "Zainteresowania", value: "AI · Web · Design" },
];

export default function AboutSection() {
  return (
    <motion.section
      id="o-mnie"
      aria-labelledby="about-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
    >
      <div
        className="about-cols"
        style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "80px" }}
      >
        {/* Left — label + heading */}
        <div>
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "#d4a853",
              marginBottom: "14px",
            }}
          >
            O autorze
          </div>
          <h2
            id="about-heading"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: "bold",
              lineHeight: 1.1,
              color: "#1a1208",
            }}
          >
            Kim<br />jestem?
          </h2>
          <div
            style={{
              width: "28px",
              height: "2px",
              backgroundColor: "#d4a853",
              marginTop: "20px",
            }}
          />
        </div>

        {/* Right — text + grid */}
        <div>
          {/* Body with dropcap */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#4a3a28",
              maxWidth: "60ch",
              marginBottom: "40px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                float: "left",
                fontFamily: "Georgia, serif",
                fontSize: "5rem",
                fontWeight: "bold",
                lineHeight: 0.8,
                color: "#1a1208",
                marginRight: "8px",
                marginTop: "8px",
              }}
            >
              J
            </span>
            estem początkującym developerem, który uczy się budować nowoczesne
            aplikacje webowe. Interesuję się frontendem, narzędziami AI i
            tworzeniem produktów od zera — od projektu wizualnego
            po działający kod.
          </p>

          {/* Facts grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
              borderTop: "1px solid #d4c9b8",
              borderLeft: "1px solid #d4c9b8",
            }}
            className="facts-grid"
          >
            {FACTS.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: "20px 24px",
                  borderRight: "1px solid #d4c9b8",
                  borderBottom: "1px solid #d4c9b8",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: "#b8a990",
                    marginBottom: "5px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#1a1208",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-cols { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </motion.section>
  );
}
