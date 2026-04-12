export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
        <p className="text-gray-400 mb-8">Chcesz się skontaktować? Napisz do mnie.</p>
        <a
          href="mailto:twoj@email.com"
          className="bg-white text-gray-950 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          Napisz maila
        </a>
      </div>
    </section>
  );
}
