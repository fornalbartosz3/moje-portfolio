"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
export default function ProjectsSection() {
 
  return (
    <motion.section
      id="projekty"
      aria-labelledby="projects-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      className="projects-section"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
    >
      {/* Golden section divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
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

     

      {/* 3-column newspaper grid */}
      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid #d4c9b8",
        }}
      >
        {projects.length === 0 ? (
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
          projects.map((project, index) => (
            <article
              key={project.id}
              style={{
                padding: "36px 28px",
                borderRight: index % 3 !== 2 ? "1px solid #d4c9b8" : "none",
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

              {/* Links */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#d4a853")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent")
                    }
                  >
                    GitHub <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))
        )}
      </div>

      <style>{`
        .project-card:hover .project-num {
          opacity: 1 !important;
          color: #d4a853 !important;
        }
        @media (max-width: 640px) {
          .projects-section { padding-left: 16px !important; padding-right: 16px !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid article { border-right: none !important; padding: 24px 16px !important; }
        }
        @media (min-width: 641px) and (max-width: 768px) {
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

const linkStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "5px",
  fontSize: "10px",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#d4a853",
  textDecoration: "none",
  borderBottom: "1px solid transparent",
  paddingBottom: "1px",
  width: "fit-content",
  transition: "border-color 0.15s",
};

