# Rapport UI/UX 2026 — Eurin Hash

> **Projet :** `eurinhash-portofolio`
> **Date de l’audit :** 24 septembre 2026
> **Objet :** déterminer la meilleure direction UI/UX pour un portfolio d’architecte logiciel, cloud, cybersécurité, IA appliquée et produits numériques.

---

## 1. Résumé exécutif

La direction recommandée est :

# **System Map Editorial — Obsidian / Signal Lime**

Le site doit devenir un **cabinet d’architecture éditorial** : sombre, précis, structuré et crédible, avec une preuve visuelle de la manière dont les systèmes sont pensés.

L’objectif n’est pas de rendre le site spectaculaire à tout prix. Il s’agit de faire comprendre en quelques secondes :

1. qui est Eurin Hash ;
2. quels problèmes techniques sont résolus ;
3. comment les systèmes sont structurés ;
4. quelles décisions produisent de la valeur ;
5. pourquoi ce profil est différent d’un portfolio de développeur générique.

La signature visuelle recommandée est une **System Map** : une représentation légère des flux, composants et décisions qui relie l’intention produit à l’architecture, à la sécurité et au déploiement.

---

## 2. Analyse de l’existant

### Éléments à conserver

- le fond sombre ;
- l’accent lime existant ;
- la typographie de grande taille ;
- la structure éditoriale ;
- la liste de projets ;
- l’absence de surcharge graphique ;
- la présence d’une page Contact claire.

### Points faibles

- trop de sections visuellement similaires ;
- beaucoup de cartes ou de blocs avec la même structure ;
- manque de preuves concrètes sur les projets ;
- manque de diagrammes d’architecture ;
- manque de résultats mesurables ;
- manque de récit de problème, contrainte, décision et impact ;
- pas assez de différence entre l’accueil et les études de cas ;
- les pages Services, Écosystème et Communauté ne sont pas visibles dans la navigation principale ;
- les études de cas restent encore trop génériques.

### Conclusion

La base visuelle est correcte, mais elle doit évoluer d’une simple vitrine vers une **présentation de preuves d’architecture**.

---

## 3. Tendances UI/UX 2026 retenues

### 3.1 Moins de spectacle, davantage de preuve

Les interfaces de sécurité et de technologies matures privilégient de plus en plus la clarté, l’état réel, les preuves et les décisions plutôt que les boucliers, grilles, halos et effets de panique.

Pour ce projet :

- le lime doit être un signal d’action ou d’état ;
- il ne doit pas être utilisé comme simple décoration ;
- les projets doivent afficher des preuves, pas seulement des adjectifs.

### 3.2 Typographie expressive

Les typographies de 2026 deviennent plus charakterisées, avec des titres plus forts, des combinaisons de polices et des usages plus expressifs de la typographie variable.

Pour Eurin Hash :

- titres : `Space Grotesk` ;
- texte : `Inter` ;
- labels techniques : `JetBrains Mono`.

### 3.3 Motion utile et performant

Les animations doivent :

- guider le regard ;
- expliquer une transition ;
- révéler une information ;
- confirmer une action.

Les effets recommandés :

- révélations au scroll ;
- lignes de progression ;
- transitions de survol ;
- construction progressive d’un diagramme ;
- micro-interactions discrètes.

Les effets à éviter :

- particules permanentes ;
- 3D coûteux ;
- défilement détourné ;
- préchargeurs longs ;
- animations qui bloquent l’interaction ;
- effets qui dégradent l’INP.

### 3.4 Accessibilité WCAG 2.2

Le design doit intégrer dès le départ :

- contraste des textes et composants ;
- focus clavier visible ;
- focus jamais masqué ;
- cibles tactiles d’au moins 44 px ;
- navigation clavier complète ;
- hiérarchie `h1 → h2 → h3` ;
- structure sémantique ;
- support de `prefers-reduced-motion`.

### 3.5 Performance comme priorité de design

Le LCP doit rester inférieur ou égal à 2,5 secondes pour au moins 75 % des visites. Le portfolio doit privilégier :

- HTML initial ;
- CSS natif ;
- SVG ;
- images optimisées ;
- polices chargées de manière contrôlée ;
- JavaScript limité ;
- pas de WebGL lourd sans raison fonctionnelle.

---

## 4. Positionnement recommandé

### Promesse principale

