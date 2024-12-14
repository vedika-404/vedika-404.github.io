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
    const scrollingText = document.getElementById("scrollingText");
    const scrollPosition = window.scrollY;

    // Adjust the Y position and scale based on scroll
    const translateY = Math.max(0, scrollPosition - 500); // Start moving after scrolling 500px
    const scale = Math.min(2, 1 + (scrollPosition - 500) / 500); // Gradually scale up to 2x

    scrollingText.style.transform = `translateY(${translateY}px) scale(${scale})`;
});
