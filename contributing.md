# Guide de contribution

Merci de l'intérêt pour AI Project Gallery. Avant de soumettre quoi que ce soit, lis le [manifeste](manifesto.md) — il définit ce qui mérite d'être ici.

---

## Soumettre un nouveau projet

### Prérequis obligatoires

Avant d'ouvrir une pull request, assure-toi que ton projet respecte **tous** ces points :

- [ ] Le projet est **déployé** avec une URL accessible (pas juste du code local)
- [ ] Il a un **README** avec : description claire, stack utilisée, lien de démo, instructions d'installation
- [ ] Il n'est **pas une copie** d'un tutoriel existant sans valeur ajoutée significative
- [ ] Il a été utilisé ou testé par **au moins un utilisateur réel** (toi ne compte pas)
- [ ] Il n'est **pas entièrement généré par IA** sans revue et personnalisation humaine
- [ ] La description dans cette galerie est **objective**, pas un pitch marketing

### Format d'entrée

Chaque entrée dans le README suit exactement ce format :

```md
- [Nom du Projet](https://lien-vers-le-repo#readme) - Description courte et objective. `Stack` `Déployé`
```

Règles de description :
- Commence par une majuscule, se termine par un point
- Décrit ce que fait le projet, pas ce qu'il est censé faire
- Maximum 15 mots
- Ne contient pas le mot "awesome", "incroyable", "révolutionnaire" ou tout autre superlatif

Exemples :
- ✅ `- [PromptCraft](…) - Générateur de briefs IA structurés avec scoring et historique.`
- ✅ `- [SaaS KPI Dashboard](…) - Tableau de bord de métriques SaaS avec simulation de données live.`
- ❌ `- [Mon Super Projet](…) - Un projet incroyable qui va changer ta façon de coder avec l'IA.`
- ❌ `- [MonProjet](…)` (pas de description)

### Format de la pull request

Le titre doit suivre exactement : `Add [Nom du Projet]`

- ✅ `Add PromptCraft`
- ❌ `Add awesome prompt tool`
- ❌ `Update README`
- ❌ `Added my project`

Dans le corps de la PR, inclure :
1. L'URL de la démo live
2. La catégorie choisie (voir `README.md#contents`)
3. En une phrase : pourquoi ce projet appartient à cette galerie

---

## Signaler un problème

Si un projet listé :
- N'est plus accessible (lien mort)
- A été archivé ou abandonné
- Ne respecte plus les critères du manifeste

Ouvre une **issue** avec le tag `maintenance` et explique le problème.

---

## Proposer une nouvelle catégorie

Une nouvelle catégorie est justifiée si elle contient au moins **3 projets** qui n'entrent pas clairement dans les catégories existantes. Ouvre une issue avec le tag `category` avant de coder quoi que ce soit.

---

## Code de conduite

Sois direct, respectueux, et constructif. Les reviews doivent pointer des problèmes concrets, pas juste dire "looks good" ou critiquer sans suggestion d'amélioration.

---

*Pour toute question, ouvre une issue plutôt que d'envoyer un message privé — les réponses publiques profitent à tous.*
