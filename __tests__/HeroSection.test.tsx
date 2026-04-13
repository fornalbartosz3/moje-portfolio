import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Bartek.");
  });

  it("renders the description text", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Buduję nowoczesne aplikacje webowe/i)).toBeInTheDocument();
  });

  it("renders the primary CTA link pointing to #projekty", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: /Zobacz projekty/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#projekty");
  });

  it("renders the secondary CTA link pointing to #kontakt", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: /Napisz do mnie/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#kontakt");
  });

  it("renders the scroll indicator link", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: /Przewiń w dół/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#o-mnie");
  });
});
