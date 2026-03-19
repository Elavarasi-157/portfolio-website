<<<<<<< HEAD
// Navbar color change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#020c1b";
    } else {
        navbar.style.background = "#0a192f";
    }
});

// Typing animation
const text = "Welcome to my portfolio website";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

=======
// Navbar color change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#020c1b";
    } else {
        navbar.style.background = "#0a192f";
    }
});

// Typing animation
const text = "Welcome to my portfolio website";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

>>>>>>> 8a4fea02af44b21f1e2d9c2845cca5bc44bff9a1
typeEffect();