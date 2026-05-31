import { render, screen } from "@testing-library/react";
import PromptGrid from "../../components/PromptGrid";
import { Prompt } from "../../lib/prompts";

const mockPrompts: Prompt[] = [
  {
    id: "1",
    title: "Premier prompt",
    category: "Code",
    description: "Description 1",
    price: 10,
    tags: ["a"],
  },
  {
    id: "2",
    title: "Deuxième prompt",
    category: "Marketing",
    description: "Description 2",
    price: 20,
    tags: ["b"],
  },
];

describe("PromptGrid", () => {
  it("affiche la liste des prompts", () => {
    render(<PromptGrid prompts={mockPrompts} />);

    expect(screen.getByText("Premier prompt")).toBeInTheDocument();
    expect(screen.getByText("Deuxième prompt")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Acheter" })).toHaveLength(2);
  });

  it("affiche un message quand la liste est vide", () => {
    render(<PromptGrid prompts={[]} />);

    expect(
      screen.getByText("Aucun prompt disponible dans cette catégorie.")
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Acheter" })).not.toBeInTheDocument();
  });
});
