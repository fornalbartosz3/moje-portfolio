export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">Bartek</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="#umiejetnosci" className="hover:text-white transition-colors">Umiejętności</a>
          <a href="/projekty" className="hover:text-white transition-colors">Projekty</a>
          <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}