export function initAnimations() {
    // ===========================
    // SCROLL APPEARANCE ANIMATIONS
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe demo cards
    document.querySelectorAll('.demo-card').forEach((card) => {
        observer.observe(card);
    });

    // ===========================
    // REDUCED MOTION PREFERENCE
    // ===========================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document
            .querySelectorAll('.demo-card, .floating-card, .glow-orb')
            .forEach((el) => {
                el.style.animation = 'none';
            });
        return; // Skip other animations if reduced motion is preferred
    }

    // ===========================
    // FLOATY CARDS ANIMATION IN HERO
    // ===========================
    const floatingCards = document.querySelectorAll('.floating-card');

    floatingCards.forEach((card) => {
        // Add glow pseudo-element
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

        // Hover animation
        card.addEventListener('mouseenter', () => {
            glow.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });
    });

    // ===========================
    // LIGHT PARALLAX EFFECT ON ORBS
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
        // Smooth interpolation
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
    // EASTER EGG : KONAMI CODE
    // ===========================
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
        'b',
        'a',
    ];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-konamiSequence.length);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Special Effect!
            document.body.style.animation = 'rainbow 2s linear infinite';

            // Add rainbow animation
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

            console.log('🎮 Konami Code activated! Rainbow Mode!');
        }
    });
}
