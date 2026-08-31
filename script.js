/* ============================================================
   THEIA — Phoenix Edition (V2)
   - Bilingual toggle EN/FR
   - Scroll reveal animations
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Language toggle ---------- */

    const langToggle = document.querySelector('.lang-toggle');
    let currentLang = 'en';

    // Capture original English text of nav links once
    const navLinks = document.querySelectorAll('.nav a[data-fr]');
    navLinks.forEach(function (link) {
        if (!link.dataset.en) {
            link.dataset.en = link.textContent.trim();
        }
    });

    function setLanguage(lang) {
        currentLang = lang;

        // Toggle .en / .fr span blocks
        document.querySelectorAll('.en').forEach(function (el) {
            el.classList.toggle('hidden', lang === 'fr');
        });
        document.querySelectorAll('.fr').forEach(function (el) {
            el.classList.toggle('hidden', lang === 'en');
        });

        // Swap nav link labels
        navLinks.forEach(function (link) {
            link.textContent = (lang === 'fr') ? link.dataset.fr : link.dataset.en;
        });

        // Update toggle button label
        langToggle.textContent = (lang === 'fr') ? 'EN' : 'FR';

        // Persist preference
        try {
            localStorage.setItem('theia-lang', lang);
        } catch (e) { /* private mode — no persistence, no drama */ }
    }

    langToggle.addEventListener('click', function () {
        setLanguage(currentLang === 'en' ? 'fr' : 'en');
    });

    // Restore saved preference
    try {
        const saved = localStorage.getItem('theia-lang');
        if (saved === 'fr') {
            setLanguage('fr');
        }
    } catch (e) { /* stay in EN */ }

    /* ---------- Scroll reveal ---------- */

    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: everything visible
        revealElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

})();
