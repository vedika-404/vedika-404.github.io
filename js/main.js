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

    // Ensure scrolling starts after some distance (e.g., 300px)
    const scrollStart = 300;

    // Vertical movement (translateY)
    const translateY = Math.max(0, scrollPosition - scrollStart); // Text moves up into view

    // Horizontal movement (translateX)
    const translateX = Math.min(100, (scrollPosition - scrollStart) / 3); // Move from left to right

    // Scaling
    const scale = Math.min(3, 1 + (scrollPosition - scrollStart) / 300); // Gradually grow up to 3x size

    // Apply transformations
    scrollingText.style.transform = `translate(${translateX}%, calc(${translateY}px - 50%)) scale(${scale})`;

    const scrollingText = document.getElementById("scrollingText");
    scrollingText.style.transform = "translate(50%, 0) scale(2)";

});
