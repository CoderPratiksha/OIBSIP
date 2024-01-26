// Example of adding interactivity with JavaScript
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
});