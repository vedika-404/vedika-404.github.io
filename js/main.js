console.log("JavaScript file loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuScreen = document.getElementById("menuScreen");

    // Toggle the menu on button click
    menuToggle.addEventListener("click", () => {
        menuScreen.classList.toggle("active");
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", (e) => {
        if (!menuScreen.contains(e.target) && e.target !== menuToggle) {
            menuScreen.classList.remove("active");
        }
    });
});
document.addEventListener("scroll", () => {
    const scrollingText = document.querySelector(".scrolling-text");
    const duplicateText = document.querySelector(".scrolling-text.duplicate");
    const scrollPosition = window.scrollY;


    // Define the scroll range for the effect
    const scrollStart = 450; // Start effect at the top of the page
    const scrollEnd = 1500; // End effect after scrolling 1500px

if (scrollingText && duplicateText) {
        // Get the width of the first text
        const textWidth = scrollingText.offsetWidth;

        if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
            const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);

            // Translate the first line
            const translateX1 = progress * -180; // Moves from 0% to -200%
            scrollingText.style.transform = `translateX(${translateX1}%)`;

            // Translate the second line directly after the first
            const translateX2 = translateX1 + (textWidth / window.innerWidth) * 100; // Offset by first text's width
            duplicateText.style.transform = `translateX(${translateX2}%)`;
        } else if (scrollPosition < scrollStart) {
            // Reset positions
            scrollingText.style.transform = "translateX(0%)";
            duplicateText.style.transform = `translateX(${100}%)`;
        } else if (scrollPosition > scrollEnd) {
            // Lock positions
            scrollingText.style.transform = "translateX(-200%)";
            duplicateText.style.transform = "translateX(-100%)";
        }
    }
});
