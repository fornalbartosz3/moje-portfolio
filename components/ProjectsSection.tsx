"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";

const allTags = ["Next.js", "Tailwind", "React", "TypeScript"];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
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
        {allTags.map((tag) => (
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
            <Card className="h-full bg-gradient-to-br from-blue-100/80 to-slate-200/80 dark:from-blue-950/50 dark:to-slate-900/80 hover:from-blue-200/80 hover:to-slate-300/80 dark:hover:from-blue-900/50 dark:hover:to-slate-800/80 transition-all duration-300 cursor-pointer border-0 shadow-sm">
              <CardHeader className="pb-2 px-6 pt-6">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
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
  );
}
