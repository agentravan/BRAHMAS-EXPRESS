/**
 * Brahmas Express - Cinematic Redesign JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initAnimations();
});

// Custom Cursor
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactables = document.querySelectorAll('a, button, .lift-card');
    interactables.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = 'rgba(225, 29, 72, 0.1)';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// Simple AOS-like reveal logic if needed, or stick to AOS library
function initAnimations() {
    // We can add custom slider logic here if the user wants functional arrows
    console.log("Cinematic Theme Initialized");
}
