document.addEventListener("DOMContentLoaded", () => {
    // Toggle Menu
    const menuToggle = document.getElementById("menuToggle"); // Hamburger button
    const menuScreen = document.getElementById("menuScreen"); // Sliding menu

    if (menuToggle && menuScreen) {
        menuToggle.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent the click event from bubbling up
            menuScreen.classList.toggle("active");
        });

        // Close menu when clicking outside
        document.addEventListener("click", (event) => {
            if (!menuScreen.contains(event.target) && event.target !== menuToggle) {
                menuScreen.classList.remove("active");
            }
        });
    } else {
        console.error("Menu toggle or menu screen not found in the DOM");
    }

    // Video Playback
    const videos = document.querySelectorAll(".video-gallery video");
        let currentVideo = 0;

        function playNextVideo() {
            videos[currentVideo].style.display = "none";
            currentVideo = (currentVideo + 1) % videos.length;
            videos[currentVideo].style.display = "block";
            videos[currentVideo].play();
        }

        videos.forEach((video, index) => {
            video.style.display = index === 0 ? "block" : "none";
            video.addEventListener("ended", playNextVideo);
        });

        videos[0].play();
});
