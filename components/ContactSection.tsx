"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="bg-gray-100 dark:bg-gray-900 py-24">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Kontakt</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
          Chcesz się skontaktować? Napisz do mnie.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Imię
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jan Kowalski"
              className="rounded-lg px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-950 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jan@example.com"
              className="rounded-lg px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-950 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Cześć, chciałem zapytać..."
              className="rounded-lg px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-950 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
          </div>
          <Button type="submit" disabled={status === "sending"} className="w-full">
            {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </Button>
          {status === "success" && (
            <p className="text-center text-green-600 dark:text-green-400 text-sm">
              Wiadomość wysłana! Odezwę się wkrótce.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 dark:text-red-400 text-sm">
              Coś poszło nie tak. Spróbuj ponownie.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
