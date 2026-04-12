import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Serwer nie jest skonfigurowany." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Wszystkie pola są wymagane." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL ?? "twoj@email.com",
    subject: `Nowa wiadomość od ${name}`,
    text: `Imię: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
