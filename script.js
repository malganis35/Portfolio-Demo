// ===========================
// NAVIGATION SCROLL
// ===========================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Ajouter une classe au header lors du scroll
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===========================
// SMOOTH SCROLL POUR LES ANCRES
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// ANIMATIONS D'APPARITION AU SCROLL
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de démo
document.querySelectorAll('.demo-card').forEach(card => {
    observer.observe(card);
});

// ===========================
// EFFET PARALLAXE LÉGER SUR LES ORBES
// ===========================
let mouseX = 0;
let mouseY = 0;
let orbX1 = 0;
let orbY1 = 0;
let orbX2 = 0;
let orbY2 = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
});

function animateOrbs() {
    // Interpolation douce pour un effet fluide
    orbX1 += (mouseX * 50 - orbX1) * 0.05;
    orbY1 += (mouseY * 50 - orbY1) * 0.05;
    orbX2 += (mouseX * -30 - orbX2) * 0.03;
    orbY2 += (mouseY * -30 - orbY2) * 0.03;

    const orb1 = document.querySelector('.glow-orb-1');
    const orb2 = document.querySelector('.glow-orb-2');

    if (orb1) {
        orb1.style.transform = `translate(${orbX1}px, ${orbY1}px)`;
    }
    if (orb2) {
        orb2.style.transform = `translate(${orbX2}px, ${orbY2}px)`;
    }

    requestAnimationFrame(animateOrbs);
}

animateOrbs();

// ===========================
// EFFET DE CURSEUR PERSONNALISÉ (optionnel)
// ===========================
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Style du curseur personnalisé
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(0, 217, 255, 0.5);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    transform: translate(-50%, -50%);
    display: none;
