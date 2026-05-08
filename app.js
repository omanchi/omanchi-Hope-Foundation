/* ========================== PROFESSIONAL INTERACTIVE JS Hope Foundation Initiative ========================== */

// Smooth scroll enhancement (extra polish over CSS smooth-scroll) document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }); });

// ========================== // SCROLL REVEAL ANIMATION // ========================== const revealElements = document.querySelectorAll('section, .hero-content');

const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); } }); }, { threshold: 0.15 });

revealElements.forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// ========================== // BUTTON INTERACTION FEEDBACK // ========================== document.querySelectorAll('.btn-primary').forEach(btn => { btn.addEventListener('click', function (e) { // ripple effect const ripple = document.createElement('span'); ripple.classList.add('ripple'); this.appendChild(ripple);

const rect = this.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + 'px';
    ripple.style.top = e.clientY - rect.top + 'px';

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

});

// ========================== // HERO PARALLAX GLOW MOTION // ========================== const heroOverlay = document.querySelector('.hero .overlay');

window.addEventListener('mousemove', (e) => { if (!heroOverlay) return;

const x = (e.clientX / window.innerWidth - 0.5) * 20;
const y = (e.clientY / window.innerHeight - 0.5) * 20;

heroOverlay.style.transform = `translate(${x}px, ${y}px) scale(1.2)`;

});

// ========================== // NAVIGATION ACTIVE FEEL (optional future expansion) // ========================== window.addEventListener('scroll', () => { const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }
});

});

// ========================== // PAGE LOAD INTRO ANIMATION // ========================== window.addEventListener('load', () => { document.body.classList.add('loaded'); });

// ========================== // DYNAMIC TEXT SUBTLE MOTION (hero) // ========================== const heroText = document.querySelector('.hero h1');

if (heroText) { let direction = 1; setInterval(() => { heroText.style.transform = translateY(${direction * 2}px); direction *= -1; }, 2000); }

/* ========================== NOTE: These require CSS additions:

.reveal { opacity: 0; transform: translateY(40px); transition: all 1s ease; }

.reveal.active { opacity: 1; transform: translateY(0); }

.ripple { position: absolute; width: 20px; height: 20px; background: rgba(255,255,255,0.5); border-radius: 50%; transform: scale(0); animation: rippleEffect 0.6s linear; }

@keyframes rippleEffect { to { transform: scale(15); opacity: 0; } } */
