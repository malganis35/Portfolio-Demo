import { describe, it, expect, vi } from 'vitest';
import { initNavigation } from './navigation';

describe('Navigation', () => {
    it('sets up event listeners', () => {
        const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
        // We need to mock document elements to avoid errors
        document.body.innerHTML = `
            <header class="header"></header>
            <a href="#test">Test Link</a>
            <div id="test">Test Target</div>
            <button id="backToTop"></button>
        `;

        initNavigation();

        expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
});
