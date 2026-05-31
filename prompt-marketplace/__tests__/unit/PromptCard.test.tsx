import { render, screen, fireEvent } from "@testing-library/react";
import PromptCard from "../../components/PromptCard";
import { Prompt } from "../../lib/prompts";

const mockPrompt: Prompt = {
  id: "test-1",
  title: "Prompt de test",
  category: "SEO",
  description: "Une description de test pour le prompt.",
  price: 42,
  tags: ["test", "seo"],
};

describe("PromptCard", () => {
  it("affiche correctement les props du prompt", () => {
    render(<PromptCard prompt={mockPrompt} />);

    expect(screen.getByText("Prompt de test")).toBeInTheDocument();
    expect(screen.getByText("SEO")).toBeInTheDocument();
    expect(
      screen.getByText("Une description de test pour le prompt.")
    ).toBeInTheDocument();
    expect(screen.getByText("42€")).toBeInTheDocument();
    expect(screen.getByText("#test")).toBeInTheDocument();
    expect(screen.getByText("#seo")).toBeInTheDocument();
  });

  it("déclenche un achat simulé au clic sur le bouton Acheter", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<PromptCard prompt={mockPrompt} />);

    fireEvent.click(screen.getByRole("button", { name: "Acheter" }));

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Prompt de test")
    );
    expect(alertSpy).toHaveBeenCalled();

    logSpy.mockRestore();
    alertSpy.mockRestore();
  });
});
