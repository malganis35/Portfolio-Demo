export function initDemos() {
    // ===========================
    // DEMO FILTERING
    // ===========================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const demoCards = document.querySelectorAll('.demo-card');
    const searchInput = document.getElementById('demoSearch');

    function applyFilters() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filterValue = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

        demoCards.forEach((card) => {
            const cardCategory = card.getAttribute('data-category');
            const title = card.querySelector('.demo-title')?.textContent.toLowerCase() || '';
            const desc = card.querySelector('.demo-description')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');

            const matchesCategory = filterValue === 'all' || filterValue === cardCategory;
            const matchesSearch = searchTerm === '' || title.includes(searchTerm) || desc.includes(searchTerm) || tags.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                if (card.style.display !== 'flex') {
                    card.style.display = 'flex';
                    // Appearance animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                // Active class management
                filterBtns.forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');

                applyFilters();
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
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
