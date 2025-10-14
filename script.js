// Toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        burger.classList.toggle('opened');
    });
});