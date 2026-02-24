/**
 * Brahmas Express - Premium Main JS
 */

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initLoader();
    initMobileMenu();
    initTypingEffect();
    // Three.js animation is initialized inside index.html specifically if needed, 
    // or we can centralize it here.
});

// Custom Cursor
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const links = document.querySelectorAll('a, button, select, input, .lift-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
}

// Loader Logic
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.transition = 'opacity 0.6s ease';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }, 1500); // 1.5s delay for logo reveal
    });
}

// Typing Effect
function initTypingEffect() {
    const target = document.getElementById('typing');
    if (!target) return;

    const text = target.getAttribute('data-text') || "Seamless Relocation. Powerful Logistics. Nationwide Trust.";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

// Mobile Menu
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.add('active');
            menu.classList.remove('hidden');
        });
    }

    if (closeBtn && menu) {
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('active');
            setTimeout(() => menu.classList.add('hidden'), 500);
        });
    }
}
