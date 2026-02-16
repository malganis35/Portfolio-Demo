import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initCursor } from './modules/cursor.js';
import { initTheme } from './modules/theme.js';
import { initDemos } from './modules/demos.js';
import { initI18n } from './modules/i18n.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations();
    initCursor();
    initTheme();
    initDemos();
    initI18n();

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
});
