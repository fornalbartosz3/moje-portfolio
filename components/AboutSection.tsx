"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="o-mnie"
      className="max-w-4xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8">O mnie</h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
        Jestem początkującym developerem, który uczy się budować nowoczesne aplikacje webowe.
        Interesuję się frontendem, narzędziami AI i tworzeniem produktów od zera.
      </p>
    </motion.section>
  );
}
