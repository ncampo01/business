const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// allows user to activate the mobile menu by clicking on the hamburger (3-line)
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// closes the mobile menu when user clicks OUTSIDE of the mobile menu 
document.addEventListener('click', (event) => {
    if (event.target !== menu && event.target !== menuLinks && menuLinks.classList.contains('active')) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});

// automatically closes the mobile menu when then window screen is made widened
window.addEventListener('resize', () => {
    if (window.innerWidth >= 960 && menuLinks.classList.contains('active')) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});
