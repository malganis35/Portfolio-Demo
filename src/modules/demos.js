export function initDemos() {
    // ===========================
    // DEMO FILTERING
    // ===========================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const demoCardsFiltered = document.querySelectorAll('.demo-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                // Active class management
                filterBtns.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                demoCardsFiltered.forEach((card) => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        card.style.display = 'flex';
                        // Appearance animation
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
            });
        });
    }

    updateDemoCount();
}

function updateDemoCount() {
    // ===========================
    // APP COUNTER
    // ===========================
    const countElement = document.querySelector('.section-subtitle');

    // Check if we already updated it to avoid duplication if re-run
    if (countElement && !countElement.hasAttribute('data-count-updated')) {
        const demoCards = document.querySelectorAll('.demo-card');
        if (demoCards.length > 0) {
            const originalText = countElement.textContent;
            countElement.textContent = `${demoCards.length} applications disponibles · ${originalText}`;
            countElement.setAttribute('data-count-updated', 'true');
        }
    }
}
