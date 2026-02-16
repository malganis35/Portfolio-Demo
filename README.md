# 🚀 Portfolio Data & IA - Portail de Démo

Site web statique moderne pour présenter vos applications de démonstration en Data Science et Intelligence Artificielle.
Ce projet a été modernisé pour utiliser **Vite** comme bundler, offrant une expérience de développement ultra-rapide et des optimisations de production.

## ✨ Caractéristiques

- **Stack Moderne** : Propulsé par Vite, Vitest, ESLint et Prettier.
- **Design UI/UX** :
  - Header en **Glassmorphism** avec thème clair.
  - Curseur personnalisé interactif.
  - **Animations fluides** et effets de hover sophistiqués.
  - Intégration Vidéo/GIF en page d'accueil.
- **100% Responsive** : Optimisé pour mobile, tablette et desktop (Mobile First).
- **Multilingue** : Support complet **Français / Anglais** avec bouton de toggle.
- **Fonctionnalités** :
  - Bouton "Retour en haut" (Back to Top).
  - Intégration **Google Analytics**.
  - Favicon personnalisé.
- **Qualité de Code** : Structure modulaire, tests unitaires, linting et formatage automatique.

## 🛠️ Installation et Démarrage

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé.

1.  **Cloner le projet**
    ```bash
    git clone https://github.com/USERNAME/portfolio-data-ia.git
    cd portfolio-data-ia
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Le site sera accessible à l'adresse `http://localhost:5173`.

## 📦 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement Vite.
- `npm run build` : Compile le projet pour la production dans le dossier `dist`.
- `npm run preview` : Prévisualise la version de production localement.
- `npm run test` : Lance les tests unitaires avec Vitest.
- `npm run lint` : Vérifie la qualité du code avec ESLint.
- `npm run format` : Formate le code avec Prettier.

## 📁 Structure du Projet

```
portfolio-data-ia/
│
├── public/             # Assets statiques (images, favicon, etc.)
├── src/                # Code source principal
│   ├── modules/        # Modules JavaScript (logique métier)
│   └── css/            # Fichiers de styles
├── index.html          # Point d'entrée de l'application
├── vite.config.js      # Configuration de Vite
├── .eslintrc.json      # Configuration linter
├── .prettierrc         # Configuration formateur
└── README.md           # Ce fichier
```

## 🚀 Déploiement

Le projet est configuré pour être déployé facilement (ex: GitHub Pages, Vercel, Netlify).
Pour générer les fichiers de production :

```bash
npm run build
```

Le contenu du dossier `dist/` peut être déployé sur n'importe quel hébergeur statique.

## 🎨 Personnalisation

### Modifier les informations
- Les textes et liens sont dans `index.html`.
- Pour le support multilingue, vérifiez les attributs `data-i18n` dans le HTML et les traductions correspondantes dans les fichiers JS.

### Changer le Design
- Les variables CSS principales sont dans `src/css/style.css` (ou `styles.css` à la racine si pas encore migré).
- Modifiez les couleurs : `--color-bg-dark`, `--color-accent-cyan`, etc.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

1. Forker le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Distribué sous la licence ISC. Voir `LICENSE` pour plus d'informations.

---

**Créé avec 💙 pour la Data Science et l'IA**
