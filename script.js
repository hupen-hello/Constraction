const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
});
