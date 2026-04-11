export default function Home() {
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
        <h1 className="text-5xl font-bold mb-4">Cześć, jestem Bartek</h1>
        <p className="text-xl text-gray-400 mb-8">Uczę się budować aplikacje webowe</p>
        <a href="#o-mnie" className="bg-white text-gray-950 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
          Dowiedz się więcej
        </a>
      </section>

      {/* O mnie */}
      <section id="o-mnie" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">O mnie</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Jestem początkującym developerem, który uczy się budować nowoczesne aplikacje webowe. 
          Interesuję się frontendem, narzędziami AI i tworzeniem produktów od zera.
        </p>
      </section>

      {/* Umiejętności */}
      <section id="umiejetnosci" className="bg-gray-900 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Umiejętności</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["HTML/CSS", "Git & GitHub", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "React", "Claude AI"].map((skill) => (
              <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projekty */}
      <section id="projekty" className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">Projekty</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="font-bold text-lg mb-2">Portfolio</h3>
            <p className="text-gray-400 text-sm mb-4">Osobista strona portfolio zbudowana w Next.js i Tailwind CSS.</p>
            <div className="flex gap-2">
              <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Next.js</span>
              <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 border-dashed flex items-center justify-center text-gray-600">
            Kolejny projekt wkrótce...
          </div>
        </div>
      </section>

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