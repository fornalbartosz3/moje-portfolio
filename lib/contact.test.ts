import { FakeEmailAdapter } from "@/lib/adapters/fake-email.adapter";

describe("FakeEmailAdapter", () => {
  it("zapisuje wysłanego emaila w sentEmails", async () => {
    const adapter = new FakeEmailAdapter();
    const payload = { name: "Jan", email: "jan@example.com", message: "Cześć!" };

    await adapter.sendContactEmail(payload);

    expect(adapter.sentEmails).toHaveLength(1);
    expect(adapter.sentEmails[0]).toEqual(payload);
  });

  it("akumuluje wiele wiadomości", async () => {
    const adapter = new FakeEmailAdapter();

    await adapter.sendContactEmail({ name: "A", email: "a@example.com", message: "msg1" });
    await adapter.sendContactEmail({ name: "B", email: "b@example.com", message: "msg2" });

    expect(adapter.sentEmails).toHaveLength(2);
    expect(adapter.sentEmails[1].name).toBe("B");
  });

  it("spełnia kontrakt EmailPort — nie rzuca wyjątku", async () => {
    const adapter = new FakeEmailAdapter();

    await expect(
      adapter.sendContactEmail({ name: "Test", email: "t@t.com", message: "hello" })
    ).resolves.toBeUndefined();
  });
});
