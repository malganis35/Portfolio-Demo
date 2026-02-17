export function initTheme() {
    // ===========================
    // THEME MANAGEMENT (LIGHT / DARK)
    // ===========================
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Function to set theme
    function setTheme(theme) {
        // Disable transitions
        htmlElement.classList.add('no-transition');

        // Force reflow
        void htmlElement.offsetHeight;

        // Set theme
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Re-enable transitions after a short delay
        // This ensures the theme change is rendered without transitions
        setTimeout(() => {
            htmlElement.classList.remove('no-transition');
        }, 50);
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Detect system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Event listener for button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}
