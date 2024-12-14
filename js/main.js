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

    // Determine vertical movement and scale
    const translateY = Math.max(0, scrollPosition - 300); // Move into view after 300px scroll
    const scale = Math.min(3, 1 + (scrollPosition - 300) / 300); // Gradually scale up to 3x

    // Determine horizontal movement (scrolling left to right)
    const translateX = Math.min(100, (scrollPosition - 300) / 3); // Stop moving at 100% from the left

    // Apply transformations
    scrollingText.style.transform = `translate(${translateX}%, calc(${translateY}px - 50%)) scale(${scale})`;
});
