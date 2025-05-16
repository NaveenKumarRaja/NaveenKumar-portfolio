document.addEventListener('DOMContentLoaded', () => {
   setTimeout(() => {
      const welcome = document.getElementById('welcome-message');
      welcome.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
      setTimeout(() => {
        welcome.classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
      }, 1000); // Wait for fade-out transition
    }, 1000);
});

// animation for the bottom info of the home page

const sections = document.querySelectorAll('section');

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    let currentSectionId = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    // Check if the section top is within viewport (e.g., top visible in viewport)
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });
console.log('Current section:', currentSectionId);
  if (currentSectionId) {
    console.log('Current section:', currentSectionId);
  }
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        console.log('Scrolling down');
        // header.classList.add('fixed-header');
    } else {
        console.log('Scrolling up');
        // Scrolling up
        // header.classList.remove('fixed-header');
    }

    lastScrollY = currentScrollY;
});

//  animation for projects section

window.addEventListener('scroll', () => {
  let currentSectionId = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    // Check if the section top is within viewport (e.g., top visible in viewport)
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  if (currentSectionId) {
    console.log('Current section:', currentSectionId);
  }
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
function togglePrivacy() {
    const section = document.getElementById('privacy-policy');
    section.classList.toggle('hidden');
}
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        document.querySelectorAll(".project-hidden-mobile").forEach(el => el.classList.add("hidden"));
    }
});

function toggleProjects() {
    const projects = document.querySelectorAll(".project-hidden-mobile");
    const btn = document.getElementById("viewMoreBtn");
    const isHidden = projects[0].classList.contains("hidden");

    projects.forEach(el => el.classList.toggle("hidden"));
    btn.textContent = isHidden ? "View Less" : "View More";
}