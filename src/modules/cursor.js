export function initCursor() {
    // ===========================
    // CUSTOM CURSOR EFFECT
    // ===========================

    // Hide cursor by default on mobile
    if (window.matchMedia('(max-width: 768px)').matches) {
        return;
    }

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Custom cursor style
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

    // Cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.display = 'block';
    });

    // Enlarge cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .demo-card');
    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = 'rgba(0, 217, 255, 1)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = 'rgba(0, 217, 255, 0.5)';
        });
    });
}
