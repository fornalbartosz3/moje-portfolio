"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";

const ALL_TAGS = ["Next.js", "Tailwind", "React", "TypeScript"];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <motion.section
      id="projekty"
      aria-labelledby="projects-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
    >
      {/* Golden section divider */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "#d4a853" }} />
        <h2
          id="projects-heading"
          style={{
            fontSize: "10px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#d4a853",
            fontWeight: 500,
            fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          Wybrane Projekty
        </h2>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#d4a853" }} />
      </div>

      {/* Filter bar */}
      <div
        role="group"
        aria-label="Filtruj projekty"
        style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}
      >
        <FilterBtn active={activeTag === null} onClick={() => setActiveTag(null)}>
          Wszystkie
        </FilterBtn>
        {ALL_TAGS.map((tag) => (
          <FilterBtn key={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)}>
            {tag}
          </FilterBtn>
        ))}
      </div>

      {/* 3-column newspaper grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid #d4c9b8",
        }}
      >
        {filtered.length === 0 ? (
          <div
            style={{
              gridColumn: "1 / -1",
              padding: "64px 24px",
              textAlign: "center",
              color: "#8a7a65",
              fontSize: "14px",
              borderBottom: "1px solid #d4c9b8",
            }}
          >
            Brak projektów dla wybranego filtra.
          </div>
        ) : (
          filtered.map((project, index) => (
            <article
              key={project.id}
              style={{
                padding: "36px 28px",
                borderRight:
                  (index % 3 !== 2) ? "1px solid #d4c9b8" : "none",
                borderBottom: "1px solid #d4c9b8",
                display: "flex",
                flexDirection: "column",
                transition: "background-color 0.2s",
                cursor: "default",
              }}
              className="project-card"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#faf7f2";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              {/* Large muted index number */}
              <div
                className="project-num"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "68px",
                  fontWeight: "bold",
                  lineHeight: 1,
                  color: "#1a1208",
                  marginBottom: "20px",
                  userSelect: "none",
                  opacity: 0.12,
                  transition: "opacity 0.25s, color 0.25s",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1a1208",
                  lineHeight: 1.2,
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "#8a7a65",
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#b8a990",
                      border: "1px solid #d4c9b8",
                      padding: "4px 8px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View link */}
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#d4a853",
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  paddingBottom: "1px",
                  width: "fit-content",
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#d4a853")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent")
                }
              >
                Zobacz projekt
                <span>→</span>
              </a>
            </article>
          ))
        )}
      </div>

      <style>{`
        .project-card:hover .project-num {
          opacity: 1 !important;
          color: #d4a853 !important;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid article { border-right: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </motion.section>
  );
}

function FilterBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      style={{
        minHeight: "44px",
        padding: "0 18px",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        border: "1px solid",
        borderColor: active ? "#1a1208" : "#d4c9b8",
        backgroundColor: active ? "#1a1208" : "transparent",
        color: active ? "#f2ede8" : "#8a7a65",
        cursor: "pointer",
        transition: "all 0.15s",
        fontFamily: "inherit",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#1a1208";
          (e.currentTarget as HTMLButtonElement).style.color = "#1a1208";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4c9b8";
          (e.currentTarget as HTMLButtonElement).style.color = "#8a7a65";
        }
      }}
    >
      {children}
    </button>
  );
}
