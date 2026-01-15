const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

// Add smooth scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('section, #about, #skills, #project, #contact').forEach((section) => {
    observer.observe(section);
});

// Enhanced navbar transition
window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white/80', 'backdrop-blur-lg', 'shadow-lg', 'dark:bg-gray-800/80');
        navLinks.classList.remove('bg-white/80', 'shadow-lg');
    }else{
        navBar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'shadow-lg', 'dark:bg-gray-800/80');
        navLinks.classList.add('bg-white/80', 'shadow-lg');
    }
});

// Smooth menu transitions
function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)';
    sideMenu.style.transition = 'all 0.3s ease-out';
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)';
    sideMenu.style.transition = 'all 0.3s ease-in';
}

