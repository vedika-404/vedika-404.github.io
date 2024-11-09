// main.js

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    const body = document.body;

    if (scrollPos > 50) { // Adjust scroll threshold as needed
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});
