"use client";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Osobista strona portfolio zbudowana w Next.js i Tailwind CSS.",
    tags: ["Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "Projekt 2",
    description: "Opis kolejnego projektu.",
    tags: ["React", "TypeScript"],
  },
  {
    id: 3,
    title: "Projekt 3",
    description: "Opis kolejnego projektu.",
    tags: ["React", "TypeScript"],
  },
];



import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";


export default function Home() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Nawigacja */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">Bartek</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#o-mnie" className="hover:text-white transition-colors">O mnie</a>
            <a href="#umiejetnosci" className="hover:text-white transition-colors">Umiejętności</a>
            <a href="/projekty" className="hover:text-white transition-colors">Projekty</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

     {/* Hero */}
<section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
  <motion.h1
    className="text-5xl font-bold mb-4"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    Cześć, jestem Bartek
  </motion.h1>
  <motion.p
    className="text-xl text-gray-400 mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    Uczę się budować aplikacje webowe
  </motion.p>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
  >
    <Button asChild size="lg" variant="outline">
      <a href="#o-mnie">Dowiedz się więcej</a>
    </Button>
  </motion.div>
</section>

      {/* O mnie */}
      <motion.section
  id="o-mnie"
  className="max-w-4xl mx-auto px-6 py-24"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold mb-8">O mnie</h2>
  <p className="text-gray-400 text-lg leading-relaxed">
          Jestem początkującym developerem, który uczy się budować nowoczesne aplikacje webowe. 
          Interesuję się frontendem, narzędziami AI i tworzeniem produktów od zera.
        </p>
      </motion.section>

      {/* Umiejętności */}
     <motion.section
        id="umiejetnosci"
        className="bg-gray-900 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Umiejętności</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["HTML/CSS", "Git & GitHub", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React", "Claude AI"].map((skill) => (
              <motion.div
          key={skill}
          className="bg-gray-800 rounded-lg p-4 text-center text-sm font-medium hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
>
  {skill}
</motion.div>
            ))}
          </div>
        </div>
      </motion.section>

{/* Projekty */}
<motion.section
  id="projekty"
  className="max-w-4xl mx-auto px-6 py-24"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold mb-4">Projekty</h2>
<div className="flex gap-2 flex-wrap mb-8">
  <Button
    variant={activeTag === null ? "default" : "outline"}
    size="sm"
    onClick={() => setActiveTag(null)}
  >
    Wszystkie
  </Button>
  {["Next.js", "Tailwind", "React", "TypeScript"].map((tag) => (
    <Button
      key={tag}
      variant={activeTag === tag ? "default" : "outline"}
      size="sm"
      onClick={() => setActiveTag(tag)}
    >
      {tag}
    </Button>
  ))}
</div>
  <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
    {filteredProjects.map((project) => (
      <motion.div
        key={project.id}
        className="h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: project.id * 0.1 }}
        viewport={{ once: true }}
>
  <Card className="h-full border-0 bg-gradient-to-br from-blue-950/50 to-slate-900/80 p-[1px] hover:from-blue-900/50 hover:to-slate-800/80 transition-all duration-300 cursor-pointer">
          <CardHeader className="pb-2 px-6 pt-6">
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6 space-y-4">
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <p className="text-gray-400 mb-8">Chcesz się skontaktować? Napisz do mnie.</p>
          <a href="mailto:twoj@email.com" className="bg-white text-gray-950 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Napisz maila
          </a>
        </div>
      </section>

    </main>
  );
}