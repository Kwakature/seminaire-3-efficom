fetch('header.html')
    .then(response => response.text())
    .then(data => {
        // Step 1: Place the header HTML into the placeholder
        document.getElementById('header-placeholder').innerHTML = data;
        console.log('Header chargé !');

        // Step 2: Now that the header exists, run the burger menu script
        const burgerMenu = document.getElementById('burgerMenu');
        console.log('Burger menu trouvé:', burgerMenu); 
        const menuNav = document.getElementById('menuNav');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuLinks = document.querySelectorAll('.btn-header');
        
        function toggleMenu() {
            burgerMenu.classList.toggle('active');
            menuNav.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = menuNav.classList.contains('active') ? 'hidden' : '';
        }
        
        burgerMenu.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);
        
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 724) {
                    toggleMenu();
                }
            });
        });
    });

document.getElementById('contact_mail').addEventListener('click', function() {
    window.location.href = "contact.html";
});
document.getElementById('linke').addEventListener('click', function() {
    window.location.href = "https://linkedin.com/in/arthur-berton-6b1200338";
});
document.getElementById('git').addEventListener('click', function() {
    window.location.href = "https://github.com/Kwakature";
});
document.getElementById('projet_eff').addEventListener('click', function() {
    window.location.href = "https://github.com/Kwakature/fil-rouge-EFFICOM";
});

// ====== EmailJS Configuration ======
(function() {
    // Initialisation d'EmailJS avec votre Public Key
    emailjs.init("y5pAgHYgNLQh76PVw"); 
})();

// ====== Formulaire de contact ======
// Sélection du formulaire
const contactForm = document.getElementById('contactForm');

// Création ou récupération du message de statut
let formStatus = document.getElementById('form-status');
if (!formStatus) {
    formStatus = document.createElement('p');
    formStatus.id = 'form-status';
    formStatus.style.marginTop = '1rem';
    formStatus.style.fontWeight = '500';
    contactForm.appendChild(formStatus);
}

// Gestion de la soumission du formulaire
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Afficher un message de chargement
    formStatus.textContent = 'Envoi en cours...';
    formStatus.style.color = 'var(--muted, #888)';

    // Récupérer les données du formulaire
    const formData = {
        nom: document.getElementById('nom').value,
        prenom: document.getElementById('prenom').value,
        email: document.getElementById('email').value,
        entreprise: document.getElementById('entreprise').value,
        motif: document.getElementById('motif').value,
        message: document.getElementById('message').value
    };

    // Envoyer l'email via EmailJS
    emailjs.send("service_nflkn77", "template_ugancga", formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formStatus.textContent = '✅ Message envoyé avec succès ! Merci.';
            formStatus.style.color = '#4ade80';

            // Réinitialiser le formulaire
            contactForm.reset();

            // Masquer le message après 5 secondes
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        }, function(error) {
            console.error('FAILED...', error);
            formStatus.textContent = "❌ Erreur lors de l'envoi. Veuillez réessayer.";
            formStatus.style.color = '#f87171';

            // Masquer le message d'erreur après 5 secondes
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
});
