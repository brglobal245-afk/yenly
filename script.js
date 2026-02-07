// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('yenly-lang') || 'ja';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLang);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const langToggles = document.querySelectorAll('.lang-toggle');
        langToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const clickedLang = e.target.closest('.lang-option')?.dataset.lang;
                if (clickedLang && clickedLang !== this.currentLang) {
                    this.switchLanguage(clickedLang);
                }
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('yenly-lang', lang);
        this.updateLanguage(lang);
        this.updateMetaTags(lang);
    }

    updateLanguage(lang) {
        // Update all elements with data attributes
        document.querySelectorAll('[data-ja][data-en]').forEach(element => {
            const text = lang === 'ja' ? element.dataset.ja : element.dataset.en;
            if (text) {
                element.textContent = text;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update active language indicators
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    updateMetaTags(lang) {
        if (lang === 'ja') {
            document.title = 'Yenly - お金管理を、もっとシンプルに。';
            document.querySelector('meta[name="description"]').content = 'Yenly - お金管理を、もっとシンプルに。収入・支出・ポイントを一つのアプリで簡単管理。';
            document.querySelector('meta[property="og:title"]').content = 'Yenly - お金管理を、もっとシンプルに。';
            document.querySelector('meta[property="og:description"]').content = '収入・支出・ポイントを一つのアプリで簡単管理';
            document.querySelector('meta[property="og:locale"]').content = 'ja_JP';
        } else {
            document.title = 'Yenly - Money management, made simpler.';
            document.querySelector('meta[name="description"]').content = 'Yenly - Money management, made simpler. Manage income, expenses, and points all in one simple app.';
            document.querySelector('meta[property="og:title"]').content = 'Yenly - Money management, made simpler.';
            document.querySelector('meta[property="og:description"]').content = 'Manage income, expenses, and points all in one simple app';
            document.querySelector('meta[property="og:locale"]').content = 'en_US';
        }
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Use Intersection Observer for better performance
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            // Fallback for older browsers
            this.setupScrollListener();
        }
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in, .feature-card, .step, .screenshot-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupScrollListener() {
        const checkVisibility = () => {
            document.querySelectorAll('.fade-in, .feature-card, .step, .screenshot-card').forEach(el => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', this.throttle(checkVisibility, 100));
        checkVisibility(); // Check on load
    }

    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Smooth Scroll for Anchor Links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerOffset = 80;
                        const elementPosition = target.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// Copy to Clipboard Functionality
class CopyToClipboard {
    constructor() {
        this.init();
    }

    init() {
        const copyBtn = document.getElementById('copyBtn');
        const emailElement = document.getElementById('contactEmail');
        
        if (copyBtn && emailElement) {
            copyBtn.addEventListener('click', () => {
                const email = emailElement.textContent.trim();
                this.copyToClipboard(email, copyBtn);
            });
        }
    }

    async copyToClipboard(text, button) {
        try {
            await navigator.clipboard.writeText(text);
            
            // Visual feedback
            const originalHTML = button.innerHTML;
            button.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            button.style.background = 'var(--color-secondary)';
            button.style.color = 'var(--color-white)';
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.background = '';
                button.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language manager
    const languageManager = new LanguageManager();

    // Initialize scroll animations
    const scrollAnimations = new ScrollAnimations();

    // Initialize smooth scroll
    const smoothScroll = new SmoothScroll();

    // Initialize copy to clipboard
    const copyToClipboard = new CopyToClipboard();

    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any animations or heavy operations
    } else {
        // Resume operations
    }
});

