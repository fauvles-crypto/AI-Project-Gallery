# Prompt Marketplace

Mini SaaS de vente de prompts IA premium. Une application Next.js 14 qui permet de parcourir, filtrer par catégorie et acheter (simulation) des prompts IA.

## Stack technique

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Jest** + **React Testing Library** + **jest-environment-jsdom** pour les tests

## Fonctionnalités

- Catalogue de prompts présentés sous forme de cartes (titre, badge catégorie coloré, description, prix en €, tags)
- Filtres par catégorie (Copywriting, SEO, Code, Business, Créativité, Marketing)
- Compteur de prompts disponibles
- Bouton « Acheter » qui simule un achat
- API Route `GET /api/prompts` avec filtre optionnel par catégorie

## Structure

```
prompt-marketplace/
├── app/
│   ├── layout.tsx              # Layout racine
│   ├── page.tsx                # Page principale (liste + filtres)
│   ├── globals.css             # Directives Tailwind
│   └── api/prompts/route.ts    # API GET /api/prompts
├── components/
│   ├── PromptCard.tsx          # Carte d'un prompt
│   └── PromptGrid.tsx          # Grille responsive de cartes
├── lib/
│   └── prompts.ts              # Type Prompt + données mock
└── __tests__/                  # Tests unitaires & d'intégration
```

## Lancer le projet

```bash
cd prompt-marketplace
npm install
npm run dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

Autres scripts :

```bash
npm run build   # Build de production
npm run start   # Lance le build de production
```

## Lancer les tests

```bash
npm test
```

Les tests couvrent :

- **`__tests__/unit/PromptCard.test.tsx`** : rendu des props et clic sur le bouton « Acheter »
- **`__tests__/unit/PromptGrid.test.tsx`** : rendu de la liste et cas de la liste vide
- **`__tests__/integration/api-prompts.test.ts`** : `GET /api/prompts` (statut 200 + données) et filtre par catégorie

## API

`GET /api/prompts`

Retourne tous les prompts :

```json
{ "data": [ ... ], "total": 6 }
```

`GET /api/prompts?category=SEO`

Filtre les prompts par catégorie.
