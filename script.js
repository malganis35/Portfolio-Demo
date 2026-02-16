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
