document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('welcome-message').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 10000); // Change the duration (3000ms = 3 seconds) as needed
});

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('fixed-header');
    } else {
        // Scrolling up
        header.classList.remove('fixed-header');
    }

    lastScrollY = currentScrollY;
});
