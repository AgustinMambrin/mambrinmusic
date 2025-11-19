// Configuration object
const defaultConfig = {
    phone_number: "+1234567890",
    background_color: "#000000",
    surface_color: "#ffffff",
    text_color: "#1f2937",
    font_family: "Inter",
    font_size: 16
};

// Navbar scroll animation
let lastScrollY = 0;
const navbar = document.getElementById('navbar');
const logoLarge = document.getElementById('logo-large');
const brandText = document.getElementById('brand-text');
const nameBusiness = document.getElementById('business-name-full');

function updateNavbar() {
    const scrollY = window.scrollY;

    if (scrollY > 50 && scrollY <= 100) {
        // Fase 1: Logo se hace más pequeño
        navbar.classList.remove('scrolled');
        logoLarge.classList.add('shrinking');
        logoLarge.classList.remove('hidden');
        brandText.classList.remove('visible');
    } else if (scrollY > 100) {
        // Fase 2: Navbar aparece, logo desaparece, texto aparece
        navbar.classList.add('scrolled');
        logoLarge.classList.remove('shrinking');
        logoLarge.classList.add('hidden');
        brandText.classList.add('visible');
       
    } else if (scrollY === 0) {
        // Estado inicial
        navbar.classList.remove('scrolled');
        brandText.classList.remove('visible');
        logoLarge.classList.remove('shrinking');
        logoLarge.classList.remove('hidden');
        logoLarge.classList.add('visible')

        
    } 

    lastScrollY = scrollY;
   
}

// Parallax effect
function updateParallax() {
    const scrollY = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax-element');

    parallaxElements.forEach((element, index) => {
        // Velocidades más sutiles y consistentes
        const speed = 0.02 + (index * 0.001);
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Menu functionality
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    if(menuOpen){
      
        logoLarge.classList.add('hidden');
        brandText.classList.add('visible');
    } else {
      
      logoLarge.classList.remove('hidden');
      brandText.classList.remove('visible');
      updateNavbar();
    }

    // Prevent body scroll when menu is open
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
});

// Close menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scrolling for navigation links
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

// WhatsApp contact functionality
function openWhatsApp() {
    const phoneNumber = +5491125391120;
    const message = encodeURIComponent("¡Hola! Me interesa contratar sus servicios de DJ para mi evento.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// Add click handlers to WhatsApp buttons
document.getElementById('whatsapp-btn').addEventListener('click', openWhatsApp);
document.getElementById('whatsapp-menu-btn').addEventListener('click', openWhatsApp);

// Scroll event listeners
window.addEventListener('scroll', () => {
    updateNavbar();
    updateParallax();
});