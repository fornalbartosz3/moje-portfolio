import Navbar from "@/components/Navbar";

export default function Projekty() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4">Projekty</h1>
        <p className="text-gray-400">Tu będą moje projekty.</p>
      </div>
    </main>
  );
}