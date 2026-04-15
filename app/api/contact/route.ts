import { NextRequest, NextResponse } from "next/server";
import { ResendEmailAdapter } from "@/lib/adapters/resend.adapter";
import type { EmailPort } from "@/lib/ports/email.port";

function getEmailAdapter(): EmailPort {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new ResendEmailAdapter(apiKey);
}

export async function POST(request: NextRequest) {
  let emailAdapter: EmailPort;
  try {
    emailAdapter = getEmailAdapter();
  } catch {
    return NextResponse.json({ error: "Serwer nie jest skonfigurowany." }, { status: 500 });
  }

  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Wszystkie pola są wymagane." }, { status: 400 });
  }

  try {
    await emailAdapter.sendContactEmail({ name, email, message });
  } catch {
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
