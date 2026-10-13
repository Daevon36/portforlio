// ===========================================
// SELECT ELEMENTS
// ===========================================

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const hobbiesGrid = document.getElementById("hobbiesGrid");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");

/*===========================================
    PROJECTS
===========================================*/

const projects = [

    {

        title: "Murag Facebook",

        image: "#",

        description:
            "Murag Facebook is a social media web application inspired by Facebook that allows users to register, log in, create posts, interact with other users, and manage their personal profiles.",

        link:
            "https://github.com/wawacntrn1114/Cantorne_IM2C.git"

    },

    {

        title: "Portfolio Website",

        image: "CSS/comptime.png",

        description:
            "Responsive portfolio website built using HTML, CSS and JavaScript.",

        link:
            "https://github.com/yourusername/Portfolio"

    },
];

function displayProjects(){

    const container = document.getElementById("projectsGrid");

    container.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("div");

        card.className = "project-card";

        card.innerHTML = `

            <img src="${project.image}" alt="${project.title}">

            <div class="project-content">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <a href="${project.link}" target="_blank" class="project-btn">

                    View Project
                    <i class="fas fa-arrow-right"></i>

                </a>

            </div>

        `;

        container.appendChild(card);

    });

}

displayProjects();

// ===========================================
// MOBILE MENU
// ===========================================

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");

});

navItems.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        navLinks.classList.remove("active");

    });

});

// ===========================================
// SCROLL EVENTS
// ===========================================

window.addEventListener("scroll", () => {

    // Navbar background
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Back to top button
    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

    // Active navigation
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

    revealOnScroll();

});

// ===========================================
// SCROLL REVEAL
// ===========================================

const revealElements = document.querySelectorAll(
    ".section, .hero-text, .hero-image, .skill-card, .info-card, .contact-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {
            element.classList.add("active");
        }

    });

}

// ===========================================
// BACK TO TOP
// ===========================================

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===========================================
// CONTACT FORM
// ===========================================

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");
        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");
        return;

    }

    alert("Message sent successfully!");

    contactForm.reset();

});

// ===========================================
// INITIALIZE WEBSITE
// ===========================================

displayHobbies();
revealOnScroll();

console.log("Portfolio Loaded Successfully!");