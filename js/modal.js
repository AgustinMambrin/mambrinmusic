// Service packages data
const servicePackages = {
    basic: {
        title: "Paquete DJ",
        price: "$100.000",
        description: "Perfecto para eventos que necesites un DJ. Nuestro paquete ofrece el servicio de un dj profesional, adapatado al tipo de música que prefieras. Se requiere que ya cuentes con sistema de sonido propio.",
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>`,
        iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
        features: [
            "🎵 DJ por 4 horas",
            "🎧 Mezclas en vivo",
            "🔇 NO INCLUYE Sonido",
            "📱 Playlist personalizada según tu gusto",
            "🎶 Amplia biblioteca musical",
            "📞 Coordinación previa del evento",
            
        ]
    },
    premium: {
        title: "Paquete Premium",
        price: "$150.000",
        description: "La opción más popular para tu evento. Incluye todo lo esencial para crear una atmósfera musical perfecta con sonido y equipos profesionales de alta calidad.",
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>`,
        iconBg: "bg-gradient-to-br from-pink-500 to-orange-400",
        features: [
            "🎵 Todo lo incluido en Pack DJ",
            "🎧 Servicio extendido a 6 horas",
            "🔊 Sonido 1800W",
            "🎚️ Consola profesional",
            "💡 Iluminación LED",
            "🎤 Micrófono inalámbrico",
        ]
    },
    vip: {
        title: "Paquete VIP",
        price: "$200.000",
        description: "La experiencia más completa para tu evento. Producción profesional, múltiples DJs, efectos especiales avanzados y servicio de 8 horas completas para bailar sin parar.",
        icon: `<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>`,
        iconBg: "bg-gradient-to-br from-orange-400 to-pink-500",
        features: [
            "🎵 Todo lo incluido en Pack Premium",
            "🎧 Servicio de 8 horas completas",
            "👥 2 DJs profesionales",
            "🔊 Sonido 3200W",
            "🎚️ Consola profesional",
            "🌟 Efectos de laser con humo",
            "🚐 Transporte incluido",
            "🎯 Coordinador de eventos dedicado",
            "📱 Contacto vía Whatsapp 24/7"
        ]
    }
};



    const modal = document.getElementById('service-modal');
    const modalContent = document.getElementById('modal-content');
    
    const featuresContainer = document.getElementById('modal-features');

   

// Modal functionality
function openModal(packageType) {
    const package = servicePackages[packageType];

    // Update modal content
    document.getElementById('modal-title').textContent = package.title;
    document.getElementById('modal-description').textContent = package.description;
    document.getElementById('modal-price').textContent = package.price;

    // Update icon
    const modalIcon = document.getElementById('modal-icon');
    modalIcon.innerHTML = package.icon;
    modalIcon.className = `w-12 h-12 rounded-2xl flex items-center justify-center ${package.iconBg}`;

    // Update features
    
    featuresContainer.innerHTML = package.features.map(feature =>
        `<div class="flex items-center space-x-3 p-3 bg-gray rounded-xl">
                    <div class="text-lg">${feature.split(' ')[0]}</div>
                    <div class="text-gray-700 font-medium">${feature.substring(feature.indexOf(' ') + 1)}</div>
                </div>`
    ).join('');

    // Show modal with animation
    modal.classList.remove('hidden');
    // modalContent.classList.remove('scale-95');
    // modalContent.classList.add('scale-100');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Hide modal 
    modal.classList.add('hidden');

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('service-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// WhatsApp contact functionality
function openWhatsApp() {
    const package = document.getElementById('modal-title').textContent;
    const phoneNumber = +5491125391120;
    const message = `"¡Hola! Me interesa contratar el ${package} para mi evento."`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
