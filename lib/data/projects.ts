import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Osobista strona portfolio w stylu magazynu prasowego. Zbudowana z myślą o wydajności i dostępności — Next.js 16, Tailwind CSS v4 i Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/fornalbartosz3/moje-portfolio",
    demo: "/",
  },
  {
    id: 2,
    title: "WeatherNow",
    description:
      "Aplikacja pogodowa z danymi na żywo z OpenWeatherMap API. Wyszukiwanie miast, prognoza 5-dniowa i automatyczna geolokalizacja.",
    tags: ["React", "TypeScript"],
    github: "https://github.com/fornalbartosz3/weather-now",
    demo: "/"
  },
  {
    id: 3,
    title: "TaskFlow",
    description:
      "Menedżer zadań z drag-and-drop, etykietami i filtrowaniem. Dane persystowane w localStorage — bez backendu, działa offline.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/fornalbartosz3/task-flow",
  },
];