> **Je transforme des idées complexes en systèmes clairs, fiables et évolutifs.**

### Sous-titre recommandé

> Architecture produit, ingénierie logicielle, cloud, cybersécurité et IA appliquée.

### Persona du visiteur

Le visiteur principal est :

- un fondateur ou dirigeant qui a un problème technique complexe ;
- un responsable produit qui cherche une architecture claire ;
- une équipe technique qui veut améliorer un système existant ;
- un partenaire qui veut comprendre la méthode de travail.

Le visiteur doit pouvoir comprendre rapidement :

- le niveau d’expertise ;
- les domaines de compétence ;
- la capacité à traiter un problème ambigu ;
- la différence entre une idée et un système réellement maintenable.

---

## 5. Design system recommandé

### 5.1 Couleurs

```css
--canvas: #080A0B;
--surface-1: #0E1211;
--surface-2: #141917;
--surface-3: #1A201D;

--text-primary: #F3F5EF;
--text-secondary: #A7B0A9;
--text-muted: #6B756E;

--line-subtle: rgba(255, 255, 255, 0.06);
--line-default: rgba(255, 255, 255, 0.10);
--line-strong: rgba(255, 255, 255, 0.18);

--signal-lime: #C5F441;
--signal-cyan: #86D9D1;
```

Règles :

- le lime est réservé aux actions, états actifs et repères importants ;
- le cyan est réservé aux données et aux flux ;
- le rouge, le vert et l’ambre ne servent qu’à représenter un statut ;
- aucune information ne doit dépendre uniquement de la couleur.

### 5.2 Typographie

```text
Space Grotesk → titres
Inter         → texte courant
JetBrains Mono → labels, statuts, données
```

Échelle de référence :

```text
12 px  → labels
13 px  → métadonnées
16 px  → texte courant
18 px  → résumé important
24 px  → titre de section
32 px  → titre de projet
64 px+ → hero
```

### 5.3 Grille

- conteneur maximum : 1280 px ;
- grille principale : 12 colonnes ;
- unité d’espacement : 8 px ;
- gouttière desktop : 24–32 px ;
- gouttière mobile : 16–20 px ;
- sections : 96–144 px de respiration verticale ;
- titres : tracking négatif léger ;
- labels : tracking positif et uppercase.

### 5.4 Profondeur

Stratégie recommandée : **borders-only**.

- pas d’ombres lourdes ;
- bordures fines ;
- surfaces légèrement différentes ;
- rayon de 4 à 8 px ;
- glassmorphism réservé à la navigation, si nécessaire ;
- aucune pile de cartes ombrées.

---

## 6. Signature : la System Map

La System Map est l’élément qui peut rendre ce portfolio reconnaissable.

Elle représente les relations entre :

```text
INTENTION
   ↓
ARCHITECTURE
   ↓
SÉCURITÉ
   ↓
PRODUIT
   ↓
DÉPLOIEMENT
```

Elle peut apparaître :

- discrètement dans le hero ;
- dans les études de cas ;
- sur la page Architecture ;
- sur la page Services.

Elle doit être construite avec des lignes fines, des nœuds, des labels monospace et des annotations techniques. Elle ne doit pas devenir une animation 3D de science-fiction.

---

## 7. Nouvelle structure de l’accueil

### Hero

```text
ARCHITECTE DES SYSTÈMES COMPLEXES

Je transforme des idées
en produits fiables,
sécurisés et évolutifs.

[Voir les projets] [Parlons de votre projet]
```

Un panneau secondaire peut montrer quatre signaux :

```text
ARCHITECTURE  ● STABLE
SECURITY      ● BUILT-IN
AI            ● APPLIED
CLOUD         ● RESILIENT
```

Ce panneau doit rester simple et informatif, sans devenir un dashboard.

### Projets

Chaque projet doit présenter :

- un numéro ;
- un nom ;
- une catégorie ;
- une phrase de problème ;
- une ou plusieurs technologies réellement utilisées ;
- un lien vers l’étude de cas.

### Méthode

```text
01 — COMPRENDRE
Identifier le problème réel.

02 — STRUCTURER
Transformer les contraintes en architecture.

03 — SÉCURISER
Intégrer la confiance dès la conception.

04 — ÉVOLUER
Construire pour durer, mesurer et améliorer.
```

### Contact

