"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Kula fioletowa — lewy górny róg */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl -z-10"
        style={{ animation: "orb-pulse 6s ease-in-out infinite" }}
      />
      {/* Kula niebieska — prawy dolny róg */}
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl -z-10"
        style={{ animation: "orb-pulse 8s ease-in-out infinite 2s" }}
      />
      {/* Kula cyan — prawy górny róg */}
      <div
        className="absolute -top-16 right-0 w-72 h-72 rounded-full bg-cyan-500/30 blur-3xl -z-10"
        style={{ animation: "orb-pulse 7s ease-in-out infinite 4s" }}
      />

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Cześć, jestem Bartek
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 dark:text-gray-400 mb-8"
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
  );
}
