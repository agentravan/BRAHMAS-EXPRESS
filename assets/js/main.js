/**
 * Brahmas Express - Premium Polish JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initScrollHeader();
    initMobileMenu();
});

// Sticky Header Transition
function initScrollHeader() {
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    window.toggleMenu = () => {
        mobileMenu.classList.toggle('-translate-x-full');
    };
}
