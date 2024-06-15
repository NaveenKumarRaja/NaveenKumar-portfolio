document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('welcome-message').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 3000); // Change the duration (3000ms = 3 seconds) as needed
});


