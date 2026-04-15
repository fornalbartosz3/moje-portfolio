import type { EmailPort, ContactEmailPayload } from "@/lib/ports/email.port";

export class FakeEmailAdapter implements EmailPort {
  readonly sentEmails: ContactEmailPayload[] = [];

  async sendContactEmail(payload: ContactEmailPayload): Promise<void> {
    console.log("[FakeEmailAdapter] sendContactEmail:", payload);
    this.sentEmails.push(payload);
  }
}
