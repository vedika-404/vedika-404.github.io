document.addEventListener("DOMContentLoaded", () => {
    const projectBlocks = document.querySelectorAll(".project-block");

    projectBlocks.forEach((block) => {
        const video = block.querySelector("video");
        const videoSrc = block.dataset.video;
        video.src = videoSrc;

        block.addEventListener("mouseover", () => {
            video.play();
        });

        block.addEventListener("mouseout", () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    // Menu Toggle Logic (if menu functionality is needed)
    const menuToggle = document.getElementById("menuToggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            alert("Menu functionality placeholder.");
        });
    }
});
