"use client";

import { Prompt, PromptCategory } from "../lib/prompts";

const categoryColors: Record<PromptCategory, string> = {
  Copywriting: "bg-pink-100 text-pink-800",
  SEO: "bg-green-100 text-green-800",
  Code: "bg-blue-100 text-blue-800",
  Business: "bg-yellow-100 text-yellow-800",
  Créativité: "bg-purple-100 text-purple-800",
  Marketing: "bg-orange-100 text-orange-800",
};

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const handleBuy = () => {
    console.log(`Achat du prompt: ${prompt.title} (${prompt.price}€)`);
    alert(`Merci ! Achat simulé du prompt « ${prompt.title} » pour ${prompt.price}€.`);
  };

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[prompt.category]}`}
        >
          {prompt.category}
        </span>
        <span className="text-lg font-bold text-gray-900">{prompt.price}€</span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-gray-900">{prompt.title}</h3>
      <p className="mb-4 flex-1 text-sm text-gray-600">{prompt.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
          >
            #{tag}
          </span>
        ))}
      </div>

      <button
        onClick={handleBuy}
        className="mt-auto rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Acheter
      </button>
    </div>
  );
}
