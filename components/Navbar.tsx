"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-gray-950 dark:text-white">Bartek</span>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-gray-950 dark:hover:text-white transition-colors">Home</a>
          <a href="/#umiejetnosci" className="hover:text-gray-950 dark:hover:text-white transition-colors">Umiejętności</a>
          <a href="/projekty" className="hover:text-gray-950 dark:hover:text-white transition-colors">Projekty</a>
          <a href="/#kontakt" className="hover:text-gray-950 dark:hover:text-white transition-colors">Kontakt</a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Przełącz motyw"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
