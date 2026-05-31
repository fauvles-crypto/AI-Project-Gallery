export type PromptCategory =
  | "Copywriting"
  | "SEO"
  | "Code"
  | "Business"
  | "Créativité"
  | "Marketing";

export interface Prompt {
  id: string;
  title: string;
  category: PromptCategory;
  description: string;
  price: number;
  tags: string[];
}

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Pages de vente qui convertissent",
    category: "Copywriting",
    description:
      "Un prompt structuré pour rédiger des pages de vente persuasives en suivant le framework AIDA.",
    price: 19,
    tags: ["copywriting", "vente", "AIDA", "conversion"],
  },
  {
    id: "2",
    title: "Cluster de contenu SEO",
    category: "SEO",
    description:
      "Génère un cocon sémantique complet avec mots-clés principaux, secondaires et idées d'articles.",
    price: 24,
    tags: ["seo", "mots-clés", "contenu", "stratégie"],
  },
  {
    id: "3",
    title: "Revue de code & refactoring",
    category: "Code",
    description:
      "Analyse ton code, repère les bugs potentiels et propose un refactoring propre et testable.",
    price: 29,
    tags: ["code", "refactoring", "review", "qualité"],
  },
  {
    id: "4",
    title: "Plan d'affaires en 1 page",
    category: "Business",
    description:
      "Construis un business plan synthétique avec proposition de valeur, marché cible et modèle économique.",
    price: 34,
    tags: ["business", "stratégie", "startup", "lean"],
  },
  {
    id: "5",
    title: "Générateur d'idées créatives",
    category: "Créativité",
    description:
      "Débloque ta créativité avec des angles originaux pour tes projets artistiques et narratifs.",
    price: 14,
    tags: ["créativité", "brainstorming", "idées", "storytelling"],
  },
  {
    id: "6",
    title: "Campagne marketing multicanale",
    category: "Marketing",
    description:
      "Planifie une campagne marketing cohérente sur les réseaux sociaux, l'email et le paid.",
    price: 27,
    tags: ["marketing", "campagne", "social", "email"],
  },
];

export function getPrompts(category?: string): Prompt[] {
  if (!category) {
    return prompts;
  }
  return prompts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export const categories: PromptCategory[] = [
  "Copywriting",
  "SEO",
  "Code",
  "Business",
  "Créativité",
  "Marketing",
];
