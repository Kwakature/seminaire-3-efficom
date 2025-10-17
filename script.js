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