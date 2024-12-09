document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuScreen = document.getElementById("menuScreen");

    // Toggle the menu on button click
    menuToggle.addEventListener("click", () => {
        menuScreen.classList.toggle("active");
    });
});

