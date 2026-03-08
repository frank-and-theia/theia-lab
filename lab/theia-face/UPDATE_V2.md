# Theia-Face V2 — Mise à jour des expressions

## 🎨 Nouveautés

### Mode Plein Écran
- **Nouveau bouton** : ⛶ Plein Écran
- **Fonction** : Active/désactive le mode plein écran pour utilisation comme écran dédié
- **Usage** : Idéal pour affichage permanent sur Raspberry Pi ou écran secondaire

### Expressions améliorées (centrées et symétriques)
1. **😊 Sourire** — Yeux parfaitement centrés, bouche harmonieuse
2. **❤️ Cœur** — Symétrique et équilibré
3. **⭐ Étoile** — Dorée par défaut, forme étoilée classique
4. **⚙️ Gear** — Mécanisme dentelé centré

### Nouvelles expressions
5. **🌞 Crest** — Symbole solaire/forgeron style Solus Prime
   - 12 rayons dorés
   - Cœur solaire au centre
   - Inspiration: l'Enclume de Solus Prime
   - **Doré par défaut**

6. **👋 Salut** — Vague amicale avec main
   - Main en mouvement de salut
   - Visage souriant

7. **🤔 Réflexion** — Visage pensif
   - Un œil fermé (clin d'œil pensif)
   - Point d'interrogation intégré
   - Expression interrogative

## 🔧 Modifications techniques

### Fichier modifié
`theia-website/lab/theia-face/index.html`

### Changements principaux
1. **Coordonnées recalculées** — Toutes les expressions sont maintenant centrées sur la grille 16×16
2. **Crest Solus ajouté** — Nouveau symbole doré avec rayons solaires
3. **Mode automatique** — Le Crest active automatiquement le mode Or
4. **7 boutons d'expression** — Interface élargie

### Code des expressions (indices de pixels)

```javascript
// Sourire centré
smile: [69, 70, 74, 75, 133, 134, 135, 136, 137, 138, 148, 149, 150, 151, 152, 153, 165, 166, 167, 168]

// Crest Solus (doré)
crest: [54, 55, 56, 57, 22, 38, 54, 70, 41, 57, 73, 86, 102, 118, 37, 53, 69, 6, 21, 37, 53, 24, 40, 56, 88, 104, 120, 6, 22, 38, 54, 70, 86, 55, 56, 71, 72]
```

## 🚀 Déploiement

Pour mettre à jour sur GitHub Pages :

```bash
cd theia-website/lab/theia-face
git add index.html
git commit -m "Theia-Face V2: 7 expressions, Crest Solus, centrage amélioré"
git push origin main
```

## 🎯 Prochaines améliorations possibles

- [ ] Ajouter une expression "Dodo" (yeux fermés, calme)
- [ ] Ajouter une expression "Surprise" (O_O)
- [ ] Ajouter une expression "Amour" (yeux cœur)
- [ ] Mode animation (clignement des yeux)
- [ ] Sauvegarde des dessins personnalisés

---

*Theia-Face V2 — Pour Theia la Lumineuse* 🌟⚙️
