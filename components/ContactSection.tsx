"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
    <motion.section
      id="kontakt"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        backgroundColor: "#e8ddd0",
        borderTop: "1px solid #d4c9b8",
        padding: "96px 0",
      }}
    >
      <div className="contact-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="contact-cols"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
        >
          {/* Left — editorial heading */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "#d4a853",
                marginBottom: "18px",
              }}
            >
              Kontakt
            </div>

            <h2
              id="contact-heading"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: "bold",
                lineHeight: 1.1,
                color: "#1a1208",
                marginBottom: "20px",
              }}
            >
              Porozmawiajmy<br />o projekcie.
            </h2>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#6a5a48",
                maxWidth: "38ch",
                marginBottom: "40px",
              }}
            >
              Masz pomysł albo pytanie? Napisz do mnie — odpiszę szybko.
            </p>

            {/* Contact meta */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Czas odpowiedzi", value: "< 24h" },
                { label: "Dostępność", value: "Do ustalenia" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "baseline",
                    paddingBottom: "12px",
                    borderBottom: "1px solid #d4c9b8",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#b8a990",
                      minWidth: "120px",
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#1a1208" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <FormField
              id="name"
              label="Imię"
              type="text"
              placeholder="Jan Kowalski"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <FormField
              id="email"
              label="Email"
              type="email"
              placeholder="jan@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />

            {/* Textarea */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#8a7a65",
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                Wiadomość
                <span style={{ color: "#d4a853" }} aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Cześć, chciałem zapytać…"
                aria-required="true"
                style={{
                  padding: "12px 14px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  border: "1px solid #d4c9b8",
                  backgroundColor: "#f2ede8",
                  color: "#1a1208",
                  outline: "none",
                  resize: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.15s",
                  minHeight: "140px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a853")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d4c9b8")}
              />
            </div>

            {/* Required note */}
            <p style={{ fontSize: "11px", color: "#b8a990" }}>
              <span style={{ color: "#d4a853" }}>*</span> Pola wymagane
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="contact-submit"
            style={{
                minHeight: "48px",
                padding: "0 28px",
                backgroundColor: "#1a1208",
                color: "#f2ede8",
                border: "none",
                fontSize: "11px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: status === "sending" ? "default" : "pointer",
                opacity: status === "sending" ? 0.6 : 1,
                transition: "background-color 0.15s",
                fontFamily: "inherit",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => {
                if (status !== "sending")
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#d4a853";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a1208";
              }}
            >
              {status === "sending" ? "Wysyłanie…" : "Wyślij wiadomość"}
            </button>

            {/* Feedback messages */}
            {status === "success" && (
              <p
                role="status"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#6a8a5a",
                  padding: "12px 0",
                  borderTop: "1px solid #d4c9b8",
                }}
              >
                ✓ Wiadomość wysłana — odezwę się wkrótce.
              </p>
            )}
            {status === "error" && (
              <p
                role="alert"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#c0392b",
                  padding: "12px 0",
                  borderTop: "1px solid #d4c9b8",
                }}
              >
                ✕ Coś poszło nie tak — spróbuj ponownie.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-cols { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .contact-inner { padding-left: 16px !important; padding-right: 16px !important; }
          .contact-submit { align-self: stretch !important; width: 100% !important; }
        }
      `}</style>
    </motion.section>
  );
}

function FormField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#8a7a65",
          display: "flex",
          gap: "4px",
          alignItems: "center",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#d4a853" }} aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        aria-required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        style={{
          minHeight: "44px",
          padding: "0 14px",
          fontSize: "14px",
          border: "1px solid #d4c9b8",
          backgroundColor: "#f2ede8",
          color: "#1a1208",
          outline: "none",
          fontFamily: "inherit",
          transition: "border-color 0.15s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#d4a853")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#d4c9b8")}
      />
    </div>
  );
}
