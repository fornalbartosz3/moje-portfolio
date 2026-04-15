import { Resend } from "resend";
import type { EmailPort, ContactEmailPayload } from "@/lib/ports/email.port";

export class ResendEmailAdapter implements EmailPort {
  private resend: Resend;

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async sendContactEmail({ name, email, message }: ContactEmailPayload): Promise<void> {
    const { error } = await this.resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "twoj@email.com",
      subject: `Nowa wiadomość od ${name}`,
      text: `Imię: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      throw new Error(`Resend error: ${error.message}`);
    }
  }
}
