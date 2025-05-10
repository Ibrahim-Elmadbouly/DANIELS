//typed text
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typedText", {
        strings: ["Larry Denials ", "Developer ", "Designer "],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        smartBackspace: false,
        loop: true,
    });
});

//counters
function animateCounter(element, target, duration = 3000) {
    let start = null;
    const display = element;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const easeInOutCubic =
            progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const current = Math.floor(easeInOutCubic * target);
        display.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            display.textContent = target;
        }
    }

    requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-count");

    const observer = new IntersectionObserver(
        (entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent, 10);
                    animateCounter(counter, target);
                    observerInstance.unobserve(counter);
                }
            });
        },
        {
            threshold: 0.6,
        }
    );

    counters.forEach((counter) => {
        observer.observe(counter);
    });
});


//navbar scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});