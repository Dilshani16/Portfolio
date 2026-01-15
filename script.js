const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

// Enhanced scroll reveal animation with intersection observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

// Observe all sections with section-reveal class
document.querySelectorAll('.section-reveal').forEach((section) => {
    revealObserver.observe(section);
});

// Enhanced navbar with glass morphism on scroll
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('nav-glass', 'shadow-2xl');
        if (navLinks) navLinks.classList.remove('bg-white/50', 'shadow-sm');
    } else {
        navBar.classList.remove('nav-glass', 'shadow-2xl');
        if (navLinks) navLinks.classList.add('bg-white/50', 'shadow-sm');
    }
});

// Smooth menu transitions
function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
    sideMenu.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
    sideMenu.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

// Parallax effect for images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.animate-float');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.05;
        const yPos = -(scrolled * speed * (index % 2 === 0 ? 1 : -1));
        el.style.transform = `translateY(${yPos}px)`;
    });
});

