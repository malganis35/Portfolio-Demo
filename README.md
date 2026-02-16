# 🚀 Portfolio Data & IA - Portail de Démo

Site web statique moderne pour présenter vos applications de démonstration en Data Science et Intelligence Artificielle.

## ✨ Caractéristiques

- **Design moderne** : Interface futuriste avec palette bleu tech et effets néon
- **100% Responsive** : Optimisé pour mobile, tablette et desktop
- **Animations fluides** : Effets de hover sophistiqués et transitions douces
- **Performance optimale** : Site statique ultra-rapide
- **GitHub Pages ready** : Déployable en quelques clics

## 🎨 Design

- **Palette de couleurs** : Bleu profond (#0a0e27) avec accents cyan (#00d9ff)
- **Typographie** : Orbitron (titres) + Syne (corps)
- **Effets** : Grille animée, orbes lumineux, effets de glow néon
- **Style** : Créatif et moderne, inspiration tech/cyberpunk subtile

## 📁 Structure des fichiers

```
portfolio-data-ia/
│
├── index.html          # Page principale
├── styles.css          # Styles et animations
├── script.js           # Interactions JavaScript
└── README.md           # Ce fichier
```

## 🚀 Déploiement sur GitHub Pages

### 1. Créer un repository GitHub

```bash
# Dans votre terminal, à la racine du projet
git init
git add .
git commit -m "Initial commit - Portfolio Data & IA"
```

### 2. Connecter au repository distant

```bash
# Remplacez USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/USERNAME/portfolio-data-ia.git
git branch -M main
git push -u origin main
```

### 3. Activer GitHub Pages

1. Allez dans **Settings** de votre repository
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous **Source**, sélectionnez **main** branch
4. Cliquez sur **Save**
5. Votre site sera disponible à : `https://USERNAME.github.io/portfolio-data-ia/`

⏱️ Le déploiement prend généralement 1-2 minutes.

## 🎯 Personnalisation

### Modifier les informations de contact

Dans `index.html`, ligne ~300-320, mettez à jour :

```html
<a href="mailto:VOTRE-EMAIL@example.com" class="contact-button">
<a href="https://github.com/VOTRE-USERNAME" target="_blank">
<a href="https://linkedin.com/in/VOTRE-PROFIL" target="_blank">
```

### Ajouter/Modifier les applications de démo

Dans `index.html`, trouvez la section `<div class="demos-grid">` (ligne ~85) :

```html
<article class="demo-card" data-category="ml">
    <div class="demo-card-glow"></div>
    <div class="demo-card-content">
        <div class="demo-icon">
            <!-- Icône SVG -->
        </div>
        <h3 class="demo-title">Titre de votre application</h3>
        <p class="demo-description">
            Description de votre application...
        </p>
        <div class="demo-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <a href="https://URL-DE-VOTRE-APP.com" target="_blank" class="demo-link">
            <span>Lancer l'app</span>
            <!-- Icône SVG -->
        </a>
    </div>
</article>
```

**Pour ajouter une nouvelle application** : Copiez tout le bloc `<article>...</article>` et modifiez :
- Le titre (`<h3 class="demo-title">`)
- La description (`<p class="demo-description">`)
- Les tags (`<span class="tag">`)
- Le lien (`<a href="..."`)

### Changer les couleurs

Dans `styles.css`, modifiez les variables CSS (lignes 5-15) :

```css
:root {
    --color-bg-dark: #0a0e27;           /* Fond principal */
    --color-accent-cyan: #00d9ff;       /* Couleur accent 1 */
    --color-accent-blue: #0066ff;       /* Couleur accent 2 */
    /* ... */
}
```

### Modifier le texte du Hero

Dans `index.html`, section hero (lignes ~45-55) :

```html
<h1 class="hero-title">
    <span class="hero-title-line">Votre texte</span>
    <span class="hero-title-highlight">Votre highlight</span>
</h1>
<p class="hero-subtitle">
    Votre sous-titre...
</p>
```

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints à :
- **Mobile** : < 480px
- **Tablet** : 480px - 768px
- **Desktop** : > 768px

## ⚡ Performance

- **Pas de dépendances lourdes** : JavaScript vanilla uniquement
- **CSS optimisé** : Variables et classes réutilisables
- **Polices Google Fonts** : Chargement asynchrone
- **Animations GPU** : Utilisation de transform et opacity

## 🎨 Icônes

Les icônes utilisent des SVG inline pour :
- Meilleure performance
- Personnalisation facile des couleurs
- Pas de requêtes HTTP externes

**Pour changer une icône** : Remplacez le code SVG dans `<div class="demo-icon">` avec un SVG de [Heroicons](https://heroicons.com/) ou [Feather Icons](https://feathericons.com/).

## 🐛 Dépannage

### Le site ne s'affiche pas sur GitHub Pages
- Vérifiez que le fichier principal s'appelle `index.html`
- Assurez-vous que GitHub Pages est activé dans Settings > Pages
- Attendez 2-3 minutes pour le premier déploiement

### Les polices ne se chargent pas
- Vérifiez votre connexion internet
- Les polices Google Fonts sont hébergées en CDN externe

### Les animations sont saccadées
- Testez dans un navigateur récent (Chrome, Firefox, Safari)
- Désactivez les extensions de blocage de scripts

## 🔧 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Grid, Flexbox, Variables, Animations
- **JavaScript ES6+** : Interactions et animations
- **Google Fonts** : Orbitron & Syne

## 📄 Licence

Ce template est libre d'utilisation. Personnalisez-le à votre guise !

## 🤝 Contribution

Ce projet a été créé comme template. N'hésitez pas à :
- Forker le repository
- Créer une branche pour vos modifications
- Soumettre une pull request

## 💡 Idées d'améliorations

- [ ] Ajouter un filtre par catégorie pour les applications
- [ ] Intégrer Google Analytics
- [ ] Ajouter un mode sombre/clair toggle
- [ ] Créer une section blog
- [ ] Ajouter des animations au scroll plus avancées

## 📞 Support

Pour toute question ou suggestion :
- Ouvrez une issue sur GitHub
- Contactez-moi via les liens dans le footer du site

---

**Créé avec 💙 pour la Data Science et l'IA**

Bon déploiement ! 🚀
