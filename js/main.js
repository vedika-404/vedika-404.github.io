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
    document.addEventListener("DOMContentLoaded", () => {
    const scrollingText = document.querySelector(".scrolling-text");

    // Track scroll and scale the text when in view
    window.addEventListener("scroll", () => {
        const rect = scrollingText.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if scrolling text is in the viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            scrollingText.classList.add("scaled"); // Apply scaling
        } else {
            scrollingText.classList.remove("scaled"); // Remove scaling
        }
    });
});

    });
});
