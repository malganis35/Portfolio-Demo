export function initI18n() {
    // ===========================
    // TRANSLATION
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
            'cta-button-rdv': 'Prendre RDV',
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
            'footer-text': '© 2026 Portfolio Cao Tri DO, PhD. Créé avec passion pour la Data & l\'IA.',
            'back-to-top': 'Retour en haut',
            'language-toggle': 'Changer de langue',
            'search-placeholder': 'Rechercher par mots-clés...'
        },
        en: {
            'nav-demos': 'Demos',
            'nav-contact': 'Contact',
            'theme-toggle': 'Switch theme',
            'hero-title-line': 'Cao Tri DO, PhD',
            'hero-title-highlight': 'Demo Portal',
            'hero-subtitle': 'Discover my interactive Data and AI projects',
            'cta-button': 'View Demos',
            'cta-button-rdv': 'Book Appointment',
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
            'footer-text': '© 2026 Portfolio Cao Tri DO, PhD. Created with passion for Data & AI.',
            'back-to-top': 'Back to top',
            'language-toggle': 'Switch language',
            'search-placeholder': 'Search by keywords...'
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
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
            const key = element.getAttribute('data-i18n-aria');
            if (translations[lang][key]) {
                element.setAttribute('aria-label', translations[lang][key]);
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });

        if (langText) {
            langText.textContent = lang.toUpperCase();
        }
    }

    function initLanguage() {
        const savedLanguage = localStorage.getItem('language');
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

    initLanguage();
}
