console.log("JavaScript file loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuScreen = document.getElementById("menuScreen");
    const scrollingText = document.getElementById("scrollingText");

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

    // Handle scrolling for the scrolling text
    document.addEventListener("scroll", () => {
        if (scrollingText) {
            console.log(`Scroll Position: ${window.scrollY}`);
            console.log(`Transform: ${scrollingText.style.transform}`);

            const scrollPosition = window.scrollY;

            // Scroll start and end thresholds
            const scrollStart = 300; // Start effect after scrolling 300px
            const scrollEnd = 800;  // End effect at 800px

            if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
                // Progress normalized between 0 and 1
                const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);

                // Calculate transformations
                const translateX = progress * 100; // Scroll to the right (down)
                const translateY = 100 - progress * 100; // Move up
                const scale = 1 + progress * 2; // Scale up to 3x size

                // Apply transformations
                scrollingText.style.transform = `translate(${translateX}%, -${translateY}%) scale(${scale})`;
            } else if (scrollPosition < scrollStart) {
                // Reset position and scale when scrolling back up above start
                scrollingText.style.transform = "translate(0, 100%) scale(1)";
            } else if (scrollPosition > scrollEnd) {
                // Stop transformations at their final state when scrolling past the end
                scrollingText.style.transform = "translate(100%, -100%) scale(3)";
            }
        } else {
            console.error("Scrolling text element not found!");
        }
    });
});
