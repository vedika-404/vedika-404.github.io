// main.js

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;
    const body = document.body;
    const fixedHeader = document.getElementById("fixed-header");

    if (scrollPos > 50) { // Adjust scroll threshold as needed
        body.classList.add("scrolled");
        fixedHeader.style.top = "0"; // Show header
    } else {
        body.classList.remove("scrolled");
        fixedHeader.style.top = "-100px"; // Hide header when scrolling back up
    }

    // Show "Oops, you just lost the 404 :(" message
    const errorSection = document.getElementById("error-section");
    if (scrollPos < errorSection.clientHeight) {
        errorSection.querySelector('p:nth-child(3)').innerText = "Oops, you just lost the 404 :(";
    } else {
        errorSection.querySelector('p:nth-child(3)').innerText = "The resource requested could not be found on this server!";
    }
});