`;

// Position du curseur
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.display = 'block';
});

// Agrandir le curseur sur les éléments interactifs
const interactiveElements = document.querySelectorAll('a, button, .demo-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.borderColor = 'rgba(0, 217, 255, 1)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.borderColor = 'rgba(0, 217, 255, 0.5)';
    });
});

// Cacher le curseur par défaut sur mobile
if (window.matchMedia('(max-width: 768px)').matches) {
    cursor.style.display = 'none';
}

// ===========================
// ANIMATION DES CARTES FLOTTANTES DANS LE HERO
// ===========================
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    // Ajouter un pseudo-contenu lumineux
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 102, 255, 0.1));
        border-radius: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    card.appendChild(glow);

    // Animation au survol
    card.addEventListener('mouseenter', () => {
        glow.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
});

// ===========================
// COMPTEUR D'APPLICATIONS (optionnel)
// ===========================
const demoCards = document.querySelectorAll('.demo-card');
const countElement = document.querySelector('.section-subtitle');

if (countElement && demoCards.length > 0) {
    const originalText = countElement.textContent;
    countElement.textContent = `${demoCards.length} applications disponibles · ${originalText}`;
}

// ===========================
// PRÉCHARGEMENT DES IMAGES (si vous en ajoutez)
// ===========================
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Exemple : preloadImages(['./assets/image1.jpg', './assets/image2.jpg']);

// ===========================
// PERFORMANCE : LAZY LOADING DES ANIMATIONS
// ===========================
// Réduire les animations si l'utilisateur préfère moins de mouvement
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('.demo-card, .floating-card, .glow-orb').forEach(el => {
        el.style.animation = 'none';
    });
}

// ===========================
// Easter EGG : KONAMI CODE (optionnel et fun)
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Effet spécial !
        document.body.style.animation = 'rainbow 2s linear infinite';

        // Ajouter l'animation rainbow
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);

        console.log('🎮 Konami Code activé ! Mode Arc-en-ciel !');
    }
});

// ===========================
// LOG DE BIENVENUE DANS LA CONSOLE
// ===========================
console.log(
    '%c🚀 Portfolio Data & IA',
    'font-size: 24px; font-weight: bold; color: #00d9ff; text-shadow: 0 0 10px #00d9ff;'
);
console.log(
    '%cBienvenue dans le code ! 👨‍💻',
    'font-size: 14px; color: #8892b0;'
);
console.log(
    '%cCe site a été créé avec passion pour la data science.',
    'font-size: 12px; color: #8892b0; font-style: italic;'
);

// ===========================
// BOUTON RETOUR EN HAUT
// ===========================
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // Afficher le bouton lors du scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll vers le haut au clic
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// GESTION DU THÈME (LIGHT / DARK)
// ===========================
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Fonction pour définir le thème
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Initialisation du thème
function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Détecter la préférence système
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
}

initTheme();

// Écouteur d'événement pour le bouton
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}


// ===========================
// FILTRAGE DES DÉMOS
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const demoCardsFiltered = document.querySelectorAll('.demo-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Gestion de la classe active
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            demoCardsFiltered.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = 'flex';
                    // Petite animation d'apparition
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });

            // Mettre à jour le compteur si nécessaire
            const visibleCards = document.querySelectorAll('.demo-card[style="display: flex;"]');
            /* Optionnel: mettre à jour un compteur ici */
        });
    });
}

// ===========================
// TRADUCTION / TRANSLATION
// ===========================
const translations = {
    fr: {
        'nav-demos': 'Démo',
        'nav-contact': 'Contact',
        'theme-toggle': 'Changer de thème',
        'hero-title-line': 'Cao Tri DO, PhD',
        'hero-title-highlight': 'Portail de démo',
        'hero-subtitle': 'Découvrez mes projets interactifs en Data et IA',
        'cta-button': 'Voir les démos',
        'demos-title': 'Applications de Démonstration',
        'demos-subtitle': 'Ci-dessous quelques exemples de réalisations.',
        'filter-all': 'Tout',
        'filter-genai': 'GenAI',
        'filter-ds': 'Data Science & MLOps',
        'filter-viz': 'Dataviz',
        'demo-devtool-title': 'Dev Tooling Assistant',
        'demo-devtool-desc': 'Application interactive d\'assistant du quotidien pour les développeurs (diagnostic de code, code review, description pour des MR).',
        'launch-app': 'Lancer l\'app',
        'demo-medical-title': 'Medical SOAP Notetaker',
        'demo-medical-desc': 'Application interactive d\'assistant pour les medecins la rédaction de notes au format SOAP dans le domaine médicale.',
        'demo-chatcao-title': 'Chat with Cao',
        'demo-chatcao-desc': 'Un Chatbot interactif de démo pour présenter le métier et parcours de Cao Tri DO à des étudiants. Réalisé dans le cadre d\'un forum métier pour un collège.',
        'demo-hotel-title': 'Hotel Reservation MLOps',
        'demo-hotel-desc': 'Projet MLOps End-to-End du déploiement d\'un modèle de ML sur Databricks / Power BI.',
        'demo-emergency-title': 'Emergency Room Monitoring',
        'demo-emergency-desc': 'Reporting des urgences hospitalières. Gagnant de la compétition de storytelling DataPears.',
        'demo-baby-title': 'Pronostic Bébé',
        'demo-baby-desc': 'Dashboard Power BI des résultats du pronostic de mon 1er bébé.',
        'demo-salary-title': 'Benchmark Salary Dev',
        'demo-salary-desc': 'Benchmark des salaires à partir du webscraping de https://salaires.dev/',
        'demo-covid-title': 'Dashboard Covid-19',
        'demo-covid-desc': 'Reporting de suivi de l\'épidémie du Covid-19',
        'demo-johnsnow-title': 'John Snow & the Cholera',
        'demo-johnsnow-desc': 'L\'histoire en dataviz de comment John Snow a pu vaincre le choléra grâce à la dataviz.',
        'demo-intvis-title': 'Intelligence visuelle',
        'demo-intvis-desc': 'Dashboard pour comprendre les principes d\'UX/UI en dataviz (Gestalt, attributs pré-attentifs).',
        'demo-cv-title': 'CV Intéractif',
        'demo-cv-desc': 'Mon parcours professionnel présenté sous forme de CV interactif réalisé sous Tableau Software.',
        'demo-rugby-title': 'Pronostic Rugby',
        'demo-rugby-desc': 'Dashboard d\'aide à la décision pour les pronostics de la coupe du monde de rugby.',
        'demo-cnil-title': 'Sanctions CNIL',
        'demo-cnil-desc': 'Dashboard d\'analyse des montants des sanctions de la CNIL sur les dernières années.',
        'contact-title': 'Restons en Contact',
        'contact-text': 'Intéressé par une collaboration ? Discutons de vos projets data et IA.',
        'footer-text': '&copy; 2026 Portfolio Cao Tri DO, PhD. Créé avec passion pour la Data & l\'IA.',
        'back-to-top': 'Retour en haut',
        'language-toggle': 'Changer de langue'
    },
    en: {
        'nav-demos': 'Demos',
        'nav-contact': 'Contact',
        'theme-toggle': 'Switch theme',
        'hero-title-line': 'Cao Tri DO, PhD',
        'hero-title-highlight': 'Demo Portal',
        'hero-subtitle': 'Discover my interactive Data and AI projects',
        'cta-button': 'View Demos',
        'demos-title': 'Demonstration Applications',
        'demos-subtitle': 'Below are some examples of realized projects.',
        'filter-all': 'All',
        'filter-genai': 'GenAI',
        'filter-ds': 'Data Science & MLOps',
        'filter-viz': 'Dataviz',
        'demo-devtool-title': 'Dev Tooling Assistant',
        'demo-devtool-desc': 'Interactive daily assistant application for developers (code diagnostics, code review, MR descriptions).',
        'launch-app': 'Launch App',
        'demo-medical-title': 'Medical SOAP Notetaker',
        'demo-medical-desc': 'Interactive assistant application for doctors to write notes in SOAP format in the medical field.',
        'demo-chatcao-title': 'Chat with Cao',
        'demo-chatcao-desc': 'An interactive demo chatbot to present Cao Tri DO\'s profession and career path to students. Created for a career forum at a middle school.',
        'demo-hotel-title': 'Hotel Reservation MLOps',
        'demo-hotel-desc': 'End-to-End MLOps project for deploying an ML model on Databricks / Power BI.',
        'demo-emergency-title': 'Emergency Room Monitoring',
        'demo-emergency-desc': 'Hospital emergency reporting. Winner of the DataPears storytelling competition.',
        'demo-baby-title': 'Baby Prognosis',
        'demo-baby-desc': 'Power BI dashboard of the prognosis results for my 1st baby.',
        'demo-salary-title': 'Dev Salary Benchmark',
        'demo-salary-desc': 'Salary benchmark based on web scraping from https://salaires.dev/',
        'demo-covid-title': 'Covid-19 Dashboard',
        'demo-covid-desc': 'Covid-19 epidemic tracking reporting',
        'demo-johnsnow-title': 'John Snow & the Cholera',
        'demo-johnsnow-desc': 'The dataviz history of how John Snow defeated cholera using dataviz.',
        'demo-intvis-title': 'Visual Intelligence',
        'demo-intvis-desc': 'Dashboard to understand UX/UI principles in dataviz (Gestalt, pre-attentive attributes).',
        'demo-cv-title': 'Interactive CV',
        'demo-cv-desc': 'My professional career presented as an interactive CV created with Tableau Software.',
        'demo-rugby-title': 'Rugby Prognosis',
        'demo-rugby-desc': 'Decision support dashboard for Rugby World Cup prognostics.',
        'demo-cnil-title': 'CNIL Sanctions',
        'demo-cnil-desc': 'Dashboard analyzing CNIL sanction amounts over recent years.',
        'contact-title': 'Let\'s Keep in Touch',
        'contact-text': 'Interested in a collaboration? Let\'s discuss your data and AI projects.',
        'contact-email': 'Email',
        'contact-github': 'GitHub',
        'contact-linkedin': 'LinkedIn',
        'footer-text': '&copy; 2026 Portfolio Cao Tri DO, PhD. Created with passion for Data & AI.',
        'back-to-top': 'Back to top',
        'language-toggle': 'Switch language'
    }
};

const languageToggleBtn = document.getElementById('languageToggle');
const langText = languageToggleBtn ? languageToggleBtn.querySelector('.lang-text') : null;

function setLanguage(lang) {
    if (!translations[lang]) return;

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Save to local storage
    localStorage.setItem('language', lang);

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Update button text - Show the OTHER language to switch to? 
    // Usually it shows the CURRENT language or the one you will switch to.
    // The previous code showed "FR" as default text.
    // If I am in FR, I see FR? Or I see EN to switch to EN?
    // Let's stick to showing the CURRENT language as is common in some designs, or maybe the TARGET?
    // "Switch between FR and EN".
    // Let's make it show the CURRENT language for now as per the initial HTML "FR".
    // Wait, if it shows "FR", does it mean "Current is FR" or "Click to switch to FR"? 
    // Usually a toggle shows the current state.
    // Let's implement it to show the CURRENT language code.
    if (langText) {
        langText.textContent = lang.toUpperCase();
    }
}

function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    // Default to 'fr' if no saved language, or check navigator
    // But since the site was originally FR, let's prefer FR as default or auto-detect
    const systemLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const initialLanguage = savedLanguage || systemLanguage;

    // Ensure we start with a valid language
    setLanguage(initialLanguage === 'en' ? 'en' : 'fr');
}

if (languageToggleBtn) {
    languageToggleBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang') || 'fr';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initLanguage);
