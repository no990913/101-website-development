// Smooth scrolling for navigation links
document.querySelectorAll('.toc-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Progress bar
function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
}

// Back to top button
function toggleBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// Event listeners
window.addEventListener('scroll', function() {
    updateProgressBar();
    toggleBackToTop();
});

document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Interactive demo function
const colors = ['#7cb9e8', '#4169e1', '#a7c7e7', '#87ceeb', '#6495ed'];
let colorIndex = 0;

function changeColor() {
    const demoText = document.getElementById('demo-text');
    colorIndex = (colorIndex + 1) % colors.length;
    demoText.style.color = colors[colorIndex];
    demoText.style.transition = 'color 0.5s ease';
}

// Initialize animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});