"use client";

import { useMemo, useState } from "react";
import { prompts, categories } from "../lib/prompts";
import PromptGrid from "../components/PromptGrid";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPrompts = useMemo(() => {
    if (!activeCategory) {
      return prompts;
    }
    return prompts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Prompt Marketplace
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Achetez des prompts IA premium pour booster votre productivité.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            activeCategory === null
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Tous
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="mb-6 text-center text-sm text-gray-500">
        {filteredPrompts.length} prompt{filteredPrompts.length > 1 ? "s" : ""} disponible
        {filteredPrompts.length > 1 ? "s" : ""}
      </p>

      <PromptGrid prompts={filteredPrompts} />
    </main>
  );
}
