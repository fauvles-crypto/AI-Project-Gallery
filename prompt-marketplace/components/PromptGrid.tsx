import { Prompt } from "../lib/prompts";
import PromptCard from "./PromptCard";

interface PromptGridProps {
  prompts: Prompt[];
}

export default function PromptGrid({ prompts }: PromptGridProps) {
  if (prompts.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        Aucun prompt disponible dans cette catégorie.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} />
      ))}
    </div>
  );
}