```text
Vous construisez un système complexe ?

Donnons-lui une structure claire.
```

---

## 8. Nouveau template des études de cas

Chaque étude de cas doit suivre le même récit :

1. **Contexte** — quel problème existait ?
2. **Contraintes** — quelles limites ont été prises en compte ?
3. **Décision** — quelle architecture a été choisie ?
4. **Système** — quels composants et flux ont été conçus ?
5. **Sécurité** — quelles données et quels accès sont protégés ?
6. **Résultat** — qu’est-ce qui a changé concrètement ?
7. **Suite** — quelles pistes restent ouvertes ?

Les sections sécurité et résultats ne doivent pas être séparées du contexte. Elles doivent expliquer les décisions et non simplement remplir une checklist.

---

## 9. Motion plan

### Durées

```text
Micro-interaction : 160–220 ms
Transition de carte : 220–320 ms
Révélation de section : 400–700 ms
```

### Règles

- animer principalement `transform` et `opacity` ;
- ne pas animer `width`, `top` ou `height` pour les transitions principales ;
- respecter `prefers-reduced-motion` ;
- ne jamais rendre une information dépendante d’une animation ;
- privilégier le CSS natif pour les révélations simples ;
- utiliser une librairie seulement pour une séquence réellement complexe.

---

## 10. Accessibilité et qualité

Critères de recette :

- toutes les pages ont un titre unique et explicite ;
- un seul `h1` par page ;
- navigation clavier complète ;
- focus visible sur fond sombre ;
- contraste vérifié pour le texte secondaire ;
- aucune action disponible uniquement au survol ;
- liens avec un but compréhensible ;
- `lang="fr"` ;
- `prefers-reduced-motion` ;
- test à 320 px de largeur ;
- test au clavier ;
- test avec contraste renforcé ;
- LCP inférieur ou égal à 2,5 s ;
- aucune erreur JavaScript au chargement.

---

## 11. Ce qu’il faut éviter

- une homepage qui ressemble à un dashboard ;
- des cartes toutes identiques ;
- des logos de technologiesalignés sans raison ;
- des statistiques inventées ;
- des badges « expert IA » ou « hacker » ;
- des halos ou grilles cyber ;
- du glassmorphism généralisé ;
- des animations permanentes ;
- des decks 3D coûteux ;
- des paragraphes de présentation génériques ;
- des études de cas qui ne montrent ni problème ni résultat.

---

## 12. Plan de mise en œuvre

### Phase 1 — Système visuel

- tokens ;
- typographies ;
- grille ;
- boutons ;
- navigation ;
- liens ;
- composants de cartes ;
- contrastes.

### Phase 2 — Accueil

- hero éditorial ;
- System Map ;
- section méthode ;
- projets mis en avant ;
- CTA.

### Phase 3 — Études de cas

- template narratif ;
- sections contexte, contraintes, décisions, sécurité, résultats ;
- diagrammes ;
- page 404.

### Phase 4 — Navigation et contenu

- ajouter Services, Écosystème et Communauté à la navigation ;
- compléter le Journal ;
- compléter les Laboratoires ;
- compléter les Services ;
- publier de vraies preuves de projets.

### Phase 5 — Qualité

- tests clavier ;
- tests responsive ;
- tests d’accessibilité ;
- tests de performance ;
- CI lint/type/build ;
- test HTTP des routes.

---

## 13. Décision finale

La meilleure interface pour ce projet est :

> **Un portfolio éditorial sombre, structuré comme une architecture système, avec une carte de flux interactive, une typographie technique et soignée, des preuves de décisions et un accent lime utilisé comme signal rare.**

Cette direction est durable, distincte, performante et alignée avec le métier d’architecte digital.

---

## 14. Sources consultées

- [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/)
- [MDN — Animations CSS liées au scroll](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [MDN — `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- [web.dev — Optimiser le LCP](https://web.dev/articles/optimize-lcp)
- [Figma — Web design trends](https://www.figma.com/resource-library/web-design-trends/)
- [Envato — Portfolio design trends 2026](https://elements.envato.com/learn/portfolio-trends)
- [MotionKit — Web animation trends 2026](https://motionkit.io/blog/web-animation-trends-2026)

> Les sources de tendances servent à éclairer les choix. La décision finale doit toujours être vérifiée sur le contenu réel, les utilisateurs visés et les performances mesurées du site.
