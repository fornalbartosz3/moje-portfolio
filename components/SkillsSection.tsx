"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Języki",
    skills: ["HTML / CSS", "TypeScript", "JavaScript"],
  },
  {
    category: "Frameworki",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Narzędzia",
    skills: ["Git & GitHub", "Vercel", "Claude AI"],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="umiejetnosci"
      aria-labelledby="skills-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        backgroundColor: "#e8ddd0",
        borderTop: "1px solid #d4c9b8",
        borderBottom: "1px solid #d4c9b8",
        padding: "80px 0",
      }}
    >
      <div className="skills-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Divider label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "#d4c9b8" }} />
          <h2
            id="skills-heading"
            style={{
              fontSize: "10px",
              letterSpacing: "0.44em",
              textTransform: "uppercase",
              color: "#d4a853",
              fontWeight: 500,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            Technologie
          </h2>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#d4c9b8" }} />
        </div>

        {/* Three category columns */}
        <div
          className="skills-cols grid grid-cols-1 md:grid-cols-3"
          style={{
            gap: "0",
            border: "1px solid #d4c9b8",
          }}
        >
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.category}
              style={{
                borderRight: gi < SKILL_GROUPS.length - 1 ? "1px solid #d4c9b8" : "none",
              }}
            >
              {/* Category header */}
              <div
                style={{
                  padding: "14px 24px",
                  borderBottom: "1px solid #d4c9b8",
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#b8a990",
                  backgroundColor: "#e0d4c4",
                }}
              >
                {group.category}
              </div>

              {/* Skills list */}
              {group.skills.map((skill, si) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: gi * 0.1 + si * 0.04 }}
                  viewport={{ once: true }}
                  style={{
                    padding: "18px 24px",
                    borderBottom: si < group.skills.length - 1 ? "1px solid #d4c9b8" : "none",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "#1a1208",
                    backgroundColor: "#e8ddd0",
                    cursor: "default",
                    transition: "background-color 0.15s, color 0.15s, padding-left 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  whileHover={{
                    backgroundColor: "#1a1208",
                    color: "#f2ede8",
                    paddingLeft: "32px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      backgroundColor: "#d4a853",
                      flexShrink: 0,
                    }}
                  />
                  {skill}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .skills-inner { padding-left: 16px !important; padding-right: 16px !important; }
          .skills-cols > div { border-right: none !important; }
          .skills-cols > div:not(:last-child) { border-bottom: 1px solid #d4c9b8; }
        }
      `}</style>
    </motion.section>
  );
}
