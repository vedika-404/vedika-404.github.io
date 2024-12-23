document.addEventListener("DOMContentLoaded", () => {
    // Create Menu Button
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerText = "☰"; // Menu icon
    document.body.appendChild(menuToggle);

    // Select Menu Screen
    const menuScreen = document.querySelector(".menu-screen");

    // Toggle Menu on Button Click
    menuToggle.addEventListener("click", () => {
        menuScreen.classList.toggle("active"); // Show/hide menu
        menuToggle.classList.toggle("active"); // Rotate button
    });

    // Add Audio Playback
    const audio = document.getElementById("background-audio");

    // Attempt to play after user interaction
    const playAudio = () => {
        audio.play().catch((err) => {
            console.error("Autoplay was blocked:", err);
        });
        document.removeEventListener("click", playAudio); // Remove listener after playing
    };

    // Add a click listener to start audio
    document.addEventListener("click", playAudio);
});
