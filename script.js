/**
 * Deep Psychological Portfolio
 * Mind-Engaging Interactions & Hypnotic Effects
 */

document.addEventListener('DOMContentLoaded', () => {
    initHypnoticPreloader();
    initScrollReveal();
    initFloatingNav();
    initDeepIdentityQuiz();
    initSmoothScroll();
    initParallax();
    initCursorGlow();
    logWelcome();
});

/**
 * Hypnotic Preloader - Creates anticipation, slows the mind
 */
function initHypnoticPreloader() {
    const preloader = document.getElementById('preloader');

    // Longer delay for psychological effect - builds anticipation
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 2500);
}

/**
 * Scroll Reveal - Staggered animations create hypnotic flow
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-animate');

    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Get delay from data attribute or use index
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 200);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

/**
 * Floating Navigation - Appears after hero, tracks sections
 */
function initFloatingNav() {
    const nav = document.getElementById('floatingNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section[id]');

    // Show/hide nav based on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        if (scrollY > window.innerHeight * 0.6) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    });

    // Highlight active section
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * Deep Identity Quiz - Creates emotional ownership through choice
 */
function initDeepIdentityQuiz() {
    const choices = document.querySelectorAll('.identity-btn');
    const resultContainer = document.getElementById('identityResult');
    const resultText = document.getElementById('resultText');
    const resultFollow = document.getElementById('resultFollow');

    const results = {
        builder: {
            text: "You don't just dream — you make dreams physical. You understand that ideas without execution are just fantasies. The world needs more builders. You and I are the same.",
            follow: "Together, we can construct the future."
        },
        dreamer: {
            text: "Vision precedes creation. Every revolution began as a dream in someone's mind. You see possibilities where others see walls. Never stop imagining what could be.",
            follow: "Your dreams are the blueprints of tomorrow."
        },
        observer: {
            text: "To truly understand is to gain power quietly. While others rush to act, you gather wisdom. The most powerful moves come from those who watch, learn, and then act with precision.",
            follow: "When you move, you move with certainty."
        }
    };

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            // Remove selected from all
            choices.forEach(c => c.classList.remove('selected'));

            // Select this one
            choice.classList.add('selected');

            // Get result
            const type = choice.dataset.type;
            const result = results[type];

            // Show result with animation
            resultText.textContent = result.text;
            resultFollow.textContent = result.follow;
            resultContainer.classList.add('visible');

            // Pulse effect
            choice.style.transform = 'scale(1.03)';
            setTimeout(() => {
                choice.style.transform = 'scale(1.02)';
            }, 200);
        });
    });
}

/**
 * Smooth scroll for navigation
 */
function initSmoothScroll() {
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
}

/**
 * Parallax for floating shapes
 */
function initParallax() {
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length === 0) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                shapes.forEach((shape, index) => {
                    const speed = 0.08 + (index * 0.04);
                    shape.style.transform = `translateY(${scrolled * speed}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Cursor Glow - Follows the user, creates connection
 */
function initCursorGlow() {
    if (window.innerWidth <= 768) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        glowX += (mouseX - glowX) * 0.06;
        glowY += (mouseY - glowY) * 0.06;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animate);
    }

    animate();
}

/**
 * Console welcome - For those who look deeper
 */
function logWelcome() {
    console.log(`
%c✨ You looked deeper.

%cMost people never open the console.
But you did. That says something about you.

I am Abhishek Vishwakarma.
A 16-year-old builder from a village you've never heard of.
Building things that matter.

If you're reading this, we probably understand each other.

%c🔗 https://github.com/vishwakarmaindustriesabhishek-in

%c"Change your mind today, and you change the world you see tomorrow."
`,
        'font-size: 16px; color: #9d7ce5; font-weight: bold;',
        'font-size: 12px; color: #5a5a78; line-height: 1.8;',
        'font-size: 11px; color: #7bb8c9;',
        'font-size: 11px; color: #d4749e; font-style: italic;'
    );
}

/**
 * Section tracking for analytics
 */
const allSections = document.querySelectorAll('.section[id]');
const trackingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Track engagement
            console.log(`📍 Viewing: ${sectionId}`);

            // Mark progress
            document.body.dataset.currentSection = sectionId;
        }
    });
}, { threshold: 0.5 });

allSections.forEach(section => trackingObserver.observe(section));

/**
 * Scroll progress indicator
 */
function getScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return Math.round((scrollTop / docHeight) * 100);
}

// Update on scroll
window.addEventListener('scroll', () => {
    const progress = getScrollProgress();
    document.body.dataset.scrollProgress = progress;
});

/**
 * Easter egg - Konami code reveals message
 */
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            console.log('%c🎮 You found the secret! You are definitely a Builder.', 'color: #9d7ce5; font-size: 14px;');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
