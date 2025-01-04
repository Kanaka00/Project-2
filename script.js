document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Close the menu after clicking a link
            navUl.classList.remove('showing');
        });
    });

    // Toggle the navigation menu on menu icon click
    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('showing');
    });
});