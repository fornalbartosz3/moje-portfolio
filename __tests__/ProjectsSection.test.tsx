import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectsSection from "@/components/ProjectsSection";

describe("ProjectsSection", () => {
  describe("renderowanie", () => {
    it("renderuje nagłówek sekcji", () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Projekty");
    });

    it("renderuje wszystkie projekty na starcie", () => {
      render(<ProjectsSection />);
      expect(screen.getByText("Portfolio")).toBeInTheDocument();
      expect(screen.getByText("Projekt 2")).toBeInTheDocument();
      expect(screen.getByText("Projekt 3")).toBeInTheDocument();
    });

    it("renderuje przyciski filtrów dla każdego tagu", () => {
      render(<ProjectsSection />);
      expect(screen.getByRole("button", { name: "Wszystkie" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Next.js" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Tailwind" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "React" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "TypeScript" })).toBeInTheDocument();
    });

    it("renderuje opisy projektów", () => {
      render(<ProjectsSection />);
      expect(screen.getByText("Osobista strona portfolio zbudowana w Next.js i Tailwind CSS.")).toBeInTheDocument();
    });
  });

  describe("filtrowanie", () => {
    it("pokazuje tylko projekty z tagiem Next.js po kliknięciu filtra", async () => {
      const user = userEvent.setup();
      render(<ProjectsSection />);

      await user.click(screen.getByRole("button", { name: "Next.js" }));

      expect(screen.getByText("Portfolio")).toBeInTheDocument();
      expect(screen.queryByText("Projekt 2")).not.toBeInTheDocument();
      expect(screen.queryByText("Projekt 3")).not.toBeInTheDocument();
    });

    it("pokazuje tylko projekty z tagiem React po kliknięciu filtra", async () => {
      const user = userEvent.setup();
      render(<ProjectsSection />);

      await user.click(screen.getByRole("button", { name: "React" }));

      expect(screen.queryByText("Portfolio")).not.toBeInTheDocument();
      expect(screen.getByText("Projekt 2")).toBeInTheDocument();
      expect(screen.getByText("Projekt 3")).toBeInTheDocument();
    });

    it("przywraca wszystkie projekty po kliknięciu Wszystkie", async () => {
      const user = userEvent.setup();
      render(<ProjectsSection />);

      await user.click(screen.getByRole("button", { name: "React" }));
      await user.click(screen.getByRole("button", { name: "Wszystkie" }));

      expect(screen.getByText("Portfolio")).toBeInTheDocument();
      expect(screen.getByText("Projekt 2")).toBeInTheDocument();
      expect(screen.getByText("Projekt 3")).toBeInTheDocument();
    });

    it("pokazuje pusty wynik dla tagu bez pasujących projektów", async () => {
      const user = userEvent.setup();
      render(<ProjectsSection />);

      await user.click(screen.getByRole("button", { name: "Tailwind" }));

      expect(screen.getByText("Portfolio")).toBeInTheDocument();
      expect(screen.queryByText("Projekt 2")).not.toBeInTheDocument();
      expect(screen.queryByText("Projekt 3")).not.toBeInTheDocument();
    });
  });
});
