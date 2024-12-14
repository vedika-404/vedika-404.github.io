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
    document.addEventListener("scroll", () => {
    const scrollingText = document.getElementById("scrollingText");
    const scrollPosition = window.scrollY;

    // Scroll start and scaling thresholds
    const scrollStart = 300; // Adjust to when the effect should begin
    const scrollEnd = 800; // Adjust to when the full effect ends

    // Adjust transformations
    if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
        const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart); // Normalize to 0-1
        const translateX = progress * 100; // Move text horizontally from left to right
        const scale = 1 + progress * 2; // Scale text up to 3x its size

        scrollingText.style.transform = `translate(${translateX}%, 0) scale(${scale})`;
    } else if (scrollPosition < scrollStart) {
        // Reset to initial state when scrolling up
        scrollingText.style.transform = "translate(0, 100%) scale(1)";

    });
});

