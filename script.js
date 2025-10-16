fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Step 1: Place the header HTML into the placeholder
            document.getElementById('header-placeholder').innerHTML = data;

            // Step 2: Now that the header exists, run the burger menu script
            const burgerMenu = document.getElementById('burgerMenu');
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
                    if (window.innerWidth <= 768) {
                        toggleMenu();
                    }
                });
            });
        });