// Toggle Menu on Mobile View
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.getElementById('navbar-menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});


// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById("themeToggleBtn");
const body = document.body;

// Check localStorage for theme preference
let isDarkMode = localStorage.getItem("theme") === "dark";

// Apply theme on page load
if (isDarkMode) {
    body.setAttribute("data-theme", "dark");
    themeToggleBtn.textContent = "☀️";
} else {
    body.setAttribute("data-theme", "light");
    themeToggleBtn.textContent = "🌙";
}

// Toggle Theme
themeToggleBtn.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "light") {
        body.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        body.setAttribute("data-theme", "light");
        themeToggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});