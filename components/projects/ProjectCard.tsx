import type { Project } from "@/lib/types/project";

interface Props {
  project: Project;
  isLastColumn?: boolean;
}

export default function ProjectCard({ project, isLastColumn }: Props) {
  return (
    <article
      style={{
        padding: "36px 28px",
        borderRight: isLastColumn ? "none" : "1px solid #d4c9b8",
        borderBottom: "1px solid #d4c9b8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "68px",
          fontWeight: "bold",
          lineHeight: 1,
          color: "#1a1208",
          marginBottom: "20px",
          userSelect: "none",
          opacity: 0.12,
        }}
      >
        {String(project.index).padStart(2, "0")}
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

      <div style={{ display: "flex", gap: "20px" }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link text-[#A07840] uppercase tracking-widest text-xs border-b border-transparent hover:border-[#A07840] transition-colors inline-flex items-center gap-1"
        >
          GITHUB{" "}
          <span className="inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
            ↗
          </span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-[#A07840] uppercase tracking-widest text-xs border-b border-transparent hover:border-[#A07840] transition-colors inline-flex items-center gap-1"
          >
            LIVE DEMO{" "}
            <span className="inline-block transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
              ↗
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
