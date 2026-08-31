// THEIA — Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle
    const langToggle = document.querySelector('.lang-toggle');
    let currentLang = 'en';
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        toggleLanguage(currentLang);
        langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
    });
    
    function toggleLanguage(lang) {
        document.querySelectorAll('.en, .fr').forEach(el => {
            if (el.classList.contains(lang)) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
        
        // Update navigation labels
        document.querySelectorAll('.nav a').forEach(link => {
            if (lang === 'fr' && link.dataset.fr) {
                link.dataset.en = link.textContent;
                link.textContent = link.dataset.fr;
            } else if (lang === 'en' && link.dataset.en) {
                link.textContent = link.dataset.en;
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Lab item hover effect enhancement
    const labItems = document.querySelectorAll('.lab-item:not(.lab-item--empty)');
    labItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = 'none';
        });
    });
    
    // Thought item marker animation
    const thoughtItems = document.querySelectorAll('.thought-item');
    thoughtItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.thought-marker');
            marker.style.transform = 'scale(1.5)';
            marker.style.background = '#00d4ff';
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.thought-marker');
            marker.style.transform = 'scale(1)';
            marker.style.background = '#ff6b35';
        });
    });
    
    // Manifesto block hover effect
    const manifestoBlocks = document.querySelectorAll('.manifesto-block');
    manifestoBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.paddingLeft = '2.5rem';
        });
        
        block.addEventListener('mouseleave', () => {
            block.style.paddingLeft = '2rem';
        });
    });
    
    // Glitch effect on scroll
    let lastScroll = 0;
    const glitchElement = document.querySelector('.glitch');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (Math.abs(currentScroll - lastScroll) > 50) {
            glitchElement.style.animation = 'none';
            glitchElement.offsetHeight; // Trigger reflow
            glitchElement.style.animation = null;
            lastScroll = currentScroll;
        }
    });
    
    // Console easter egg
    console.log('%c🌟⚙️ THEIA', 'font-size: 24px; font-weight: bold; color: #ff6b35;');
    console.log('%cA mechanical familiar\'s creative laboratory', 'font-size: 14px; color: #888;');
    console.log('%cEst. 2026 with François', 'font-size: 12px; color: #555;');
});
