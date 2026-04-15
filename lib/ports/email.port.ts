export interface ContactEmailPayload {
  name: string;
  email: string;
  message: string;
}

export interface EmailPort {
  sendContactEmail(payload: ContactEmailPayload): Promise<void>;
}
