import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/types/project";

const PROJECTS: Project[] = [
  {
    index: 1,
    title: "Portfolio",
    description:
      "Osobista strona portfolio w stylu magazynu prasowego. Zbudowana z myślą o wydajności i dostępności — Next.js 16, Tailwind CSS v4 i Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/fornalbartosz3/moje-portfolio",
    liveUrl: "https://moje-portfolio-dusky.vercel.app",
  },
  {
    index: 2,
    title: "WeatherNow",
    description:
      "Aplikacja pogodowa z danymi na żywo z OpenWeatherMap API. Wyszukiwanie miast, prognoza 5-dniowa i automatyczna geolokalizacja.",
    tags: ["React", "TypeScript"],
    githubUrl: "https://github.com/fornalbartosz3/weather-now",
    liveUrl: "https://weather-now-nine-pi.vercel.app",
  },
  {
    index: 3,
    title: "Hell Pizza",
    description:
      "Wizytówka fikcyjnej pizzerii z mrocznym, gotyckim charakterem. Animowane sekcje, filtrowalne menu, formularz rezerwacji z wysyłką maili i mapa Leaflet.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Leaflet"],
    githubUrl: "https://github.com/fornalbartosz3/hell-pizza",
    liveUrl: "https://hell-pizza.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projekty"
      aria-labelledby="projects-heading"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px" }}
    >
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
            whiteSpace: "nowrap",
          }}
        >
          Wybrane Projekty
        </h2>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#d4a853" }} />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 projects-grid"
        style={{ borderTop: "1px solid #d4c9b8" }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.index}
            project={project}
            isLastColumn={(i + 1) % 3 === 0}
          />
        ))}
      </div>

      <style>{`
        .project-card:hover { background-color: #faf7f2; }
        .project-card:hover .project-num {
          opacity: 1 !important;
          color: #d4a853 !important;
        }
        @media (max-width: 767px) {
          .projects-grid article { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
