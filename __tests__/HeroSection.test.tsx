import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Cześć, jestem Bartek");
  });

  it("renders the subtitle", () => {
    render(<HeroSection />);
    expect(screen.getByText("Uczę się budować aplikacje webowe")).toBeInTheDocument();
  });

  it("renders the CTA link pointing to #o-mnie", () => {
    render(<HeroSection />);
    const link = screen.getByRole("link", { name: "Dowiedz się więcej" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#o-mnie");
  });
});
