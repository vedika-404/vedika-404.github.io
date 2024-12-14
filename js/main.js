console.log("JavaScript file loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuScreen = document.getElementById("menuScreen");
     const scrollingText = document.getElementById("scrollingText");

    document.addEventListener("scroll", () => {
        if (scrollingText) {
            const scrollPosition = window.scrollY;

            // Adjust start and end thresholds
            const scrollStart = 100; // When the effect begins
            const scrollEnd = 500;  // When the effect ends

            // Ensure within range
            if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
                const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);

                // Calculate transformations
                const translateX = progress * 100; // Move horizontally from left to right
                const scale = 1 + progress * 2; // Scale up to 3x

                // Apply transformations while keeping the bottom constant
                scrollingText.style.transformOrigin = "bottom left"; // Keep bottom-left fixed
                scrollingText.style.transform = `translate(${translateX}%, 0) scale(${scale})`;
            } else if (scrollPosition < scrollStart) {
                // Reset position and scale when scrolling above the start
                scrollingText.style.transform = "translate(0%, 0) scale(1)";
            } else if (scrollPosition > scrollEnd) {
                // Maintain final state when scrolling beyond the end
                scrollingText.style.transform = "translate(100%, 0) scale(3)";
            }
        } else {
            console.error("Scrolling text element not found!");
        }
    });
});
