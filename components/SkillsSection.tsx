"use client";

import { motion } from "framer-motion";

const skills = ["HTML/CSS", "Git & GitHub", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React", "Claude AI"];

export default function SkillsSection() {
  return (
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
          {skills.map((skill) => (
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
  );
}
