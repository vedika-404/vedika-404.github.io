// Show the home page after 3 seconds
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loadingScreen");
    const homePage = document.getElementById("homePage");

    setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide loading screen
        homePage.style.display = "block"; // Show home page
    }, 3000);
});

// Surprise Popup Function
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}
