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
function showTab(tabId, buttonElement) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

    // Show the selected tab
    document.getElementById(tabId).classList.remove('hidden');

    // Reset all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('text-cyan-400', 'border-b-2', 'border-cyan-400');
        btn.classList.add('text-gray-400');
    });

    // Highlight the active button
    buttonElement.classList.remove('text-gray-400');
    buttonElement.classList.add('text-cyan-400', 'border-b-2', 'border-cyan-400');
}
document.querySelectorAll('.progress-circle').forEach(circle => {
    const percent = circle.getAttribute('data-percentage');
    const angle = (percent / 100) * 360;
    circle.style.background = `conic-gradient(#e6007e ${angle}deg, #9b51e0 ${angle}deg, #e0e0e0 ${angle}deg)`;
    circle.querySelector('.percent-text').innerText = percent + '%';
});
function togglePrivacy() {
    const section = document.getElementById('privacy-policy');
    section.classList.toggle('hidden');
  }
