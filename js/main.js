console.log("JavaScript file loaded!");

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuScreen = document.getElementById("menuScreen");
    const scrollingText = document.getElementById("scrollingText");
    const scrollPosition = window.scrollY;

    // Home page height and transition 
    const scrollStart = 1; // Slightly below home page
    const scrollEnd = 7; // End of the transformation

    if (scrollingText) {
        // If within scrolling range, calculate progress
        if (scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
            const progress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart); // 0 to 1 range

            // Horizontal movement (translateX)
            const translateX = progress * 100; // Move from left to right

            // Scaling (size increase)
            const scale = 1 + progress * 2; // Scale from 1x to 3x

            // Apply transformations
            scrollingText.style.transform = `translate(${translateX}%, 0) scale(${scale})`;
        } else if (scrollPosition < scrollStart) {
            // Reset position and size if scrolled above the start
            scrollingText.style.transform = "translate(-100%, 0) scale(1)";
        } else if (scrollPosition > scrollEnd) {
            // Keep the text in its final state if scrolled past the end
            scrollingText.style.transform = "translate(100%, 0) scale(3)";
        }
    } else {
        console.error("Scrolling text element not found!");
    }
});

});
