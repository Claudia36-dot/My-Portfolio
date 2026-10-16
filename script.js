
/* =================================
   1. AUTOMATIC FOOTER YEAR
================================= */

const currentYear = document.getElementById("year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =================================
   2. SCROLL REVEAL ANIMATIONS
================================= */

const sections = document.querySelectorAll(
    ".section, .hero-text, .hero-image"
);

sections.forEach((section) => {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


/* =================================
   3. NAVBAR SCROLL EFFECT
================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});


/* =================================
   4. PROJECT CARD STAGGER EFFECT
================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );
});
