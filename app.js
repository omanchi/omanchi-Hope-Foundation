/* ====================================== OMANCHI HOPE FOUNDATION - APP.JS HIGH-TECH INTERACTIVE SYSTEM ====================================== */

// =============================== // SAFE INITIALIZATION // =============================== window.addEventListener('DOMContentLoaded', () => {

// Smooth internal anchor scrolling (enhanced feel)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================
// SCROLL REVEAL SYSTEM
// ===============================
const revealElements = document.querySelectorAll('section, .program-card, .hero-content');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ===============================
// BUTTON RIPPLE EFFECT (GLOBAL)
// ===============================
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===============================
// HERO PARALLAX LIGHT MOVEMENT
// ===============================
const hero = document.querySelector('.hero');

if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        const overlay = document.querySelector('.hero .overlay');
        if (overlay) {
            overlay.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;
        }
    });
}

// ===============================
// PROGRAM CARD MICRO INTERACTION
// ===============================
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===============================
// PAGE LOAD INTRO FEEL
// ===============================
document.body.classList.add('loaded');

});

// =============================== // PAYSTACK SAFETY WRAPPER // (DO NOT OVERRIDE EXISTING) // =============================== if (typeof window.payWithPaystack !== 'function') { window.payWithPaystack = function(amount) { alert("Payment system not initialized correctly."); console.log("Paystack not found or not loaded."); }; }

// =============================== // OPTIONAL FUTURE: LIVE COUNTER SYSTEM // =============================== function animateNumber(el, target) { let start = 0; const duration = 1200; const step = Math.ceil(target / (duration / 16));

const interval = setInterval(() => {
    start += step;
    if (start >= target) {
        start = target;
        clearInterval(interval);
    }
    el.textContent = start.toLocaleString();
}, 16);

}

// =============================== // PERFORMANCE READY LOG // =============================== console.log("Omanchi Hope Foundation JS Loaded Successfully");
